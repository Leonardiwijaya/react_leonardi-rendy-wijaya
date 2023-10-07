import "../assets/bootstrap/bootstrap.min.css";
import logo from "../assets/img/bootstrap-logo.svg.png";
import { Header } from "../components/Header.js";
import Content from "../components/Content.js";
import Form from "../components/Form.js";
import TableProduct from "../components/Table";
import { useEffect, useState } from "react";
import styles from "../assets/css/style.module.css";
import { APIProduct } from "../apis/APIProduct";

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
  const [products, setProducts] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const add = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = {
      name: null,
      category: null,
      freshness: null,
      description: null,
      price: null,
    };

    for (let [key, value] of formData.entries()) {
      if (key !== 'image') {
        data[key] = value;
      }
    }
    event.preventDefault();
    APIProduct.addProduct(data)
    setRefresh(true);
  };

  function changeLanguage() {
    if (language === "id") {
      setLanguage("en");
    } else {
      setLanguage("id");
    }
  }
  useEffect(() => {
    APIProduct.getProducts().then(setProducts);
    setRefresh(false);
  }, [refresh])

  function deleteProduct(data) {
    setRefresh(true);
    APIProduct.deleteProduct(data);
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
          {
            products && <TableProduct
            products={products}
            delete={deleteProduct}
          ></TableProduct>
          }
        </section>
      </main>
    </>
  );
}

function randomNumber() {
  alert(Math.floor(Math.random() * 100));
}
