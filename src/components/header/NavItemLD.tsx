import { ReactNode } from "react";

const NavItemLD = ({ children }: { children: ReactNode }) => {
  return (
    <li>
      <a className="nav-item-ld" href="">
        {children}
      </a>
    </li>
  );
};

export default NavItemLD;
