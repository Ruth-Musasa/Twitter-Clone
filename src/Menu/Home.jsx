import { useState, useEffect, useContext } from 'react'
import Header from '../component/Header'
import TweetEditor from '../component/TweetEditor'
import Tweet from '../component/Tweet'
import axios from 'axios'
export default function Home() {
    const [tweets, setTweets] = useState([]);
    const [image, setImage] = useState('');
    useEffect(() => {
        const dataJson = 'https://my-json-server.typicode.com/amare53/twiterdb/posts'
        axios.get(dataJson)
            .then(res => {
                setTweets(res.data)
            })
    }, [])
    const [user, setUser] = useState([]);
    useEffect(() => {
        const dataJson = 'https://my-json-server.typicode.com/amare53/twiterdb/users'
        axios.get(dataJson)
            .then(res => {
                setUser(res.data)
            })
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form);
        let tweet = Object.fromEntries(data)
        form.reset()
        uploadImage(tweet.image);
        let formatedTweet = {
            "url": "src/assets/profile-pic(1).png",
            "title": "Ruth",
            'userId': 'R_Muss122001',
            "body": tweet.body,
            "date": new Date(),
            "like": "0",
            "id": "1324155810910982145",
            "isVerified": true,
            "replies": "0",
            "repost": "0",
            "thumbnailUrl": image
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
                    tweets.map((data) => <Tweet 
                    tweet={data} 
                    key={data.id} 
                    avatar={data.thumbnailProfil}
                    />)
                }
            </div>
        </div>
    )
}