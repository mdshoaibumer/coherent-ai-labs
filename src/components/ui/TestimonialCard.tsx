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

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <Card className={cn('relative flex h-full flex-col p-8', className)}>
      <Quote className="text-foreground/5 absolute top-8 right-8 h-8 w-8" />
      <div className="flex-grow">
        <Text className="mb-8 text-lg leading-relaxed text-[#e0e0e0] italic">"{quote}"</Text>
      </div>
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={author}
            className="border-border h-12 w-12 rounded-full border object-cover"
          />
        ) : (
          <div className="text-foreground flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-bold">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <div className="text-foreground font-semibold">{author}</div>
          <div className="text-muted-foreground text-sm">
            {role}, {company}
          </div>
        </div>
      </div>
    </Card>
  );
}
