import TrendingList from "../component/TrendingList"

export default function Explore() {
    return (
        <div className="menuContent">
            <iframe  className=" border-[1px] border-gray-900 w-full" height="400" src="https://www.youtube.com/embed/zudkSqxBq8s" title="Maleficent :30s Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className="space-x-4 border-x-[1px] border-b-[1px] border-gray-900 pr-4">
                <h2 className="text-2xl text-bold p-4 font-black tracking-wide">Trends for you</h2>
                <TrendingList />
                <TrendingList />
                <TrendingList />
                <TrendingList />
                <div className="py-4 text-sky-500">
                    <button className="text-base font-bold hover:text-blue-800">Show more</button>
                </div>
            </div>
        </div>
    )
}