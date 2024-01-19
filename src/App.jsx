import TrendingList from './component/TrendingList'
import ContendTrend from './component/ContendTrend'
import FollowList from './component/FollowList'
import Home from './Menu/Home'
import { ElementNav } from './component/NavBar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import SearchTweet from './component/SearchTweet'
import Profil from './Menu/Profil'
import TweetEditor from './component/TweetEditor'
import Explore from './Menu/Explore'
import Message from './Menu/Message'
import ErrorFct from './Menu/ErrorPage'
export default function App() {
  return (
    <div className='flex text-[white] lg:mx-16 2xl:mx-[15%] '>
      <div className='flex 2xl:w-8/12 lg:w-8/12  justify-between'>
        <Router>
          <div className="flex flex-col xl:flex-col lg:pt-4 lg:w-1/4 lg:visible">
            <div className='fixed space-y-52'>
              <ElementNav source='src/assets/Icons/Twitter.svg' />
              <Link to='/'>  <ElementNav title='Home' source='src/assets/Icons/Home-Fill.svg' /></Link>
              <Link to='/Explore'>  <ElementNav title='Explore' source='src/assets/Icons/Explore.svg' /></Link>
              <Link to='/Notification'>  <ElementNav title='Notification' source='src/assets/Icons/Notifications.svg' /></Link>
              <Link to='/Message'>  <ElementNav title='Message' source='src/assets/Icons/Messages.svg' /></Link>
              <Link to='/Bookmarks'>  <ElementNav title='Bookmarks' source='src/assets/Icons/Bookmarks.svg' /></Link>
              <Link to='/List'>  <ElementNav title='List' source='src/assets/Icons/Lists.svg' /></Link>
              <Link to='/Profile'>   <ElementNav title='Profile' source='src/assets/Icons/Profile.svg' /></Link>
              <Link to='/More'>   <ElementNav title='More' source='src/assets/Icons/More.svg' /> </Link>
              <Link to='/Tweet'><button type="button" className='lg:btn-primary lg:h-14 2xl:w-56 lg:text-lg lg:font-bold 2xl:w-52 lg:w-40 invisible lg:visible'>Tweet</button></Link>
              <div>
                <Link to='/Profile'>  <FollowList src="src/assets/profile-pic(1).png" classe="h-full bottom-0 left-0 " name='Ruth Musasa' link='@R_Muss' private='src/assets/Icons/Private.svg' /></Link>
              </div>
            </div>
          </div>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/Explore' Component={Explore} />
            <Route path='/Notification' Component={ErrorFct} />
            <Route path='/Message' Component={Message} />
            <Route path='/Bookmarks' Component={ErrorFct} />
            <Route path='/List' Component={ErrorFct} />
            <Route path='/Profile' Component={Profil} />
            <Route path='/Tweet' Component={TweetEditor} />
          </Routes>
        </Router>
      </div>
      <div className='flex-auto lg:w-3/12  lg:p-4 lg:ml-6 invisible lg:visible'>
        <div className='fixed'>
          <SearchTweet />
          <ContendTrend name='Trends for you' icon='yes'>
            <TrendingList />
            <TrendingList />
            <TrendingList />
          </ContendTrend>
          <ContendTrend name='Who to follow'>
            <FollowList src='src/assets/image 1.png' name='The New York Times' link='@nyTimes' btn='yes' />
            <FollowList src='src/assets/Profile-Photo (1).svg' name='CNN' link='@CNN' btn='yes' />
            <FollowList src='src/assets/Profile-Photo (1).svg' name='CNN' link='@CNN' btn='yes' />
          </ContendTrend>
          <div className='text-zinc-500 text-sm text-justify p-4'>
            Terms of Service  Privacy Policy  Cookie Policy <br /> Imprint Ads info More ... © 2021  Twitter, Inc.
          </div>
        </div>
      </div>
    </div >

  )
}

