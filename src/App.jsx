import './App.css'
import Herosection from './components/Hero';
import Navigation from './components/Navigation';
//not preferable
const App = () =>{
    return (
        <div>
            <Navigation/>
            <Herosection/>
        </div>
    );
};
export default App; 