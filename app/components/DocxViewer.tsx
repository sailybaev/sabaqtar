"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { ZoomIn, ZoomOut } from "lucide-react";

export default function DocxViewer({ src }: { src: string; title?: string }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const baseZoomRef = useRef(1);
  const [userZoom, setUserZoom] = useState(1);
  const [error, setError] = useState(false);

  const applyZoom = useCallback((uz: number) => {
    const inner = containerRef.current?.querySelector(".docx-render") as HTMLElement | null;
    if (!inner || !outerRef.current) return;
    inner.style.zoom = "1";
    const naturalW = inner.scrollWidth;
    const availW = outerRef.current.clientWidth - 32;
    const base = naturalW > availW ? availW / naturalW : 1;
    baseZoomRef.current = base;
    inner.style.zoom = String(base * uz);
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      try {
        const [{ renderAsync }, response] = await Promise.all([
          import("docx-preview"),
          fetch(src),
        ]);
        if (cancelled) return;
        const blob = await response.blob();
        if (cancelled || !containerRef.current) return;

        containerRef.current.innerHTML = "";
        await renderAsync(blob, containerRef.current, undefined, {
          className: "docx-render",
          inWrapper: true,
          ignoreWidth: false,
          ignoreHeight: true,
          breakPages: true,
          useBase64URL: true,
        });
        if (cancelled) return;

        requestAnimationFrame(() => {
          if (!cancelled) applyZoom(1);
        });
      } catch {
        if (!cancelled) setError(true);
      }
    }

    render();

    const ro = new ResizeObserver(() => applyZoom(userZoom));
    if (outerRef.current) ro.observe(outerRef.current);

    return () => {
      cancelled = true;
      ro.disconnect();
    };
  }, [src]); // eslint-disable-line react-hooks/exhaustive-deps

  // Re-apply whenever userZoom changes
  useEffect(() => {
    applyZoom(userZoom);
  }, [userZoom, applyZoom]);

  const zoomOut = () => setUserZoom((z) => Math.max(0.5, +(z - 0.25).toFixed(2)));
  const zoomIn  = () => setUserZoom((z) => Math.min(3,   +(z + 0.25).toFixed(2)));

  if (error) {
    return (
      <div className="flex items-center justify-center h-full text-[13px] text-[#e55]">
        Файл жүктелмеді
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
      {/* Toolbar */}
      <div className="flex items-center justify-end px-4 py-2 border-b border-[rgba(0,0,0,0.06)] bg-white shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={zoomOut}
            disabled={userZoom <= 0.5}
            className="p-1 rounded-[6px] hover:bg-[#f0f0f0] disabled:opacity-30 transition-colors"
          >
            <ZoomOut size={16} strokeWidth={2} />
          </button>
          <span className="text-[12px] font-medium text-[#5b5b5b] tabular-nums w-10 text-center">
            {Math.round(userZoom * 100)}%
          </span>
          <button
            onClick={zoomIn}
            disabled={userZoom >= 3}
            className="p-1 rounded-[6px] hover:bg-[#f0f0f0] disabled:opacity-30 transition-colors"
          >
            <ZoomIn size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Document */}
      <div ref={outerRef} className="flex-1 overflow-auto bg-[#e8e8e8] p-4">
        <style>{`
          .docx-render { background: white; padding: 32px 48px; box-shadow: 0 2px 12px rgba(0,0,0,0.12); }
          .docx-render section.docx { box-shadow: none !important; }
        `}</style>
        <div ref={containerRef} />
      </div>
    </div>
  );
}
