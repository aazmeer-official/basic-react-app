
import Price from "./Price";
function Product({title,idx,description}) {
  let oldPrice = [1,2,3,4]
  let newPrice = [5,6,7,8]
  return (
  <div>
    <h1>{title}</h1>
    <p>{description[idx]}</p>
    <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
  </div>
  );
}

export default Product; 