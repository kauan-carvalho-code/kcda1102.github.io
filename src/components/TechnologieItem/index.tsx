import { ReactNode } from "react";

interface TechnologieItemProps {
  icon: ReactNode;
  className: string;
  href: string;
}

export function TechnologieItem({ icon, className, href }: TechnologieItemProps) {
  return (
    <li className={className}>
      <a href={href}>{icon}</a>
      <span></span>
    </li>
  )
}