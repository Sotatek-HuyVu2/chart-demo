import './App.css';
import {Chart, registerables} from 'chart.js';
import Home from "./pages/home";
import 'chartjs-adapter-moment';

Chart.register(...registerables);


function App() {
    return (
        <div className="App bg-gray-100">
            <Home/>
        </div>
    );
}

export default App;
