import Image from 'next/image'
import React from "react";
import {Navigation} from "@/components/navigation/navigation";

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
                <div
                    className="flex artboard basis-full m-auto phone-rectangle-lg w-full p-5 shadow-lg justify-between h-full bg-secondary items-center">
                    <div className="relative left-16">
                        <svg width="41" viewBox="0 0 82 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clipRule="evenodd"
                                  d="M53.8125 29.0417C59.0017 29.0417 63.2084 22.5405 63.2084 14.5208C63.2084 6.5012 59.0017 0 53.8125 0C48.6233 0 44.4167 6.5012 44.4167 14.5208C44.4167 22.5405 48.6233 29.0417 53.8125 29.0417ZM17.0833 35.0208C17.0833 42.097 13.2591 47.8333 8.54167 47.8333C3.82424 47.8333 0 42.097 0 35.0208C0 27.9447 3.82424 22.2083 8.54167 22.2083C13.2591 22.2083 17.0833 27.9447 17.0833 35.0208ZM82 35.0208C82 42.097 78.1758 47.8333 73.4583 47.8333C68.7409 47.8333 64.9167 42.097 64.9167 35.0208C64.9167 27.9447 68.7409 22.2083 73.4583 22.2083C78.1758 22.2083 82 27.9447 82 35.0208ZM37.5833 14.5208C37.5833 22.5405 33.3767 29.0417 28.1875 29.0417C22.9983 29.0417 18.7917 22.5405 18.7917 14.5208C18.7917 6.5012 22.9983 0 28.1875 0C33.3767 0 37.5833 6.5012 37.5833 14.5208ZM62.6945 72.5227C67.1191 69.624 70.0417 64.6221 70.0417 58.9375C70.0417 49.9744 62.7757 42.7083 53.8125 42.7083C48.6046 42.7083 43.9696 45.1614 41 48.9751C38.0304 45.1614 33.3954 42.7083 28.1875 42.7083C19.2244 42.7083 11.9583 49.9744 11.9583 58.9375C11.9583 64.6222 14.8811 69.6242 19.3058 72.5229L38.7014 90.1598C40.0047 91.3449 41.9954 91.3449 43.2987 90.1598L62.6945 72.5227Z"
                                  fill="white"/>
                        </svg>
                    </div>
                    <div className="join items-center w-7/12 shadow rounded-full">
                        <input className="input input-sm rounded-full w-full join-horizontal"
                               placeholder="Pesquise animais, ongs, raças..."/>
                        <button className="btn btn-circle btn-sm btn-secondary -ml-7 z-50 ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7" fill="none" viewBox="0 0 24 24"
                                 stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="relative right-8">
                        <svg width="25" viewBox="0 0 55 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M54.0935 15.1144C54.0935 23.4618 47.3266 30.2287 38.9792 30.2287C30.6317 30.2287 23.8648 23.4618 23.8648 15.1144C23.8648 6.76693 30.6317 0 38.9792 0C47.3266 0 54.0935 6.76693 54.0935 15.1144Z"
                                fill="white"/>
                            <path
                                d="M30.2287 15.1144C30.2287 23.4618 23.4618 30.2287 15.1144 30.2287C6.76693 30.2287 0 23.4618 0 15.1144C0 6.76693 6.76693 0 15.1144 0C23.4618 0 30.2287 6.76693 30.2287 15.1144Z"
                                fill="white"/>
                            <path
                                d="M29.1876 44.1919C27.9738 45.2956 26.1199 45.2956 24.9061 44.1919L5.57836 26.6167C3.42671 24.6601 4.81086 21.0805 7.71908 21.0805L46.3746 21.0805C49.2828 21.0805 50.6669 24.6601 48.5153 26.6167L29.1876 44.1919Z"
                                fill="white"/>
                        </svg>
                    </div>
                    <div className="relative right-16">
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
                                </div>
                            </label>
                            <ul tabIndex="0"
                                className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-64 z-50">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
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
                            <img src="https://www.cidademarketing.com.br/marketing/wp-content/uploads/2021/08/vivo_pets-scaled.jpg" className="w-full border rounded-b-2xl"/>
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
