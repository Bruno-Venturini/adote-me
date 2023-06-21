import {Navbar} from "@/app/components/navbar";
import {Sidebar} from "@/app/components/sidebar";
import {Dashboard} from "@/app/components/dashboard";

export function Navigation(props) {
    return(
        <div data-theme="mytheme" className="flex flex-row">
            <div className="flex-initial">
                <Sidebar></Sidebar>
            </div>
            <div className="flex-1">
                <Navbar></Navbar>
                <Dashboard>{props.children}</Dashboard>
            </div>
        </div>
    )
}