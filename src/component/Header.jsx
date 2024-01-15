export default function Header(props) {
    return (
        <div className="borderContent h-[53px]">
            <h2 className="text-xl font-bold mt-1">{props.name}</h2>
            <img src={props.src} alt="Timeline" className="h-5 content-center mt-2" />
        </div>

    )
}