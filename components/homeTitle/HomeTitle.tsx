import Button from "@/components/button/Button"
import Link from "next/link"

export default function HomeTitle() {
  const gradientText = {
    background:
    "-webkit-linear-gradient(90deg, hsla(79, 60%, 58%, 1) 0%, hsla(156, 96%, 31%, 1) 100%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
  }
  return (
    <div className=" w-full h-full flex flex-col justify-center bg-black/30 py-2 pl-5 space-y-4 z-20">
      <h1 className="text-4xl font-bold animate-fade-left animate-delay-300">
        <span className="text-white">Establecimiento</span> <span style={gradientText}>La Escondida</span>
      </h1>
      <h2 className="text-lg  font-semibold animate-fade-up animate-delay-300">
      <span className="text-white">Venta de gallinas ponedoras de alta producción</span>
      </h2>
      <div className="animate-fade-up animate-delay-400 space-y-4">
        <p className="w-[70%] ">
          {/* Aca va otro titulo si es necesario */}
        </p>
        <div className="md:">
          <Link href="/#">
            <Button text={"Productos"} />
          </Link>
        </div>
      </div>
    </div>
  )
}