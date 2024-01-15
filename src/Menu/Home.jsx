import { useState } from 'react'
import Header from '../component/Header'
import TweetEditor from '../component/TweetEditor'
import Tweet from '../component/Tweet'
import tweetsFake from '/src/assets/tweets-x.json'
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
        <div className='flex-auto w-5/12 h-2/4 ml-6 md:ml-1'>
            <Header name='Home' src='src/assets/Icons/Timeline-Prop.svg' />
            <form onSubmit={handleSubmit} >
                <TweetEditor />
            </form>
            <div>
                <Tweet tweets={tweets} />
                <Tweet tweets={tweetsFake} />
            </div>
        </div>
    )
}