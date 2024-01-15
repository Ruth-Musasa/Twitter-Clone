import TrendingList from './component/TrendingList'
import ContendTrend from './component/ContendTrend'
import FollowList from './component/FollowList'
import Home from './Menu/Home'
import { ElementNav } from './component/NavBar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import SearchTweet from './component/SearchTweet'
import Profil from './Menu/Profil'
import TweetEditor from './component/TweetEditor'
export default function App() {
  return (
    <div className='flex text-[white] mx-[15%] xl:mx-12 '>
      <div className='flex w-8/12 justify-between '>
        <Router>
          <div className="flex flex-col pt-4 w-1/4 ">
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
              <Link to='/Tweet'><button type="button" className='btn-primary h-14 w-56 text-lg font-bold xl:w-40'>Tweet</button></Link>
              <div>
                <Link to='/Profile'>  <FollowList src="src/assets/profile-pic(1).png" classe="h-full bottom-0 left-0" name='Ruth Musasa' link='@R_Muss' private='src/assets/Icons/Private.svg' /></Link>
              </div>
            </div>
          </div>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/Profile' Component={Profil} />
            <Route path='/Tweet' Component={TweetEditor} />
          </Routes>
        </Router>
      </div>
      <div className='flex-auto w-3/12  p-4 ml-6'>
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

