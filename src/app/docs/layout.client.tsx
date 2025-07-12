'use client';

import Link from 'next/link';
import { type JSX } from 'react';
import { cn } from '@/utils/cn';
import { 
  Album, Brain, MessageSquare, ListTodo, Database, Target, 
  Image, Layers, Settings, HardDrive, FileText, Cloud, 
  Package, Home, BookOpen, Wrench, Zap, Mail, Bot
} from 'lucide-react';

const iconMap = {
  Album,
  Brain,
  MessageSquare,
  ListTodo,
  Database,
  Target,
  Image,
  Layers,
  Settings,
  HardDrive,
  FileText,
  Cloud,
  Package,
  Home,
  BookOpen,
  Wrench,
  Zap,
  Mail,
  Bot,
};

function renderIcon(iconName: string) {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  if (IconComponent) {
    return <IconComponent className="mr-2 h-4 w-4" />;
  }
  return null;
}

interface SidebarItem {
  type: 'page' | 'folder';
  name: string;
  url?: string;
  icon?: string;
  children?: SidebarItem[];
}

interface SidebarProps {
  items: SidebarItem[];
  pathname: string;
}

export function CustomSidebar(props: SidebarProps): JSX.Element {
  const { items, pathname } = props;

  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => {
        if (item.type === 'page' && item.url) {
          return (
            <Link
              key={item.url}
              href={item.url}
              className={cn(
                'flex items-center px-2 py-1 text-sm rounded-md hover:bg-accent hover:text-accent-foreground',
                pathname === item.url && 'bg-accent text-accent-foreground'
              )}
            >
              {item.icon && renderIcon(item.icon)}
              {item.name}
            </Link>
          );
        }
        
        if (item.type === 'folder') {
          return (
            <div key={item.name} className="space-y-1">
              <div className="px-2 py-1 text-sm font-medium text-muted-foreground">
                {item.name}
              </div>
              <div className="ml-2 space-y-1">
                {item.children?.map((child) => {
                  if (child.type === 'page' && child.url) {
                    return (
                      <Link
                        key={child.url}
                        href={child.url}
                        className={cn(
                          'flex items-center px-2 py-1 text-sm rounded-md hover:bg-accent hover:text-accent-foreground',
                          pathname === child.url && 'bg-accent text-accent-foreground'
                        )}
                      >
                        {child.icon && renderIcon(child.icon)}
                        {child.name}
                      </Link>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          );
        }
        
        return null;
      })}
    </div>
  );
}