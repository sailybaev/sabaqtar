import Sidebar from "../../components/Sidebar";
import FileIcon from "../../components/FileIcon";
import Link from "next/link";
import { LayoutGrid, List, ChevronDown, ArrowLeft, BookOpen } from "lucide-react";

const subLessons = [
  "Теңдеулер",
  "Теңсіздіктер",
  "Функциялар",
  "Координаттар жүйесі",
  "Полиномдар",
  "Ойын тапсырмалары",
];

const materials = [
  { name: "sabaq_zhospary.pdf",            label: "Сабақ жоспары" },
  { name: "slaydtar.pptx",                 label: "Слайдтар" },
  { name: "video_tusindirme.mp4",           label: "Бейне түсіндірме" },
  { name: "interactive_game.html",          label: "Интерактивті ойын" },
  { name: "test_suraqtar.docx",             label: "Тест сұрақтары" },
  { name: "zerthanaly_zhumys.pdf",          label: "Зертханалық жұмыс" },
  { name: "pifagor_teoremasy.pptx",         label: "Пифагор теоремасы" },
  { name: "matematika_test.xlsx",           label: "Бағалау кестесі" },
  { name: "qosymsha_tapsy.docx",            label: "Қосымша тапсырма" },
  { name: "audio_tusindirme.mp3",           label: "Аудио түсіндірме" },
  { name: "shygarmashylyk_tapsyrma.pdf",    label: "Шығармашылық тапсырма" },
];

export default function AlgebraBasicsPage() {
  return (
    <div className="bg-white flex h-[982px] w-[1512px]">
      <Sidebar activePage="classes" />

      <div className="flex flex-col h-[982px] w-[1256px]">
        {/* Custom topbar with inline search */}
        <div className="flex gap-4 h-14 items-center px-4 shrink-0 w-full">
          <div className="flex items-center w-[180px]">
            <div className="flex gap-2 h-5 items-center">
              <BookOpen size={20} className="text-black" strokeWidth={1.5} />
              <p className="text-[14px] font-medium text-black tracking-[-0.0476px] whitespace-nowrap">
                Сыныптар
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-[764px]">
            <div className="bg-[#f4f3f3] flex items-center h-8 w-[540px] px-4 rounded-[8px]">
              <p className="text-[14px] font-medium opacity-30 text-black whitespace-nowrap leading-none">
                Іздеу...
              </p>
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
            <Link href="/classes" className="flex items-center gap-1 text-[14px] font-medium text-[#5b5b5b] tracking-[-0.0476px] hover:text-black transition-colors">
              <ArrowLeft size={16} strokeWidth={1.5} />
              Артқа
            </Link>
            <div className="flex flex-col gap-1">
              <p className="text-[12px] text-[#7c7c7c] font-medium">Математика · 5-сынып</p>
              <p className="text-[32px] font-semibold text-black tracking-[-0.5px]">
                Алгебраның негіздері
              </p>
            </div>
          </div>

          {/* Sub-lessons (folders) */}
          <div className="flex flex-col gap-6 items-start w-[792px]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[14px] font-medium text-[#5b5b5b] tracking-[-0.0476px]">Тақырыптар</p>
              <div className="flex gap-2 items-center">
                <LayoutGrid size={24} className="text-black" strokeWidth={1.5} />
                <List size={24} className="text-black" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex flex-wrap gap-6 items-start w-[792px]">
              {subLessons.map((lesson) => (
                <div
                  key={lesson}
                  className="bg-[rgba(73,127,255,0.05)] flex gap-2 items-center px-3 py-2 rounded-[8px] w-[180px] cursor-pointer hover:bg-[rgba(73,127,255,0.1)] transition-colors"
                >
                  <FileIcon name={lesson} isFolder size={20} />
                  <p className="text-[13px] font-medium text-[#1a1a1a] tracking-[-0.13px] whitespace-nowrap overflow-hidden text-ellipsis flex-1 min-w-0">
                    {lesson}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Materials (files) */}
          <div className="flex flex-col gap-6 items-start w-[792px]">
            <div className="flex items-center justify-between w-full">
              <p className="text-[14px] font-medium text-[#5b5b5b] tracking-[-0.0476px]">Материалдар</p>
              <div className="flex gap-2 items-center">
                <LayoutGrid size={24} className="text-black" strokeWidth={1.5} />
                <List size={24} className="text-black" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex flex-col gap-3 items-start w-full">
              {materials.map((mat, i) => (
                <div
                  key={`${mat.name}-${i}`}
                  className="bg-[rgba(73,127,255,0.05)] flex gap-3 items-center px-3 py-2 rounded-[8px] w-full cursor-pointer hover:bg-[rgba(73,127,255,0.1)] transition-colors"
                >
                  <FileIcon name={mat.name} size={20} />
                  <div className="flex flex-col flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-[#1a1a1a] tracking-[-0.13px] whitespace-nowrap overflow-hidden text-ellipsis">
                      {mat.label}
                    </p>
                    <p className="text-[11px] text-[#7c7c7c] whitespace-nowrap overflow-hidden text-ellipsis">
                      {mat.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
