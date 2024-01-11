import { useState } from 'react'
import Header from '../component/Header'
import TweetEditor from '../component/TweetEditor'
import Tweet from '../component/Tweet'
import { AuterTweet } from '../component/Tweet'
// import TrendingList from './component/TrendingList'
// import ContendTrend from './component/ContendTrend'
// import FollowList from './component/FollowList'

export default function Home() {
    const [tweets, setTweets] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form);
        let tweet = Object.fromEntries(data)
        form.reset()
        setTweets([tweet, ...tweets])
    }
    return (
        <div className='flex-auto w-5/12 h-2/4 '>
            <Header name='Home' src='src/assets/Icons/Timeline-Prop.svg' />
            <form onSubmit={handleSubmit} >
                <TweetEditor />
            </form>
            <div>
                <Tweet tweets={tweets} />
                <AuterTweet avatar='src/assets/Profile-Photo (1).svg' name='CNN' link='@CNN' text='President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.' />
                <AuterTweet img='true' avatar='src/assets/image 1.png' name='The New York Times' link='@nyTimes' text='Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a condiv to cultivation and the land' />
                <AuterTweet avatar='src/assets/Profile-Photo.png' name='Twitter' link='@Twitter' text='BIG NEWS lol jk still Twitter' />
                <AuterTweet avatar='src/assets/Profile-Photo.png' name='Twitter' link='@Twitter' text='hello literally everyone' />
                <AuterTweet avatar='src/assets/Profile-Photo.png' name='Twitter' link='@Twitter' text='hello literally everyone' />
            </div>
        </div>
    )
}