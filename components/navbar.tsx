"use client";

import useScroll from "@/hooks/use-scroll";
import type { MainNavItem } from "@/types";
import { MainNav } from "./main-nav";
import { Button } from "./ui/button";

interface NavBarProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  
}

export function NavBar({
  children,
  rightElements,
  scroll = false,
}: NavBarProps) {
  const scrolled = useScroll(50);
  
  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center border-border bg-background/60 backdrop-blur-xl transition-all border-b ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav>
          {children}
        </MainNav>

        <div className="flex items-center space-x-3">
            
          {rightElements}
          {/* <LocaleChange url={"/"} /> */}
          

            <Button
            className="px-3"
            variant="green"
            size="sm"
            onClick={() => window.open("http://fiscitzw.com/", "_blank")}
            >
            Sign In
            </Button>
        </div>
      </div>
    </header>
  );
}
