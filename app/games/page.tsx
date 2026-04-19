"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { Gamepad2, Search, ExternalLink } from "lucide-react";
import BottomNav from "../components/BottomNav";

const games = [
  { id: 1, label: "Қазақ тілі мен әдебиеті", sublabel: "Қазақ", url: "https://wordwall.net/resource/105749875/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96-%D0%BC%D0%B5%D0%BD-%D3%99%D0%B4%D0%B5%D0%B1%D0%B8%D0%B5%D1%82%D1%96/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B" },
  { id: 2, label: "Қазақ тілі", sublabel: "Қазақ", url: "https://wordwall.net/resource/37052427/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B" },
  { id: 3, label: "Қазақ тілі тест", sublabel: "Қазақ", url: "https://wordwall.net/resource/56128999/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96-%D1%82%D0%B5%D1%81%D1%82/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B" },
  { id: 4, label: "Қазақ тілі", sublabel: "Ойын", url: "https://wordwall.net/resource/80882613/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96/-" },
  { id: 5, label: "Қазақ тілі", sublabel: "Сұраққа", url: "https://wordwall.net/resource/83218205/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96/%D1%81%D2%B1%D1%80%D0%B0%D2%9B%D2%9B%D0%B0" },
  { id: 6, label: "Қазақ тілі мен әдебиеті", sublabel: "Сан", url: "https://wordwall.net/resource/100431368/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96-%D0%BC%D0%B5%D0%BD-%D3%99%D0%B4%D0%B5%D0%B1%D0%B8%D0%B5%D1%82%D1%96/%D1%81%D0%B0%D0%BD" },
  { id: 7, label: "Қазақ тілі", sublabel: "2", url: "https://wordwall.net/resource/88288846/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96/2" },
  { id: 8, label: "Қазақ әдебиеті", sublabel: "Қазақ", url: "https://wordwall.net/resource/73214936/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D3%99%D0%B4%D0%B5%D0%B1%D0%B8%D0%B5%D1%82%D1%96/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B" },
  { id: 9, label: "Қазақ тілі", sublabel: "Ойын", url: "https://wordwall.net/resource/9436651/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96" },
  { id: 10, label: "Қазақ әдебиеті", sublabel: "Қазақ", url: "https://wordwall.net/resource/101903891/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D3%99%D0%B4%D0%B5%D0%B1%D0%B8%D0%B5%D1%82%D1%96/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B" },
  { id: 11, label: "Қазақ тілі", sublabel: "Ойын", url: "https://wordwall.net/resource/102244678/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96/%D0%BE%D0%B9%D1%8B%D0%BD" },
  { id: 12, label: "Қазақ тілі", sublabel: "Қазақ", url: "https://wordwall.net/resource/87831910/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B" },
  { id: 13, label: "Қазақ әдебиеті", sublabel: "Қазақ", url: "https://wordwall.net/resource/90817392/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D3%99%D0%B4%D0%B5%D0%B1%D0%B8%D0%B5%D1%96/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B" },
  { id: 14, label: "Қазақ әдебиеті", sublabel: "Қазақ", url: "https://wordwall.net/resource/98078622/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D3%99%D0%B4%D0%B5%D0%B1%D0%B8%D0%B5%D1%82%D1%96/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B" },
  { id: 15, label: "Қазақ әдебиеті", sublabel: "Қазақ", url: "https://wordwall.net/resource/101086967/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D3%99%D0%B4%D0%B5%D0%B1%D0%B8%D0%B5%D1%82%D1%96/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B" },
  { id: 16, label: "Қазақ тілі", sublabel: "Ойын", url: "https://wordwall.net/resource/83850067/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96/%D0%BE%D0%B9%D1%8B%D0%BD" },
  { id: 17, label: "Қазақ тілі", sublabel: "Ойын", url: "https://wordwall.net/resource/83148766/%D2%9B%D0%B0%D0%B7%D0%B0%D2%9B-%D1%82%D1%96%D0%BB%D1%96/%D0%BE%D0%B9%D1%8B%D0%BD" },
];

export default function GamesPage() {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const filtered = games.filter(
    (g) =>
      g.label.toLowerCase().includes(q) ||
      g.sublabel.toLowerCase().includes(q) ||
      String(g.id).includes(q)
  );

  return (
    <div className="bg-white flex flex-col lg:flex-row min-h-screen">
      <Sidebar activePage="games" />

      <div className="flex flex-col flex-1 min-w-0">
        <TopBar breadcrumb="Ойындар" BreadcrumbIcon={Gamepad2} />

        <div className="flex flex-col flex-1 min-h-0 px-4 lg:px-10 pt-6 lg:pt-8 pb-24 lg:pb-6 gap-4 lg:gap-6">
          <div className="flex items-center relative w-full lg:w-[540px] shrink-0">
            <Search size={14} className="absolute left-3 text-black opacity-30 pointer-events-none" strokeWidth={2} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Іздеу..."
              className="bg-[#f4f3f3] w-full h-9 pl-9 pr-4 rounded-[8px] text-[14px] font-medium text-black outline-none placeholder:opacity-30"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-4 overflow-y-auto">
            {filtered.length > 0 ? filtered.map((game) => (
              <a
                key={game.id}
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-[12px] border border-[rgba(0,0,0,0.1)] hover:border-[#497fff] hover:bg-[rgba(73,127,255,0.04)] transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-[12px] bg-[#f0f4ff] flex items-center justify-center group-hover:bg-[#dce8ff] transition-colors relative">
                  <Gamepad2 size={24} className="text-[#497fff]" strokeWidth={1.5} />
                  <ExternalLink size={12} className="absolute top-1 right-1 text-[#497fff] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
                </div>
                <div className="flex flex-col items-center gap-0.5 text-center">
                  <p className="text-[12px] font-semibold text-[#1a1a1a] leading-tight line-clamp-2">{game.label}</p>
                  <p className="text-[11px] text-[#7c7c7c] leading-tight">{game.sublabel}</p>
                  <p className="text-[10px] text-[#b0b0b0]">#{game.id}</p>
                </div>
              </a>
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
