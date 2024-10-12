import './App.css';
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div className="Cadastro">
        <div className="lado-esquerdo">
        </div>
        <div className="lado-direito">
          <form>
            <label>USUARIO</label>
            <input type="text" />
            <label>SENHA</label>
            <input type="password" />
            <Button text='Entrar' type='submite'/>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
