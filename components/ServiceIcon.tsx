import { Boxes, Users, Headset, Calculator, UserCog, type LucideProps } from "lucide-react";
import type { ServiceIcon as ServiceIconName } from "@/lib/services";

const map = {
  boxes: Boxes,
  users: Users,
  headset: Headset,
  calculator: Calculator,
  "user-cog": UserCog,
};

export default function ServiceIcon({
  icon,
  ...props
}: { icon: ServiceIconName } & LucideProps) {
  const Icon = map[icon];
  return <Icon {...props} />;
}
