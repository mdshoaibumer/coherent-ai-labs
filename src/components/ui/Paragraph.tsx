import React from 'react';
import { Text } from './Text';

interface ParagraphProps extends React.ComponentProps<typeof Text> {
  children: React.ReactNode;
}

export function Paragraph({ children, className, ...props }: ParagraphProps) {
  // Alias for Text with default styling for a paragraph
  return (
    <Text as="p" className={className} {...props}>
      {children}
    </Text>
  );
}
