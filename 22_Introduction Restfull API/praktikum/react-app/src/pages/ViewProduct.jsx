import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components/Header.js";
import ProductDetail from "../components/ProductDetail.js";
import { useDispatch} from "react-redux";
import { editProduct} from "../stores/productSlice";

export default function ViewProduct(props) {
  const location = useLocation();
  const product = location.state.product;
  const view = location.state.view;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const edit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = {
      id: product.id,
      name: null,
      category: null,
      image: null,
      freshness: null,
      description: null,
      price: null,
    };

    for (let [key, value] of formData.entries()) {
      if (key === 'image') {
        data[key] = URL.createObjectURL(value);;
      } else {
        data[key] = value;
      }
    }
    dispatch(editProduct(data))
    navigate('../products');
  };


  return (
    <>
      <Header header="Simple header"></Header>
      <ProductDetail product={product} view={view} edit={edit}></ProductDetail>
    </>
  );
}
