import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components/Header.js";
import ProductDetail from "../components/ProductDetail.js";
import { APIProduct } from "../apis/APIProduct";

export default function ViewProduct(props) {
  const location = useLocation();
  const product = location.state.product;
  const view = location.state.view;
  const navigate = useNavigate();
  const edit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = {
      name: product.name,
      category: product.category,
      freshness: product.freshness,
      description: product.description,
      price: product.price,
    };

    for (let [key, value] of formData.entries()) {
      if (key !== 'image') {
        data[key] = value;
      }
    }
    APIProduct.updateProduct(product.id, data)
    alert(`Update data success`);
    navigate('../products');
  };


  return (
    <>
      <Header header="Simple header"></Header>
      <ProductDetail product={product} view={view} edit={edit}></ProductDetail>
    </>
  );
}
