import React from "react";
import { FaUser, FaUserAlt } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <nav>
      <img
        src="/logo.png"
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
        alt="logo"
        className="logo"
      />

      <ul>
        <li>
          <a href="#" onClick={() => router.push("/")}>
            Home
          </a>
        </li>
        <li>
          <a href="#" onClick={() => router.push("/sell")}>
            {" "}
            Sell
          </a>
        </li>
        <li>
          {session ? (
            <a href="#" className="user" onClick={() => signOut()}>
              <FaUserAlt />
              {/* first name only in session.user.name */}
              {session.user.name.split(" ")[0]}
              <AiFillCaretDown />
            </a>
          ) : (
            <a
              href="#"
              className="user"
              onClick={() => router.push("/api/auth/signin")}
            >
              Login / Sign Up
            </a>
          )}

          {/* login */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
