import axios from 'axios';
import Points from './components/Points';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home"


const API_URL = "https://adventure.mocklab.io/api/v1/points";

function getAPIData() {
    return axios.get(API_URL).then((response) => response.data)
}

function App() {
    const [points, setPoints] = useState([]);

    useEffect(() => {
        let mounted = true;
        getAPIData().then((items) => {
            if (mounted) {
                setPoints(items);
            }
        });
        return () => (mounted = false);
    }, []);

    return (
    <div >
    <BrowserRouter>
        <Routes>
          <Route path ="/" element={<LandingPage/>}/>
          <Route path="/home" element={<Home/>}/>

        </Routes>
      </BrowserRouter>
        < Points points={points} />
    </div>
  );
}

export default App;
