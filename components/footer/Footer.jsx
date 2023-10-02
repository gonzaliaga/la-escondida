import React from "react";
import Image from "next/image";
import Logo from "@/images/la-escondida-recortada.png";

import Instagram from "@/images/Instagram.png";

export default function Footer() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#005621', maxHeight: '100px', alignItems: 'center', borderTop: '2px solid black' }}>
      <div style={{ flex: 1, gap:'5px' ,display: 'flex', justifyContent: 'center' }}>
        
        <Image style={{ width: '25px', height: '25px' }} src={Instagram} alt="Instagram" />
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>

      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'right' }}>
        <Image style={{ width: '60px', height: '60px' }} src={Logo} alt="Logo" />
      </div>
      <p style={{ textAlign: 'center', margin: 10, color: 'white', fontSize: '0.6em' }}>
        Establecimiento La Escondida<br />Copyright © 2023<br />Realizado por CA.Solutions<br />www.casolutions.cl
      </p>
    </div>


  );
}
