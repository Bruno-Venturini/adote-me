import {Navbar} from "@/components/navigation/navbar";
import {Sidebar} from "./sidebar";
import {Dashboard} from "./dashboard";

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