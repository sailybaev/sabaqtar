import { ChevronDown } from "lucide-react";

interface TopBarProps {
  breadcrumb: string;
  BreadcrumbIcon: React.ElementType;
}

export default function TopBar({ breadcrumb, BreadcrumbIcon }: TopBarProps) {
  return (
    <div className="flex flex-col h-14 items-start justify-center p-4 shrink-0 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2 h-5 items-center">
          <BreadcrumbIcon size={20} className="text-black" strokeWidth={1.5} />
          <p className="text-[14px] font-medium text-black tracking-[-0.0476px] whitespace-nowrap">
            {breadcrumb}
          </p>
        </div>

        <div className="flex gap-8 items-center justify-end">
          <div className="flex gap-3 items-center">
            <div className="bg-black flex items-center justify-center rounded-full w-6 h-6">
              <p className="text-[14px] font-medium text-white tracking-[-0.32px]">A</p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="text-[14px] font-medium text-black tracking-[-0.0476px] whitespace-nowrap">Aziza</p>
              <ChevronDown size={16} className="text-black" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
