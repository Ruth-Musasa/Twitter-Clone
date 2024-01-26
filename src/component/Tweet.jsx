import TweetAction from "./TweetAction"
export default function Tweet({ tweet }) {
    let date = (data) => {
        return new Date(data).toDateString()
    }
    return (
        <div className='borderContent'>
            <div className="flex-auto w-[15%]" >
                <img src={tweet.url} alt="Photo_utilisateur" className="rounded-full h-12 w-12" />
            </div>
            <div className="flex-auto w-[85%]">
                <div className="flex">
                    <h3 className="font-bold">{tweet.title}</h3>
                    {tweet.isVerified && <img src="src/assets/Icons/Verified.svg" className="px-1.5 " alt="" />}
                    <span className="text-gray-500">@{tweet.userId}</span>
                </div>
                <div><p className=" py-3 text-zinc-300 text-base leading-5"> {tweet.body} </p></div>
                {(tweet.thumbnailUrl) && <img src={tweet.thumbnailUrl} alt="Photo_tweeter" className=" max-h-[459px] rounded-lg" />}
                <TweetAction comment={tweet.replies} repost={tweet.repost} like={tweet.like} />
            </div>
        </div>
    )
}
