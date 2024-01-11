import TweetAction from "./TweetAction"
export default function Tweet({ tweets }) {
    return (
            <ul>
                {
                    tweets.map(function (tweet) {
                        return (
                            <div className='borderContent '>
                                <div className="flex-auto w-[15%]" >
                                    <img src="src/assets/profile-pic(1).png" alt="Photo_utilisateur" className="rounded-full h-12 w-12" />
                                </div>
                                <div className="flex-auto w-[85%] ">
                                    <div className="flex">
                                        <h3 className="font-bold">Ruth</h3>
                                        <img src="src/assets/Icons/Verified.svg" className="px-1.5 " alt="" />
                                        <span className="text-gray-500">@R_Muss . 1m</span>
                                    </div>
                                    <div><p className=" py-3 text-zinc-300 text-base leading-5"> {tweet.text} </p></div>
                                    {(tweet.img) && <img src="src/assets/Img.png" alt="Photo_utilisateur" className="w-full " />}
                                    {(!tweet.img) && <></>}
                                    <TweetAction />
                                </div>
                            </div>
                        )
                    })
                }
            </ul >
    )
}
export function AuterTweet(props) {
    return (
        <div className='borderContent px-3 '>
            <div className="flex-auto w-[15%]" >
                <img src={props.avatar} alt="Photo_utilisateur" className="w-10 rounded-full h-12 w-12" />
            </div>
            <div className="flex-auto w-[85%] ">
                <div className="flex">
                    <h3 className="font-bold">{props.name}</h3>
                    <img className="px-1.5 " src="src/assets/Icons/Verified.svg" alt="" />
                    <span className="text-gray-500">{props.link} . 7h </span>
                </div>
                <div><p className="py-3 text-zinc-300 text-base leading-5">{props.text} </p>
                    {(props.img) && <img src="src/assets/Img.png" alt="Photo_utilisateur" className="w-full " />}
                    {(!props.img) && <></>}</div>
                <TweetAction />
            </div>
        </div>
    )
}
