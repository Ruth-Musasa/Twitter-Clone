export default function Header(props) {
    return (
        <div className="borderContent h-[53px]">
            <h2 className="text-xl font-bold ">{props.name}</h2>
            <img src={props.src} alt="Timeline" className="h-5 content-center" />
        </div>

    )
}