import {Navbar} from "@/app/components/navbar";

export function Sidebar() {

    return(
        <div className="drawer-open">
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 h-full bg-base-100 text-base-content">
                    <button className="btn btn-primary">
                        Login
                    </button>
                </ul>
            </div>
        </div>
    )
}