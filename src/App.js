import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import Footer from "./components/Footer.js";
import Header from "./components/Header";
import MoreInfo from "./components/MoreInfo";
import NotFound from "./components/NotFound";
import styles from './styles/container.module.css'


function App() {

      return (

        <div className={styles.app}>
          
          <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<CharacterList />} />
              <Route path="/character/:id" element={<MoreInfo />}></Route>
              <Route path="*" element={ <NotFound /> } />
            </Routes>

          <Footer />
          </BrowserRouter>
          
        </div>
        
    );
  
  


  
}

export default App;
