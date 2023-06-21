export function Navbar() {
    return (
        <div>
            <div className="navbar bg-primary">
                <div className="flex-0 gap-1">
                    <a className="btn btn-ghost normal-case text-xl">Adote-me!</a>
                </div>
                <div className="flex-auto gap-2 px-8">
                    <input type="text" placeholder="Search" className="input input-sm input-bordered w-full"/>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>
                            </div>
                        </label>
                        <ul tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}