import { LucideIcon } from 'lucide-react';

export interface NavItem {
  name: string;
  desc: string;
  icon: LucideIcon;
  href?: string;
}

export interface TechCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
  purpose: string;
  value: string;
  useCases: string[];
  relations: string;
}

export interface ProjectStage {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  details: string[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  icon: LucideIcon;
}
