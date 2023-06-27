import React from "react";
import {Logo} from "@/components/logo";

export default function Cadastro() {
    return (
        <div className="bg-secondary">
            <div className="h-screen w-full flex items-center place-content-center">
                <div className="bg-white flex artboard grid grid-cols-5 grid-flow-row phone-square-lg place-content-baseline ">
                    <div className="items-start mt-3 ml-5 row-start-1">
                        <a href="/login">
                            <svg width="33px" height="35px" viewBox="0 0 66 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="33" cy="36" r="33" fill="#F26363"/>
                                <path d="M16.9393 34.9393C16.3536 35.5251 16.3536 36.4749 16.9393 37.0607L26.4853 46.6066C27.0711 47.1924 28.0208 47.1924 28.6066 46.6066C29.1924 46.0208 29.1924 45.0711 28.6066 44.4853L20.1213 36L28.6066 27.5147C29.1924 26.9289 29.1924 25.9792 28.6066 25.3934C28.0208 24.8076 27.0711 24.8076 26.4853 25.3934L16.9393 34.9393ZM51 34.5L18 34.5V37.5L51 37.5V34.5Z" fill="white"/>
                                <path d="M16.9393 34.9393C16.3536 35.5251 16.3536 36.4749 16.9393 37.0607L26.4853 46.6066C27.0711 47.1924 28.0208 47.1924 28.6066 46.6066C29.1924 46.0208 29.1924 45.0711 28.6066 44.4853L20.1213 36L28.6066 27.5147C29.1924 26.9289 29.1924 25.9792 28.6066 25.3934C28.0208 24.8076 27.0711 24.8076 26.4853 25.3934L16.9393 34.9393ZM51 34.5L18 34.5V37.5L51 37.5V34.5Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex place-content-center mt-20 row-start-1 row-span-1 col-start-3">
                        <Logo colorFill="#F26363"></Logo>
                    </div>
                    <div className="mt-4 row-start-2 col-start-2 col-span-2 flex place-content-start items-center">
                        <input type="text" placeholder="Digite seu nome..."
                               className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>
                    <div className="mt-4 row-start-2  col-start-3 col-span-2 flex place-content-end items-center">
                        <input type="text" placeholder="Digite seu usuário..."
                               className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>
                    <div className="mt-4 row-start-3 col-start-2 col-span-2 flex place-content-start items-center">
                        <input type="text" placeholder="Digite seu email..."
                               className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>
                    <div className="mt-4 row-start-3  col-start-3 col-span-2 flex place-content-end items-center">
                        <input type="text" placeholder="Digite sua data de nascimento..."
                               className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>
                    <div className="mt-4 row-start-4 col-start-2 col-end-5 flex place-content-start items-center">
                        <input type="text" placeholder="Digite seu endereço..."
                               className="bg-primary input input-md input-secondary w-full placeholder-gray-500 text-black"/>
                    </div>
                    <div className="mt-4 row-start-5  col-start-2 col-span-2 flex place-content-start items-center">
                        <input type="password" placeholder="Digite sua senha..."
                               className="bg-primary input input-md input-secondary w-8/12 placeholder-gray-500 text-black"/>
                    </div>
                    <div className="mt-4 row-start-5 col-start-3 col-span-2 flex place-content-end items-center">
                        <select className="bg-primary select select-secondary w-8/12 text-black max-w-xs selected">
                            <option selected disabled>Escolha o que você representa</option>
                            <option>Pessoa física</option>
                            <option>Instituição privada</option>
                            <option>ONG (Organização não governamental)</option>
                        </select>
                    </div>
                    <div className="row-start-7 col-start-3 mt-4 flex items-center place-content-center">
                        <div>
                            <button className="btn btn-secondary hover:btn-accent">Cadastrar-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}