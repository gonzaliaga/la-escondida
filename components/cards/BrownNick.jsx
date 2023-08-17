"use client"
import React from "react";
import { Card, CardFooter, Image, Button, Tabs, Tab, CardBody, Table, TableColumn, TableHeader, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Boton from "@/components/button/Button"
import Link from "next/link"

export default function BrownNick() {
    const colors = [,
        "warning"
    ];
    return (
        <div className="grid grid-cols-2 gap-3">


            <Card
                isFooterBlurred
                radius="lg"
                className="grid grid-cols-2 gap-2 place-content-center border-none "
            >

                <Image
                    alt="chick Brown"
                    className="ml-6 "
                    height={200}
                    src="https://res.cloudinary.com/dkvo22lv7/image/upload/v1692151179/chick-Brown-Commercial-Layers-Brown-Nick_nzymex.png"
                    width={200}
                />
                <div className="content-center">
                <p className="text-large text-green-800 font-bold py-2">Descargas</p>
                    <Link href="/#">
                        <Boton text={"Características"} />
                    </Link>
                </div>
                
                <CardFooter className="justify-between before:bg-white/10 border-green-900/30 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-large text-green-800 font-bold">Gallina de huevo marrón - Brown Nick</p>
                    <Button className="text-tiny text-white bg-orange-500" variant="flat" color="default" radius="sm" size="sm">
                        Comprar
                    </Button>
                </CardFooter>
            </Card >

            <div className="flex  flex-col ">
                {colors.map((color) => (
                    <Tabs key={color} color={color} aria-label="Options" radius="full">
                        <Tab key="viabilidad" title="Viabilidad">
                            <Card>
                            <CardBody className="h-72">
                                    <span className="text-xl text-green-900 font-bold">Viabilidad</span>
                                    <Table hideHeader aria-label="viabilidad">
                                        <TableHeader aria-label="detalles">
                                            <TableColumn>Semanas</TableColumn>
                                            <TableColumn>Porcentajes</TableColumn>
                                            <TableColumn></TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow key="1">
                                                <TableCell>0 – 18 Semanas:</TableCell>
                                                <TableCell>96 – 98 %</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="2">
                                                <TableCell>19 – 90 Semanas:</TableCell>
                                                <TableCell>90 – 95 %</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="3">
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="produccion" title="Producción">
                            <Card>
                                <CardBody className="h-72">
                                    <span className="text-xl text-green-900 font-bold">Producción de Huevos</span>
                                    <Table hideHeader aria-label="Produccion de Huevos">
                                        <TableHeader aria-label="detalles">
                                            <TableColumn>Semanas</TableColumn>
                                            <TableColumn>Porcentajes</TableColumn>
                                            <TableColumn></TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow key="1">
                                                <TableCell>Edad del ave al 50% de puesta</TableCell>
                                                <TableCell>142 – 152 días</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="2">
                                                <TableCell>Pico de puesta</TableCell>
                                                <TableCell>94 – 95 %</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="3">
                                                <TableCell>Producción por ave alojada a las 80 semanas</TableCell>
                                                <TableCell>368 huevos</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>Producción por ave alojada a las 90 semanas</TableCell>
                                                <TableCell>415 huevos</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>Producción por ave alojada a las 100 semanas</TableCell>
                                                <TableCell>456 huevos</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>Periodo por encima del 90%</TableCell>
                                                <TableCell>34 semanas</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>Periodo por encima del 80%</TableCell>
                                                <TableCell>54 semanas</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Tab>
                        <Tab key="alimento" title="Alimento">
                            <Card>
                                <CardBody className="h-72">
                                    <span className="text-xl text-green-900 font-bold">Alimento</span>
                                    <Table aria-label="Produccion de Huevos">
                                        <TableHeader aria-label="detalles">
                                            <TableColumn>Periodo (semanas)</TableColumn>
                                            <TableColumn>Conversión (kg alimento / kg huevos)</TableColumn>
                                            <TableColumn>Consumo (g / ave / día)</TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow key="1">
                                                <TableCell>hasta 72</TableCell>
                                                <TableCell>2.08</TableCell>
                                                <TableCell>113 – 118</TableCell>
                                            </TableRow>
                                            <TableRow key="2">
                                                <TableCell>hasta 80</TableCell>
                                                <TableCell>2.10</TableCell>
                                                <TableCell>113 – 118</TableCell>
                                            </TableRow>
                                            <TableRow key="3">
                                                <TableCell>hasta 100</TableCell>
                                                <TableCell>2.20</TableCell>
                                                <TableCell>113 – 118</TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Tab>
                    </Tabs>
                ))}
            </div>
        </div>
    );
}
