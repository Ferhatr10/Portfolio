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
  initials: 'FR'
}

export const LINKS = [
  {
    title: 'GitHub',
    url: 'https://github.com/Ferhatr10',
    icon: GitBranch
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ferhat-rudvanogullari',
    icon: Network
  },
  {
    title: 'Email',
    url: 'mailto:ferhatrudvanogullari6@gmail.com',
    icon: MailIcon
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
