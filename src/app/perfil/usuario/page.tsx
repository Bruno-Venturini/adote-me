import React from "react";
import {Navbar} from "@/components/navigation/navbar";
import {ReturnArrow} from "@/components/returnarrow";
import {Carousel} from "@/components/carousel";
import {Card} from "@/components/card";

export default function Perfil() {
    return (
        <div className="bg-white h-screen w-screen">
            <div className="flex flex-col flex-wrap">
                <Navbar></Navbar>
                <div className="grid grid-rows-5 grid-cols-7 m-auto artboard phone-rectangle-xl rounded-b-2xl shadow-2xlxl bg-white shadow-2xl">
                    <div className="flex row-start-1 col-start-1 mt-5">
                        <ReturnArrow/>
                    </div>
                    <div className="flex place-content-start row-start-1 col-start-2 col-span-2 mt-5">
                        <div className="flex relative right-5  mt-5 artboard phone-rectangle-sm rounded-full shadow-lg  justify-center bg-secondary items-center place-content-center">
                            <p className="text-center font-bold">Joana</p>
                        </div>
                    </div>
                    <div className="flex place-content-center row-start-1 col-start-4 col-span-1 mt-5">
                        <div className="flex relative mt-5 artboard phone-rectangle-sm rounded-full shadow-lg  justify-center bg-whit border-primary border-2 items-center place-content-center">
                            <p className="text-center font-bold text-black">Pessoa física</p>
                        </div>
                    </div>
                    <div className="flex place-content-center row-span-full col-start-5 col-span-full place-content-center h-full border-accent">
                        <img className="h-full w-full rounded-br-2xl" src="https://media.istockphoto.com/id/1369510216/pt/foto/carefree-beautiful-latin-woman-relaxing-on-beach.jpg?s=612x612&w=0&k=20&c=JeHv2iyuVJRF_IEBICUmvyg6w35RU8mkRxO19YbIy8A="/>
                    </div>
                    <div className="mt-5 row-start-2 col-start-1 col-end-4 items-start place-content-center">
                        <div className="flex relative left-5 mt-5 artboard phone-rectangle-sm rounded-full shadow-lg justify-center bg-primary items-center">
                            <p className="text-center font-bold text-black">joana@example.com</p>
                        </div>
                    </div>
                    <div className="mt-5 row-start-2 col-start-4 col-end-5 items-start place-content-center">
                        <div className="flex relative left-5 mt-5 artboard phone-rectangle-sm rounded-full shadow-lg justify-center bg-primary items-center">
                            <p className="text-center p-2 text-sm text-black">(48) 9 9957-6199)</p>
                        </div>
                    </div>
                    <div className="mt-5 row-start-3 col-start-1 col-end-5 w-full items-start">
                        <div className="flex relative left-5 auto artboard phone-rectangle-100 rounded-full shadow-lg justify-center bg-primary items-center">
                            <p className="text-center font-bold text-black">Rua das laranjeiras, Forquilinha, Santa Catarina</p>
                        </div>
                    </div>
                    <div className="flex row-start-4 col-start-2 col-span-2 -mt-10 place-content-center">
                        <div className="flex relative left-5 artboard phone-rectangle-sm rounded-full shadow-lg  justify-center bg-secondary items-center place-content-center">
                            <p className="text-center font-bold">ANIMAIS</p>
                        </div>
                    </div>
                    <div className="row-start-4 col-start-1 col-end-5 row-span-2 -mb-52">
                        <Carousel>
                            <Card path="https://i0.statig.com.br/bancodeimagens/9v/hj/5a/9vhj5aifvkwu2nqdwfffofpp6.jpg" nome="Sophia" alt="Sophia" descricao="Uma cachorrinha muito fofinha pra te acompanhar no dia a dia"></Card>
                            <Card path="https://s2.glbimg.com/Zvhsuo9uDzqEHDYoV2vqFoMKvOs=/smart/e.glbimg.com/og/ed/f/original/2022/04/26/271406372_1094832554665405_7239099820711983754_n.jpg" nome="Jinx" alt="Jinx" descricao="A gata vesguinha mais querida do twitter!"></Card>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
}