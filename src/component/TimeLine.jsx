export default function TimeLine(props) {
    return (
        <div>
            <h2 className={`container-title ${props.titleStyles}` }>{props.title} </h2>
            <section className={props.styleName}>
                {props.children}
            </section>
        </div>
    )
}