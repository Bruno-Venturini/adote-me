import React from "react";
import {Logo} from "@/components/logo";
import {ReturnArrow} from "@/components/returnarrow";

export default function Cadastro() {
    return (
        <div className="bg-secondary">
            <div className="h-screen w-full flex items-center place-content-center">
                <div className="bg-white flex artboard grid grid-cols-5 grid-flow-row phone-square-lg place-content-baseline ">
                    <ReturnArrow path="/login"></ReturnArrow>
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