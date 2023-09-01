"use client"
import React from "react";
import { Card, CardFooter, Image, Button, Tabs, Tab, CardBody, Table, TableColumn, TableHeader, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Boton from "@/components/button/Button"
import Link from "next/link"

export default function NickChick() {
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
                    src="https://res.cloudinary.com/dkvo22lv7/image/upload/v1692151179/Gallina-Blanca_usg50q.png"
                    width={200}
                />
                <div className="content-center">
                <p className="text-large text-green-800 font-bold py-2"></p>
                    <div>
                        <Link href="/#">
                            <Boton text={"Características"} />
                        </Link>
                    </div>
                    <br />
                    <div>
                        <Link href="/contact">
                            <Boton text={"+ Información"} />
                        </Link>
                    </div>
                </div>
                
                <CardFooter className="justify-between before:bg-white/10 border-green-900/30 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                    <p className="text-large text-green-800 font-bold text-center mx-auto">Gallina de huevo blanco – Nick Chick</p>

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
                                                <TableCell>0 – 19 semanas:</TableCell>
                                                <TableCell>96 – 98 %</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="2">
                                                <TableCell>19 – 100 semanas:</TableCell>
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
                                                <TableCell>140 – 150 días</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="2">
                                                <TableCell>Pico de puesta</TableCell>
                                                <TableCell>94 – 96 %</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="3">
                                                <TableCell>Producción por ave alojada a las 80 semanas</TableCell>
                                                <TableCell>376 huevos</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>Producción por ave alojada a las 90 semanas</TableCell>
                                                <TableCell>428 huevos</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>Producción por ave alojada a las 100 semanas</TableCell>
                                                <TableCell>473 huevos</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>Periodo por encima del 90%</TableCell>
                                                <TableCell>45 semanas</TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>Periodo por encima del 80%</TableCell>
                                                <TableCell>63 semanas</TableCell>
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
                                                <TableCell>19 – 72</TableCell>
                                                <TableCell>1.95</TableCell>
                                                <TableCell>102 – 107</TableCell>
                                            </TableRow>
                                            <TableRow key="2">
                                                <TableCell>19 – 80</TableCell>
                                                <TableCell>1.96</TableCell>
                                                <TableCell>103 – 108</TableCell>
                                            </TableRow>
                                            <TableRow key="3">
                                                <TableCell>19 – 100</TableCell>
                                                <TableCell>2.05</TableCell>
                                                <TableCell>103 – 108</TableCell>
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
