import './App.css';
import './assets/bootstrap/bootstrap.min.css';
import './assets/css/style.css';
import logo from './assets/img/bootstrap-logo.svg.png';
import {Header} from './components/Header.js';
import Content from './components/Content.js';
import Form from './components/Form.js';

function App() {
  return (
    <>
    <Header header='Simple header'></Header>
  <main>
    <section className="container pb-5">
      <Content logo={logo}></Content>
      <Form formName={'Detail Product'}></Form>
    </section>
  </main>
</>
  );
}

export default App;
