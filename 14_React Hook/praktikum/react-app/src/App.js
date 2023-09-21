import "./App.css";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/css/style.css";
import logo from "./assets/img/bootstrap-logo.svg.png";
import { Header } from "./components/Header.js";
import Content from "./components/Content.js";
import Form from "./components/Form.js";
import TableProduct from "./components/Table";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

function App() {
  const [language, setLanguage] = useState("id");
  const [products, setProducts] = useState([]);
  const addProduct = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let data = {
      id: uuidv4(),
      name: null,
      category: null,
      freshness: null,
      price: null,
    };
    
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    setProducts([...products, data]);
  }
  
  const deleteProduct = (id) => {
    if (window.confirm("are you sure want to delete product?")) {
      let data = products.filter((product) => product.id !== id);
      setProducts(data);
    }
  }

  // useEffect(() => {
  //   alert("Welcome");
  // }, []);

  function changeLanguage() {
    if (language === "id") {
      setLanguage("en");
    } else {
      setLanguage("id");
    }
  }
  
  return (
    <>
      <Header header="Simple header" randomNumber={randomNumber}></Header>
      <main>
        <section className="container pb-5">
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={changeLanguage}
          >
            {language}
          </button>
          <Content logo={logo} article={article} language={language}></Content>
          <Form formName={"Detail Product"} onSubmit={addProduct}></Form>
          <TableProduct products={products} deleteProduct={deleteProduct}></TableProduct>
        </section>
      </main>
    </>
  );
}

function randomNumber() {
  alert(Math.floor(Math.random() * 100));
}

export default App;
