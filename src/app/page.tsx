import Image from 'next/image'
import React from "react";
import {Navigation} from "@/components/navigation/navigation";
import {Perfil} from "@/app/perfil/usuario/page";
import {Navbar} from "@/components/navigation/navbar";

export default function Home() {
    const cards = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s",
            title: "Shoes!",
            description: "If a dog chews shoes whose shoes does he choose?",
        },
        // Adicione outros objetos de card aqui
    ];

    return (
        <div className="bg-white h-screen w-screen">
            <div className="flex flex-col flex-wrap">
                <Navbar></Navbar>
                <div className="flex flex-col m-auto artboard phone-rectangle-md rounded-b-2xl shadow-2xlxl bg-primary">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full rounded-b-2xl" >
                            <img src="https://arcabrasil.org.br/wp-content/uploads/2016/08/banner.jpg" className="w-full border rounded-b-2xl"/>
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
                <div className="flex mt-5 m-auto artboard phone-rectangle-sm rounded-full p-5 shadow-lg justify-between bg-primary items-center">

                </div>
                <div className="flex flex-row flex-initial overflow-x-auto overflow-y-clip mt-5 m-auto artboard phone-rectangle-md rounded-sm w-64 bg-white items-center gap-3">
                    <div className="card w-96 bg-primary shadow-xl image-full">
                        <figure className="bg-primary w-96">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s" alt="Shoes"/>
                        </figure>
                        <div className="card-body w-96 text-accent">
                            <h2 className="card-title text-accent">Shoes!</h2>
                            <p className="text-accent">If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-primary shadow-xl image-full">
                        <figure className="bg-primary w-96">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s" alt="Shoes"/>
                        </figure>
                        <div className="card-body w-96 text-accent">
                            <h2 className="card-title text-accent">Shoes!</h2>
                            <p className="text-accent">If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-primary shadow-xl image-full">
                        <figure className="bg-primary w-96">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s" alt="Shoes"/>
                        </figure>
                        <div className="card-body w-96 text-accent">
                            <h2 className="card-title text-accent">Shoes!</h2>
                            <p className="text-accent">If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-primary shadow-xl image-full">
                        <figure className="bg-primary w-96">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2nG24AYDm6FOEC7jIfgubO96GbRso2Xshu1f8abSYQ&s" alt="Shoes"/>
                        </figure>
                        <div className="card-body w-96 text-accent">
                            <h2 className="card-title text-accent">Shoes!</h2>
                            <p className="text-accent">If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
