export function Dashboard(props) {
    return (
        <div className="bg-primary px-2">
            <div className="relative h-screen w-full md:w-auto ...">
                <div className="absolute inset-y-0 left-0 w-16 ...">
                    <div className="flex gap-2">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}