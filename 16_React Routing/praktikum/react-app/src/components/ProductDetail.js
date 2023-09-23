

export default function ProductDetail(props) {
  const { name, category, freshness, price } = props.product;
  return (
    <>
      <table className="table mt-5 container">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Product Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{freshness}</td>
            <td>{price}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
