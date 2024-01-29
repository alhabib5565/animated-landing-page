import { ReactNode } from "react";
import cn from "../../utils/cn";

const NavItemLD = ({ children }: { children: ReactNode }) => {
  return (
    <li>
      <a className={cn("nav-item-ld")} href="">
        {children}
      </a>
    </li>
  );
};

export default NavItemLD;
