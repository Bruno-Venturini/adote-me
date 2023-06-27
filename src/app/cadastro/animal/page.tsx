"use client";
import React, { useState } from "react";
import { Navbar } from "@/components/navigation/navbar";
import { Logo } from "@/components/logo";
import { cadastroAnimal } from "@/script";

export default function Animal() {
    const [nome, setNome] = useState("");
    const [tipoanimal, setTipoanimal] = useState("");
    const [raca, setRaca] = useState("");
    const [sexo, setSexo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [anos, setAnos] = useState(0);
    const [imagem, setImagem] = useState("");

    let submitAnimal = () => {
        cadastroAnimal(nome, tipoanimal, raca, sexo, descricao, anos, imagem)

        alert("Animal cadastrado com sucesso!");
        window.location.href = "/";
    }
    
    return(
        <div className="bg-white">
            <Navbar/>
            <div className="h-screen w-full flex items-start mt-5 place-content-center">
                <div className="bg-white flex artboard grid grid-cols-5 grid-rows-7 grid-flow-row phone-square-lg place-content-baseline shadow-2xlxl shadow-2xl">
                    <div className="flex place-content-center col-start-2 col-span-3 row-start-1 mt-20">
                        <div className="flex items-center">
                            <Logo colorFill="#F26363"/>
                            <div className="ml-5 text-xl text-secondary font-bold">
                                Cadastro do animal
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 row-start-2 col-start-2 col-span-2 flex place-content-start items-center">
                        <input type="text" placeholder="Digite o nome do animal..." value={nome} onChange={e => setNome(e.target.value)}
                               className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>                    
                    <div className="mt-4 row-start-2 col-start-3 col-span-2 flex place-content-end items-center">
                        <select className="bg-primary select select-secondary w-8/12 text-black max-w-xs selected" value={tipoanimal} onChange={e => setTipoanimal(e.target.value)}>
                            <option selected disabled>Que animal é?</option>
                            <option>Gato</option>
                            <option>Cachorro</option>
                        </select>
                    </div>
                    <div className="mt-4 row-start-3 col-start-2 col-span-2 flex place-content-start items-center">
                        <input type="text" placeholder="Digite a raça do animal..." value={raca} onChange={e => setRaca(e.target.value)}
                               className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>
                    <div className="mt-4 row-start-3 col-start-3 col-span-2 flex place-content-end items-center">
                        <select className="bg-primary select select-secondary w-8/12 text-black max-w-xs selected" value={sexo} onChange={e => setSexo(e.target.value)}> 
                            <option selected disabled>Qual o sexo do animal?</option>
                            <option>Macho</option>
                            <option>Fêmea</option>
                        </select>
                    </div>
                    <div className="mt-4 row-start-4 col-start-3 col-span-2 flex place-content-end items-start">
                        <input type="number" placeholder="Quantos anos o animal tem" value={anos} onChange={e => setAnos(e.target.value)}
                                className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>
                    <div className="mt-4 row-start-4 col-start-2 col-span-2 flex place-content-start items-center">
                        <textarea placeholder="Descrição do animal..." value={descricao} onChange={e => setDescricao(e.target.value)}
                            className="textarea bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>
                    <div className="row-start-5 col-start-2 col-end-5 mt-4 flex items-center place-content-center">
                        <input type="text" placeholder="Endereço da imagem..." value={imagem} onChange={e => setImagem(e.target.value)}
                               className="bg-primary input input-md input-secondary w-full placeholder-gray-500 text-black"/>
                    </div>
                    <div className="row-start-7 col-start-3 mt-4 flex items-center place-content-center">
                        <button className="btn btn-secondary hover:btn-accent text-white" onClick={submitAnimal}>Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}