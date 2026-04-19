"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import FileIcon from "../components/FileIcon";
import { BookOpen, LayoutGrid, List, Search } from "lucide-react";
import Link from "next/link";

import { classes } from "../lib/classes-data";

export default function ClassesPage() {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const filtered = classes.filter((cls) =>
    cls.name.toLowerCase().includes(q) ||
    cls.grade.toLowerCase().includes(q) ||
    cls.items.some((item) => item.name.toLowerCase().includes(q))
  );

  return (
    <div className="bg-white flex flex-col lg:flex-row lg:h-[982px] lg:w-[1512px] min-h-screen">
      <Sidebar activePage="classes" />

      <div className="flex flex-col flex-1 lg:h-[982px] lg:w-[1256px]">
        <TopBar breadcrumb="Сыныптар" BreadcrumbIcon={BookOpen} />

        {/* Search */}
        <div className="flex flex-col items-center pb-[10px] pt-6 lg:pt-10 px-4 lg:px-10 shrink-0 w-full">
          <div className="flex items-center w-full lg:w-[792px] relative">
            <Search size={16} className="absolute left-4 text-black opacity-30 pointer-events-none" strokeWidth={2} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Іздеу..."
              className="bg-[#f4f3f3] flex-1 w-full pl-10 pr-4 py-3 rounded-[8px] text-[16px] lg:text-[20px] font-normal text-black outline-none placeholder:opacity-30"
            />
          </div>
        </div>

        {/* Classes grid */}
        <div className="flex flex-col gap-6 lg:gap-8 items-center pb-24 lg:pb-[10px] pt-4 lg:pt-10 px-4 lg:px-10 w-full overflow-y-auto">
          <div className="flex items-center justify-between w-full lg:w-[792px]">
            <p className="text-[14px] font-medium text-[#5b5b5b] tracking-[-0.0476px]">Сіздің сыныптарыңыз</p>
            <div className="flex gap-2 items-center">
              <LayoutGrid size={24} className="text-black" strokeWidth={1.5} />
              <List size={24} className="text-black" strokeWidth={1.5} />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 lg:gap-8 items-start w-full lg:w-[792px]">
            {filtered.length > 0 ? filtered.map((cls) => (
              <Link key={cls.name} href={cls.href} className="w-full lg:w-auto">
                <div className="border border-[rgba(0,0,0,0.15)] flex flex-col gap-4 items-start max-h-[261px] overflow-hidden px-2 py-4 rounded-[12px] w-full lg:w-[380px] hover:border-[#497fff] hover:bg-[rgba(73,127,255,0.02)] transition-colors cursor-pointer">
                  <div className="flex items-center justify-between px-2 w-full">
                    <div className="flex items-center gap-2">
                      <p className="text-[13px] font-medium text-[#1a1a1a] whitespace-nowrap">
                        {cls.name}
                      </p>
                      <span className="text-[11px] text-[#7c7c7c] bg-[#f0f0f0] px-2 py-[2px] rounded-full whitespace-nowrap">
                        {cls.grade}
                      </span>
                    </div>
                    <p className="text-[14px] font-medium text-black tracking-[-0.0476px]">...</p>
                  </div>

                  <div className="flex flex-wrap gap-3 items-start px-2 w-full">
                    {cls.items.map((item, i) => (
                      <div key={`${item.name}-${i}`} className="bg-[#f6f9ff] flex gap-2 items-center px-3 py-2 rounded-[8px]">
                        <FileIcon name={item.name} isFolder={item.isFolder} size={16} />
                        <p className="text-[12px] font-medium text-[#1a1a1a] tracking-[-0.12px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[124px]">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            )) : (
              <p className="text-[14px] text-[#7c7c7c]">Ештеңе табылмады</p>
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
