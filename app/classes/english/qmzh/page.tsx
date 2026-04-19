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
    id: "mektep",
    label: "Мектеп бөлімі ҚМЖ",
    description: "Соңғы нұсқа",
    type: "docx",
    src: "/materials/en_qmzh_mektep_bolimi.docx",
    filename: "en_qmzh_mektep_bolimi.docx",
  },
  {
    id: "en51",
    label: "Ағылшын 5-1",
    description: "Сабақ жоспары",
    type: "docx",
    src: "/materials/en_5_1.docx",
    filename: "en_5_1.docx",
  },
  {
    id: "apr10",
    label: "ҚМЖ 10.04",
    description: "Қысқамерзімді жоспар",
    type: "docx",
    src: "/materials/en_qmzh_10_04.docx",
    filename: "en_qmzh_10_04.docx",
  },
  {
    id: "apr15",
    label: "ҚМЖ 15.04",
    description: "Қысқамерзімді жоспар",
    type: "docx",
    src: "/materials/en_qmzh_15_04.docx",
    filename: "en_qmzh_15_04.docx",
  },
  {
    id: "apr18",
    label: "ҚМЖ 18.04",
    description: "Қысқамерзімді жоспар",
    type: "docx",
    src: "/materials/en_qmzh_18_04.docx",
    filename: "en_qmzh_18_04.docx",
  },
  {
    id: "apr21",
    label: "ҚМЖ 21.04",
    description: "Қысқамерзімді жоспар",
    type: "docx",
    src: "/materials/en_qmzh_21_04.docx",
    filename: "en_qmzh_21_04.docx",
  },
];

export default function EnglishQmzhPage() {
  const [query, setQuery] = useState("");
  return (
    <div className="bg-white flex flex-col lg:flex-row min-h-screen lg:h-screen lg:w-screen">
      <Sidebar activePage="classes" />

      <div className="flex flex-col flex-1 min-w-0 lg:h-screen">
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

        <div className="flex flex-col flex-1 min-h-0 px-4 lg:px-10 pt-4 lg:pt-8 pb-24 lg:pb-6 gap-4 lg:gap-6">
          <div className="flex flex-col gap-3 lg:gap-4 items-start shrink-0">
            <Link href="/classes/english" className="flex items-center gap-1 text-[14px] font-medium text-[#5b5b5b] tracking-[-0.0476px] hover:text-black transition-colors">
              <ArrowLeft size={16} strokeWidth={1.5} />
              Артқа
            </Link>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#7c7c7c] font-medium">Ағылшын тілі · 5-сынып</p>
              <p className="text-[26px] lg:text-[32px] font-semibold text-black tracking-[-0.5px]">
                Сабақ жоспарлары
              </p>
            </div>
          </div>

          <LessonViewer materials={materials} query={query} />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
