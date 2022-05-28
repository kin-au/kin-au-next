import { useState } from "react";
import Link from "next/link";

const MobileNav = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      {showNav && (
        <nav>
          <ul>
            <li>
              <Link href="/" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" onClick={toggleNav}>
                About Me
              </Link>
            </li>
            <li>
              <Link href="/Projects" onClick={toggleNav}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/CV" onClick={toggleNav}>
                CV
              </Link>
            </li>
            <li className="bottomLink">
              <Link href="/Contact" onClick={toggleNav}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <button type="button" onClick={toggleNav}>
        &#9776;
      </button>
    </>
  );
};

export default MobileNav;
