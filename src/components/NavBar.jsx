import React from "react";
import MobileNav from "./pages/MobileNav";
import DeskNav from "./pages/DeskNav";

export default function NavBar() {
  return (
    <div>
      <MobileNav />
      <DeskNav />
    </div>
  );
}
