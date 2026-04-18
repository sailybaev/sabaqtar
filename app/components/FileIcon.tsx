import {
  Folder,
  FileText,
  FileImage,
  FileVideo,
  FileAudio,
  FileArchive,
  FileCode,
  FileSpreadsheet,
  Presentation,
  File,
} from "lucide-react";

interface FileIconProps {
  name: string;
  isFolder?: boolean;
  size?: number;
  className?: string;
}

function getIcon(name: string) {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  if (["jpg", "jpeg", "png", "gif", "webp", "svg", "bmp"].includes(ext)) return FileImage;
  if (["mp4", "mov", "avi", "mkv", "webm"].includes(ext)) return FileVideo;
  if (["mp3", "wav", "flac", "aac", "ogg"].includes(ext)) return FileAudio;
  if (["zip", "tar", "gz", "rar", "7z"].includes(ext)) return FileArchive;
  if (["js", "ts", "jsx", "tsx", "py", "html", "css", "json", "fig"].includes(ext)) return FileCode;
  if (["xls", "xlsx", "csv"].includes(ext)) return FileSpreadsheet;
  if (["ppt", "pptx"].includes(ext)) return Presentation;
  if (["doc", "docx", "txt", "pdf", "md"].includes(ext)) return FileText;
  return File;
}

export default function FileIcon({ name, isFolder = false, size = 20, className = "" }: FileIconProps) {
  if (isFolder) {
    return <Folder size={size} className={`text-[#497fff] ${className}`} strokeWidth={1.5} />;
  }
  const Icon = getIcon(name);
  const ext = name.split(".").pop()?.toLowerCase() ?? "";

  let colorClass = "text-[#6b7280]";
  if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(ext)) colorClass = "text-[#f59e0b]";
  else if (["mp4", "mov", "avi", "mkv", "webm"].includes(ext)) colorClass = "text-[#8b5cf6]";
  else if (["mp3", "wav", "flac", "aac"].includes(ext)) colorClass = "text-[#ec4899]";
  else if (["zip", "tar", "gz", "rar"].includes(ext)) colorClass = "text-[#6b7280]";
  else if (["js", "ts", "jsx", "tsx", "py", "html", "css"].includes(ext)) colorClass = "text-[#f59e0b]";
  else if (ext === "fig") colorClass = "text-[#a855f7]";
  else if (["xls", "xlsx", "csv"].includes(ext)) colorClass = "text-[#22c55e]";
  else if (["ppt", "pptx"].includes(ext)) colorClass = "text-[#f97316]";
  else if (["doc", "docx"].includes(ext)) colorClass = "text-[#3b82f6]";
  else if (ext === "pdf") colorClass = "text-[#ef4444]";
  else if (ext === "txt") colorClass = "text-[#6b7280]";

  return <Icon size={size} className={`${colorClass} ${className}`} strokeWidth={1.5} />;
}
