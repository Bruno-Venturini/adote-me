import React from "react";
import Image from 'next/image';

export function Carousel(props) {
    return (
        <div className="flex flex-row flex-initial overflow-x-auto overflow-y-clip mt-5 m-auto artboard phone-rectangle-50prct w-64 bg-white items-center gap-3 rounded-2xl">
            {props.children}
        </div>
    );
}