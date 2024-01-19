import { useState } from 'react'
import Header from '../component/Header'
import TweetEditor from '../component/TweetEditor'
import Tweet from '../component/Tweet'
import tweetsFake from '/src/assets/tweets-x.json'
export default function Home() {
    const [tweets, setTweets] = useState(tweetsFake);
    const [image, setImage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form);
        let tweet = Object.fromEntries(data)
        form.reset()
        uploadImage(tweet.image);
        let formatedTweet = {
            "author_avatar": "src/assets/profile-pic(1).png",
            "source": "Ruth",
            "text": tweet.text,
            "date": new Date(),
            "favorites": "0",
            "id": "1324155810910982145",
            "isVerified": true,
            "replies": "0",
            "retweets": "0",
            "image": image
        }
        setTweets([formatedTweet, ...tweets])
    }
    const uploadImage = (file) => {
        if (file.size > 0) {
            return showFile(file)
        }
        return null;
    }
    const showFile = (file) => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            setImage(fileReader.result);
        }
    }
    return (
        <div className='menuContent'>
            <Header name='Home' src='src/assets/Icons/Timeline-Prop.svg' />
            <form onSubmit={handleSubmit} >
                <TweetEditor />
            </form>
            <div>
                {
                    tweets.map((tweet) => <Tweet tweet={tweet} key={tweet.id} />)
                }
            </div>
        </div>
    )
}