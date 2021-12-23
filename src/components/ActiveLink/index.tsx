// React-scroll
import { Link } from "react-scroll";

interface ActiveLinkProps {
  title: string;
  href: string;
  activeClassName: string;
}

export function ActiveLink({title, href, activeClassName}: ActiveLinkProps) {
  return (
      <Link
        activeClass={activeClassName}
        smooth 
        offset={-80} 
        duration={200} 
        to={href}
        spy
      >
        {title}
      </Link>
  )
}