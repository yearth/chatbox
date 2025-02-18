"use client";

import { useState } from "react";
import ChatInput from "./ChatInput";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";

export default function ChatboxLayout() {
  const [messages, setMessages] = useState<any[]>([]); // 用于存储聊天消息
  const modelName = "2.0 Flash Thinking Experimental"; // 这里可以通过 props 或 context 传入

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-[#1F1F1F] relative overflow-hidden">
          <div className="h-full">
            {messages.length === 0 ? (
              <Welcome />
            ) : (
              <div className="h-full flex flex-col pb-[200px]">
                {/* 聊天消息列表 */}
                <div className="flex-1 overflow-y-auto">
                  {/* {messages.map((message, index) => (
                    // 渲染消息
                  ))} */}
                </div>
              </div>
            )}
          </div>

          {/* 输入框和提示语容器 */}
          <div className="absolute bottom-0 left-0 right-0 z-50">
            <div className="bg-gradient-to-t from-[#1F1F1F] via-[#1F1F1F] to-transparent pb-4 pt-10">
              <ChatInput modelName={modelName} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
