
import React from "react";
import { dishedData } from "./data";
import Dish from "./dish";
import '../styles/App.css';

function App() {
    const [data, setData] = React.useState(dishedData);
    
    const handleFilter = (e) => {
        const category = (e.target.innerText).toLowerCase();
        
        if(category == 'all') {
            const filteredData = dishedData;
            setData(filteredData);
        }
        else {
            let filteredData = dishedData.filter((dish) => dish.category == category);
            setData(filteredData);
        }
    }


    return <>
        <h1>Our Menu</h1>
        <div className="filters">
            <button onClick={(e) => handleFilter(e)}>All</button>
            <button onClick={(e) => handleFilter(e)}>Breakfast</button>
            <button onClick={(e) => handleFilter(e)}>Lunch</button>
            <button onClick={(e) => handleFilter(e)}>Shakes</button>
        </div>
        <div className="dishedContainer">
            {
                data.map((dish) => <Dish key={dish.id} details={dish} />)
            }
        </div>
    </>
}

export default App;

{/* <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p> */}
