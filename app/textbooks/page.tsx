"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { Library, Search, Download } from "lucide-react";
import Link from "next/link";

type Textbook = { label: string; grade: string; src: string; filename: string };

const kazakhBooks: Textbook[] = [
  { label: "Қазақ тілі 1-сынып", grade: "1", src: "/materials/kaz_kitap_1.pdf", filename: "kaz_kitap_1.pdf" },
  { label: "Қазақ тілі 2-сынып", grade: "2", src: "/materials/kaz_kitap_2.pdf", filename: "kaz_kitap_2.pdf" },
  { label: "Қазақ тілі 3-сынып", grade: "3", src: "/materials/kaz_kitap_3.pdf", filename: "kaz_kitap_3.pdf" },
  { label: "Қазақ тілі 4-сынып", grade: "4", src: "/materials/kaz_kitap_4.pdf", filename: "kaz_kitap_4.pdf" },
  { label: "Қазақ тілі 5-сынып", grade: "5", src: "/materials/kaz_kitap_5.pdf", filename: "kaz_kitap_5.pdf" },
  { label: "Қазақ тілі 6-сынып", grade: "6", src: "/materials/kaz_kitap_6.pdf", filename: "kaz_kitap_6.pdf" },
  { label: "Қазақ тілі 7-сынып", grade: "7", src: "/materials/kaz_kitap_7.pdf", filename: "kaz_kitap_7.pdf" },
  { label: "Қазақ тілі 8-сынып", grade: "8", src: "/materials/kaz_kitap_8.pdf", filename: "kaz_kitap_8.pdf" },
  { label: "Қазақ тілі 9-сынып", grade: "9", src: "/materials/kaz_kitap_9.pdf", filename: "kaz_kitap_9.pdf" },
  { label: "Қазақ тілі 10-сынып", grade: "10", src: "/materials/kaz_kitap_10.pdf", filename: "kaz_kitap_10.pdf" },
  { label: "Қазақ тілі 11-сынып", grade: "11", src: "/materials/kaz_kitap_11.pdf", filename: "kaz_kitap_11.pdf" },
];

const englishBooks: Textbook[] = [
  { label: "Ағылшын тілі 1-сынып", grade: "1", src: "/materials/en_kitap_1.pdf", filename: "en_kitap_1.pdf" },
  { label: "Ағылшын тілі 2-сынып", grade: "2", src: "/materials/en_kitap_2.pdf", filename: "en_kitap_2.pdf" },
  { label: "Ағылшын тілі 3-сынып", grade: "3", src: "/materials/en_kitap_3.pdf", filename: "en_kitap_3.pdf" },
  { label: "Ағылшын тілі 4-сынып", grade: "4", src: "/materials/en_kitap_4.pdf", filename: "en_kitap_4.pdf" },
  { label: "Ағылшын тілі 4.1-сынып", grade: "4.1", src: "/materials/en_kitap_4_1.pdf", filename: "en_kitap_4_1.pdf" },
  { label: "Ағылшын тілі 5-сынып", grade: "5", src: "/materials/en_kitap_5.pdf", filename: "en_kitap_5.pdf" },
  { label: "Ағылшын тілі 6-сынып", grade: "6", src: "/materials/en_kitap_6.pdf", filename: "en_kitap_6.pdf" },
  { label: "Ағылшын тілі 7-сынып", grade: "7", src: "/materials/en_kitap_7.pdf", filename: "en_kitap_7.pdf" },
  { label: "Ағылшын тілі 8-сынып", grade: "8", src: "/materials/en_kitap_8.pdf", filename: "en_kitap_8.pdf" },
  { label: "Ағылшын тілі 9-сынып", grade: "9", src: "/materials/en_kitap_9.pdf", filename: "en_kitap_9.pdf" },
  { label: "Ағылшын тілі 10-сынып", grade: "10", src: "/materials/en_kitap_10.pdf", filename: "en_kitap_10.pdf" },
  { label: "Ағылшын тілі 11-сынып", grade: "11", src: "/materials/en_kitap_11.pdf", filename: "en_kitap_11.pdf" },
];

