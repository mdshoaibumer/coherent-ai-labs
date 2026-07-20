import React from 'react';
import { m } from "motion/react";
import { ArrowDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import { ARCHITECTURE_NODES } from "../../../constants/featuredProject";

export const ArchitectureDiagram = React.memo(function ArchitectureDiagram() {
  return (
    <div className="bg-[#050505] border border-white/10 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl flex-1 flex flex-col justify-center min-h-[500px]">
       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
       
       <div className="text-center mb-12">
         <h4 className="font-display text-xs font-mono tracking-widest text-[#666] uppercase">Solution Architecture</h4>
       </div>

       <div className="flex flex-col items-center gap-4 relative">
         {/* Connecting Animated Line Background */}
         <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/5" />
         <m.div 
            className="absolute left-1/2 -translate-x-1/2 w-[2px] h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent"
            animate={{ top: ["-20%", "120%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
         />

         {ARCHITECTURE_NODES.map((node, i) => (
           <div key={node.id} className="relative z-10 flex flex-col items-center">
             <m.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={cn(
                  "flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border backdrop-blur-md w-[260px] max-w-full shadow-lg transition-colors duration-500",
                  i === 0 || i === ARCHITECTURE_NODES.length - 1 ? "bg-white/5 border-white/10 text-[#aaa]" : "bg-[#0a0a0a] border-white/20 text-[#ccc]",
                  i === 2 && "border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-white"
                )}
             >
               <node.icon className={cn("w-5 h-5", i === 2 ? "text-white" : "text-[#888]")} strokeWidth={1.5} />
               <span className="font-medium text-sm">{node.label}</span>
             </m.div>
             
             {i < ARCHITECTURE_NODES.length - 1 && (
               <ArrowDown className="w-4 h-4 text-white/20 my-2" />
             )}
           </div>
         ))}
       </div>
    </div>
  );
});
