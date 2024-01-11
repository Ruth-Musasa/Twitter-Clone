import tweetsFake from '/src/assets/tweets-x.json'
import React, { useState } from 'react';
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
            <Like />
            <div className="flex w-[25%] "> <button> <img src="src/assets/Icons/Share.svg" alt="" /></button>
            </div>
        </div>
    )
}

function Like() {
    const [count, setCount] = useState(0);
    return (
        <div className="flex w-[25%] ">
            <button onClick={() => setCount(count + 1)}>
                <img className='' src="src/assets/Icons/React.svg" alt="" />
            </button>
            <span className="pl-3.5 pt-1.5" >{count}  </span>
        </div>
    );
}
