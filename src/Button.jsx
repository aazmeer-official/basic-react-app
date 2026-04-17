function pringHello(params) {
    console.log("Hello")
}
export default function Button(params) {
    return(
        <div>
            <button onClick={pringHello}>Click Me!</button>
            <p onMouseOver={pringHello}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus molestiae fuga totam ullam id ut necessitatibus sed omnis in sit unde dolorem alias quas aperiam ratione quia minima, laudantium libero veritatis magni.</p>
        </div>
    )
}