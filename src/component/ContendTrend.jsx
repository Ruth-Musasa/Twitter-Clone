export default function ContendTrend(props) {
    return (
        <div className='border border-zinc-800 bg-zinc-800 rounded-lg mt-4 w-full '>
            <div className="flex justify-between">
                <div
                    className="text-xl font-bold p-4 "> <h2>{props.name}</h2>
                </div>
                <div className="p-4">
                    {(props.icon) && <button type="button"><img src="src/assets/Icons/Settings.svg" alt="Photo_icon" /></button>}
                    {(!props.icon) && <></>}
                </div>
            </div>
            {props.children}
            <div className="pt-4 text-sky-500">
                <button className="text-base font-bold hover:text-blue-800 p-4 ">Show more</button>
            </div>
        </div>
    )
}