import { Image, Mic } from "lucide-react";

interface ChatInputProps {
  modelName: string;
}

export default function ChatInput({ modelName }: ChatInputProps) {
  const getModelTips = (model: string) => {
    switch (model) {
      case "2.0 Flash Thinking Experimental":
        return "你使用的是 2.0 Flash Thinking Experimental 模型。它可以根据 Google 应用中的信息进行推理、YouTube、Google 地图和 Google 搜索是其最佳搭档。部分 Gemini 功能不受支持。";
      default:
        return "";
    }
  };

  return (
    <div className="fixed bottom-0 left-[256px] right-0 z-50 bg-gradient-to-t from-[#1F1F1F] via-[#1F1F1F] to-transparent pb-4 pt-10">
      {/* 模型提示语 */}
      <div className="px-4 mb-4">
        <div className="max-w-2xl mx-auto px-6 py-4 bg-gray-800/50 rounded-xl text-gray-300 text-sm leading-6">
          {getModelTips(modelName)}
        </div>
      </div>

      {/* 输入框区域 */}
      <div className="px-4">
        <div className="max-w-2xl mx-auto flex items-center gap-2 bg-gray-800/50 rounded-xl px-4 py-2">
          <button className="p-2 hover:bg-gray-700/50 rounded-lg">
            <Image className="w-5 h-5 text-gray-400" />
          </button>
          <input
            type="text"
            placeholder="问问 Gemini"
            className="flex-1 bg-transparent outline-none text-gray-200"
          />
          <button className="p-2 hover:bg-gray-700/50 rounded-lg">
            <Mic className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
