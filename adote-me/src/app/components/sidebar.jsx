export function Sidebar() {

    return(
        <div className="flex flex-col flex-full h-screen">
            <div className="flex-initial">
                <ul className="menu p-4 w-64 h-full bg-base-100 text-base-content">
                    <div>
                        <div>
                            <button className="row-span-1 btn btn-accent w-full px-5">
                                Login
                            </button>
                        </div>
                    </div>
                </ul>
            </div>
            <div className="flex-full mb-20 h-screen w-64 px-5">
                <div className="bg-primary h-screen artboard phone-sm rounded-lg text-center">
                    a
                </div>
            </div>
        </div>
    )
}