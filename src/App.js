import CharacterList from "./components/CharacterList";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import { useState, useEffect } from "react";
import { getCharacters } from './services/api'


function App() {

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] =useState(0)
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async() => {
    try {
        const data = await getCharacters(page)
        const pages = data.info.pages
        const results = data.results
        setCharacters(results)
        setTotalPages(pages)
        console.log(pages)
    } catch (err) {console.log(err)}
}

  useEffect( () => {
      fetchCharacters()
  }, [page])

  return (
    <div className="App">
    <Header />
    <CharacterList characters={characters} />
    <Footer />
    </div>
  );
}

export default App;
