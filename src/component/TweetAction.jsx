import tweetsFake from '/src/assets/tweets-x.json'
import React, { useState } from 'react';
export default function TweetAction(props) {
    const [count, setCount] = useState(0);
    const [decount, setDecount] = useState(true);
    function likess() {
        if (decount) {
            setCount(count + 1)
            setDecount(false)
        } else {
            setCount(count - 1)
            setDecount(true)
        }
        
    }
    return (
        <div className="flex justify-between text-gray-500 text-xs text-center py-2.5" >
            <div className="flex w-[25%] ">
                <button> <img src="src/assets/Icons/Reply.svg" alt="" /></button>
                <span className="pl-3.5 pt-1.5" >{props.comment} </span>
            </div>
            <div className="flex w-[25%]"> <button><img src="src/assets/Icons/Retweet.svg" alt="" /></button>
                <span className="pl-3.5 pt-1.5">{props.repost}</span>
            </div>
            <Like likess={likess} count={count} decount={decount} />
            <div className="flex w-[25%] "> <button> <img src="src/assets/Icons/Share.svg" alt="" /></button>
            </div>
        </div>
    )
}

function Like({ likess, count, decount}) {
    if (decount) {
        return (
            <div className="flex w-[25%] " >
                <img onClick={likess} className='' src="src/assets/Icons/React.svg" alt="" />
                <span className="pl-3.5 pt-1.5" >{count}</span>
            </div>)
    } else {
        return (
            <div className="flex w-[25%] " >
                <svg onClick={likess} xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                    <path fill="#e01b24" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                <span className="pl-3.5 pt-1.5" >{count}</span>
            </div>)
    }
}
