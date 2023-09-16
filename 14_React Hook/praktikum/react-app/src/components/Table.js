

export default function TableProduct(props) {
    return (
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Freshness</th>
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
              <td>{product.freshness}</td>
              <td>{product.price}</td>
              <td>
                <button key={product.id} type="button" class="btn btn-danger me-2" onClick={()=>{props.deleteProduct(product.id)}}>
                  Delete
                </button>
                <button type="button" class="btn btn-success">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }