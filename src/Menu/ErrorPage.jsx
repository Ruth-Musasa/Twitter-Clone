import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
export default function ErrorFct() {
    return (
        <div className="menuContent ">
            <Link to='/' > 
            <div className='flex space-x-8 border-[1px] py-8 border-gray-900'>
                <i class="fa-solid fa-arrow-left fa-fade fa-xl"> Go to home page</i>
                </div>
            </Link>
            <img className='border-[1px] border-gray-900 w-full' src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-5150501-4323033.png" alt="" />
        </div>
    )

}