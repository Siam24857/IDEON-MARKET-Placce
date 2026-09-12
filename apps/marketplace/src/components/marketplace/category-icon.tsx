import {
  Award,
  Cloud,
  Cpu,
  Crown,
  Globe,
  Layers,
  MessageSquare,
  Package,
  PenTool,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Truck,
  Trophy,
  UserCheck,
  Workflow,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  ShoppingCart,
  Layers,
  PenTool,
  Cpu,
  Zap,
  Smartphone,
  Cloud,
  Workflow,
  ShoppingBag,
  MessageSquare,
  Package,
  Truck,
  Trophy,
  Crown,
  Award,
  UserCheck,
};

export function CategoryIcon({
  name,
  className,
}: {
  name?: string | null;
  className?: string;
}) {
  const Icon = (name && iconMap[name]) || Sparkles;
  return <Icon className={className} />;
}