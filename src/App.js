import logo from './logo.svg';
import './App.css';
import LivroCard from './components/LivroCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [livros, setLivro] = useState([])


  async function buscarLivros() {
    try {
      const resposta = await axios.get("https://gutendex.com/books/");
      setLivro(resposta.data.results);
      console.log(resposta);

    } catch (error) {
      console.log(error);

    }


  }

  useEffect(() => {

    buscarLivros();

  }, [])


  return (
    <div className="App">
      <h1>Biblioteca Tecnica</h1>


      {livros.map((item) => (

        <LivroCard 
        
        titulo ={item.title}
        idioma = {item.languages[0]}
        autor = {item.authors[0].name}
        downloads ={item. downloads_count}
        />


      ))}
    </div>
  );
}

export default App;

