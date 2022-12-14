import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import EpisodeDetail from "./components/EpisodeDetail";
import EpisodeList from "./components/EpisodeList";
import Footer from "./components/Footer.js";
import Header from "./components/Header";
import LocationDetail from "./components/LocationDetail";
import LocationList from "./components/LocationList";
import MoreInfo from "./components/MoreInfo";
import NotFound from "./components/NotFound";
import styles from './styles/container.module.css'


function App() {

      return (

        <div className={styles.app}>
          
          <BrowserRouter>
          <Header />
            <Routes>
              <Route exact path="/" element={<CharacterList />} />
              <Route exact path="/character/:id" element={<MoreInfo />}></Route>
              <Route exact path="location" element={<LocationList />}></Route>
              <Route exact path="/location/:id" element={<LocationDetail />}></Route>
              <Route exact path="episode" element={<EpisodeList />}></Route>
              <Route exact path="/episode/:id" element={<EpisodeDetail />}></Route>
              <Route path="*" element={ <NotFound /> } />
            </Routes>

          <Footer />
          </BrowserRouter>
          
        </div>
        
    );
  
  


  
}

export default App;
