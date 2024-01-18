import TweetAction from "./TweetAction"
export default function Tweet({ tweets }) {
    let user = {
        "author_avatar": "src/assets/profile-pic(1).png",
        "source": "Ruth",
        "date": 1604299903000,
        "favorites": "0",
        "id": "1323155810910982145",
        "isVerified": true,
        "replies": "0",
        "retweets": "0",
    }
    return (
        <ul>
            {
                tweets.map(function (tweet) {
                    let date = (data) => {
                        return new Date(data).toDateString()
                    }
                    console.log(date(tweet.date));
                    return (
                        <div className='borderContent '>
                            <div className="flex-auto w-[15%]" >
                                <img src={tweet.author_avatar ?? user.author_avatar} alt="Photo_utilisateur" className="rounded-full h-12 w-12" />
                            </div>
                            <div className="flex-auto w-[85%] ">
                                <div className="flex">
                                    <h3 className="font-bold">{tweet.source ?? user.source}</h3>
                                    {((tweet.isVerified == true) && <img src="src/assets/Icons/Verified.svg" className="px-1.5 " alt="" />) ||
                                        ((user.isVerified == true) && <img src="src/assets/Icons/Verified.svg" className="px-1.5 " alt="" />)}
                                    <span className="text-gray-500">@{tweet.source ?? user.source}  . {`${date(tweet.date)}` ?? `${date(user.date)}` }  </span>
                                </div>
                                <div><p className=" py-3 text-zinc-300 text-base leading-5"> {tweet.text} </p></div>
                                {(tweet.image) && <img src={tweet.image} alt="Photo_utilisateur" className=" max-h-96 rounded-lg" />}
                                <TweetAction comment={tweet.replies ?? user.replies} repost={tweet.retweets ?? user.retweets} like={tweet.favorites ?? user.favorites}  />
                            </div>
                        </div>
                    )
                })
            }
        </ul >
    )
}
