import './App.css';
import axios from 'axios';
import Points from './components/Points';
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/points";

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
    <div className="App">
        <h1>Hello ADventure world!</h1>
        < Points points={points} />
    </div>
  );
}

export default App;
