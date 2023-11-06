import '../src/assets/css/style.css';
import '../src/assets/bootstrap/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Contact></Contact>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
