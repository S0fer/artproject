import './App.css';
import Content from './components/Content';
import logo from './images/logo.png'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import youtube from './images/youtube.svg'

function App() {
  return (
    <div className="App">
      <header>
        <div style={{display:'flex', alignItems: 'center', padding: '0'}}>
          <img src={logo} alt='logo' style={{width:'80px',}} />
          <p>Bolos por Encomenda</p>
        </div>
        <div className='hsocials'>
          <img src={facebook} alt='facebook' />
          <img src={twitter} alt='twitter' />
          <img src={youtube} alt='youtube' />
        </div>
      </header>

      <div className='floating'>
        <h1>O doce mundo de Elizabeth</h1>
        <p>Descubra sabores incríveis!</p>
        <button>Quero um Bolinho!</button>
      </div>

      <Content />

      <footer>
          <p>© 2022 Todos os direitos reservados.</p>
          <p>Desenvolvido por João Duarte</p>
      </footer>
    </div>
  );
}

export default App;
