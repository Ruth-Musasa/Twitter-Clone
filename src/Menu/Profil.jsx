import { useState, useEffect, createContext, useContext } from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { ProphilUser } from '../App'
import ProfilPost, { ProfilOpions } from './ProfilOptions'
import EditProfil from './EditProfil'
import ReactModal from 'react-modal'
export default function Profil() {
    const user = useContext(ProphilUser)
    const [isEdit, SetIsEdit] = useState(false);
    const handleEdit = () => {
        SetIsEdit(!isEdit);
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
        <div className="menuContent" >
            <div className="flex space-x-4 border-x-[1px] border-b-[1px] border-gray-900 p-4">
                <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" className='mt-4 mx-4' height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></Link>
                <div>
                    <h2>{user.name} </h2>
                    <span className="text-zinc-500">1 post</span>
                </div>
            </div>
            <div className="bg-gray h-52 border-x-[1px] border-b-[1px] border-gray-900 bg-stone-800  bg-center">
                <img src="/src/assets/Aesthetic Twitter Header.png" className=" h-52 w-full" alt="photo de couverture" />
            </div>
            <div className=" border-x-[1px] border-b-[1px] border-gray-900 space-y-3.5 px-6">
                <div className="flex justify-between">
                    <div className="h-36 w-36 mt-[-72px] ">
                        <img className=' rounded-full' src={user.thumbnailProfil} alt="" />
                    </div>
                    <button onClick={handleEdit} className="w-28 h-9 border-[1px] rounded-full shadow-md hover:bg-zinc-800 border-gray-900 mt-4 " type="button">Edit profil</button>
                </div>
                <h2>{user.name} </h2>
                <span className="text-zinc-500">{user.userName}</span>
                <div className="flex text-zinc-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_7_307)">
                            <path d="M-37.9 18C-38 17.9 -38 17.9 -38 17.8C-37.9 17.8 -37.9 17.9 -37.9 18ZM18 2.2H16.7V1.9C16.7 1.5 16.4 1.1 15.9 1.1C15.5 1.1 15.1 1.4 15.1 1.9V2.2H7.7V1.9C7.7 1.5 7.4 1.1 6.9 1.1C6.5 1.1 6.1 1.4 6.1 1.9V2.2H4.8C3.4 2.2 2.3 3.3 2.3 4.7V17.8C2.3 19.2 3.4 20.3 4.8 20.3H7.7C8.1 20.3 8.5 20 8.5 19.5C8.5 19.1 8.2 18.7 7.7 18.7H4.8C4.2 18.7 3.8 18.2 3.8 17.7V7.9C3.8 7.6 4.2 7.2 4.8 7.2H18C18.6 7.2 19 7.6 19 7.9V9.7C19 10.1 19.3 10.5 19.8 10.5C20.2 10.5 20.6 10.2 20.6 9.7V4.7C20.5 3.3 19.4 2.2 18 2.2ZM19 5.9C18.7 5.8 18.3 5.7 18 5.7H4.8C4.4 5.7 4.1 5.8 3.8 5.9V4.7C3.8 4.1 4.3 3.7 4.8 3.7H6.1V4.2C6.1 4.6 6.4 5 6.9 5C7.3 5 7.7 4.7 7.7 4.2V3.7H15.2V4.2C15.2 4.6 15.5 5 16 5C16.4 5 16.8 4.7 16.8 4.2V3.7H18C18.6 3.7 19 4.2 19 4.7V5.9Z" fill="#6b7280" />
                            <path d="M15.5 10.4C12.1 10.4 9.29999 13.2 9.29999 16.6C9.29999 20 12.1 22.8 15.5 22.8C18.9 22.8 21.7 20 21.7 16.6C21.7 13.2 18.9 10.4 15.5 10.4ZM15.5 21.4C12.9 21.4 10.8 19.3 10.8 16.7C10.8 14.1 12.9 12 15.5 12C18.1 12 20.2 14.1 20.2 16.7C20.2 19.2 18.1 21.4 15.5 21.4Z" fill="#6b7280" />
                            <path d="M18.9 18.7C18.8 18.9 18.5 19.1 18.3 19.1C18.2 19.1 18 19.1 17.9 19L14.8 17V14C14.8 13.6 15.1 13.2 15.6 13.2C16 13.2 16.4 13.5 16.4 14V16.2L18.8 17.7C19 17.9 19.1 18.3 18.9 18.7Z" fill="#6b7280" />
                        </g>
                        <defs> <clipPath id="clip0_7_307"> <rect width="24" height="24" fill="white" /> </clipPath> </defs>
                    </svg>
                    <span className="pl-2 ">{user.Joined} </span>
                </div>
                <div className="flex space-x-4 pb-4">
                    <span className="flex text-zinc-500"> <strong className="text-white pr-2 ">50 </strong> Following</span>
                    <span className="flex text-zinc-500"><strong className="text-white pr-2 ">12K </strong> Followers</span>
                </div>
                <div className="flex justify-between h-10 text-zinc-500 text-lg ">
                    <Link className='hover:border-b-4 hover:border-b-sky-700 hover:text-white hover:h-10 ' to=''>Posts </Link>
                    <Link className='hover:border-b-4 hover:border-b-sky-700 hover:text-white hover:h-10 ' to='Replies'>Replies</Link>
                    <Link className='hover:border-b-4 hover:border-b-sky-700 hover:text-white hover:h-10 ' to='Highlight'>Highlight</Link>
                    <Link className='hover:border-b-4 hover:border-b-sky-700 hover:text-white hover:h-10 ' to='Medias'>Medias</Link>
                    <Link className='hover:border-b-4 hover:border-b-sky-700 hover:text-white hover:h-10 ' to='Likes'>Likes</Link>
                </div>
            </div>
            <Routes>
                <Route path='' element={<ProfilPost />} />
                <Route path='Replies' element={<ProfilOpions />} />
                < Route path='Highlight' element={<ProfilPost />} />
                <Route path='Medias' element={<ProfilOpions />} />
                <Route path='Likes' element={<ProfilOpions />} />
            </Routes>
            <ReactModal
                isOpen={isEdit}
                style={customStyles}
                onRequestClose={handleEdit}
                shouldCloseOnOverlayClick={true} >
                <EditProfil />
            </ReactModal>
        </div>
    )
}
