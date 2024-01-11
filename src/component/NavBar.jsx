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
function ElementNav(props) {
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