/**
 * Ikon brand (Instagram, YouTube, TikTok, WhatsApp) digambar manual sebagai SVG
 * karena lucide-react tidak menyediakan ikon brand.
 * Ukuran mengikuti `1em` supaya bisa diatur lewat class text-*.
 */
import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function InstagramIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5l4.5 2.5-4.5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TiktokIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M15 3.5v9.2a3.7 3.7 0 1 1-3.7-3.7c.24 0 .47.02.7.07" />
      <path d="M15 3.5c.4 2.2 2 3.7 4.3 3.9" />
    </svg>
  );
}

export function WhatsappIcon(props: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.3A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M8.9 8.4c.3-.1.6 0 .8.3l.8 1.2c.2.3.1.6-.1.8l-.5.4c.5 1 1.3 1.8 2.3 2.3l.4-.5c.2-.2.5-.3.8-.1l1.2.8c.3.2.4.5.3.8-.3.9-1.3 1.4-2.3 1.1a8 8 0 0 1-4.8-4.8c-.3-1 .2-2 1.1-2.3Z" />
    </svg>
  );
}
