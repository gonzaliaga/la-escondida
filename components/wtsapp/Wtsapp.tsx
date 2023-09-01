import React from "react";
import { FloatingWhatsApp } from "./FloatingWhatsApp";

export default function Wtsapp() {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="+56956659732"
        accountName="La Escondida"
        placeholder = 'Escribe un mensaje..'
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}
//+5492477660075