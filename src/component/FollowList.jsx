export default function FollowList(props) {
    return (
        <div className="flex justify-between py-4 leading-6 hover:bg-zinc-900 p-4 invisible xl:visible">
            <div className="flex ">
                <div> <img src={props.src} alt="" className={`rounded-full h-12 w-12 ${props.classe} `} /> </div>
                <div className="pl-2">
                    <div>{props.name}</div>
                    <span className="text-zinc-500">{props.link} </span>
                </div>
                <img src={props.private ?? 'src/assets/Icons/Verified.svg'} alt="" className="h-5" />
            </div>
            <div>
                {(props.btn) && <button type="submit" className=" w-20 h-8 bg-white text-black rounded-full shadow-md hover:bg-black-600 hover:bg-stone-400"> Follow</button>}
                {(!props.btn) && <button type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" fill="#D9D9D9" />
                    <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="#D9D9D9" />
                    <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" fill="#D9D9D9" />
                </svg></button>}
            </div>
        </div>
    )
}
