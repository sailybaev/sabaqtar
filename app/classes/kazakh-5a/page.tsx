import Sidebar from "../../components/Sidebar";
import BottomNav from "../../components/BottomNav";
import FileIcon from "../../components/FileIcon";
import Link from "next/link";
import { ChevronDown, ArrowLeft, BookOpen } from "lucide-react";

const lessons = [
  {
    slug: "zat-esim",
    label: "Зат есім",
    description: "2 материал",
    files: ["qmzh_zat_esim.docx", "qmzh_04_02.docx"],
  },
  {
    slug: "syn-esim",
    label: "Сын есім",
    description: "7 материал",
    files: ["syn_esim_ezheler.pdf", "refleksiya_01.pptx", "qmzh_11_02.docx"],
  },
];

export default function Kazakh5APage() {
  return (
    <div className="bg-white flex flex-col lg:flex-row lg:h-[982px] lg:w-[1512px] min-h-screen">
      <Sidebar activePage="classes" />

      <div className="flex flex-col flex-1 lg:h-[982px] lg:w-[1256px]">
        {/* Topbar */}
        <div className="flex gap-4 h-14 items-center px-4 shrink-0 w-full">
          <div className="flex items-center flex-1">
            <div className="flex gap-2 h-5 items-center">
              <BookOpen size={20} className="text-black" strokeWidth={1.5} />
              <p className="text-[14px] font-medium text-black tracking-[-0.0476px] whitespace-nowrap">
                Сыныптар
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center w-[764px]">
            <div className="bg-[#f4f3f3] flex items-center h-8 w-[540px] px-4 rounded-[8px]">
              <p className="text-[14px] font-medium opacity-30 text-black whitespace-nowrap leading-none">
                Іздеу...
              </p>
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

        {/* Content */}
        <div className="flex flex-col gap-8 lg:gap-10 items-center pb-24 lg:pb-[10px] pt-6 lg:pt-10 px-4 lg:px-10 w-full overflow-y-auto">
          {/* Back + Title */}
          <div className="flex flex-col gap-4 lg:gap-6 items-start w-full lg:w-[792px]">
            <Link href="/classes" className="flex items-center gap-1 text-[14px] font-medium text-[#5b5b5b] tracking-[-0.0476px] hover:text-black transition-colors">
              <ArrowLeft size={16} strokeWidth={1.5} />
              Артқа
            </Link>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#7c7c7c] font-medium">Қазақ тілі · Кулметтенова А.</p>
              <p className="text-[28px] lg:text-[32px] font-semibold text-black tracking-[-0.5px]">
                5-сынып
              </p>
            </div>
          </div>

          {/* Lessons */}
          <div className="flex flex-col gap-4 lg:gap-6 items-start w-full lg:w-[792px]">
            <p className="text-[14px] font-medium text-[#5b5b5b] tracking-[-0.0476px]">Тақырыптар</p>

            <div className="flex flex-col gap-3 w-full">
              {lessons.map((lesson) => (
                <Link key={lesson.slug} href={`/classes/kazakh-5a/${lesson.slug}`}>
                  <div className="border border-[rgba(0,0,0,0.08)] flex gap-3 lg:gap-4 items-start lg:items-center px-4 py-4 rounded-[12px] w-full hover:border-[#497fff] hover:bg-[rgba(73,127,255,0.02)] transition-colors cursor-pointer">
                    <FileIcon name={lesson.label} isFolder size={32} />
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className="text-[15px] font-medium text-[#1a1a1a]">{lesson.label}</p>
                      <p className="text-[12px] text-[#7c7c7c] mt-[2px]">{lesson.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2 lg:hidden">
                        {lesson.files.map((f) => (
                          <div key={f} className="bg-[#f6f9ff] flex gap-1 items-center px-2 py-1 rounded-[6px]">
                            <FileIcon name={f} size={12} />
                            <p className="text-[11px] font-medium text-[#5b5b5b] whitespace-nowrap">{f}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="hidden lg:flex gap-2 items-center">
                      {lesson.files.map((f) => (
                        <div key={f} className="bg-[#f6f9ff] flex gap-1 items-center px-2 py-1 rounded-[6px]">
                          <FileIcon name={f} size={14} />
                          <p className="text-[11px] font-medium text-[#5b5b5b] whitespace-nowrap">{f}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
