import Product from "./Product.jsx"
function ProductTab() {
    let description = ["hi","bye","yes","no"]
    return(
        <>
        <Product title= "Logitech" idx={0}  description={description}/>
        <Product  title= "Logitech2"idx={1} description={description}/>
        <Product title= "Logitech3" idx={2} description={description}/>
        <Product  title= "Logitech4"idx={3} description={description}/>
        </>
    )
}
export default ProductTab;
