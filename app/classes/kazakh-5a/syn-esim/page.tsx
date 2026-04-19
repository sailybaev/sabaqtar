"use client";
import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import BottomNav from "../../../components/BottomNav";
import LessonViewer from "../../../components/LessonViewer";
import type { Material } from "../../../components/LessonViewer";
import Link from "next/link";
import { ChevronDown, ArrowLeft, BookOpen, Search } from "lucide-react";

const materials: Material[] = [
  {
    id: "rules",
    label: "Негізгі ережелер",
    description: "Сын есімнің ережелері",
    type: "pdf",
    src: "/materials/syn_esim_ezheler.pdf",
    filename: "syn_esim_ezheler.pdf",
  },
  {
    id: "design",
    label: "Сабақ дизайны",
    description: "Алтын безендіру",
    type: "pdf",
    src: "/materials/sabaq_dizayny.pdf",
    filename: "sabaq_dizayny.pdf",
  },
  {
    id: "reflection",
    label: "Рефлексия слайдтары",
    description: "PowerPoint презентация",
    type: "pptx",
    src: "/materials/refleksiya_01.pptx",
    filename: "refleksiya_01.pptx",
  },
  {
    id: "plan",
    label: "ҚМЖ 11.02",
    description: "Қысқамерзімді жоспар",
    type: "docx",
    src: "/materials/qmzh_11_02.docx",
    filename: "qmzh_11_02.docx",
  },
  {
    id: "video",
    label: "Кітаптағы бейне",
    description: "Vimeo бейне сабағы",
    type: "video",
    url: "https://vimeo.com/826175350",
  },
  {
    id: "game1",
    label: "Wordwall ойыны",
    description: "Интерактивті тапсырма",
    type: "game",
    url: "https://wordwall.net/resource/87629912/сын-есім",
  },
  {
    id: "game2",
    label: "Genially ойыны",
    description: "Интерактивті мазмұн",
    type: "game",
    url: "https://view.genially.com/698c2ab9735648aea5c3e3a5/interactive-content-syn-esim",
  },
];

export default function SynEsimPage() {
  const [query, setQuery] = useState("");
  return (
    <div className="bg-white flex flex-col lg:flex-row min-h-screen lg:h-screen lg:w-screen">
      <Sidebar activePage="classes" />

      <div className="flex flex-col flex-1 min-w-0 lg:h-screen">
        {/* Topbar */}
        <div className="flex gap-4 h-14 items-center px-4 shrink-0 w-full">
          <div className="flex items-center flex-1 lg:w-[180px] lg:flex-none">
            <div className="flex gap-2 h-5 items-center">
              <BookOpen size={20} className="text-black" strokeWidth={1.5} />
              <p className="text-[14px] font-medium text-black tracking-[-0.0476px] whitespace-nowrap">
                Сыныптар
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center flex-1">
            <div className="relative w-[540px]">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-black opacity-30 pointer-events-none" strokeWidth={2} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Іздеу..."
                className="bg-[#f4f3f3] w-full h-8 pl-9 pr-4 rounded-[8px] text-[14px] font-medium text-black outline-none placeholder:opacity-30"
              />
            </div>
          </div>

          <div className="flex gap-8 items-center justify-end">
            <div className="flex gap-3 items-center">
              <div className="bg-black flex items-center justify-center rounded-full w-6 h-6">
                <p className="text-[14px] font-medium text-white">A</p>
              </div>
              <div className="hidden lg:flex gap-1 items-center">
                <p className="text-[14px] font-medium text-black tracking-[-0.0476px] whitespace-nowrap">Aziza</p>
                <ChevronDown size={16} className="text-black" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="lg:hidden px-4 pb-3 shrink-0">
          <div className="relative w-full">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-black opacity-30 pointer-events-none" strokeWidth={2} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Іздеу..."
              className="bg-[#f4f3f3] w-full h-9 pl-9 pr-4 rounded-[8px] text-[14px] font-medium text-black outline-none placeholder:opacity-30"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 min-h-0 px-4 lg:px-10 pt-4 lg:pt-8 pb-24 lg:pb-6 gap-4 lg:gap-6">
          {/* Back + Title */}
          <div className="flex flex-col gap-3 lg:gap-4 items-start shrink-0">
            <Link href="/classes/kazakh-5a" className="flex items-center gap-1 text-[14px] font-medium text-[#5b5b5b] tracking-[-0.0476px] hover:text-black transition-colors">
              <ArrowLeft size={16} strokeWidth={1.5} />
              Артқа
            </Link>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#7c7c7c] font-medium">Қазақ тілі · 5-сынып</p>
              <p className="text-[26px] lg:text-[32px] font-semibold text-black tracking-[-0.5px]">
                Сын есім
              </p>
            </div>
          </div>

          {/* LessonViewer — fills remaining height */}
          <LessonViewer materials={materials} query={query} />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
