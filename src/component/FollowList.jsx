export default function FollowList(props) {
    return (
        <div className="flex justify-between py-4 leading-6">
            <div className="flex ">
                <div> <img src={props.src} alt="" className={`rounded-full h-12 w-12 ${props.classe} `} /> </div>
                <div className="pl-2">
                    <div>{props.name}</div>
                    <span className="text-zinc-500">{props.link} </span>
                </div>
                <img src="src/assets/Icons/Verified.svg" alt="" className="h-5" />
            </div>
            <div>
                {(props.btn) && <button type="submit" className="w-20 h-8 bg-white text-black rounded-full shadow-md hover:bg-black-600"> Follow</button>}
                {(!props.btn) && <button type="button">. . .</button>}
            </div>
        </div>
    )
}
