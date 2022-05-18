
import './App.css';
import Header from './components/header/Header'
import MinhaHistoria from './components/minhaHistoria/MinhaHistoria'
import MeusInteresses from './components/meusInteresses/MeusInteresses';
import Experience from './components/experiece/Experience'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <MinhaHistoria/>
      <MeusInteresses/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
