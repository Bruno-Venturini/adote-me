import React from "react";

export function Card(props) {
    return(
        <div className="card w-96 bg-primary shadow-xl image-full">
            <figure className="bg-primary w-96">
                <img src={props.path} alt={props.alt}/>
            </figure>
            <div className="card-body w-96 text-accent">
                <h2 className="card-title text-accent ">{props.nome}</h2>
                <p className="text-accent">{props.descricao}</p>
                <div className="card-actions justify-end">
                    <a href="/perfil/animal" className="btn btn-secondary text-white">Me Adote</a>
                </div>
            </div>
        </div>
    )
}