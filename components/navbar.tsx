import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/about">About Me</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>

        <li>
          <Link href="/cv">CV</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
