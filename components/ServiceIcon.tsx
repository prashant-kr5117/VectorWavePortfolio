import {
  Boxes,
  Users,
  Headset,
  Calculator,
  UserCog,
  ShoppingCart,
  Package,
  ShieldCheck,
  Smartphone,
  Globe,
  Sparkles,
  MessageCircle,
  Layers,
  Puzzle,
  LayoutGrid,
  Code2,
  type LucideProps,
} from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/lib/services";

const map = {
  boxes: Boxes,
  users: Users,
  headset: Headset,
  calculator: Calculator,
  "user-cog": UserCog,
  "shopping-cart": ShoppingCart,
  package: Package,
  "shield-check": ShieldCheck,
  smartphone: Smartphone,
  globe: Globe,
  sparkles: Sparkles,
  "message-circle": MessageCircle,
  layers: Layers,
  puzzle: Puzzle,
  "layout-grid": LayoutGrid,
  code: Code2,
};

export default function ServiceIcon({
  icon,
  ...props
}: { icon: ServiceIconName } & LucideProps) {
  const Icon = map[icon];
  return <Icon {...props} />;
}
