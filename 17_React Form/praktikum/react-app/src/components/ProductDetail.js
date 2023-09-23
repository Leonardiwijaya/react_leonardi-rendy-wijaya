

export default function ProductDetail(props) {
  const { name, category, image, freshness, description, price } = props.product;
  return (
    <>
      <table className="table mt-5 container">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Image of Product</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Additional Description</th>
            <th scope="col">Product Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td><img src={image} width={100} height={100}/></td>
            <td>{freshness}</td>
            <td>{description}</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
