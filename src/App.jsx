import TrendingList from './component/TrendingList'
import ContendTrend from './component/ContendTrend'
import FollowList from './component/FollowList'
import Home from './Menu/Home'
import { ProfilOpions } from './Menu/ProfilOptions'
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import SearchTweet from './component/SearchTweet'
import Profil from './Menu/Profil'
import TweetEditor from './component/TweetEditor'
import Explore from './Menu/Explore'
import Message from './Menu/Message'
import ErrorFct from './Menu/ErrorPage'
import ProfilPost from './Menu/ProfilOptions'
export default function App() {
  return (
    <div className='flex text-[white] lg:mx-16 2xl:mx-[15%] '>
      <div className='flex 2xl:w-8/12 lg:w-8/12  justify-between w-full '>
        <Router>
          <div className="flex xl:flex-col lg:pt-4 lg:w-1/4 lg:visible">
            <NavBar/>
          </div>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='/Explore' Component={Explore} />
            <Route path='/Notification' Component={ErrorFct} />
            <Route path='/Message' Component={Message} />
            <Route path='/Bookmarks' Component={ErrorFct} />
            <Route path='/List' Component={ErrorFct} />
            <Route path='/Profile' Component={Profil} > 
            </Route>
            <Route path='/Tweet' Component={TweetEditor} />
            <Route path='/Posts' Component={ProfilPost} />
            <Route path='/Replies' Component={ProfilOpions} />
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

