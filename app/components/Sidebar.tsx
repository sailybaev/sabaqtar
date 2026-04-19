"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Library, Gamepad2, Settings, HelpCircle, ChevronDown } from "lucide-react";
import { classes } from "../lib/classes-data";

type NavPage = "home" | "classes" | "textbooks" | "games";

interface SidebarProps {
  activePage: NavPage;
}

export default function Sidebar({ activePage }: SidebarProps) {
  const pathname = usePathname();
  const [openClass, setOpenClass] = useState<string | null>(
    // auto-open if we're inside a class
    classes.find((c) => pathname.startsWith(c.href))?.href ?? null
  );

  return (
    <div className="bg-[#f6f6f6] border-r border-[rgba(0,0,0,0.08)] flex flex-col h-full items-start justify-between py-4 w-64 shrink-0">
      <div className="flex flex-col gap-6 items-start px-2 w-full">
        {/* Main nav */}
        <div className="flex flex-col gap-1 w-full">
          <Link href="/" className="w-full">
            <div className={`flex items-center gap-3 h-9 px-4 rounded-[8px] w-full transition-colors ${activePage === "home" ? "bg-[rgba(73,127,255,0.1)]" : "hover:bg-[rgba(0,0,0,0.04)]"}`}>
              <Home size={20} className={activePage === "home" ? "text-[#497fff]" : "text-[#5b5b5b]"} strokeWidth={1.5} />
              <p className={`text-[14px] font-medium tracking-[-0.0476px] ${activePage === "home" ? "text-[#497fff]" : "text-[#5b5b5b]"}`}>
                Басты бет
              </p>
            </div>
          </Link>

          <Link href="/classes" className="w-full">
            <div className={`flex items-center gap-3 h-9 px-4 rounded-[8px] w-full transition-colors ${activePage === "classes" && pathname === "/classes" ? "bg-[rgba(73,127,255,0.1)]" : "hover:bg-[rgba(0,0,0,0.04)]"}`}>
              <BookOpen size={20} className={activePage === "classes" ? "text-[#497fff]" : "text-[#5b5b5b]"} strokeWidth={1.5} />
              <p className={`text-[14px] font-medium tracking-[-0.0476px] ${activePage === "classes" ? "text-[#497fff]" : "text-[#5b5b5b]"}`}>
                Сыныптар
              </p>
            </div>
          </Link>

          <Link href="/textbooks" className="w-full">
            <div className={`flex items-center gap-3 h-9 px-4 rounded-[8px] w-full transition-colors ${activePage === "textbooks" ? "bg-[rgba(73,127,255,0.1)]" : "hover:bg-[rgba(0,0,0,0.04)]"}`}>
              <Library size={20} className={activePage === "textbooks" ? "text-[#497fff]" : "text-[#5b5b5b]"} strokeWidth={1.5} />
              <p className={`text-[14px] font-medium tracking-[-0.0476px] ${activePage === "textbooks" ? "text-[#497fff]" : "text-[#5b5b5b]"}`}>
                Оқулықтар
              </p>
            </div>
          </Link>

          <Link href="/games" className="w-full">
            <div className={`flex items-center gap-3 h-9 px-4 rounded-[8px] w-full transition-colors ${activePage === "games" ? "bg-[rgba(73,127,255,0.1)]" : "hover:bg-[rgba(0,0,0,0.04)]"}`}>
              <Gamepad2 size={20} className={activePage === "games" ? "text-[#497fff]" : "text-[#5b5b5b]"} strokeWidth={1.5} />
              <p className={`text-[14px] font-medium tracking-[-0.0476px] ${activePage === "games" ? "text-[#497fff]" : "text-[#5b5b5b]"}`}>
                Ойындар
              </p>
            </div>
          </Link>
        </div>

        {/* Classes dropdown */}
        <div className="flex flex-col gap-1 w-full">
          <p className="text-[11px] font-semibold text-[#7c7c7c] uppercase tracking-wide px-4 mb-1">Класстарым</p>

          {classes.map((cls) => {
            const isOpen = openClass === cls.href;
            const isActive = pathname.startsWith(cls.href);

            return (
              <div key={cls.href} className="flex flex-col w-full">
                {/* Class row */}
                <div className={`flex items-center gap-3 h-9 px-4 rounded-[8px] w-full transition-colors ${isActive ? "bg-[rgba(73,127,255,0.08)]" : "hover:bg-[rgba(0,0,0,0.04)]"}`}>
                  <Link href={cls.href} className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="flex flex-col flex-1 min-w-0">
                      <p className={`text-[13px] font-medium tracking-[-0.04px] truncate ${isActive ? "text-[#497fff]" : "text-[#1a1a1a]"}`}>
                        {cls.name}
                      </p>
                      <p className="text-[11px] text-[#7c7c7c]">{cls.grade}</p>
                    </div>
                  </Link>
                  <button onClick={() => setOpenClass(isOpen ? null : cls.href)} className="shrink-0 p-0.5">
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`text-[#7c7c7c] transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {/* Lessons */}
                {isOpen && (
                  <div className="flex flex-col gap-0.5 pl-8 pr-2 mt-0.5">
                    {cls.lessons.map((lesson) => {
                      const lessonActive = pathname === lesson.href;
                      return (
                        <Link key={lesson.href} href={lesson.href} className="w-full">
                          <div className={`flex items-center gap-2 h-8 px-3 rounded-[6px] transition-colors ${lessonActive ? "bg-[rgba(73,127,255,0.12)] text-[#497fff]" : "text-[#5b5b5b] hover:bg-[rgba(0,0,0,0.04)]"}`}>
                            <span className="text-[10px] opacity-40 shrink-0">•</span>
                            <p className="text-[13px] font-medium truncate">{lesson.label}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col gap-1 items-start px-2 w-full">
        {[{ icon: Settings, label: "Параметрлер" }, { icon: HelpCircle, label: "Көмек" }].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 h-9 px-4 rounded-[8px] w-full hover:bg-[rgba(0,0,0,0.04)] cursor-pointer transition-colors">
            <Icon size={20} className="text-[#5b5b5b]" strokeWidth={1.5} />
            <p className="text-[14px] font-medium text-[#5b5b5b] tracking-[-0.0476px]">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
