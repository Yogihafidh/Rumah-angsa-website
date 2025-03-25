import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

export default async function Navigation() {
  // Get login data from auth
  const session = await auth(); // auth make route dynamic because auth work with cookie and headers
  console.log(session);

  return (
    <nav className="z-10 text-xl text-black">
      <ul className="flex gap-16 items-center">
        <li>
          <LinkNavigation path="/cabins">Semua Kabin</LinkNavigation>
        </li>
        <li>
          {session?.user?.image ? (
            <LinkNavigation path="/account" style="flex items-center gap-4">
              <Image
                className="h-8 rounded-full"
                width={32}
                height={32}
                src={session.user.image}
                alt={session.user.name}
                unoptimized
              />
              <span>{session.user.name.split(" ").at(0)}</span>
            </LinkNavigation>
          ) : (
            <LinkNavigation path="/account">Login</LinkNavigation>
          )}
        </li>
      </ul>
    </nav>
  );
}

function LinkNavigation({ path, style = "", children }) {
  return (
    <Link
      href={path}
      className={`hover:text-primary-500 transition-colors ${style}`}
    >
      {children}
    </Link>
  );
}
