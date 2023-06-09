"use client";
import Image from 'next/image'
import React from "react";
import {Navigation} from "@/components/navigation/navigation";
import Perfil from "@/app/perfil/usuario/page";
import {Navbar} from "@/components/navigation/navbar";
import {Carousel} from "@/components/carousel"
import {Card} from "@/components/card";
import {recuperarAnimais} from "@/script";


export default function Home() {
    const animais = recuperarAnimais();

    var listItems = animais.map(function(animal) {
        return (
            <Card path={animal.imagem} nome={animal.nome} alt={animal.nome} descricao={animal.descricao}></Card>
        );
    });

    return (
        <div className="bg-white h-screen w-screen">
            <div className="flex flex-col flex-wrap">
                <Navbar></Navbar>
                <div className="flex flex-col m-auto artboard phone-rectangle-h-350px rounded-b-2xl shadow-2xlxl bg-primary">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full rounded-b-2xl" >
                            <img src="https://arcabrasil.org.br/wp-content/uploads/2016/08/banner.jpg" className="w-full rounded-b-2xl"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle btn-ghost hover:btn-secondary border-secondary text-white hover:opacity-50">❮</a>
                                <a href="#slide2" className="btn btn-circle btn-ghost hover:btn-secondary border-secondary text-white hover:opacity-50">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full rounded-b-2xl">
                            <img src="https://www.aaano.com.br/wp-content/uploads/2017/07/banner_home_01-1920x730.png" className="w-full border rounded-b-2xl"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle btn-ghost hover:btn-secondary border-secondary text-white hover:opacity-50">❮</a>
                                <a href="#slide3" className="btn btn-circle btn-ghost hover:btn-secondary border-secondary text-white hover:opacity-50">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full rounded-b-2xl">
                            <img src="https://blog.tudodebicho.com.br/wp-content/uploads/2023/05/Simple-Self-Care-Blog-Post-Banner-2-1-1600x450.png" className="w-full border rounded-b-2xl"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle btn-ghost hover:btn-secondary border-secondary text-white hover:opacity-50">❮</a>
                                <a href="#slide4" className="btn btn-circle btn-ghost hover:btn-secondary border-secondary text-white hover:opacity-50">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full rounded-b-2xl">
                            <img src="https://estado.rs.gov.br/upload/recortes/201802/21153513_1436611_GD.png" className="w-full border rounded-b-2xl"/>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle btn-ghost hover:btn-secondary border-secondary text-white hover:opacity-50">❮</a>
                                <a href="#slide1" className="btn btn-circle btn-ghost hover:btn-secondary border-secondary text-white hover:opacity-50">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 m-auto artboard phone-rectangle-sm rounded-full text-sm p-5 shadow-lg justify-between bg-secondary items-center">
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="grid flex-grow card bg-secondary mt-1 mb-1 place-items-center">Cadastre seu perfil e seus animais
                        </div>
                        <div className="divider lg:divider-horizontal">--></div>
                        <div className="grid flex-grow card bg-secondary mt-1 mb-1 place-items-center">Busque por um novo amigo
                        </div>
                        <div className="divider lg:divider-horizontal">|</div>
                        <div className="grid flex-grow card bg-secondary mt-1 mb-1 place-items-center">Ou entre em contato com o atual responsável
                        </div>
                    </div>
                </div>
                <Carousel>
                    {listItems}
                </Carousel>
            </div>
        </div>
    )
}
