/**
 * Pemetaan nama sosial media (dari src/data/site.ts) ke ikon SVG di icons.tsx.
 */
import type { ReactElement, SVGProps } from "react";
import { InstagramIcon, TiktokIcon, YoutubeIcon } from "@/components/icons";

export type SocialName = "instagram" | "youtube" | "tiktok";

const map: Record<SocialName, (props: SVGProps<SVGSVGElement>) => ReactElement> = {
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
};

export function SocialIcon({ name, className }: { name: SocialName; className?: string }) {
  const Icon = map[name] ?? InstagramIcon;
  return <Icon className={className} />;
}
