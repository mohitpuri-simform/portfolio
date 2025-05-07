import type { ReactNode } from "react";

interface NavLinkProps {
  children: ReactNode;
}

function NavLink({ children }: NavLinkProps) {
  return (
    <li>
      <a href="#">{children}</a>
    </li>
  );
}

export default NavLink;
