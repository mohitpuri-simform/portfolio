import type { ReactNode } from "react";

interface NavLinkProps {
  navigateTo: string;
  children: ReactNode;
  onHandleLink: () => void;
}

function NavLink({ children, navigateTo, onHandleLink }: NavLinkProps) {
  return (
    <li>
      <a onClick={onHandleLink} href={navigateTo}>
        {children}
      </a>
    </li>
  );
}

export default NavLink;
