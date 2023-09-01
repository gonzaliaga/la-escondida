import React from "react";
import ckn from "@/images/pollo-404.png"
import { Button, Image } from "@nextui-org/react";
import Link from "next/link";
import 'tailwindcss/tailwind.css'


const Custom404 = () => {
  return (

    <div className="h-screen grid grid-cols-2   bg-black ">
      <div>
        <p></p>

        <Image {...ckn} className="h-screen" alt="Pollo Chillon"/>
      </div>
      <div className="my-20 text-white">
        <span className="text-6xl font-bold">Oops! Página no encontrada</span>
        <br />
        <p className="text-sm tracking-wide">Lo sentimos, la página que estás buscando no existe.</p>
        <br />
        <Link href="/">
          <Button radius="full" className="bg-indigo-700 text-white shadow-lg align-middle">Ir al Inicio</Button>
        </Link>
      </div>
    </div>


  );
};

export default Custom404;
