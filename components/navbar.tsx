"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/career_expo.png";

export default function NavbarComponent() {
  return (
    <Navbar fluid className=" shadow-md shadow-gray-200 z-50 w-full border-b">
      <Navbar.Brand>
        <Image src={Logo} className=" w-28" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-bold text-primary">
          Career Portal
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Overview</Navbar.Link>
        <Navbar.Link as={Link} href="#">
          FAQ
        </Navbar.Link>
        <Navbar.Link href="#">Board Executive</Navbar.Link>
        <Navbar.Link href="#">Partnership</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
