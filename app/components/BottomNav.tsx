"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Library, Gamepad2 } from "lucide-react";

const navItems = [
  { icon: Home, label: "Басты бет", href: "/" },
  { icon: BookOpen, label: "Сыныптар", href: "/classes" },
  { icon: Library, label: "Оқулықтар", href: "/textbooks" },
  { icon: Gamepad2, label: "Ойындар", href: "/games" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[rgba(0,0,0,0.08)] flex items-center justify-around h-16 pb-safe">
      {navItems.map(({ icon: Icon, label, href }) => {
        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link key={href} href={href} className="flex flex-col items-center gap-0.5 py-2 px-3 flex-1">
            <Icon size={22} strokeWidth={1.5} className={isActive ? "text-[#497fff]" : "text-[#7c7c7c]"} />
            <span className={`text-[10px] font-medium ${isActive ? "text-[#497fff]" : "text-[#7c7c7c]"}`}>{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
