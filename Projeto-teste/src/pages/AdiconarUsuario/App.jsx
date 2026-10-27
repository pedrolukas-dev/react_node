import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdicionarUsuarios from './index.jsx';
import './App.css';

function App() {
  return (
    <>
        <Header />
        <main className="main">
          <section className="intro">
            <p className="eyebrow">TRIBO DA ÁGUA DO SUL</p>
            <h2>Bem-vindo ao nosso aplicativo</h2>
            <p>Um espaço simples para organizar seu cadastro de usuários.</p>
          </section>
          <AdicionarUsuarios />
        </main>
        <Footer />
    </>
  )
}
export default App;