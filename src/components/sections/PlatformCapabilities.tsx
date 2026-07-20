"use client";
import { RevealStagger, RevealItem } from "../animations/Reveal";

export function PlatformCapabilities() {
  const CAPABILITIES = [
    {
      id: "01",
      name: "Deterministic Outputs",
      desc: "Forcing probabilistic models to return structured JSON schemas for programmatic reliability.",
    },
    {
      id: "02",
      name: "Semantic Routing",
      desc: "Dynamically routing queries to specialized smaller models to reduce cost and latency.",
    },
    {
      id: "03",
      name: "Real-time Telemetry",
      desc: "Full observability into agent reasoning loops and token consumption metrics.",
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <RevealStagger
          stagger={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {CAPABILITIES.map((cap) => (
            <RevealItem key={cap.id}>
              <div className="border-t border-[#333] pt-6">
                <div className="font-mono text-xs text-[#666] mb-4">
                  [{cap.id}]
                </div>
                <h4 className="font-display text-lg font-medium text-white mb-2">
                  {cap.name}
                </h4>
                <p className="text-sm text-[#888] leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
