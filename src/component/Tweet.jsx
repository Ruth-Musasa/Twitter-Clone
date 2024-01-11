import TweetAction from "./TweetAction"
export default function Tweet({ tweets }) {
    return (
        <ul>
            {
                tweets.map(function (tweet) {
                    return (
                        <div className='borderContent '>
                            <div className="flex-auto w-[15%]" >
                                <img src={tweet.author_avatar ?? "src/assets/profile-pic(1).png"} alt="Photo_utilisateur" className="rounded-full h-12 w-12" />
                            </div>
                            <div className="flex-auto w-[85%] ">
                                <div className="flex">
                                    <h3 className="font-bold">{tweet.source ?? 'Ruth'}</h3>
                                    <img src="src/assets/Icons/Verified.svg" className="px-1.5 " alt="" />
                                    <span className="text-gray-500">{tweet.source}  . 1m</span>
                                </div>
                                <div><p className=" py-3 text-zinc-300 text-base leading-5"> {tweet.text} </p></div>
                                {(tweet.image) && <img src={tweet.image} alt="Photo_utilisateur" className="w-full " />}
    
                                <TweetAction />
                            </div>
                        </div>
                    )
                })
            }
        </ul >
    )
}
