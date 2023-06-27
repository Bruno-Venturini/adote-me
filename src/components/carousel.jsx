import React from "react";

export function Carousel() {
    return (
        <div className="flex flex-row flex-initial overflow-x-auto overflow-y-clip mt-5 m-auto artboard phone-rectangle-50prct rounded-sm w-64 bg-white items-center gap-3">
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
    );
}