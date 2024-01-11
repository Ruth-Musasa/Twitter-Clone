import tweetsFake from '/src/assets/tweets-x.json'
export default function TweetAction(props) {
    return (
        <div className="flex justify-between text-gray-500 text-xs text-center py-2.5" >
            <div className="flex w-[25%] ">
                <button> <img src="src/assets/Icons/Reply.svg" alt="" /></button>
                <span className="pl-3.5 pt-1.5" >{props.comment} </span>
            </div>
            <div className="flex w-[25%]"> <button><img src="src/assets/Icons/Retweet.svg" alt="" /></button>
                <span className="pl-3.5 pt-1.5">{props.repost}</span>
            </div>
            <div className="flex w-[25%] "> 
            <button><img src="src/assets/Icons/React.svg" alt="" /></button>
                <span className="pl-3.5 pt-1.5">{props.like}</span>
            </div>
            <div className="flex w-[25%] "> <button> <img src="src/assets/Icons/Share.svg" alt="" /></button>
            </div>
        </div>
    )
}