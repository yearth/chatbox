"use client";

import { Diamond, HelpCircle, History, Menu, Settings } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    {
      title: "近期对话",
      items: [
        "Mac 分屏工具",
        "Mac 分屏工具",
        "Create Next...",
        "Trae AI IDE",
        "Install Curs...",
      ],
    },
    {
      title: "",
      items: [
        { icon: <Diamond className="w-5 h-5" />, label: "Gem 管理器" },
        { icon: <HelpCircle className="w-5 h-5" />, label: "帮助" },
        { icon: <History className="w-5 h-5" />, label: "活动记录" },
        { icon: <Settings className="w-5 h-5" />, label: "设置" },
      ],
    },
  ];

  return (
    <div
      className={`bg-gray-900 text-gray-300 h-screen transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* 顶部栏 */}
      <div className="p-4 flex items-center">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hover:bg-gray-700 p-2 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* 新对话按钮 */}
      <div className="px-4 mb-4">
        <button className="w-full bg-gray-800 hover:bg-gray-700 rounded-lg p-2 text-sm">
          {isCollapsed ? "+" : "发起新对话"}
        </button>
      </div>

      {/* 对话列表 */}
      <div className="space-y-6">
        {menuItems.map((section, idx) => (
          <div key={idx} className="space-y-2">
            {section.title && (
              <div className="px-4 text-sm text-gray-500">
                {!isCollapsed && section.title}
              </div>
            )}
            <div className="space-y-1">
              {section.items.map((item, itemIdx) => (
                <button
                  key={itemIdx}
                  className="w-full px-4 py-2 hover:bg-gray-800 flex items-center gap-3"
                >
                  {typeof item === "object" ? (
                    <>
                      {item.icon}
                      {!isCollapsed && <span>{item.label}</span>}
                    </>
                  ) : (
                    <>
                      <span className="w-5 h-5">≡</span>
                      {!isCollapsed && <span>{item}</span>}
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
