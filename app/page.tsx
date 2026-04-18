"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import FileIcon from "./components/FileIcon";
import { Home, LayoutGrid, List, BookOpen, Search } from "lucide-react";
import Link from "next/link";
import { classes } from "./lib/classes-data";

const recentItems: { label: string; filename?: string; href: string; isFolder?: boolean }[] = [
  { label: "Қазақ тілі 5А", href: "/classes/kazakh-5a", isFolder: true },
  { label: "Сын есім", href: "/classes/kazakh-5a/syn-esim", isFolder: true },
  { label: "Негізгі ережелер", filename: "syn_esim_ezheler.pdf", href: "/classes/kazakh-5a/syn-esim" },
  { label: "Рефлексия слайдтары", filename: "refleksiya_01.pptx", href: "/classes/kazakh-5a/syn-esim" },
];

const allItems: { label: string; filename?: string; href: string; isFolder?: boolean }[] = [
  ...classes.map((c) => ({ label: `${c.name} · ${c.grade}`, href: c.href, isFolder: true })),
  ...classes.flatMap((c) =>
    c.lessons.map((l) => ({ label: l.label, href: l.href, isFolder: true }))
  ),
  { label: "Негізгі ережелер", filename: "syn_esim_ezheler.pdf", href: "/classes/kazakh-5a/syn-esim" },
  { label: "Сабақ дизайны", filename: "sabaq_dizayny.pdf", href: "/classes/kazakh-5a/syn-esim" },
  { label: "Рефлексия слайдтары", filename: "refleksiya_01.pptx", href: "/classes/kazakh-5a/syn-esim" },
  { label: "ҚМЖ 11.02", filename: "qmzh_11_02.docx", href: "/classes/kazakh-5a/syn-esim" },
  { label: "ҚМЖ Зат есім", filename: "qmzh_zat_esim.docx", href: "/classes/kazakh-5a/zat-esim" },
  { label: "ҚМЖ 04.02", filename: "qmzh_04_02.docx", href: "/classes/kazakh-5a/zat-esim" },
];

export default function HomePage() {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const filtered = allItems.filter((item) =>
    item.label.toLowerCase().includes(q) ||
    (item.filename ?? "").toLowerCase().includes(q)
  );

  return (
    <div className="bg-white flex h-[982px] w-[1512px]">
      <Sidebar activePage="home" />

      <div className="flex flex-col h-[982px] w-[1256px]">
        <TopBar breadcrumb="Басты бет" BreadcrumbIcon={Home} />

        {/* Search */}
        <div className="flex flex-col items-center pb-[10px] pt-10 px-10 shrink-0 w-full">
          <div className="flex items-center w-[792px] relative">
            <Search size={18} className="absolute left-4 text-black opacity-30 pointer-events-none" strokeWidth={2} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Іздеу..."
              className="bg-[#f4f3f3] flex-1 w-full pl-10 pr-4 py-3 rounded-[8px] text-[20px] font-normal text-black outline-none placeholder:opacity-30"
            />
          </div>
        </div>

        {/* Recently opened */}
        {!query && (
          <div className="flex flex-col gap-8 items-center pb-[10px] pt-10 px-10 shrink-0 w-full">
            <div className="flex items-center justify-between w-[792px]">
              <p className="text-[14px] font-medium text-black tracking-[-0.0476px]">Жақында ашылған</p>
            </div>
            <div className="flex gap-6 items-start w-[792px]">
              {recentItems.map((item) => (
                <Link key={item.href + item.label} href={item.href}>
                  <div className="bg-[rgba(73,127,255,0.05)] flex flex-col gap-[14px] items-center justify-center pb-4 pt-5 px-2 rounded-[8px] w-[180px] cursor-pointer hover:bg-[rgba(73,127,255,0.1)] transition-colors">
                    {item.isFolder
                      ? <BookOpen size={52} className="text-[#497fff]" strokeWidth={1.2} />
                      : <FileIcon name={item.filename ?? item.label} size={52} />
                    }
                    <p className="text-[13px] font-medium text-[#1a1a1a] text-center tracking-[-0.13px] whitespace-nowrap overflow-hidden text-ellipsis w-full px-2">
                      {item.label}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All items */}
        <div className="flex flex-col gap-6 items-center pb-[10px] pt-10 px-10 shrink-0 w-full">
          <div className="flex items-center justify-between w-[792px]">
            <p className="text-[14px] font-medium text-black tracking-[-0.0476px]">
              {query ? `Іздеу нәтижелері: "${query}"` : "Барлық материалдар"}
            </p>
            <div className="flex gap-2 items-center">
              <LayoutGrid size={24} className="text-black" strokeWidth={1.5} />
              <List size={24} className="text-black" strokeWidth={1.5} />
            </div>
          </div>

          <div className="flex flex-wrap gap-6 items-start w-[792px]">
            {filtered.length > 0 ? filtered.map((item, i) => (
              <Link key={i} href={item.href}>
                <div className="bg-[rgba(73,127,255,0.05)] flex gap-2 items-center px-3 py-2 rounded-[8px] w-[180px] hover:bg-[rgba(73,127,255,0.1)] transition-colors cursor-pointer">
                  {item.isFolder
                    ? <BookOpen size={20} className="text-[#497fff]" strokeWidth={1.5} />
                    : <FileIcon name={item.filename ?? item.label} size={20} />
                  }
                  <p className="text-[13px] font-medium text-[#1a1a1a] tracking-[-0.13px] whitespace-nowrap overflow-hidden text-ellipsis flex-1 min-w-0">
                    {item.label}
                  </p>
                </div>
              </Link>
            )) : (
              <p className="text-[14px] text-[#7c7c7c]">Ештеңе табылмады</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
