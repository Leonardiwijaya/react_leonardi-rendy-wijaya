/* eslint-disable jsx-a11y/alt-text */
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
        {props.products?.map((product) => (
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
                className="btn btn-danger m-1"
                onClick={() => {
                  props.delete(product.id)
                }}
              >
                Delete
              </button>
              <Link to={`product/${product.id}`} state={{product}}>
                <button type="button" className="btn btn-success m-1">
                  Edit
                </button>
              </Link>
              <Link to={`product/${product.id}`} state={{product, view: true}}  >
                <button type="button" className="btn btn-primary m-1">
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
