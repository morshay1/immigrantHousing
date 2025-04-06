import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchApartment from "./SearchApartment";
import Apartment from "./Apartment";
import ApartmentToImmigrant from "./ApartmentToImmigrant";
import Immigrant from "./Immigrant";


function App() {
  return (
    <Router>
      <Routes> 
                {/* שאילתת דירות */}        
        <Route path="/" element={<SearchApartment />} />  
                {/* הפניות לדירות */}                
                <Route path="/apartment/:id/:type/:status/:allocationDate/:allocationOffice/:city/:address/:houseNumber/:apartmentNumber/:area/:rooms/:floor/:elevator/:company/:availabilityDate/:notes" element={<Apartment />} />
                {/* שאילתת תורים - הפניה לראיה */}                
        <Route path="/apartmenttoimmigrant/:city/:allocationOffice" element={<ApartmentToImmigrant />} />
                {/* טיפול בזכאי דיור */}                
        <Route path="/immigrant/:immigrantNumber/:name/:statusGrantDate/:settlement/:address/:phone/:mobile/:waitingStatus" element={<Immigrant />} />
      </Routes>
    </Router>
  );
}

export default App;
