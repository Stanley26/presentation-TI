import React from 'react';

interface CodeBlockProps {
  language: string;
  code: string;
  title?: string;
  highlightLines?: number[];
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, code, title }) => {
  return (
    <div className="my-6 rounded-xl overflow-hidden bg-[#0f172a] shadow-2xl border border-slate-700/50 transform transition-all hover:shadow-blue-900/10">
      {/* Window Header */}
      <div className="bg-[#1e293b] px-4 py-3 flex justify-between items-center border-b border-slate-700/50">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs font-mono text-slate-400 font-medium tracking-wide">
          {title || 'terminal'}
        </div>
        <div className="text-[10px] font-bold text-slate-500 uppercase px-2 py-0.5 bg-slate-800 rounded">
          {language}
        </div>
      </div>
      
      {/* Code Content */}
      <div className="p-5 overflow-x-auto custom-scrollbar">
        <pre className="font-mono text-sm leading-relaxed text-slate-300">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
};