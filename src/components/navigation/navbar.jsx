import React from "react";
import {Logo} from "@/components/logo";

export function Navbar(props) {
    return (
        <div
            className="flex artboard basis-full m-auto phone-rectangle-lg w-full p-5 shadow-lg justify-between h-full bg-secondary items-center">
            <div className="relative left-16">
                <Logo returnHome="true" width="41"></Logo>
            </div>
            <div className="join items-center w-7/12 shadow rounded-full">
                <input className="input input-sm rounded-full w-full text-black join-horizontal"
                       placeholder="Pesquise animais, ongs, raças..."/>
                <button className="btn btn-circle btn-sm btn-secondary -ml-7 z-50 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7" fill="none" viewBox="0 0 24 24"
                         stroke="white">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
            </div>
            <div className="relative right-8">
                <svg width="25" viewBox="0 0 55 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M54.0935 15.1144C54.0935 23.4618 47.3266 30.2287 38.9792 30.2287C30.6317 30.2287 23.8648 23.4618 23.8648 15.1144C23.8648 6.76693 30.6317 0 38.9792 0C47.3266 0 54.0935 6.76693 54.0935 15.1144Z"
                        fill="white"/>
                    <path
                        d="M30.2287 15.1144C30.2287 23.4618 23.4618 30.2287 15.1144 30.2287C6.76693 30.2287 0 23.4618 0 15.1144C0 6.76693 6.76693 0 15.1144 0C23.4618 0 30.2287 6.76693 30.2287 15.1144Z"
                        fill="white"/>
                    <path
                        d="M29.1876 44.1919C27.9738 45.2956 26.1199 45.2956 24.9061 44.1919L5.57836 26.6167C3.42671 24.6601 4.81086 21.0805 7.71908 21.0805L46.3746 21.0805C49.2828 21.0805 50.6669 24.6601 48.5153 26.6167L29.1876 44.1919Z"
                        fill="white"/>
                </svg>
            </div>
            <div className="relative right-16">
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
                        </div>
                    </label>
                    <ul tabIndex="0"
                        className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-64 z-50">
                        <li>
                            <a href="/perfil/usuario">
                                Profile
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}