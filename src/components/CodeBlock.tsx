import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({ code, language, title, showLineNumbers = false }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div className="rounded-lg overflow-hidden bg-white border border-slate-200 shadow-sm my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
        <span className="text-xs font-mono font-medium text-slate-500">
          {title || language}
        </span>
        <button
          onClick={handleCopy}
          className="text-slate-500 hover:text-slate-900 transition-colors p-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label="Copy code snippet"
          title="Copy code"
        >
          {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
        </button>
      </div>
      <div 
        className="p-4 overflow-x-auto text-sm font-mono text-slate-700"
        tabIndex={0}
        role="region"
        aria-label="Code snippet"
      >
        <table className="w-full" role="presentation">
          <tbody className="align-top">
            {lines.map((line, i) => (
              <tr key={i}>
                {showLineNumbers && (
                  <td className="pr-4 select-none opacity-40 text-right w-8">{i + 1}</td>
                )}
                <td className="whitespace-pre">
                  {/* Basic syntax coloring simulation based on regex (very lightweight) */}
                  {line.split(/(<\/?span[^>]*>|<\/?div[^>]*>|<!DOCTYPE[^>]*>|<!--.*?-->|<\/?[a-z0-9:]+[^>]*>|"[^"]*"|'[^']*'|\/\/.*|#.*|<\?php|\?>|\b(?:function|return|const|let|var|if|else|for|while|class|extends|new|true|false|null|undefined|import|export|from|try|catch|finally|async|await|use|namespace|public|private|protected|readonly|final|declare|strict_types|echo)\b|\b(?:string|int|float|bool|array|object|callable|iterable|mixed|static|self|parent|\$this)\b|\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*|[{}()\[\].,:;=+\-*/%&|<>!?:`]+)/i).map((part, index) => {
                    if (!part) return null;
                    if (part.startsWith('//') || part.startsWith('/*') || part.startsWith('#')) return <span key={index} className="text-[#16a34a]">{part}</span>;
                    if (part.startsWith('"') || part.startsWith("'")) return <span key={index} className="text-[#b45309]">{part}</span>;
                    if (/\b(function|return|const|let|var|if|else|for|while|class|extends|new|true|false|null|undefined|import|export|from|try|catch|finally|async|await|use|namespace|public|private|protected|readonly|final|declare|strict_types|echo)\b/.test(part) || part === '<?php' || part === '?>') return <span key={index} className="text-[#c026d3]">{part}</span>;
                    if (part.startsWith('$')) return <span key={index} className="text-[#4f46e5]">{part}</span>;
                    if (/[{}()\[\].,:;=+\-*/%&|<>!?:`]+/.test(part)) return <span key={index} className="opacity-70">{part}</span>;
                    if (part.startsWith('<') && part.endsWith('>')) return <span key={index} className="text-[#2563eb]">{part}</span>;
                    return <span key={index}>{part}</span>;
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
