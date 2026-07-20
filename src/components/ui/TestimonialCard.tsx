import React from 'react';
import { Card } from './Card';
import { Text } from './Text';
import { cn } from '../../lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  className?: string;
}

export function TestimonialCard({ quote, author, role, company, image, className }: TestimonialCardProps) {
  return (
    <Card className={cn("p-8 h-full flex flex-col relative", className)}>
      <Quote className="absolute top-8 right-8 w-8 h-8 text-white/5" />
      <div className="flex-grow">
        <Text className="text-lg italic text-[#e0e0e0] leading-relaxed mb-8">
          "{quote}"
        </Text>
      </div>
      <div className="flex items-center gap-4">
        {image ? (
          <img src={image} alt={author} className="w-12 h-12 rounded-full object-cover border border-white/10" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold text-white">{author}</div>
          <div className="text-sm text-[#888]">{role}, {company}</div>
        </div>
      </div>
    </Card>
  );
}
