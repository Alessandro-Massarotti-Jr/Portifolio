import About from './Components/About';
import Projects from './Components/Projects';
import Tecnologies from './Components/Tecnologies';
import Welcome from './Components/Welcome';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContactForm from './Components/ContactForm';

function App() {
  return (
    <main>
      <Header/>
      <Welcome/>
      <Tecnologies/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </main>

  );
}

export default App;
