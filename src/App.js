import Navbar from "./Compounents/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comerciales from "./Compounents/Routes/Comerciales/ItemListContainerRefrig";
import ComercialesId from "./Compounents/Routes/Comerciales/ItemDetailContainerRefrig";
import Exhibidoras from "./Compounents/Routes/Exhibidoras/Exhibidoras";
import Freezers from "./Compounents/Routes/Freezers/Freezers";
import Home from "./Compounents/Routes/Home/Home";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={ <Home /> } />
          <Route exact path="/comerciales" element={ <Comerciales /> } />
          <Route exact path="/comerciales/:id" element={ <ComercialesId /> } />
{/*           <Route exact path="/exhibidoras" element={ <Exhibidoras /> } />
          <Route exact path="/freezers" element={ <Freezers /> } /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
