import { Link } from "react-router-dom";

export default function TableProduct(props) {
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Category</th>
          <th scope="col">Image of Product</th>
          <th scope="col">Product Freshness</th>
          <th scope="col">Additional Description</th>
          <th scope="col">Product Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td><img src={product.image} width={100} height={100}/></td>
            <td>{product.freshness}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <button
                type="button"
                class="btn btn-danger me-2"
                onClick={() => {
                  props.deleteProduct(product.id);
                }}
              >
                Delete
              </button>
              <button type="button" class="btn btn-success">
                Edit
              </button>
              <Link to={`product-detail/${product.id}`} state={{product}}  >
                <button type="button" className="btn btn-primary m-1" onClick={() => {
                  props.viewProduct(product);
                }}>
                  View
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
