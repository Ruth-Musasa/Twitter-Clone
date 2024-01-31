import TrendingList from './TrendingList'
import FollowList from './FollowList'
import SearchTweet from './SearchTweet.jsx'
export default function ContendTrend(props) {
    return (
        <div className='border border-zinc-800 bg-zinc-800 rounded-lg mt-4 w-full '>
            <div className="flex justify-between">
                <div
                    className="text-xl font-bold py-2 px-4 "> <h2>{props.name}</h2>
                </div>
                <div className="p-4">
                    {(props.icon) && <button type="button"><img src="/src/assets/Icons/Settings.svg" alt="Photo_icon" /></button>}
                    {(!props.icon) && <></>}
                </div>
            </div>
            {props.children}
            <div className="text-sky-500">
                <button className="text-base font-bold hover:text-blue-800 p-4 ">Show more</button>
            </div>
        </div>
    )
}
export function Trend() {
    return (
        <div className='fixed'>
            <SearchTweet />
            <ContendTrend name='Trends for you' icon='yes'>
                <TrendingList />
                <TrendingList />
                <TrendingList />
            </ContendTrend>
            <ContendTrend name='Who to follow'>
                <FollowList src='/src/assets/image 1.png' name='The New York Times' link='@nyTimes' btn='yes' />
                <FollowList src='/src/assets/Profile-Photo (1).svg' name='CNN' link='@CNN' btn='yes' />
                <FollowList src='/src/assets/Profile-Photo (1).svg' name='CNN' link='@CNN' btn='yes' />
            </ContendTrend>
            <div className='text-zinc-500 text-sm text-justify p-4'>
                Terms of Service  Privacy Policy  Cookie Policy <br /> Imprint Ads info More ... © 2021  Twitter, Inc.
            </div>
        </div>
    )
}