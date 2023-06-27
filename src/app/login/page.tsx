import {Navigation} from "@/components/navigation/navigation";
import React, {useState} from "react";
import {Logo} from "@/components/logo"
import {ReturnArrow} from "@/components/returnarrow"

export default function Login() {

    return (
        <div className="bg-secondary">
            <div className="h-screen w-full flex items-center place-content-center">
                <div className="bg-white flex artboard grid grid-cols-3 grid-flow-row phone-square place-content-baseline ">
                    <ReturnArrow></ReturnArrow>
                    <div className="flex place-content-center mt-20 row-span-2">
                        <Logo colorFill="#F26363"></Logo>
                    </div>
                    <div className="mt-4 row-start-3 col-span-3 flex place-content-center items-center">
                        <input type="text" placeholder="Digite seu usuário..."
                               className="bg-primary input input-bordered input-black w-full max-w-xs placeholder-gray-400 text-black"/>
                    </div>
                    <div className="mt-4 row-start-6 col-span-3 flex place-content-center items-center">
                        <input type="text" placeholder="Digite sua senha..."
                               className="bg-primary input input-bordered input-black w-full max-w-xs placeholder-gray-400 text-black"/>
                    </div>
                    <div className="row-start-7 col-start-2 mt-4 ml-2 flex items-center place-content-start">

                    </div>
                    <div className="row-start-7 col-start-2 mt-4 ml-2 flex items-end place-content-center">
                        <div>
                            <button className="btn btn-secondary hover:btn-accent">Login</button>
                        </div>
                        <a href="/cadastro/usuario" className="font-medium text-blue-600 text-sm ml-2 dark:text-secondary hover:underline">
                            Não tem uma conta? cadastre-se
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}