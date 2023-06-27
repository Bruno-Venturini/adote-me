import React from "react";

export function Logo(props){
    return (
        <div>
            <svg width={props.width ? props.width : "50"} viewBox="0 0 140 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M115.36 115.117C115.36 138.08 95.0515 156.695 69.9999 156.695C44.9483 156.695 24.6399 138.08 24.6399 115.117C24.6399 92.1541 44.9483 73.539 69.9999 73.539C95.0515 73.539 115.36 92.1541 115.36 115.117Z" fill={props.colorFill}/>
                <path d="M139.432 62.6316C139.432 77.8921 133.291 90.2632 125.716 90.2632C118.141 90.2632 112 77.8921 112 62.6316C112 47.3711 118.141 35 125.716 35C133.291 35 139.432 47.3711 139.432 62.6316Z" fill={props.colorFill}/>
                <path d="M28.4324 62.6316C28.4324 77.8921 22.2915 90.2632 14.7162 90.2632C7.14096 90.2632 1 77.8921 1 62.6316C1 47.3711 7.14096 35 14.7162 35C22.2915 35 28.4324 47.3711 28.4324 62.6316Z" fill={props.colorFill}/>
                <path d="M108.567 27.6316C108.567 42.8921 101.368 55.2632 92.4864 55.2632C83.605 55.2632 76.4053 42.8921 76.4053 27.6316C76.4053 12.3711 83.605 0 92.4864 0C101.368 0 108.567 12.3711 108.567 27.6316Z" fill={props.colorFill}/>
                <path d="M64.1081 27.6316C64.1081 42.8921 56.6966 55.2632 47.5541 55.2632C38.4115 55.2632 31 42.8921 31 27.6316C31 12.3711 38.4115 0 47.5541 0C56.6966 0 64.1081 12.3711 64.1081 27.6316Z" fill={props.colorFill}/>
            </svg>
        </div>
    )
}