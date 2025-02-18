import { ChevronDown, Grid, User } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-2 bg-[#2A2B32] text-gray-200 border-b border-gray-700">
      {/* 左侧标题区域 */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center cursor-pointer hover:bg-gray-700 rounded-lg px-2 py-1">
          <span className="text-lg font-medium">Gemini</span>
          <ChevronDown className="w-4 h-4 ml-1" />
        </div>
        <div className="text-sm text-gray-400">
          2.0 Flash Thinking Experimental with apps
        </div>
      </div>

      {/* 右侧按钮区域 */}
      <div className="flex items-center space-x-4">
        {/* 升级按钮 */}
        <button className="flex items-center px-3 py-1.5 bg-[#C33B4C]/10 hover:bg-[#C33B4C]/20 rounded-lg text-[#FF8B9E] text-sm">
          <span>试用 Gemini Advanced</span>
        </button>

        {/* 应用菜单按钮 */}
        <button className="p-2 hover:bg-gray-700 rounded-lg">
          <Grid className="w-5 h-5" />
        </button>

        {/* 用户头像 */}
        <button className="w-8 h-8 rounded-full bg-[#C33B4C]/10 flex items-center justify-center">
          <User className="w-5 h-5 text-[#FF8B9E]" />
        </button>
      </div>
    </header>
  );
}
