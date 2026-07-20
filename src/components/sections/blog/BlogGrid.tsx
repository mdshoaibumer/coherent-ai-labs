import React from 'react';
import { GridLayout } from '../../layouts/GridLayout';
import { GlassPanel } from '../../ui/GlassPanel';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { Tag } from '../../ui/Tag';
import { SectionReveal } from '../../animations/SectionReveal';

export function BlogGrid() {
  const posts = [
    {
      title: "Optimizing Vector Search with Quantization",
      excerpt: "How we reduced semantic search latency by 40% across 1B+ vectors using product quantization.",
      date: "Oct 12, 2026",
      tag: "Engineering",
      readTime: "8 min read"
    },
    {
      title: "Building Resilient Multi-Agent Workflows",
      excerpt: "Architecting autonomous state machines that don't fail silently when hitting token limits.",
      date: "Oct 05, 2026",
      tag: "Architecture",
      readTime: "12 min read"
    },
    {
      title: "Zero Data Leakage: RAG inside a VPC",
      excerpt: "A deep dive into deploying our orchestration layer entirely disconnected from the public internet.",
      date: "Sep 28, 2026",
      tag: "Security",
      readTime: "6 min read"
    },
    {
      title: "Fine-tuning Llama 3 for structured JSON",
      excerpt: "The dataset formatting techniques we used to achieve 99.9% valid JSON output schemas.",
      date: "Sep 15, 2026",
      tag: "Machine Learning",
      readTime: "10 min read"
    },
    {
      title: "Scaling WebSocket servers for Agent streaming",
      excerpt: "Migrating from HTTP polling to persistent WebSockets for low-latency agent reasoning streams.",
      date: "Sep 02, 2026",
      tag: "Infrastructure",
      readTime: "7 min read"
    },
    {
      title: "The fallacy of naive RAG",
      excerpt: "Why simple vector similarity search fails in enterprise contexts and how hybrid search fixes it.",
      date: "Aug 20, 2026",
      tag: "Engineering",
      readTime: "9 min read"
    }
  ];

  return (
    <SectionReveal delay={0.2}>
      <GridLayout columns={{ sm: 1, md: 2, lg: 3 }} gap="lg" className="pt-0">
        {posts.map((post, idx) => (
          <a key={idx} href="#" className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-2xl">
            <GlassPanel className="h-full p-8 flex flex-col group-hover:bg-white/[0.04] transition-colors relative overflow-hidden">
               {/* Decorative subtle gradient on hover */}
               <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative z-10 flex flex-col h-full">
                 <div className="flex items-center justify-between mb-6">
                   <Tag variant="outline" size="sm">{post.tag}</Tag>
                   <span className="text-xs text-[#666]">{post.readTime}</span>
                 </div>
                 <Heading level={3} className="mb-4 text-xl group-hover:text-[var(--color-primary)] transition-colors">{post.title}</Heading>
                 <Paragraph className="text-sm text-[#888] flex-grow mb-6">{post.excerpt}</Paragraph>
                 <div className="text-xs font-mono text-[#555] mt-auto">
                   {post.date}
                 </div>
               </div>
            </GlassPanel>
          </a>
        ))}
      </GridLayout>
    </SectionReveal>
  );
}
