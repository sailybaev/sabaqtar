"use client";
import { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import LessonViewer from "../../../components/LessonViewer";
import type { Material } from "../../../components/LessonViewer";
import Link from "next/link";
import { ChevronDown, ArrowLeft, BookOpen, Search } from "lucide-react";

const materials: Material[] = [
  {
    id: "plan1",
    label: "ҚМЖ Зат есім",
    description: "Қысқамерзімді жоспар",
    type: "docx",
    src: "/materials/qmzh_zat_esim.docx",
    filename: "qmzh_zat_esim.docx",
  },
  {
    id: "plan1b",
    label: "5 ҚМЖ Зат есім",
    description: "Қысқамерзімді жоспар",
    type: "docx",
    src: "/materials/kaz_qmzh_5a_zat_esim.docx",
    filename: "kaz_qmzh_5a_zat_esim.docx",
  },
  {
    id: "plan2",
    label: "ҚМЖ 04.02",
    description: "Қысқамерзімді жоспар",
    type: "docx",
    src: "/materials/qmzh_04_02.docx",
    filename: "qmzh_04_02.docx",
  },
  {
    id: "plan2b",
    label: "5 ҚМЖ 04.02",
    description: "Қысқамерзімді жоспар",
    type: "docx",
    src: "/materials/kaz_qmzh_5a_04_02.docx",
    filename: "kaz_qmzh_5a_04_02.docx",
  },
  {
    id: "plan3",
    label: "5 ҚМЖ 18.02",
    description: "Қысқамерзімді жоспар",
    type: "docx",
    src: "/materials/kaz_qmzh_5a_18_02.docx",
    filename: "kaz_qmzh_5a_18_02.docx",
  },
];

export default function ZatEsimPage() {
  const [query, setQuery] = useState("");
  return (
    <div className="bg-white flex h-[982px] w-[1512px]">
      <Sidebar activePage="classes" />

      <div className="flex flex-col h-[982px] w-[1256px]">
        {/* Topbar */}
        <div className="flex gap-4 h-14 items-center px-4 shrink-0 w-full">
          <div className="flex items-center w-[180px]">
            <div className="flex gap-2 h-5 items-center">
              <BookOpen size={20} className="text-black" strokeWidth={1.5} />
              <p className="text-[14px] font-medium text-black tracking-[-0.0476px] whitespace-nowrap">
                Сыныптар
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center flex-1">
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

          <div className="flex gap-8 items-center justify-end flex-1">
            <div className="flex gap-3 items-center">
              <div className="bg-black flex items-center justify-center rounded-full w-6 h-6">
                <p className="text-[14px] font-medium text-white">A</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className="text-[14px] font-medium text-black tracking-[-0.0476px] whitespace-nowrap">Aziza</p>
                <ChevronDown size={16} className="text-black" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10 items-center pb-[10px] pt-10 px-10 w-full overflow-y-auto">
          {/* Back + Title */}
          <div className="flex flex-col gap-6 items-start w-[792px]">
            <Link href="/classes/kazakh-5a" className="flex items-center gap-1 text-[14px] font-medium text-[#5b5b5b] tracking-[-0.0476px] hover:text-black transition-colors">
              <ArrowLeft size={16} strokeWidth={1.5} />
              Артқа
            </Link>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#7c7c7c] font-medium">Қазақ тілі · 5-сынып</p>
              <p className="text-[32px] font-semibold text-black tracking-[-0.5px]">
                Зат есім
              </p>
            </div>
          </div>

          {/* LessonViewer */}
          <LessonViewer materials={materials} query={query} />
        </div>
      </div>
    </div>
  );
}
