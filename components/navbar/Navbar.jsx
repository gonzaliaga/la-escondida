import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import { Button, Link, } from "@nextui-org/react";
import Image from "next/image"
import Logo from "@/images/La Escondida.png"
import WtsApp from "@/images/WhatsApp.png"
import "./NavbarStyles.css";


export default function NavbarApp() {
  const gradientText = {
    background:
    "-webkit-linear-gradient(90deg, hsla(79, 60%, 58%, 1) 0%, hsla(156, 96%, 31%, 1) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  }
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Inicio",
    "Productos",
    "Acerca",
  ];

  return (
    <Navbar className="fixed custom-navbar" onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'left', }}>
            <div style={{ marginRight: '30px' }} >
              <Image style={{ marginTop: '30px' }} src={Logo} alt="#" />
            </div>
            <p className=" text-white font-bold text-inherit" style={{ fontSize: '2em', }}>La Escondida</p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 m-0" justify="right">
        <NavbarItem>
          <Link style={gradientText} className="font-bold animate-fade-left animate-delay-300" href="#" >
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={gradientText} className="font-bold animate-fade-left animate-delay-300" href="#">
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={gradientText} className="font-bold animate-fade-left animate-delay-300" href="#">
            Acerca
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <NavbarItem className="hidden lg:flex" style={{ margin: '0' }}>
          <Link href="#"></Link>
        </NavbarItem>
        <NavbarItem className="mr-0">
          <Link href="#" >
            <a style={{ display: 'block', width: '40px', height: '40px', marginTop: '5px' }}>
              <Image src={WtsApp} alt="#" />
            </a>
          </Link>
        </NavbarItem>
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
    </Navbar>
  );
}
