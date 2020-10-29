import Link from "next/link";
import { FC } from "react";
import cn from "classnames";

type NavItemProps = {
  href: string
  image?: boolean
}

export const NavLink: FC<NavItemProps> = ({ children, href, image }) => {
  
  return <>
    <Link href={href}><a className={cn({ image })}>{children}</a></Link>
    <style jsx>{`
      a {
        display: flex;
        margin: 4px;
        padding: 8px;
        outline: none;
        color: var(--nav-color);
        font-size: var(--nav-font-size);
        text-decoration: none;
        transition: 0.1s ease-in color;

        &:hover, &:focus, &:active {
          color: var(--nav-hover-color);
        }
      }

      .image {
        margin: unset;
        padding: unset;
      }
    `}</style>
  </>;
};