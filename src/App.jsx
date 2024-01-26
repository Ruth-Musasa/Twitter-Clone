import { Trend } from './component/ContendTrend'
import Home from './Menu/Home'
import { ProfilOpions } from './Menu/ProfilOptions'
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Profil from './Menu/Profil'
import TweetEditor from './component/TweetEditor'
import Explore from './Menu/Explore'
import Message from './Menu/Message'
import ErrorFct from './Menu/ErrorPage'
import ProfilPost from './Menu/ProfilOptions'
export default function App() {
  return (
    <div className='flex text-[white] xl:mx-[15%] '>
      <div className='flex 2xl:w-8/12 lg:w-8/12  justify-between w-full '>
        <Router>
          <div className="flex xl:flex-col lg:pt-4 lg:w-1/4 lg:visible lg:mr-4">
            <NavBar />
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
      <div className='flex-auto lg:w-3/12 lg:ml-4 lg:p-4 invisible lg:visible'>
        <Trend />
      </div>
    </div >
  )
}

