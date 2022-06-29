import React from "react";

import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

function Header() {
  const { user } = useUser();

  return (
    <header className="bg-indigo-700 text-white py-4 px-4">
      <div className="flex flex-row justify-between">
        <div className="grid grid-flow-col auto-cols-max gap-2">
          <div className="w-16 relative">
            <Image
              src="/logo-avatar.png"
              alt="logo"
              layout="fill"
              objectFit="contain"
              className="rounded-full col-start-1"
            />
          </div>
          <div className="col-span-3">
            <h1 className="text-3xl font-Audiowide"> Sweet Niblets</h1>

            <p className="text-sm uppercase tracking-widest">
              Let&apos;s sing together
            </p>
          </div>
        </div>
        {user ? (
          <div className="self-center border-2 rounded-md hover:bg-white hover:text-indigo-700 ml-5">
            <a
              className="text-xl ml-3 mr-3"
              href="/api/auth/logout"
              data-testid="logout"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="float-right top-12 right-10 self-center border-2 rounded-md hover:bg-white hover:text-indigo-700 justify-self-end ml-5">
            <a
              className="text-xl ml-3 mr-3"
              href="/api/auth/login"
              data-testid="login"
            >
              Login
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
