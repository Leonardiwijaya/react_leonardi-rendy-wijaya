import "./App.css";
import "./assets/bootstrap/bootstrap.min.css";
import "./assets/css/style.css";
import logo from "./assets/img/bootstrap-logo.svg.png";
import { Header } from "./components/Header.js";
import Content from "./components/Content.js";
import Form from "./components/Form.js";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("id");

  function changeLanguage() {
    if (language === 'id') {
      setLanguage('en');
    } else {
      setLanguage('id');
    }
  }
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
  return (
    <>
      <Header header="Simple header" randomNumber={randomNumber}></Header>
      <main>
        <section className="container pb-5">
          <button type="button" className="btn btn-primary m-2" onClick={changeLanguage}>
            {language}
          </button>
          <Content logo={logo} article={article} language={language}></Content>
          <Form formName={"Detail Product"}></Form>
        </section>
      </main>
    </>
  );
}

function randomNumber() {
  alert(Math.floor(Math.random() * 100));
}



export default App;
