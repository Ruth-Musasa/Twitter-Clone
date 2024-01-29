import { useState, useEffect, useContext } from 'react'
import Header from '../component/Header'
import TweetEditor from '../component/TweetEditor'
import Tweet from '../component/Tweet'
import axios from 'axios'
import ProfilPost from './ProfilOptions'
export default function Home({user}) {
    const [tweets, setTweets] = useState([]);
    const [image, setImage] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const dataJson = 'https://my-json-server.typicode.com/amare53/twiterdb/posts'
        axios.get(dataJson)
            .then(res => {
                setTweets(res.data)
            })
    }, [])
    useEffect(() => {
        const dataJson = 'https://my-json-server.typicode.com/amare53/twiterdb/users'
        axios.get(dataJson)
            .then(res => {
                setUsers(res.data)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form);
        let tweet = Object.fromEntries(data)
        form.reset()
        uploadImage(tweet.image);
        let userTweet = 
        {  
            'id'	: `${user.id}`,
            'profil' : user.profil,
            'name' : `${user.name}`,
            'username': user.username,
            "body": tweet.body,
            "date": new Date(),
            "like": "0",
            "isVerified": true,
            "replies": "0",
            "repost": "0",
            "thumbnailUrl": image
        }
        setTweets([userTweet, ...tweets])
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
            <Header name='Home' src='/src/assets/Icons/Timeline-Prop.svg' />
            <form onSubmit={handleSubmit} >
                <TweetEditor user={user} />
            </form>
            <div>
                {
                    tweets.map((data) => <Tweet 
                    tweet={data} 
                    key={data.id} 
                    avatars={users.find((user)=>user.id==data.userId)?.thumbnailProfil}
                    names={users.find((user)=>user.id==data.userId)?.name}
                    usernames={users.find((user)=>user.id==data.userId)?.username}
                    profil={data.profil}
                    userName={data.username}
                    name={data.name}
                    userLike={data.like}
                    />)
                }
            </div>
        </div>
    )
}