export function ElementNav(props) {
    return (
        <div>
            <div className="flex h-16 font-bold 2xl:text-xl lg:text-lg rounded-full lg:hover:bg-stone-950 pl-4">
                <img className="h-6 self-center " src={props.source} alt="" />
                <h3 className="pl-7 self-center invisible lg:visible">{props.title} </h3>
            </div>
            <section>
                {props.children}
            </section>
        </div>
    )
}
