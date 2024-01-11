export default function TweetAction(props) {
    return (
        <div className="flex justify-between text-gray-500 text-xs text-center py-2.5" >
            <div className="flex w-[25%] ">
                <button> <img src="src/assets/Icons/Reply.svg" alt="" /></button>
                <span className="pl-3.5 pt-1.5" >156</span>
            </div>
            <div className="flex w-[25%]"> <button><img src="src/assets/Icons/Retweet.svg" alt="" /></button>
                <span className="pl-3.5 pt-1.5">134k</span>
            </div>
            <div className="flex w-[25%] "> 
            <button><img src="src/assets/Icons/React.svg" alt="" /></button>
                <span className="pl-3.5 pt-1.5">13k</span>
            </div>
            <div className="flex w-[25%] "> <button> <img src="src/assets/Icons/Share.svg" alt="" /></button>
            </div>
        </div>
    )
}