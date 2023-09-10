import './App.scss';

import Header from './components/Header/Header';
import GoodsCatalog from './components/GoodsCatalog/GoodsCatalog';
import Subscribtion from './components/Subscribtion/Subscribtion';
import Contacts from './components/Contacts/Contacts';
import Slider from './components/Slider/Slider';
import Customers from './components/Customers/Customers';

const App = () => {
    return (
        <div className='App'>
            <div style={{ backgroundColor: '#FCF9F6' }}>
                <Header/>
                <Slider/>
            </div>
            <GoodsCatalog/>
            <Subscribtion/>
            <Customers/>
            <Contacts/>
        </div>
    )
}

export default App;
