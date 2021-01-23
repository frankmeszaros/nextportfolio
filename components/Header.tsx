import Link from "next/link";

interface Route {
  href: string;
  label: string;
}

interface HeaderProps {
  routes: Route[];
}

const Header = ({ routes }: HeaderProps) => (
  <header className="p-4">
    <nav>
      {routes.map((route, idx) => (
        <>
          <Link href={route.href}>{route.label}</Link>
          {idx < routes.length - 1 ? " | " : ""}
        </>
      ))}
    </nav>
  </header>
);

export default Header;
