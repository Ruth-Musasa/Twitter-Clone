import Profil from "./Profil"
import FollowList from "../component/FollowList"
export default function ProfilPost() {
    return (
        <Profil>
            <div className="border-x-[1px] border-b-[1px] border-gray-900 p-4">
                <h2 className="text-2xl font-bold">Who to follow</h2>
                <FollowList src='src/assets/image 1.png' name='The New York Times' link='@nyTimes' btn='yes' />
                <FollowList src='src/assets/Profile-Photo (1).svg' name='CNN' link='@CNN' btn='yes' />
                <FollowList src='src/assets/Profile-Photo.png' name='Twiter' link='@Twiter' btn='yes' />
                <FollowList src='src/assets/IMG_0382.jpg' name='Musasa' link='@Ebondo' btn='yes' />
                <FollowList src='src/assets/image 1.png' name='The New York Times' link='@nyTimes' btn='yes' />
            </div>
        </Profil>

    )
}
export function ProfilOpions() {
    return (
        <Profil>
            <img className='border-[1px] border-gray-900 w-full pt-24 self-start' src="src/assets/undraw_page_not_found_re_e9o6.svg" alt="" />
        </Profil>

    )
}