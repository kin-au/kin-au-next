import { ReactNode, useState, forwardRef, ForwardedRef } from "react";
import Link from "next/link";
import { Popover } from "@headlessui/react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = forwardRef(function NavLink(
  props: NavLinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <Popover className="relative">
      <Popover.Button>&#9776;</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="grid grid-cols-2">
          <Popover.Button as={NavLink} href="/">
            Home
          </Popover.Button>
          <Popover.Button as={NavLink} href="/about">
            About
          </Popover.Button>
          <Popover.Button as={NavLink} href="/projects">
            Projects
          </Popover.Button>
          <Popover.Button as={NavLink} href="/cv">
            CV
          </Popover.Button>
          <Popover.Button as={NavLink} href="/contact">
            Contact
          </Popover.Button>
        </div>
      </Popover.Panel>
    </Popover>
  );
};

export default MobileNav;
