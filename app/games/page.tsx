"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import LessonViewer from "../components/LessonViewer";
import type { Material } from "../components/LessonViewer";
import { Gamepad2, Search } from "lucide-react";

const materials: Material[] = [
  {
    id: "games",
    label: "Ойындар сілтемелері",
    description: "Ойындарға сілтемелер тізімі",
    type: "docx",
    src: "/materials/games_links.docx",
    filename: "games_links.docx",
  },
];

export default function GamesPage() {
  const [query, setQuery] = useState("");
  return (
    <div className="bg-white flex h-screen w-screen">
      <Sidebar activePage="games" />

      <div className="flex flex-col flex-1 min-w-0 h-screen">
        <TopBar breadcrumb="Ойындар" BreadcrumbIcon={Gamepad2} />

        <div className="flex flex-col flex-1 min-h-0 px-10 pt-8 pb-6 gap-6">
          <div className="flex items-center relative w-[540px] shrink-0">
            <Search size={14} className="absolute left-3 text-black opacity-30 pointer-events-none" strokeWidth={2} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Іздеу..."
              className="bg-[#f4f3f3] w-full h-8 pl-9 pr-4 rounded-[8px] text-[14px] font-medium text-black outline-none placeholder:opacity-30"
            />
          </div>

          <LessonViewer materials={materials} query={query} />
        </div>
      </div>
    </div>
  );
}
