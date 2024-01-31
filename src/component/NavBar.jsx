import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import FollowList from './FollowList'
import { ProphilUser } from '../App'
import { useContext, useState } from 'react'
import ReactModal from 'react-modal'
import TweetEditor from './TweetEditor'
export default function NavBar() {
    const user = useContext(ProphilUser)
    const [isTweet, SetIsTweet] = useState(false);
    const handleTweet = () => {
        SetIsTweet(!isTweet);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    }
    return (
        <div className='fixed space-y-52'>
            <div>
                <ElementNav source='/src/assets/Icons/Twitter.svg' />
                <Link to='/'>  <ElementNav title='Home' source='/src/assets/Icons/Home-Fill.svg' /></Link>
                <Link to='/Explore'>  <ElementNav title='Explore' source='/src/assets/Icons/Explore.svg' /></Link>
                <Link to='/Notification'>  <ElementNav title='Notification' source='/src/assets/Icons/Notifications.svg' /></Link>
                <Link to='/Message'>  <ElementNav title='Message' source='/src/assets/Icons/Messages.svg' /></Link>
                <Link to='/Bookmarks'>  <ElementNav title='Bookmarks' source='/src/assets/Icons/Bookmarks.svg' /></Link>
                <Link to='/List'>  <ElementNav title='List' source='/src/assets/Icons/Lists.svg' /></Link>
                <Link to='/Profile'>   <ElementNav title='Profile' source='/src/assets/Icons/Profile.svg' /></Link>
                <Link to='/More'>   <ElementNav title='More' source='/src/assets/Icons/More.svg' /> </Link>
                <button onClick={handleTweet} type="button" className='lg:btn-primary lg:h-14 lg:text-lg lg:font-bold 2xl:w-56 lg:w-40 invisible lg:visible'>Tweet</button>
            </div>
            <div>
                <Link to='/Profile' >
                    <FollowList src={user.profil} className='m-6' name={user.name} link={'@' + user.username} private='/src/assets/Icons/Private.svg' />
                </Link>
            </div>
            <ReactModal
                isOpen={isTweet}
                style={customStyles}
                onRequestClose={handleTweet}
                shouldCloseOnOverlayClick={true} >
                <TweetEditor />
            </ReactModal>
        </div>
    )
}
export function ElementNav(props) {
    return (
        <div>
            <div className="flex h-16 font-bold 2xl:text-xl lg:text-lg rounded-full lg:hover:bg-stone-950 pl-4">
                <img className="h-6 self-center " src={props.source} alt="" />
                <h3 className="pl-7 self-center invisible lg:visible">{props.title} </h3>
            </div>
            <section>
                {props.children}
            </section>
        </div>
    )
}
