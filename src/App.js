import CharacterList from "./components/CharacterList";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import { useState, useEffect } from "react";
import { getCharacters } from './services/api'
import Loading from "./components/Loading";




function App() {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] =useState(0)
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async() => {
    try {
      setLoading(true)
        const data = await getCharacters(page)
        const pages = data.info.pages
        const results = data.results
        setCharacters(results)
        setTotalPages(pages)
      setLoading(false)

    } catch (err) {console.log(err)}
}

  useEffect( () => {
      fetchCharacters()
  }, [page])

  if (loading) {
    return <Loading />
  } else {
      return (
        <div className="App">
        <Header page={page} setPage={setPage} totalPages={totalPages} />
        <CharacterList characters={characters} loading={loading} />
        <Footer />
        </div>
    );
  }
  


  
}

export default App;
