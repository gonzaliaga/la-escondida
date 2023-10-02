'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import NavbarApp from '@/components/navbar/Navbar';
import Footer from "@/components/footer/Footer"
import { FloatingWhatsApp, FloatingWhatsAppProps } from "@/components/wtsapp/FloatingWhatsApp"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'La Escondida',
  description: 'Establecimiento La Escondida. Venta de gallinas ponedoras de alta producción. Trabaja las mejores líneas genéticas de alta producción y la mejor asesoría.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        


      </head>
      <body>
      {/* <span className="loader"></span> */}
        <Providers>
          <NavbarApp />
          <FloatingWhatsApp
            phoneNumber="+56956659732"
            accountName="Establecimiento la Escondida"
          />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
