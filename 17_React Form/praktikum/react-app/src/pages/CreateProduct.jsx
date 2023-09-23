import "../assets/bootstrap/bootstrap.min.css";
import logo from "../assets/img/bootstrap-logo.svg.png";
import { Header } from "../components/Header.js";
import Content from "../components/Content.js";
import Form from "../components/Form.js";
import TableProduct from "../components/Table";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "../assets/css/style.module.css";
import { useNavigate } from "react-router-dom";

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
  const [language, setLanguage] = useState("id");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const addProduct = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = {
      id: uuidv4(),
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
    setProducts([...products, data]);
  };

  const deleteProduct = (id) => {
    if (window.confirm("are you sure want to delete product?")) {
      let data = products.filter((product) => product.id !== id);
      setProducts(data);
    }
  };
  const viewProduct = (product) => {
    navigate(`create-product/product-detail/${product.id}`, {
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
          <Form formName={"Detail Product"} onSubmit={addProduct}></Form>
          <TableProduct
            products={products}
            deleteProduct={deleteProduct}
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
