"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navigation/navbar";
import { ReturnArrow } from "@/components/returnarrow";

export default function PerfilAnimal() {
    const [nome, setNome] = useState("Jinx");
    const [tipoanimal, setTipoanimal] = useState("Gato");
    const [raca, setRaca] = useState("Vira-lata");
    const [sexo, setSexo] = useState("Fêmea");
    const [descricao, setDescricao] = useState("A vesguinha favorita de todos do twitter");
    const [anos, setAnos] = useState("6");
    const [imagem, setImagem] = useState("https://s2.glbimg.com/Zvhsuo9uDzqEHDYoV2vqFoMKvOs=/smart/e.glbimg.com/og/ed/f/original/2022/04/26/271406372_1094832554665405_7239099820711983754_n.jpg");

    return(
        <div className="bg-white h-screen w-screen">
            <div className="flex flex-col flex-wrap">
                <Navbar/>
                <div className="grid grid-rows-5 grid-cols-7 m-auto artboard phone-rectangle-xl rounded-b-2xl justify-between shadow-2xl bg-white items-startshadow-2xl">
                    <div className="flex row-start-1 col-start-1 mt-5 relative place-content-start">
                        <ReturnArrow/>
                    </div>
                    <div className="flex place-content-start row-start-1 col-start-2 col-span-2 mt-5">
                        <div className="flex relative artboard phone-rectangle-sm rounded-full shadow-lg justify-center bg-secondary items-center place-content-center">
                            <p className="text-center font-bold">{nome}</p>
                        </div>
                    </div>
                    <div className="flex place-content-start row-start-1 col-start-4 col-span-1 mt-5 ">
                        <div className="flex relative artboard phone-rectangle-sm rounded-full shadow-lg  justify-center bg-white border-primary border-2 items-center place-content-center">
                            <p className="text-center font-bold text-black">{raca}</p>
                        </div>
                    </div>
                    <div className="flex place-content-center row-span-full col-start-5 col-span-full place-content-center h-full border-accent">
                        <img src={imagem} className="border rounded-br-2xl w-full h-full"/>
                    </div>
                    <div className="flex place-content-center row-start-2 row-span-3 col-start-1 col-end-5">
                        <div className="flex relative artboard phone-rectangle-w-sm text-black rounded-3xl shadow-lg justify-center bg-white border-primary border-2 items-start place-content-start">
                            <p className="p-5">{descricao}</p>
                        </div>
                    </div>
                    <div className="flex place-content-center row-start-5 col-start-2 mt-5">
                        <div className="flex flex-col relative right-20 artboard phone-rectangle-sm rounded-full shadow-lg  justify-center bg-white border-primary border-2 items-center">
                            <div className="-mb-2.5"><p className="text-center font-bold text-lg text-black">{anos}</p></div>
                            <div><p className="text-center font-bold text-lg text-black">Anos</p></div>
                        </div>
                    </div>
                    <div className="flex place-content-center row-start-5 col-start-3 mt-5">
                        <div className="flex flex-col relative artboard right-20 phone-rectangle-sm rounded-full shadow-lg  justify-center bg-white border-primary border-2 items-center">
                            <div><p className="text-center font-bold text-lg text-black">{tipoanimal}</p></div>
                        </div>
                    </div>
                    <div className="flex place-content-center row-start-5 col-start-4 mt-5">
                        <div className="flex flex-col relative artboard right-20 phone-rectangle-sm rounded-full shadow-lg  justify-center bg-white border-primary border-2 items-center">
                            <div><p className="text-center font-bold text-lg text-black">{sexo}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}