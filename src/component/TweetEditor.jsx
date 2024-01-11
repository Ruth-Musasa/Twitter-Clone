
export default function TweetEditor(props) {
    return (
        <div className="borderContent h-[119px]">
            <div className="flex-auto w-[15%]" >
                <img src="src/assets/profile-pic(1).png" alt="Photo_utilisateur" className="rounded-full h-12 w-12" />
            </div>
            <div className="flex-auto w-[85%]">
                <div className="h-3/5"> <textarea placeholder="What’s happening?" name="text" id='text' cols="30" rows="10" className="w-full h-5/6 bg-black text-xl focus:border-blue-400"></textarea>
                </div>
                <div className="flex justify-between ">
                    <div className="flex justify-between" >
                        <button type="button">
                            <img src="src/assets/Icons/Media.svg" alt="" />
                        </button>
                        <button type="button">
                            <img className='px-3.5' src="src/assets/Icons/Gif.svg" alt="" />
                        </button>
                        <button type="button">
                            <img src="src/assets/Icons/Poll.svg" alt="" />
                        </button>
                        <button type="button">
                            <img className='px-3.5' src="src/assets/Icons/Emoji.svg" alt="" />
                        </button>
                        <button type="button">
                            <img src="src/assets/Icons/Schedule.svg" alt="" />
                        </button>
                    </div>
                    <button className="btn-primary h-9 w-20">Tweet</button>
                </div>
            </div>
        </div>
    )
}