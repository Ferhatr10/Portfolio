import {
  Code,
  FileCode,
  Brain,
  Cpu,
  Settings,
  Box,
  Zap,
  Users,
  Network,
  Activity,
  Globe,
  Palette,
  Triangle,
  Atom,
  Calculator,
  Wrench,
  Layers,
  Database,
  GitBranch,
  Cloud,
  Star,
  FileTextIcon,
  LinkIcon,
  MailIcon
} from 'lucide-react'
import type { IconComponent } from '@/types'

export const AVATAR = {
  name: 'Ferhat Rudvanoğulları',
  initials: 'EP'
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/emapeire',
    icon: GitBranch
  },
  {
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/emanuelpeire',
    icon: Network
  },
  {
    title: 'X (Twitter)',
    url: 'https://x.com/emapeire',
    icon: Star
  },
  {
    title: 'Email',
    url: 'mailto:hi@emapeire.xyz',
    icon: MailIcon
  },
  {
    title: 'CV App',
    url: 'https://cv.emapeire.xyz',
    icon: FileTextIcon
  },
  {
    title: 'Link App',
    url: 'https://link.emapeire.xyz',
    icon: LinkIcon
  }
]

export const iconMap: Record<string, IconComponent> = {
  CSSIcon: Code,
  HTMLIcon: FileCode,
  JavaScriptIcon: Code,
  NextJSIcon: Triangle,
  OpenAIIcon: Brain,
  ReactIcon: Atom,
  SWCIcon: Zap,
  TypeScriptIcon: Code,
  ViteIcon: Zap,
  ShadcnIcon: Palette,
  TailwindCSSIcon: Palette,
  AstroIcon: Star,
  SvelteIcon: Triangle,
  NodeJSIcon: Settings,
  VitestIcon: Activity,
  BootstrapIcon: Box,
  SupabaseIcon: Database,
  ReduxIcon: Layers,
  PNPMIcon: Box,
  VercelIcon: Cloud,
  BasehubIcon: Network,
  GraphQLIcon: Network,
  PythonIcon: Code,
  CIcon: Code,
  MATLABIcon: Calculator,
  AIIcon: Brain,
  ControlIcon: Settings,
  SolidworksIcon: Wrench,
  AnsysIcon: Activity,
  PrototypeIcon: Box,
  LeadershipIcon: Users,
  PyTorchIcon: Brain,
  TensorFlowIcon: Brain,
  DLICon: Brain,
  SignalIcon: Activity,
  WebIcon: Globe,
  TailwindIcon: Palette
}
