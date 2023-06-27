"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navigation/navbar";
import { ReturnArrow } from "@/components/returnarrow";

export default function PerfilAnimal() {
    const [nome, setNome] = useState("Nome do animal");
    const [tipoanimal, setTipoanimal] = useState("Cachorro");
    const [raca, setRaca] = useState("Vira-lata");
    const [sexo, setSexo] = useState("Fêmea");
    const [descricao, setDescricao] = useState("Descrição do animal");
    const [anos, setAnos] = useState("6");
    
    return(
        <div className="bg-white h-screen w-screen">
            <div className="flex flex-col flex-wrap">
                <Navbar/>
                <div className="flex flex-col w-full m-auto artboard phone-rectangle-xl grid grid-cols-2 grid-flow-col rounded-b-2xl shadow-2xlxl bg-white shadow-2xl mt-5">
                    <div className="col-start-1">
                        <div className="grid gap-y-1 grid-cols-2 grid-rows-12">
                            <div className="flex col-start-1 col-span-2 row-start-1 mt-10 auto-rows-min text-black">
                                <ReturnArrow/>
                                <div className="bg-secondary input ml-5 mr-5 w-full text-center font-bold text-xl text-white rounded-2xl">
                                    <p>{nome}</p> 
                                </div>
                            </div>
                            <div className="flex col-start-1 col-span-2 row-start-2 mt-5 items-center place-content-center">
                                <div className="bg-secondary input ml-5 mr-5 w-1/2 text-center font-bold text-xl">
                                    <p>{raca}</p> 
                                </div>
                            </div>
                            <div className="col-start-1 col-span-2 row-start-3 mt-10"></div>

                            <div className="flex col-start-1 row-start-4 mt-5 mb-10 mr-5 place-content-end">
                                <div className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black">
                                    {anos}
                                </div>
                            </div>
                            <div className="flex col-start-2 row-start-4 mt-5 mb-10 ml-5 place-content-start">
                                <div className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black">
                                    {sexo}
                                </div>
                            </div>

                            <div className="col-start-1 col-span-2 row-start-8 row-span-4 -mb-20">
                                <div className="bg-secondary input ml-5 mr-5 w-full h-full text-center font-bold text-xl">
                                    <p>{descricao}</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-start-2">
                        <img src="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*" className="border rounded-br-2xl w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
    );
}