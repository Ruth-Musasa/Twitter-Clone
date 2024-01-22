import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import FollowList from './FollowList'
export default function NavBar() {
    return (
        <div className='fixed 2xl:space-y-52 space-y-3'>
              <ElementNav source='src/assets/Icons/Twitter.svg' />
              <Link to='/'>  <ElementNav title='Home' source='src/assets/Icons/Home-Fill.svg' /></Link>
              <Link to='/Explore'>  <ElementNav title='Explore' source='src/assets/Icons/Explore.svg' /></Link>
              <Link to='/Notification'>  <ElementNav title='Notification' source='src/assets/Icons/Notifications.svg' /></Link>
              <Link to='/Message'>  <ElementNav title='Message' source='src/assets/Icons/Messages.svg' /></Link>
              <Link to='/Bookmarks'>  <ElementNav title='Bookmarks' source='src/assets/Icons/Bookmarks.svg' /></Link>
              <Link to='/List'>  <ElementNav title='List' source='src/assets/Icons/Lists.svg' /></Link>
              <Link to='/Profile'>   <ElementNav title='Profile' source='src/assets/Icons/Profile.svg' /></Link>
              <Link to='/More'>   <ElementNav title='More' source='src/assets/Icons/More.svg' /> </Link>
              <Link to='/Tweet'><button type="button" className='lg:btn-primary lg:h-14 lg:text-lg lg:font-bold 2xl:w-56 lg:w-40 invisible lg:visible'>Tweet</button></Link>
              <div>
                <Link to='/Profile'>
                  <FollowList src="src/assets/profile-pic(1).png" classe="" name='Ruth Musasa' link='@R_Muss' private='src/assets/Icons/Private.svg' />
                </Link>
              </div>
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
