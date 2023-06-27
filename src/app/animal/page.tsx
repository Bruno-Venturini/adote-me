import React from "react";

export default function Animal() {
    return(
        <div className="bg-secondary">
            <div className="h-screen w-full flex items-center place-content-center">
                <div className="bg-white flex artboard grid grid-cols-5 grid-rows-7 grid-flow-row phone-square-lg place-content-baseline">
                    <div className="flex place-content-center col-start-2 col-span-3 row-start-1 mt-20 text-black text-xl">
                        Cadastro do animal
                    </div>
                    <div className="flex place-content-center mt-20 row-start-1 row-span-1 col-start-3"></div>
                    <div className="mt-4 row-start-2 col-start-2 col-span-2 flex place-content-start items-center">
                        <input type="text" placeholder="Digite o nome do animal..."
                               className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>                    
                    <div className="mt-4 row-start-2 col-start-3 col-span-2 flex place-content-end items-center">
                        <select className="bg-primary select select-secondary w-8/12 text-black max-w-xs selected">
                            <option selected disabled>Que animal é?</option>
                            <option>Gato</option>
                            <option>Cachorro</option>
                        </select>
                    </div>
                    <div className="mt-4 row-start-3 col-start-2 col-span-2 flex place-content-start items-center">
                        <input type="text" placeholder="Digite a raça do animal..."
                               className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>
                    <div className="mt-4 row-start-3 col-start-3 col-span-2 flex place-content-end items-center">
                        <select className="bg-primary select select-secondary w-8/12 text-black max-w-xs selected">
                            <option selected disabled>Qual o sexo do animal?</option>
                            <option>Macho</option>
                            <option>Fêmea</option>
                        </select>
                    </div>
                    <div className="mt-4 row-start-4 col-start-3 col-span-2 flex place-content-end items-start">
                        <input type="number" placeholder="Quantos anos o animal tem"
                                className="bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>
                    <div className="mt-4 row-start-4 col-start-2 col-span-2 flex place-content-start items-center">
                        <textarea placeholder="Descrição do animal..."
                            className="textarea bg-primary input input-md input-secondary w-8/12 max-w-xs placeholder-gray-500 text-black"/>
                    </div>
                    <div className="row-start-7 col-start-3 mt-4 flex items-center place-content-center">
                        <button className="btn btn-secondary hover:btn-accent">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}