import "../assets/bootstrap/bootstrap.min.css";
import logo from "../assets/img/bootstrap-logo.svg.png";
import { Header } from "../components/Header.js";
import Content from "../components/Content.js";
import Form from "../components/Form.js";
import TableProduct from "../components/Table";
import { useState } from "react";
import styles from "../assets/css/style.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, addProduct, selectProducts } from "../stores/productSlice";

const article = {
  title: {
    id: "Buat Akun",

    en: "Create Account",
  },

  description: {
    id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",

    en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
  },
};

export default function CreateProduct() {
  const dispatch = useDispatch();
  const [language, setLanguage] = useState("id");
  const products = useSelector(selectProducts);
  const navigate = useNavigate();
  const add = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = {
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
    console.log('tes');
    dispatch(addProduct(data));
  };
  const viewProduct = (product) => {
    navigate(`product/${product.id}`, {
      state: {
          id: 'tes'
      },
    });
  };

  function changeLanguage() {
    if (language === "id") {
      setLanguage("en");
    } else {
      setLanguage("id");
    }
  }

  return (
    <>
      <Header
        header="Simple header"
        randomNumber={randomNumber}
        changeLanguage={changeLanguage}
        language={language}
      ></Header>
      <main>
        <section className={`${styles.section} container pb-5`}>
          <Content logo={logo} article={article} language={language}></Content>
          <Form formName={"Detail Product"} add={add}></Form>
          <TableProduct
            products={products}
            delete={(id)=> {dispatch(deleteProduct(id))}}
            viewProduct={viewProduct}
          ></TableProduct>
        </section>
      </main>
    </>
  );
}

function randomNumber() {
  alert(Math.floor(Math.random() * 100));
}
