import { Boxes, TrendingUp, Bot, Code2, ShieldCheck, type LucideProps } from "lucide-react";
import type { PostIcon } from "@/lib/posts";

const map = {
  boxes: Boxes,
  "trending-up": TrendingUp,
  bot: Bot,
  "code-2": Code2,
  "shield-check": ShieldCheck,
};

export default function BlogIcon({ icon, ...props }: { icon: PostIcon } & LucideProps) {
  const Icon = map[icon];
  return <Icon {...props} />;
}
