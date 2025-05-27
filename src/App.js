import logo from './logo.svg';
import './App.css';
import LivroCard from './components/LivroCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [livros, setLivros] = useState([])


  async function buscarlivros() {
    try {
      const resposta = await axios.get("https://gutendex.com/books/");
      setLivros(resposta.data.results)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    buscarlivros();
  })

  return (
    <div className="App">
      <h1>Biblioteca Técnica</h1>

      <LivroCard />
    </div>
  );
}

export default App;
