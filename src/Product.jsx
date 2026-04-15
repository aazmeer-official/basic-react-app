function Product({ title, features = [] }) {

  const list = features.map((feature, index) => (
    <li key={index}>{feature}</li>
  ));
let styles = {
  backgroundColor: (title == "phone")?"yellow":"red"
};
  return (
    <div style={styles}> 
      <h3>{title}</h3>
      <ul>{list}</ul>
 
      <h5>Product Description</h5>
    </div>
  );
}

export default Product; 