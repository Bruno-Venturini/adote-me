import React from "react";

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
                        <svg width="50px" viewBox="0 0 140 175" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M115.36 115.117C115.36 138.08 95.0515 156.695 69.9999 156.695C44.9483 156.695 24.6399 138.08 24.6399 115.117C24.6399 92.1541 44.9483 73.539 69.9999 73.539C95.0515 73.539 115.36 92.1541 115.36 115.117Z" fill="#F26363"/><path d="M139.432 62.6316C139.432 77.8921 133.291 90.2632 125.716 90.2632C118.141 90.2632 112 77.8921 112 62.6316C112 47.3711 118.141 35 125.716 35C133.291 35 139.432 47.3711 139.432 62.6316Z" fill="#F26363"/><path d="M28.4324 62.6316C28.4324 77.8921 22.2915 90.2632 14.7162 90.2632C7.14096 90.2632 1 77.8921 1 62.6316C1 47.3711 7.14096 35 14.7162 35C22.2915 35 28.4324 47.3711 28.4324 62.6316Z" fill="#F26363"/><path d="M108.567 27.6316C108.567 42.8921 101.368 55.2632 92.4864 55.2632C83.605 55.2632 76.4053 42.8921 76.4053 27.6316C76.4053 12.3711 83.605 0 92.4864 0C101.368 0 108.567 12.3711 108.567 27.6316Z" fill="#F26363"/><path d="M64.1081 27.6316C64.1081 42.8921 56.6966 55.2632 47.5541 55.2632C38.4115 55.2632 31 42.8921 31 27.6316C31 12.3711 38.4115 0 47.5541 0C56.6966 0 64.1081 12.3711 64.1081 27.6316Z" fill="#F26363"/></svg>
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