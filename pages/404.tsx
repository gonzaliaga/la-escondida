import React from "react";
import { useRouter } from "next/router";
import { Button, Image } from "@nextui-org/react";


const Custom404 = () => {
  return (
    <>
      <div className="grid grid-cols-2 mt-96 align-middle bg-black">
        <div>
          <p></p>
          <Image src="https://res.cloudinary.com/dkvo22lv7/image/upload/v1691971191/numberError_rqjvxf.png" />
        </div>
        <div>
          <span>Oops! Página no encontrada</span>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <Button radius="full" className="bg-indigo-700 text-white shadow-lg">Ir al Inicio</Button>
        </div>
      </div>

    </>
  );
};

export default Custom404;
