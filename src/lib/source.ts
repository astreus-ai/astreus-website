import { loader } from 'fumadocs-core/source';
import { docs } from '../../.source';
import { createElement } from 'react';
import { 
  Album, Brain, MessageSquare, ListTodo, Database, Target, 
  Image, Layers, Settings, HardDrive, FileText, Cloud, 
  Package, Home, BookOpen, Wrench, Zap, Mail, Bot,
  Play, Code
} from 'lucide-react';
import { FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { SiEthereum, SiResend } from 'react-icons/si';

const iconMap = {
  Album, Brain, MessageSquare, ListTodo, Database, Target,
  Image, Layers, Settings, HardDrive, FileText, Cloud,
  Package, Home, BookOpen, Wrench, Zap, Mail, Bot,
  Play, Code, FaWhatsapp, FaTwitter, SiEthereum, SiResend
};

export const source = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (icon && icon in iconMap) {
      const IconComponent = iconMap[icon as keyof typeof iconMap];
      return createElement(IconComponent, { className: 'w-4 h-4' });
    }
  },
}); 