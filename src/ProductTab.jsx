import Product from "./Product.jsx"
function ProductTab() {
    let options = ["hi-tech","durable"]
    return(
        <>
        <Product title = "phone" features={options}/>
        <Product title = "Laptop"/>
        </>
    )
}
export default ProductTab;