/**
 * Pemetaan nama ikon layanan (dari src/data/site.ts) ke komponen lucide-react.
 * Tambah layanan baru? Tambahkan barisnya di sini juga.
 */
import {
  Camera,
  Video,
  HeartHandshake,
  Building2,
  Package,
  Plane,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/site";

const map: Record<Service["icon"], LucideIcon> = {
  camera: Camera,
  video: Video,
  wedding: HeartHandshake,
  corporate: Building2,
  product: Package,
  drone: Plane,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: Service["icon"];
  className?: string;
}) {
  const Icon = map[name] ?? Camera;
  return <Icon className={className} strokeWidth={1.4} aria-hidden="true" />;
}
