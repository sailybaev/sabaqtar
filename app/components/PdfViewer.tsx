"use client";
import { useState, useCallback, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

export default function PdfViewer({ src, title }: { src: string; title: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width - 32); // subtract padding
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPage(1);
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[rgba(0,0,0,0.06)] bg-white shrink-0">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="p-1 rounded-[6px] hover:bg-[#f0f0f0] disabled:opacity-30 transition-colors"
          >
            <ChevronLeft size={16} strokeWidth={2} />
          </button>
          <span className="text-[12px] font-medium text-[#5b5b5b] tabular-nums">
            {page} / {numPages || "—"}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(numPages, p + 1))}
            disabled={page >= numPages}
            className="p-1 rounded-[6px] hover:bg-[#f0f0f0] disabled:opacity-30 transition-colors"
          >
            <ChevronRight size={16} strokeWidth={2} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale((s) => Math.max(0.5, +(s - 0.25).toFixed(2)))}
            disabled={scale <= 0.5}
            className="p-1 rounded-[6px] hover:bg-[#f0f0f0] disabled:opacity-30 transition-colors"
          >
            <ZoomOut size={16} strokeWidth={2} />
          </button>
          <span className="text-[12px] font-medium text-[#5b5b5b] tabular-nums w-10 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale((s) => Math.min(3, +(s + 0.25).toFixed(2)))}
            disabled={scale >= 3}
            className="p-1 rounded-[6px] hover:bg-[#f0f0f0] disabled:opacity-30 transition-colors"
          >
            <ZoomIn size={16} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* PDF canvas */}
      <div ref={containerRef} className="flex-1 overflow-auto flex items-start justify-center bg-[#e8e8e8] p-4">
        <Document
          file={src}
          onLoadSuccess={onLoadSuccess}
          loading={
            <div className="flex items-center justify-center py-20 text-[13px] text-[#7c7c7c]">
              Жүктелуде...
            </div>
          }
          error={
            <div className="flex items-center justify-center py-20 text-[13px] text-[#e55]">
              PDF жүктелмеді
            </div>
          }
        >
          <Page
            pageNumber={page}
            width={containerWidth > 0 ? containerWidth * scale : undefined}
            renderTextLayer
            renderAnnotationLayer
            className="shadow-lg"
          />
        </Document>
      </div>
    </div>
  );
}