function BookCard({ book }: { book: Textbook }) {
  return (
    <div className="border border-[rgba(0,0,0,0.08)] flex flex-col gap-3 items-center p-4 rounded-[12px] w-[calc(50%-8px)] sm:w-[172px] hover:border-[#497fff] hover:bg-[rgba(73,127,255,0.02)] transition-colors group">
      <div className="bg-[rgba(73,127,255,0.08)] flex items-center justify-center rounded-[8px] w-full h-[80px] sm:h-[100px]">
        <span className="text-[28px] sm:text-[32px] font-bold text-[#497fff] opacity-60">{book.grade}</span>
      </div>
      <p className="text-[12px] font-medium text-[#1a1a1a] text-center leading-tight">{book.label}</p>
      <div className="flex gap-2 w-full">
        <Link href={book.src} target="_blank" className="flex-1 flex items-center justify-center gap-1 bg-[#f4f3f3] hover:bg-[rgba(73,127,255,0.1)] px-2 py-1.5 rounded-[6px] text-[11px] font-medium text-[#5b5b5b] hover:text-[#497fff] transition-colors">
          Ашу
        </Link>
        <a href={book.src} download={book.filename} className="flex items-center justify-center gap-1 bg-[#f4f3f3] hover:bg-[rgba(73,127,255,0.1)] px-2 py-1.5 rounded-[6px] transition-colors">
          <Download size={12} className="text-[#5b5b5b] hover:text-[#497fff]" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}

export default function TextbooksPage() {
  const [query, setQuery] = useState("");
  const q = query.toLowerCase();
  const filteredKaz = kazakhBooks.filter((b) => b.label.toLowerCase().includes(q) || b.grade.includes(q));
  const filteredEn = englishBooks.filter((b) => b.label.toLowerCase().includes(q) || b.grade.includes(q));

  return (
    <div className="bg-white flex flex-col lg:flex-row min-h-screen">
      <Sidebar activePage="textbooks" />

      <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
        <TopBar breadcrumb="Оқулықтар" BreadcrumbIcon={Library} />

        <div className="flex flex-col items-center pb-[10px] pt-6 lg:pt-10 px-4 lg:px-10 shrink-0 w-full">
          <div className="flex items-center w-full lg:w-[792px] relative">
            <Search size={18} className="absolute left-4 text-black opacity-30 pointer-events-none" strokeWidth={2} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Іздеу..."
              className="bg-[#f4f3f3] flex-1 w-full pl-10 pr-4 py-3 rounded-[8px] text-[16px] lg:text-[20px] font-normal text-black outline-none placeholder:opacity-30"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:gap-10 items-center pb-24 lg:pb-10 pt-6 lg:pt-8 px-4 lg:px-10 w-full">
          {filteredKaz.length > 0 && (
            <div className="flex flex-col gap-4 lg:gap-6 items-start w-full lg:w-[792px]">
              <p className="text-[14px] font-medium text-black tracking-[-0.0476px]">Қазақ тілі оқулықтары</p>
              <div className="flex flex-wrap gap-4 items-start w-full">
                {filteredKaz.map((book) => <BookCard key={book.filename} book={book} />)}
              </div>
            </div>
          )}

          {filteredEn.length > 0 && (
            <div className="flex flex-col gap-4 lg:gap-6 items-start w-full lg:w-[792px]">
              <p className="text-[14px] font-medium text-black tracking-[-0.0476px]">Ағылшын тілі оқулықтары</p>
              <div className="flex flex-wrap gap-4 items-start w-full">
                {filteredEn.map((book) => <BookCard key={book.filename} book={book} />)}
              </div>
            </div>
          )}

          {filteredKaz.length === 0 && filteredEn.length === 0 && (
            <p className="text-[14px] text-[#7c7c7c]">Ештеңе табылмады</p>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
