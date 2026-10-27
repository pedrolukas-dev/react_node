import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AdicionarUsuarios from '../components/AdicionarUsuarios';
import './app.css';

function App() {
  return (
    <>
        <Header />
        <main className="main">
<h2>Bem-vindo ao nosso aplicativo</h2>
<p>Espe é um simples aplicativo React.</p>
<br/>
<AdicionarUsuarios />

        </main>
        <Footer />
    </>
  )
}
export default App;