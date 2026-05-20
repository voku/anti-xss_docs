/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CodeBlock } from './components/CodeBlock';
import { 
  ShieldCheck, AlertTriangle, Terminal, Package, 
  Github, Layers, Search, Zap, Code, FileCode2,
  CheckCircle2, ArrowRight, ArrowUp
} from 'lucide-react';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const { scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const backgroundY = useTransform(scrollY, [0, 800], ['0%', '40%']);
  const textY = useTransform(scrollY, [0, 800], ['0%', '20%']);
  const visualY = useTransform(scrollY, [0, 800], ['0%', '-10%']);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] font-sans text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-white pb-24 overflow-x-hidden relative">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[radial-gradient(theme(colors.slate.200)_1px,transparent_1px)] [background-size:24px_24px] opacity-60 mix-blend-multiply" />
      
      {/* Skip to Content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium">
        Skip to main content
      </a>

      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-bold tracking-tight" aria-label="AntiXSS logo">
            <ShieldCheck className="text-indigo-600" size={24} aria-hidden="true" />
            <span>AntiXSS</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-sm font-medium text-slate-600">
            <a href="#examples" aria-label="Jump to code examples section" className="hover:text-slate-900 transition-colors hidden sm:inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-1">Examples</a>
            <a href="#usage" aria-label="Jump to best practices section" className="hover:text-slate-900 transition-colors hidden sm:inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-1">Best Practices</a>
            <a href="#quality" aria-label="Jump to quality and verification section" className="hover:text-slate-900 transition-colors hidden sm:inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-1">Verification</a>
            <a href="https://github.com/voku/anti-xss" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-slate-900 transition-colors ml-2 sm:ml-4 lg:ml-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded px-2 py-1" aria-label="GitHub Repository">
              <Github size={18} aria-hidden="true" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content">
      {/* 1. Hero Section */}
      <header className="pt-24 pb-16 lg:pt-32 lg:pb-32 px-6 relative overflow-hidden">
        {/* Complex Parallax Backgrounds */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 pointer-events-none origin-top h-[150%] -z-10" 
        >
          {/* Abstract Image Background */}
          <img 
            src="https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2071&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-multiply" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/10 via-[var(--color-accent)]/5 to-transparent" />
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-400/10 blur-3xl mix-blend-multiply" />
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-3xl mix-blend-multiply" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            style={{ y: textY, opacity }}
            className="space-y-8 relative z-10"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-800">
                Sanitize user input. <br/>
                <span className="text-slate-500 font-medium">Keep useful content.</span> <br/>
                <span className="text-rose-600 font-bold">Remove browser garbage.</span>
              </h1>
            </div>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
              A battle-tested PHP library for sanitizing user-submitted HTML against common and obfuscated XSS payloads, with support for legacy PHP and modern CI pipelines.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <div className="w-full sm:w-auto flex items-center justify-between gap-4 px-4 py-3 bg-[var(--color-card)] rounded-lg border border-[var(--color-surface)] font-mono text-sm shadow-sm group">
                <span className="text-[var(--color-muted)] select-none font-bold">$</span>
                <span className="text-slate-700">composer require voku/anti-xss</span>
                <button 
                  onClick={() => navigator.clipboard.writeText('composer require voku/anti-xss')}
                  className="text-[var(--color-muted)] hover:text-indigo-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-0.5"
                  aria-label="Copy package install command"
                >
                  <CopyIcon className="w-4 h-4" />
                </button>
              </div>
              <p className="text-sm font-semibold text-slate-500 flex gap-4">
                <span className="flex items-center gap-1.5"><Package size={16} className="text-slate-400"/> 17M+ Installs</span>
                <span className="flex items-center gap-1.5"><FileCode2 size={16} className="text-slate-400"/> MIT License</span>
              </p>
            </div>
          </motion.div>
          
          {/* Transformation Pipeline Visual */}
          <motion.div 
            style={{ y: visualY }}
            className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.06)] flex flex-col z-20 group"
          >
            <div className="flex items-center px-4 py-3 bg-slate-50/80 border-b border-slate-100 gap-4">
              <div className="flex gap-1.5 flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-md shadow-sm">
                  <ShieldCheck size={14} className="text-[var(--color-accent)]" />
                  <span className="text-[11px] font-medium text-slate-600">AntiXSS Pipeline</span>
                </div>
              </div>
              <div className="flex gap-1.5 flex-shrink-0 opacity-0">
                <div className="w-3 h-3 rounded-full" />
                <div className="w-3 h-3 rounded-full" />
                <div className="w-3 h-3 rounded-full" />
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-6 items-stretch md:items-center relative bg-slate-50/50">
              {/* Dirty Input */}
              <motion.div 
                whileHover={{ y: -4, shadow: '0 10px 25px -5px rgba(239, 68, 68, 0.1)' }}
                className="flex-1 bg-white p-5 rounded-xl border border-red-100 shadow-sm relative group transition-all"
              >
                <div className="absolute -top-3 right-4 bg-red-50 text-red-600 border border-red-100 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide flex items-center gap-1 shadow-sm">
                  <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <AlertTriangle size={12} />
                  </motion.div>
                  Malicious
                </div>
                <div className="font-mono text-[13px] leading-relaxed text-slate-700 mt-2">
                  <span className="text-slate-400">&lt;a</span> <span className="text-slate-500">href=</span><span className="text-slate-400">"</span>
                  <span className="bg-red-50 text-red-700 font-bold px-1 rounded border border-red-200 inline-block my-1 transition-colors group-hover:bg-red-100 group-hover:text-red-800">
                    &amp;#x2000;javascript:alert(1)
                  </span>
                  <span className="text-slate-400">"&gt;</span>
                  <br/>
                  <span className="pl-4 font-sans font-medium text-slate-800">CLICK</span><br/>
                  <span className="text-slate-400">&lt;/a&gt;</span>
                </div>
              </motion.div>
              
              {/* Filter Process */}
              <div className="flex items-center justify-center shrink-0 relative w-full md:w-auto py-2 md:py-0">
                {/* Horizontal flow line for Desktop */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[150%] h-[2px] bg-slate-200 -z-10 overflow-hidden">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.2 }}
                    className="w-full h-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80"
                  />
                </div>

                {/* Vertical flow line for Mobile */}
                <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[200%] w-[2px] bg-slate-200 -z-10 overflow-hidden">
                  <motion.div 
                    initial={{ y: '-100%' }}
                    animate={{ y: '100%' }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.2 }}
                    className="h-full w-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-80"
                  />
                </div>

                <div className="bg-white border-2 border-indigo-100 text-indigo-600 p-4 rounded-xl shadow-lg relative z-10 flex flex-col items-center justify-center group pointer-events-none">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                    <Layers size={28} className="drop-shadow-sm" />
                  </motion.div>
                  <span className="absolute -bottom-6 text-[10px] font-bold text-indigo-600 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity">Sanitizing</span>
                </div>
              </div>
              
              {/* Clean Output */}
              <motion.div 
                whileHover={{ y: -4, shadow: '0 10px 25px -5px rgba(16, 185, 129, 0.1)' }}
                className="flex-1 bg-white p-5 rounded-xl border border-emerald-100 shadow-sm relative transition-all"
              >
                <div className="absolute -top-3 right-4 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide flex items-center gap-1 shadow-sm">
                  <CheckCircle2 size={12} /> Sanitized
                </div>
                <div className="font-mono text-[13px] leading-relaxed text-slate-700 mt-2">
                  <span className="text-slate-400">&lt;a&gt;</span><br/>
                  <span className="block py-[14px]"></span>
                  <span className="pl-4 font-sans font-medium text-slate-800">CLICK</span><br/>
                  <span className="text-slate-400">&lt;/a&gt;</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. The Problem */}
      <section aria-labelledby="reality-heading" className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 id="reality-heading" className="text-3xl font-bold tracking-tight">The Reality of Hostile Input</h2>
          <p className="text-lg text-[var(--color-muted)]">
            XSS payloads rarely arrive politely as <code className="text-sm font-mono bg-[var(--color-card)] border border-[var(--color-surface)] px-2 py-1 rounded text-[var(--color-danger)]">&lt;script&gt;alert(1)&lt;/script&gt;</code>.
          </p>
          <p className="text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
            They arrive encoded, URL-decoded, entity-wrapped, UTF-7-ish, hidden in attributes, split with whitespace, hidden inside style URLs, or embedded in input that mostly looks harmless.
          </p>
        </div>
      </section>

      {/* 3. How it works */}
      <section aria-label="How it works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Layers, title: "Normalize", desc: "Removes bad UTF-8, null bytes, and non-printable characters." },
              { icon: Search, title: "Decode", desc: "Unwraps entities, URL encoding, and bypass structures." },
              { icon: Zap, title: "Sanitize", desc: "Strip dangerous tags, events, and Javascript protocols." },
              { icon: CheckCircle2, title: "Verify", desc: "Loops until the payload stabilizes (capped at 100 passes)." }
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--color-card)] p-6 rounded-xl border border-[var(--color-surface)] hover:border-[var(--color-accent)]/50 transition-colors"
              >
                <step.icon size={28} className="text-[var(--color-accent)] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--color-muted)]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Code Examples */}
      <section id="examples" aria-labelledby="examples-heading" className="py-20 px-6 relative bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center">
            <h2 id="examples-heading" className="text-3xl font-bold tracking-tight mb-4">Real Code Examples</h2>
            <p className="text-[var(--color-muted)]">Safe, honest, predictable processing.</p>
          </div>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Code size={20} className="text-[var(--color-accent)]" /> 
                Basic Usage
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">The core method cleans strings or arrays of strings automatically.</p>
              <CodeBlock 
                language="php" 
                title="basic_usage.php"
                code={`<?php\n\ndeclare(strict_types=1);\n\nuse voku\\helper\\AntiXSS;\n\nrequire_once __DIR__ . '/vendor/autoload.php';\n\n$antiXss = new AntiXSS();\n\n$input = "Hello <script>alert('xss')</script>";\n$output = $antiXss->xss_clean($input);\n\necho $output;\n// Hello alert&#40;'xss'&#41;`} 
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Code size={20} className="text-[var(--color-accent)]" /> 
                Encoded JavaScript URL
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">AntiXSS detects payloads hidden inside complex hex or unicode bypasses.</p>
              <CodeBlock 
                language="php" 
                title="encoded_url.php"
                code={`<?php\n\ndeclare(strict_types=1);\n\nuse voku\\helper\\AntiXSS;\n\n$antiXss = new AntiXSS();\n\n$input = "<a href='&#x2000;javascript:alert(1)'>CLICK</a>";\n$output = $antiXss->xss_clean($input);\n\necho $output;\n// <a >CLICK</a>`} 
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Code size={20} className="text-[var(--color-accent)]" /> 
                Inline CSS Payload
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">Hostile Javascript can be hidden inside <code className="text-xs bg-[var(--color-surface)] px-1 rounded">style</code> URLs.</p>
              <CodeBlock 
                language="php" 
                title="inline_css.php"
                code={`<?php\n\ndeclare(strict_types=1);\n\nuse voku\\helper\\AntiXSS;\n\n$antiXss = new AntiXSS();\n\n$input = '<li style="list-style-image: url(javascript:alert(0))">';\n$output = $antiXss->xss_clean($input);\n\necho $output;\n// <li >`} 
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Code size={20} className="text-[var(--color-accent)]" /> 
                Detecting modifications
              </h3>
              <p className="text-sm text-[var(--color-muted)] mb-4">You can check whether the class actually altered the input.</p>
              <CodeBlock 
                language="php" 
                title="detect_xss.php"
                code={`<?php\n\ndeclare(strict_types=1);\n\nuse voku\\helper\\AntiXSS;\n\n$antiXss = new AntiXSS();\n\n$input = "\\x3cscript src=http://example.test/malicious.js\\x3e\\x3c/script\\x3e";\n$output = $antiXss->xss_clean($input);\n\nif ($antiXss->isXssFound() === true) {\n    // log security event, reject submission, or flag moderation\n}\n\necho $output;`} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Best Practices */}
      <section id="usage" aria-labelledby="usage-heading" className="py-24 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 id="usage-heading" className="text-3xl font-bold tracking-tight">Best Practices</h2>
            <p className="text-lg text-[var(--color-muted)] leading-relaxed">
              AntiXSS is one layer in a defense-in-depth strategy. Here is how to use it safely alongside other security controls.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12">
            
            {/* Principles Card */}
            <div className="bg-[var(--color-card)] p-6 sm:p-8 rounded-2xl border border-[var(--color-surface)] shadow-sm space-y-8 h-fit">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-[var(--color-text)]">
                  <ShieldCheck size={24} className="text-[var(--color-accent)]" />
                  Defense-in-Depth Model
                </h3>
                
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <div className="bg-[var(--color-success)]/10 p-1 rounded-full shrink-0 mt-0.5">
                      <CheckCircle2 size={18} className="text-[var(--color-success)]" />
                    </div>
                    <div className="space-y-1.5">
                      <strong className="block text-sm font-semibold text-[var(--color-text)]">Sanitize on storage (Input)</strong>
                      <span className="block text-sm text-[var(--color-muted)] leading-relaxed">Clean incoming data before it hits the database to ensure corrupt states never persist globally.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[var(--color-success)]/10 p-1 rounded-full shrink-0 mt-0.5">
                      <CheckCircle2 size={18} className="text-[var(--color-success)]" />
                    </div>
                    <div className="space-y-1.5">
                      <strong className="block text-sm font-semibold text-[var(--color-text)]">Escape on render (Output)</strong>
                      <span className="block text-sm text-[var(--color-muted)] leading-relaxed">Use context-aware escaping (like Twig's <code className="text-[11px] font-mono bg-slate-100 text-slate-800 px-1 py-0.5 rounded border border-slate-200">{'{{ var }}'}</code>) when outputting any variable.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-[var(--color-success)]/10 p-1 rounded-full shrink-0 mt-0.5">
                      <CheckCircle2 size={18} className="text-[var(--color-success)]" />
                    </div>
                    <div className="space-y-1.5">
                      <strong className="block text-sm font-semibold text-[var(--color-text)]">Deploy CSP</strong>
                      <span className="block text-sm text-[var(--color-muted)] leading-relaxed">Enforce a strict Content Security Policy to stop execution even if a payload slips through.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--color-danger)]/5 border border-[var(--color-danger)]/20 p-5 rounded-xl">
                <div className="flex gap-3">
                  <AlertTriangle className="text-[var(--color-danger)] shrink-0 mt-0.5" size={20} />
                  <div className="space-y-3 text-sm text-red-900 leading-relaxed">
                    <p className="font-semibold text-red-800">AntiXSS does not replace:</p>
                    <ul className="space-y-1.5 list-disc list-inside text-red-700/90">
                      <li>Context-aware output escaping</li>
                      <li>Content Security Policy (CSP)</li>
                      <li>Business-logic input validation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Card */}
            <div className="space-y-4">
              <div className="px-2 space-y-1.5">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">Recommended Architecture</h3>
                <p className="text-sm text-[var(--color-muted)]">Wrap the library in a domain-specific sanitizer to guarantee expected output types and centralize configuration.</p>
              </div>
              <CodeBlock 
                language="php" 
                title="CommentSanitizer.php"
                code={`<?php\n\ndeclare(strict_types=1);\n\nuse voku\\helper\\AntiXSS;\n\nfinal readonly class CommentSanitizer\n{\n    public function __construct(\n        private AntiXSS $antiXss,\n    ) {}\n\n    /**\n     * @param non-empty-string $rawHtml\n     */\n    public function sanitizeUserHtml(string $rawHtml): string\n    {\n        // Sanitize the input\n        $cleanHtml = $this->antiXss->xss_clean($rawHtml);\n\n        // AntiXSS can return an array if an array was passed.\n        // Fail loud if the contract is broken.\n        if (!\\is_string($cleanHtml)) {\n            throw new \\UnexpectedValueException('Expected string.');\n        }\n\n        return $cleanHtml;\n    }\n}`} 
              />
            </div>
            
          </div>
        </div>
      </section>
      
      {/* 6. Customization / Extra features */}
      <section aria-labelledby="integrations-heading" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 id="integrations-heading" className="text-3xl font-bold tracking-tight">Framework & Template Integrations</h2>
          <p className="text-[var(--color-muted)] text-lg max-w-2xl mx-auto">
            AntiXSS integrates into mature stacks without friction.
          </p>
          
          <div className="mt-8 bg-[var(--color-card)] p-8 rounded-xl border border-[var(--color-surface)] text-left">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="text-[var(--color-warning)]" />
              <h3 className="text-lg font-semibold">Twig Extension</h3>
            </div>
            <p className="text-[var(--color-muted)] mb-6 text-sm">
              Using Twig? There is a companion package: <code className="px-1.5 py-0.5 bg-[var(--color-surface)] rounded text-[var(--color-text)]">voku/anti-xss-twig</code>.
            </p>
            
            <div className="space-y-4">
              <CodeBlock 
                language="twig"
                title="template.html.twig"
                code={`{% xss_clean %}\n    {{ userProvidedHtml|raw }}\n{% end_xss_clean %}`}
              />
              <p className="text-xs text-[var(--color-muted)] bg-[var(--color-surface)] px-3 py-2 rounded border border-[var(--color-surface)]">
                <strong className="text-[var(--color-warning)] drop-shadow-sm font-semibold">Rule of thumb:</strong> Prefer standard context escaping by default. Only use sanitization blocks when users are intentionally allowed to submit formatted HTML markup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Quality metrics */}
      <section id="quality" aria-labelledby="quality-heading" className="py-20 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 id="quality-heading" className="text-3xl font-bold tracking-tight text-center mb-12">Quality & Verification</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--color-bg)] p-6 rounded-xl border border-[var(--color-surface)]">
               <div className="text-2xl font-bold text-[var(--color-text)] mb-1">17M+</div>
               <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-muted)] mb-3">Packagist Installs</div>
               <p className="text-xs text-[var(--color-muted)]">Deployed securely across the global PHP ecosystem.</p>
            </div>
            <div className="bg-[var(--color-bg)] p-6 rounded-xl border border-[var(--color-surface)]">
               <div className="text-2xl font-bold text-[var(--color-text)] mb-1">PHP 7.1 → 8.5</div>
               <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-muted)] mb-3">Broad CI Testing</div>
               <p className="text-xs text-[var(--color-muted)]">Verified aggressively against both bleeding-edge and legacy runtimes.</p>
            </div>
            <div className="bg-[var(--color-bg)] p-6 rounded-xl border border-[var(--color-surface)]">
               <div className="text-2xl font-bold text-[var(--color-text)] mb-1">PHPStan</div>
               <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-muted)] mb-3">Static Analysis</div>
               <p className="text-xs text-[var(--color-muted)]">Strict type analysis is wired directly into the CI pipeline.</p>
            </div>
            <div className="bg-[var(--color-bg)] p-6 rounded-xl border border-[var(--color-surface)]">
               <div className="text-2xl font-bold text-[var(--color-text)] mb-1">100% MSI</div>
               <div className="text-[11px] uppercase tracking-wider font-semibold text-[var(--color-muted)] mb-3">Mutation Tested</div>
               <p className="text-xs text-[var(--color-muted)]">Infection ensures sanitizer logic isn't passing tests by accident.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section aria-labelledby="faq-heading" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold mb-2">Is this HTML Purifier?</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">No. HTML Purifier is an extensive, configurable DOM parser that rebuilds a valid DOM representation from scratch. AntiXSS is a lighter string/regex-based normalization and blocklist sanitizer. Use HTML Purifier if you need strict W3C validation; use AntiXSS for fast, legacy-friendly inline XSS mitigation.</p>
            </div>
            
            <hr className="border-[var(--color-surface)]" />

            <div>
              <h3 className="text-lg font-semibold mb-2">Should I sanitize on input or output?</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Sanitize on <em>input</em> (before storing to a database). This cleans corrupt states globally. However, you must still apply context-aware <em>escaping</em> (e.g. `htmlspecialchars`) on output whenever injecting variables into templates, to prevent DOM injection entirely.</p>
            </div>

            <hr className="border-[var(--color-surface)]" />
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Does this support PHP 8.x?</h3>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed">Yes. The CI pipeline actively tests against PHP 8.1, 8.2, 8.3, 8.4, and the upcoming 8.5 versions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section aria-labelledby="cta-heading" className="py-24 px-6 bg-slate-900 border-t border-slate-800 relative overflow-hidden text-white">
        {/* Subtle background for CTA */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
            alt=""
            loading="lazy"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-sm">Ready to clean your inputs?</h2>
          
          <div className="inline-block bg-slate-800/80 border border-slate-700/50 rounded-lg p-4 font-mono text-sm text-slate-200 shadow-xl backdrop-blur-sm mx-auto whitespace-normal break-all text-center">
            composer require voku/anti-xss
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://github.com/voku/anti-xss" aria-label="Read more about AntiXSS on GitHub" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 py-3 bg-indigo-500 text-white hover:bg-indigo-400 transition-colors rounded-lg font-medium shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-indigo-400">
              <Github size={18} aria-hidden="true" />
              Read on GitHub
            </a>
            <a href="https://packagist.org/packages/voku/anti-xss" aria-label="View AntiXSS package on Packagist" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 py-3 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 text-slate-200 transition-colors rounded-lg font-medium flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-indigo-400">
              <Package size={18} aria-hidden="true" />
              View on Packagist
            </a>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-[var(--color-muted)] text-sm border-t border-[var(--color-surface)]">
        <p>Released under the MIT License.</p>
      </footer>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 z-50 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function CopyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

