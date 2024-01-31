import { useContext, useState } from "react"
import { ProphilUser } from "../App"
import { Link } from "react-router-dom"
export default function TweetEditor() {
    const user = useContext(ProphilUser)
    return (
        <div className="borderContent h-[119px] ">
            <div className="flex-auto w-[15%]" >
                <Link to='/Profile'>
                    <img src={user.profil} alt="Photo_utilisateur" className="rounded-full h-12 w-12" />
                </Link>
            </div>
            <div className="flex-auto w-[85%]">
                <div className="h-3/5"> <textarea placeholder="What’s happening?" name="body" id='body' cols="30" rows="10" className="w-full h-5/6 bg-black text-xl focus:border-blue-400 outline-none"></textarea>
                </div>
                <div className="flex justify-between ">
                    <div className="flex justify-between" >
                        <button type="button relative">
                            <input type="file" name="image" id="image" className="absolute w-6 opacity-0" />
                            <img className='' src="/src/assets/Icons/Media.svg" alt="" />
                        </button>
                        <button type="button">
                            <img className='px-3.5' src="/src/assets/Icons/Gif.svg" alt="" />
                        </button>
                        <button type="button">
                            <img src="/src/assets/Icons/Poll.svg" alt="" />
                        </button>
                        <button type="button">
                            <img className='px-3.5' src="/src/assets/Icons/Emoji.svg" alt="" />
                        </button>
                        <button type="button">
                            <img src="/src/assets/Icons/Schedule.svg" alt="" />
                        </button>
                    </div>
                    <button className="btn-primary h-9 w-20">Tweet</button>
                </div>
            </div>
        </div>
    )
}

