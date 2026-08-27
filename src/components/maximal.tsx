import { ArrowDown, ArrowRight, ArrowUpRight, Check, Terminal } from "lucide-react";
import type { ReactNode } from "react";

export function SectionFrame({
  id,
  eyebrow,
  title,
  children,
  tone = "paper",
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  tone?: "paper" | "ink" | "yellow" | "red" | "blue";
  className?: string;
}) {
  return (
    <section id={id} className={`ship-section section-${tone} ${className}`}>
      <div className="section-inner">
        <div className="section-kicker"><span>{eyebrow}</span><span>// SHIP/LOG</span></div>
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export function Sticker({ children, tone = "yellow", className = "" }: { children: ReactNode; tone?: string; className?: string }) {
  return <span className={`sticker sticker-${tone} ${className}`}>{children}</span>;
}

export function MetaRow({ label, value }: { label: string; value: ReactNode }) {
  return <div className="meta-row"><span>{label}</span><strong>{value}</strong></div>;
}

export function Stamp({ children }: { children: ReactNode }) {
  return <span className="stamp">{children}</span>;
}

export function Marquee({ children }: { children: ReactNode }) {
  return <div className="marquee" aria-label="Technology marquee"><div className="marquee-track"><span>{children}</span><span aria-hidden="true">{children}</span></div></div>;
}

export function TerminalPanel({ children, title = "terminal" }: { children: ReactNode; title?: string }) {
  return <div className="terminal-panel"><div className="terminal-bar"><span className="terminal-dots"><i /><i /><i /></span><span>{title}</span><span>⌘ K</span></div><div className="terminal-content">{children}</div></div>;
}

export function ExternalArrow() {
  return <ArrowUpRight aria-hidden="true" size={17} strokeWidth={2.5} />;
}

export function FlowArrow() {
  return <><ArrowRight className="flow-arrow flow-arrow-right" aria-hidden="true" /><ArrowDown className="flow-arrow flow-arrow-down" aria-hidden="true" /></>;
}

export function Status() {
  return <span className="status"><i /> ONLINE</span>;
}

export function ShipMark() {
  return <span className="ship-mark"><Terminal size={15} /> SHIP/LOG <Check size={15} /></span>;
}
