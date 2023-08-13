import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { HeartIcon } from "./HeartIcon";

export default function Pollos() {
  const [liked, setLiked] = React.useState(false);
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Button
        isIconOnly
        className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
        radius="full"
        variant="light"
        onPress={() => setLiked((v) => !v)}
      >
        <HeartIcon
          className={liked ? "[&>path]:stroke-transparent" : ""}
          fill={liked ? "currentColor" : "none"} width={undefined} height={undefined}        />
      </Button>
      <Image
        alt="Gallina color Marrón"
        className="object-cover"
        height={200}
        src="images/Gallina-Cafe-Parada.png"
        width={200}
      />

      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Gallina Café</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
