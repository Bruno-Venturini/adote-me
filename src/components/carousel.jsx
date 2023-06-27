import React from "react";
import Image from 'next/image';

export function Carousel() {
    return (
        <div className="flex flex-row flex-initial overflow-x-auto overflow-y-clip mt-5 m-auto artboard phone-rectangle-50prct w-64 bg-white items-center gap-3 rounded-2xl">
            <div className="card w-96 bg-primary shadow-xl image-full">
                <figure className="bg-primary w-96">
                    <img src="https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NDEyMjI1MTIy/samoyed.jpg" alt="Shoes"/>
                </figure>
                <div className="card-body w-96 text-accent">
                    <h2 className="card-title text-accent ">Nome Pet</h2>
                    <p className="text-accent">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary text-white">Me Adote</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-primary shadow-xl image-full">
                <figure className="bg-primary w-96">
                    <img src="https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NDEyMjI1MTIy/samoyed.jpg" alt="Shoes"/>
                </figure>
                <div className="card-body w-96 text-accent">
                    <h2 className="card-title text-accent ">Nome Pet</h2>
                    <p className="text-accent">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary text-white">Me Adote</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-primary shadow-xl image-full">
                <figure className="bg-primary w-96">
                    <img src="https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NDEyMjI1MTIy/samoyed.jpg" alt="Shoes"/>
                </figure>
                <div className="card-body w-96 text-accent">
                    <h2 className="card-title text-accent">Nome Pet</h2>
                    <p className="text-accent">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary text-white">Me Adote</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-primary shadow-xl image-full">
                <figure className="bg-primary w-96">
                    <img src="https://paradepets.com/.image/t_share/MTkxMzY1Nzg4NDEyMjI1MTIy/samoyed.jpg" alt="Shoes"/>
                </figure>
                <div className="card-body w-96 text-accent">
                    <h2 className="card-title text-accent ">Nome Pet</h2>
                    <p className="text-accent">If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary text-white">Me Adote</button>
                    </div>
                </div>
            </div>
        </div>
    );
}