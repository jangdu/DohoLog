import React from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";
import User from "./User";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  return (
    <header className="fixed top-0 w-full flex justify-between border-b bg-white border-gray-300 px-4 py-2">
      <Link to={"/"} className="flex items-center text-2xl font-bold">
        <h1>DuhoLog</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/posts">
          {" "}
          <Button text={"Post"} />
        </Link>
        <Link to="/about">
          <Button text={"About"} />
        </Link>
        {user && (
          <Link to="/contact">
            <Button text={"Contact"} />
          </Link>
        )}

        {user && <User user={user} />}
        {(!user && <Button onClick={login} text="Login" />) || (
          <Button onClick={logout} text="Logout" />
        )}
        {(user && user["isAdmin"] && (
          <Link to="/posts/new" className="text-xl">
            <Button text={"글쓰기"} />
          </Link>
        )) ||
          null}
      </nav>
    </header>
  );
}
