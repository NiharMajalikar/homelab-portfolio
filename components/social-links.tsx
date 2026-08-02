import { Code2, ContactRound, Mail } from "lucide-react";

import { socials } from "@/data/socials";

const icons = {
  GitHub: Code2,
  LinkedIn: ContactRound,
  Email: Mail,
};

interface SocialLinksProps {
  compact?: boolean;
}

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <div
      className={compact ? "flex items-center gap-2" : "flex flex-wrap gap-3"}
    >
      {socials.map((social) => {
        const Icon = icons[social.label as keyof typeof icons] ?? Mail;
        const external = social.href.startsWith("http");

        return (
          <a
            key={social.label}
            href={social.href}
            className={compact ? "icon-link" : "secondary-button"}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            aria-label={compact ? social.label : undefined}
          >
            <Icon aria-hidden="true" />
            {compact ? (
              <span className="sr-only">{social.label}</span>
            ) : (
              social.label
            )}
          </a>
        );
      })}
    </div>
  );
}
