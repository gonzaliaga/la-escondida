import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import { Button, Link } from "@nextui-org/react"; // Removed unnecessary comma
import Image from "next/image";
import Logo from "@/images/La Escondida.png";
import WtsApp from "@/images/WhatsApp.png";
import "./NavbarStyles.css";
import { usePathname, useRouter } from "next/navigation";



export default function NavbarApp() {
  const router = useRouter();
  const [navbarBackground, setNavbarBackground] = useState(true); // Initialize navbarBackground
  const gradientText = {
    background: "-webkit-linear-gradient(90deg, hsla(79, 60%, 58%, 1) 0%, hsla(156, 96%, 31%, 1) 100%)",
    WebkitBackgroundClip: "text", // Corrected property name
    WebkitTextFillColor: "transparent" // Corrected property name
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize isMenuOpen
  const activeLink = "border-b-2 border-[#039D60] text-[#039D60] duration-200 cursor-pointer font-semibold";
  const inactiveLink = "border-b-2 border-[#039D60] font-semibold border-opacity-0 hover:border-opacity-100 hover:text-[#039D60] duration-200 cursor-pointer";
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 2;
      if (isTop !== navbarBackground) {
        setNavbarBackground(isTop);
      }
    };

    window.addEventListener("scroll", handleScroll); // Added event listener
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up the event listener
    };
  }, [navbarBackground]); // Added dependency array

  const menuItems = ["Inicio", "Productos", "Acerca"];

  return (
    <Navbar className={`fixed custom-navbar ${navbarBackground ? "bg-transparent" : "bg-white"}`} onMenuOpenChange={setIsMenuOpen}>


      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', }}>
            <div style={{ marginRight: '30px' }} >
              <Image style={{ marginTop: '30px' }} src={Logo} alt="#" />
            </div>
            <p className=" text-white font-bold text-inherit" style={{ fontSize: '2em', }}>La Escondida</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 m-0" justify="right">
        <NavbarItem className="font-bold animate-fade-left animate-delay-300">
          <Link style={gradientText} href="/" className={pathName === "/" ? activeLink : inactiveLink} >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem className="font-bold animate-fade-left animate-delay-300" >
          <Link style={gradientText} href="/contact" className={pathName === "/contact" ? activeLink : inactiveLink}>
            Conversemos
          </Link>
        </NavbarItem>
        <NavbarItem className="font-bold animate-fade-left animate-delay-300">
          <Link style={gradientText} href="/about" className={pathName === "/about" ? activeLink : inactiveLink}>
            Sobre Nosotros
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <NavbarItem className="hidden lg:flex" style={{ margin: '0' }}>
          <Link href="#"></Link>
        </NavbarItem>
{/*         <NavbarItem className="mr-0">
          <Link href="#" >
            <a style={{ display: 'block', width: '40px', height: '40px', marginTop: '5px' }}>
              <Image src={WtsApp} alt="#" />
            </a>
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar >
  );
}
