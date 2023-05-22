import React from "react";
import Profile from "../components/Profile";
import Posts from "../components/Posts";
import BorderBarUi from "../components/ui/BorderBarUI";

export default function Home() {
  return (
    <div>
      <Profile />
      <BorderBarUi />
      <Posts />
    </div>
  );
}
