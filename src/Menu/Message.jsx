import Header from "../component/Header";

export default function Message() {
    return (
        <div className="menuContent">
            <Header name='Message' src='/src/assets/Icons/Messages-Fill.svg' />
            <div className="space-x-4 border-x-[1px] border-b-[1px] border-gray-900 p-20 h-screen">
                <h2 className="text-2xl text-bold  font-black tracking-wide">Welcome to your inbox!</h2>
                <p className="text-zinc-500 leading-8 pb-10">
                    Drop a line, share posts and more with private conversations between you and others on X. </p>
                <button type="button" className='btn-primary h-14 w-56 text-lg font-bold 2xl:w-52 md:w-40'>Write a message</button>
            </div>
        </div>
    )
}