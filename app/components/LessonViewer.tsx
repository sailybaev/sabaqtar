"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import FileIcon from "./FileIcon";
import { Download, ChevronRight, ExternalLink } from "lucide-react";

const PdfViewer = dynamic(() => import("./PdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-[13px] text-[#7c7c7c]">
      Жүктелуде...
    </div>
  ),
});

const DocxViewer = dynamic(() => import("./DocxViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-[13px] text-[#7c7c7c]">
      Жүктелуде...
    </div>
  ),
});

export type Material = {
  id: string;
  label: string;
  description?: string;
  type: "pdf" | "docx" | "pptx" | "video" | "game";
  src?: string;        // local path e.g. /materials/file.pdf
  url?: string;        // external URL
  filename?: string;   // original filename for download
};

function TypeBadge({ type }: { type: Material["type"] }) {
  const map: Record<Material["type"], { label: string; color: string }> = {
    pdf:   { label: "PDF",    color: "bg-red-100 text-red-600" },
    docx:  { label: "DOCX",  color: "bg-blue-100 text-blue-600" },
    pptx:  { label: "PPTX",  color: "bg-orange-100 text-orange-600" },
    video: { label: "Бейне", color: "bg-purple-100 text-purple-600" },
    game:  { label: "Ойын",  color: "bg-green-100 text-green-600" },
  };
  const { label, color } = map[type];
  return (
    <span className={`text-[10px] font-semibold px-[6px] py-[2px] rounded-full whitespace-nowrap ${color}`}>
      {label}
    </span>
  );
}

function Preview({ material }: { material: Material }) {
  if (!material) return null;

  // PDF
  if (material.type === "pdf" && material.src) {
    return <PdfViewer src={material.src} title={material.label} />;
  }

  // Vimeo video
  if (material.type === "video" && material.url) {
    const vimeoId = material.url.match(/vimeo\.com\/(\d+)/)?.[1];
    if (vimeoId) {
      return (
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=0&title=0&byline=0&portrait=0`}
          className="w-full h-full rounded-[8px] border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={material.label}
        />
      );
    }
  }

  // Game (Wordwall / Genially)
  if (material.type === "game" && material.url) {
    return (
      <iframe
        src={material.url}
        className="w-full h-full rounded-[8px] border-0"
        allow="fullscreen"
        title={material.label}
      />
    );
  }

  // DOCX — render inline
  if (material.type === "docx" && material.src) {
    return <DocxViewer src={material.src} title={material.label} />;
  }

  // PPTX — no preview
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <FileIcon name={material.filename ?? material.label} size={80} />
      <div className="flex flex-col items-center gap-1">
        <p className="text-[18px] font-medium text-[#1a1a1a]">{material.label}</p>
        {material.filename && (
          <p className="text-[13px] text-[#7c7c7c]">{material.filename}</p>
        )}
      </div>
      <p className="text-[13px] text-[#7c7c7c]">Алдын ала қарау қолжетімді емес</p>
    </div>
  );
}

export default function LessonViewer({ materials, query = "" }: { materials: Material[]; query?: string }) {
  const [active, setActive] = useState<string>(materials[0]?.id ?? "");
  const q = query.toLowerCase();
  const filtered = q
    ? materials.filter((m) =>
        m.label.toLowerCase().includes(q) ||
        (m.description ?? "").toLowerCase().includes(q) ||
        (m.filename ?? "").toLowerCase().includes(q) ||
        m.type.toLowerCase().includes(q)
      )
    : materials;
  const current = materials.find((m) => m.id === active);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 flex-1 min-h-0 w-full max-w-[1000px]">
      {/* Left: material list */}
      <div className="flex flex-col gap-2 lg:w-[220px] shrink-0 overflow-y-auto lg:overflow-y-auto overflow-x-auto lg:overflow-x-hidden">
        {filtered.length === 0 && (
          <p className="text-[11px] text-[#7c7c7c] px-2 py-1">Табылмады</p>
        )}
        {filtered.map((mat) => (
          <button
            key={mat.id}
            onClick={() => setActive(mat.id)}
            className={`flex items-center gap-3 px-3 py-2 rounded-[8px] text-left transition-colors w-full ${
              active === mat.id
                ? "bg-[rgba(73,127,255,0.12)] border border-[rgba(73,127,255,0.3)]"
                : "bg-[rgba(73,127,255,0.04)] hover:bg-[rgba(73,127,255,0.08)]"
            }`}
          >
            <FileIcon name={mat.filename ?? mat.label} isFolder={false} size={20} />
            <div className="flex flex-col flex-1 min-w-0">
              <p className="text-[12px] font-medium text-[#1a1a1a] truncate">{mat.label}</p>
              {mat.description && (
                <p className="text-[10px] text-[#7c7c7c] truncate">{mat.description}</p>
              )}
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <TypeBadge type={mat.type} />
              {active === mat.id && <ChevronRight size={14} className="text-[#497fff]" strokeWidth={2} />}
            </div>
          </button>
        ))}
      </div>

      {/* Right: preview */}
      <div className="flex-1 min-w-0 min-h-[400px] lg:min-h-0 bg-[#f8f9fb] rounded-[12px] border border-[rgba(0,0,0,0.08)] overflow-hidden relative">
        {current ? (
          <>
            <Preview material={current} />
            {current.src && (
              <a
                href={current.src}
                download={current.filename ?? true}
                className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-[#497fff] text-white px-3 py-1.5 rounded-[8px] text-[12px] font-medium shadow-sm hover:bg-[#3a6eee] transition-colors"
              >
                <Download size={13} strokeWidth={2} />
                Жүктеу
              </a>
            )}
            {current.url && (
              <a
                href={current.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-[#497fff] text-white px-3 py-1.5 rounded-[8px] text-[12px] font-medium shadow-sm hover:bg-[#3a6eee] transition-colors"
              >
                <ExternalLink size={13} strokeWidth={2} />
                Жаңа терезеде ашу
              </a>
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#7c7c7c] text-[14px]">
            Материалды таңдаңыз
          </div>
        )}
      </div>
    </div>
  );
}
