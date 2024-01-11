import TrendingList from './component/TrendingList'
import ContendTrend from './component/ContendTrend'
import FollowList from './component/FollowList'
import Home from './Menu/Home'
import { ElementNav } from './component/NavBar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import SearchTweet from './component/SearchTweet'
export default function App() {
  return (
    <>
      <div className='flex text-[white] mx-[15%] flex-wrap'>
        <div className='flex-auto w-2/12 justify-between'>
          <Router>
            <div className="flex flex-col pt-4 fixed">
              <ElementNav source='src/assets/Icons/Twitter.svg' />
              <Link to='/'>  <ElementNav title='Home' source='src/assets/Icons/Home-Fill.svg' /></Link>
              <Link to='/Explore'>  <ElementNav title='Explore' source='src/assets/Icons/Explore.svg' /></Link>
              <Link to='/Notification'>  <ElementNav title='Notification' source='src/assets/Icons/Notifications.svg' /></Link>
              <Link to='/Message'>  <ElementNav title='Message' source='src/assets/Icons/Messages.svg' /></Link>
              <Link to='/Bookmarks'>  <ElementNav title='Bookmarks' source='src/assets/Icons/Bookmarks.svg' /></Link>
              <Link to='/List'>  <ElementNav title='List' source='src/assets/Icons/Lists.svg' /></Link>
              <Link to='/Profile'>   <ElementNav title='Profile' source='src/assets/Icons/Profile.svg' /></Link>
              <Link to='/More'>   <ElementNav title='More' source='src/assets/Icons/More.svg' /></Link>
              <button type="button" className='btn-primary h-14 w-56 text-lg font-bold'>Tweet</button>
            </div>
          </Router>
        </div>
        <Home />
        <div className='flex-auto w-3/12 p-4 ml-10'>
          <div className='fixed'>
            <SearchTweet />
            <ContendTrend name='Trends for you' icon='yes'>
              <TrendingList />
              <TrendingList />
              <TrendingList />
              <TrendingList />
            </ContendTrend>
            <ContendTrend name='Who to follow'>
              <FollowList src='src/assets/image 1.png' name='The New York Times' link='@nyTimes' />
              <FollowList src='src/assets/Profile-Photo (1).svg' name='CNN' link='@CNN' />
              <FollowList src='src/assets/Profile-Photo (1).svg' name='CNN' link='@CNN' />
            </ContendTrend>
          </div>
        </div>
      </div>
    </>
  )
}

