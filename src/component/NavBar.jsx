export function NavBar() {
    return (
        <div className="flex flex-col pt-4 fixed">
            <ElementNav source='src/assets/Icons/Twitter.svg' />
            <ElementNav title='Home' source='src/assets/Icons/Home-Fill.svg' />
            <ElementNav title='Explore' source='src/assets/Icons/Explore.svg' />
            <ElementNav title='Notification' source='src/assets/Icons/Notifications.svg' />
            <ElementNav title='Message' source='src/assets/Icons/Messages.svg' />
            <ElementNav title='Bookmarks' source='src/assets/Icons/Bookmarks.svg' />
            <ElementNav title='List' source='src/assets/Icons/Lists.svg' />
            <ElementNav title='Profile' source='src/assets/Icons/Profile.svg' />
            <ElementNav title='More' source='src/assets/Icons/More.svg' />
            <button type= "button" className='btn-primary h-14 w-56 text-lg font-bold'>Tweet</button>
        </div>
    )
}
export function ElementNav(props) {
    return (
        <div>
            <div className="flex h-14 font-bold text-xl">
                <img className="h-6 " src={props.source} alt="" />
                <h3 className="pl-1.5">{props.title} </h3>
            </div>
            <section>
                {props.children}
            </section>
        </div>
    )
}
// import Home from '../Menu/Home'
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
// export function NavBar() {
//     return (
//         <Router>
//             <div className="flex flex-col pt-4 fixed">
//                 <ElementNav source='src/assets/Icons/Twitter.svg' />
//                 <Link to='/'>  <ElementNav title='Home' source='src/assets/Icons/Home-Fill.svg' /></Link>
//                 <Link to='/Explore'>  <ElementNav title='Explore' source='src/assets/Icons/Explore.svg' /></Link>
//                 <Link to='/Notification'>  <ElementNav title='Notification' source='src/assets/Icons/Notifications.svg' /></Link>
//                 <Link to='/Message'>  <ElementNav title='Message' source='src/assets/Icons/Messages.svg' /></Link>
//                 <Link to='/Bookmarks'>  <ElementNav title='Bookmarks' source='src/assets/Icons/Bookmarks.svg' /></Link>
//                 <Link to='/List'>  <ElementNav title='List' source='src/assets/Icons/Lists.svg' /></Link>
//                 <Link to='/Profile'>   <ElementNav title='Profile' source='src/assets/Icons/Profile.svg' /></Link>
//                 <Link to='/More'>   <ElementNav title='More' source='src/assets/Icons/More.svg' /></Link>
//                 <button type="button" className='btn-primary h-14 w-56 text-lg font-bold'>Tweet</button>
//             </div>
//             <Routes>
//                 < Route path='/' Component={<Home/>} />
//                 <Route path='/Explore'  />
//             </Routes>
//         </Router>
//     )
// }
// function ElementNav(props) {
//     return (
//         <div>
//             <div className="flex h-14 font-bold text-xl">
//                 <img className="h-6 " src={props.source} alt="" />
//                 <h3 className="pl-1.5">{props.title} </h3>
//             </div>
//             <section>
//                 {props.children}
//             </section>
//         </div>
//     )
// }