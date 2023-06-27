import React from "react";
import {Navbar} from "@/components/navigation/navbar";
import {ReturnArrow} from "@/components/returnarrow";
import {Carousel} from "@/components/carousel";

export default function Perfil() {
    return (
        <div className="bg-white h-screen w-screen">
            <div className="flex flex-col flex-wrap">
                <Navbar></Navbar>
                <div className="grid grid-rows-5 grid-cols-7 m-auto artboard phone-rectangle-xl rounded-b-2xl shadow-2xlxl bg-white shadow-2xl">
                    <div className="flex row-start-1 col-start-1 mt-5">
                        <ReturnArrow/>
                    </div>
                    <div className="flex place-content-center row-start-1 col-start-2 col-span-2 mt-5">
                        <button className="btn rounded-full w-10/12 btn-secondary text-white">Página inicial</button>
                    </div>
                    <div className="flex place-content-center row-span-full col-start-5 col-span-full place-content-center h-full border-accent">
                        <img className="h-full w-full rounded-br-2xl" src="https://storage.satc.edu.br/arquivos/fotosalunos/338515.png"/>
                    </div>
                    <div className="mt-5 row-start-2 col-start-1 col-end-4 items-start place-content-center">
                        <div className="flex relative left-5 mt-5 artboard phone-rectangle-sm rounded-full shadow-lg justify-between bg-primary items-center">

                        </div>
                    </div>
                    <div className="mt-5 row-start-2 col-start-4 col-end-5 items-start place-content-center">
                        <div className="flex relative left-5 mt-5 artboard phone-rectangle-sm rounded-full shadow-lg justify-between bg-primary items-center">

                        </div>
                    </div>
                    <div className="mt-5 row-start-3 col-start-1 col-end-5 w-full items-start">
                        <div className="flex relative left-5 auto artboard phone-rectangle-100 rounded-full shadow-lg justify-between bg-primary items-center">

                        </div>
                    </div>
                    <div className="flex row-start-4 col-start-2 col-span-2 -mt-10 place-content-center">
                        <button className="btn rounded-full w-7/12 btn-secondary text-white">Animais</button>
                    </div>
                    <div className="row-start-4 col-start-1 col-end-5 row-span-2 -mb-52">
                        <Carousel></Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}