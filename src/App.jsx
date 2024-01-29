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
import { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios'
export const ProphilUser = createContext()
export default function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const dataJson = 'https://my-json-server.typicode.com/amare53/twiterdb/users/1'
    axios.get(dataJson)
      .then(res => {
        setUser(res.data)
      })
  }, [])
  return (
    <ProphilUser.Provider value={user}>
      <div className='flex text-[white] xl:mx-[15%] '>
        <div className='flex 2xl:w-8/12 lg:w-8/12  justify-between w-full '>
          <Router>
            <div className="flex xl:flex-col lg:pt-4 lg:w-1/4 lg:visible lg:mr-4">
              <NavBar user={user} />
            </div>
            <Routes>
              <Route path='/' element={<Home  />} />
              <Route path='/Explore' element={<Explore />} />
              <Route path='/Notification' element={<ErrorFct />} />
              <Route path='/Message' element={<Message />} />
              <Route path='/Bookmarks' element={<ErrorFct />} />
              <Route path='/List' element={<ErrorFct />} />
              <Route path='/Profile/*' element={<Profil  />} />
              <Route path='/Tweet' element={<TweetEditor />} />

            </Routes>
          </Router>
        </div>
        <div className='flex-auto lg:w-3/12 lg:ml-4 lg:p-4 invisible lg:visible'>
          <Trend />
        </div>
      </div >
    </ProphilUser.Provider>
  )
}

