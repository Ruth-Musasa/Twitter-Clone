import { Trend } from './component/ContendTrend'
import Home from './Menu/Home'
import NavBar from './component/NavBar'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Profil from './Menu/Profil'
import Explore from './Menu/Explore'
import Message from './Menu/Message'
import ErrorFct from './Menu/ErrorPage'
import { useContext, createContext, useState, useEffect } from 'react'
import axios from 'axios'
import ReactModal from 'react-modal'
import TweetEditor from './component/TweetEditor'
import Connexion from './component/connexion'
export const ProphilUser = createContext()
export default function App() {
  const [user, setUser] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const [isLogin, SetIsLogin] = useState(false);
  // const login = useContext([])
  const handleChange = async (e) => {
    e.preventDefault()
    try {
      const form = e.target
      let data = new FormData(form);
      let login = Object.fromEntries(data)
      form.reset()
      const credentials =
      {
        "name": login.name,
        "email": login.email,
        "password": login.code
      }
      console.log(credentials);

      const url = 'http://localhost:3000/users/login'
      const rep = await axios.post(url, {
        email: credentials.email,
        password: credentials.password
      })

      if (rep.status == 200) {
        const { id, token } = rep.data;
        console.log(id, 'OK');
        SetIsLogin(true);
        setUser(id);
      }
      else{
        console.error('Auth err');
      }
    }
    catch (error) {
      console.error('Axios err');
    }
  }
  const handleLogin = () => {
    SetIsLogin(!isLogin);
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
  // if (isLoading) {
  //   return <p className='text-white'>loading</p>
  // }
  if (user == null) {
    return (
      <div className='flex text-white xl:my-48 mx-[15%] space-x-72' >
        <img src="src/assets/Icons/Twitter.svg" alt="" className='h-96 my-24' />
        <div className='space-y-16 '>
          <h1 className='text-7xl'>Ça se passe maintenant</h1>
          <div className='w-1/2 space-y-2'>
            <h2 className='text-4xl w-full pb-6'>Inscrivez vous.</h2>
            <button className='w-full text-white rounded-full shadow-md hover:bg-zinc-700 border-[1px] border-gray-900 py-2 text-center'>S'inscrire avec Google</button>
            <div className='w-full text-center'>ou </div>
            <button className='w-full btn-primary py-2 '>Crée un compte</button>
            <p className='text-xs text-zinc-700'>En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies.</p>
          </div>
          <div className='w-1/2'>
            <h3 className='text-xl pb-6'>Vous avez déjà un compte ?</h3>
            <button className='w-full text-white rounded-full shadow-md hover:bg-zinc-700 border-[1px] border-gray-900 py-2 text-center' onClick={handleLogin}>Se connecter</button>
          </div>
        </div>
        <ReactModal
          isOpen={isLogin}
          style={customStyles}
          onRequestClose={handleLogin}
          shouldCloseOnOverlayClick={true} >
          <form onSubmit={handleChange} className="" action='http://localhost:3000/logins/login' method='post'>
            <Connexion />
          </form>
        </ReactModal>
      </div>
    )
  }
  return (
    <ProphilUser.Provider value={user}>
      <div className='flex text-[white] xl:mx-[15%] '>
        <div className='flex 2xl:w-8/12 lg:w-8/12  justify-between w-full '>
          <Router>
            <div className="flex xl:flex-col lg:pt-4 lg:w-1/4 lg:visible lg:mr-4">
              <NavBar />
            </div>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Explore' element={<Explore />} />
              <Route path='/Notification' element={<ErrorFct />} />
              <Route path='/Message' element={<Message />} />
              <Route path='/Bookmarks' element={<ErrorFct />} />
              <Route path='/List' element={<ErrorFct />} />
              <Route path='/Profile/*' element={<Profil />} />
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

