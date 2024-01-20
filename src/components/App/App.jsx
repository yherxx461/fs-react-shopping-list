import { useState, useEffect }  from 'react';
// import react from 'react';

import AddItemForm from '../AddItemForm/AddItemForm.jsx';
import {fetchItems} from '../AddItemApi/addItem.api.js';
import Header from '../Header/Header.jsx'
import './App.css';


function App() {
    // declare our variable
    const [shoppingList, setShoppingList] = useState([
        // {name: "milk", quantity: 1, unit: "gallon"}
    ]);

    //Refresh Shopping lists
    const refreshShoppingList = () => {
        const listPromise = fetchItems();
        listPromise
        //success
        .then((response) => {
            console.log('SERVER DATA:', response);
            setShoppingList(response.data);
        })
        //failure
        .catch((err) => {
            console.error('ERROR:', err);
        });
    };
    
    
    // initialzing load of components
    useEffect(() => {
        //body of effect
        console.log('TESTING ITEMS');
        //api call
        refreshShoppingList();
    }, []);

    // Will appear on the DOM
    return (
        <div className="App">
            <Header />
            <AddItemForm listRefreshCallback = {refreshShoppingList}/>
            <main>
                {/* render shopping list onto page */}
            <h1>Shopping List</h1>
                {shoppingList.map((itemData, dataIndex) => {
                    return (
                        <div key={dataIndex}>
                            {/* How we want the data to appear */}
                            <p>Item: {itemData.name}</p>
                            <p>Quantity: {itemData.quantity} Unit: {itemData.unit} </p>
                            <button type="button">Purchased</button>
                            <button type="button">Remove</button>
                        </div>
                    )
                })}
                
            </main>
        </div>
    );
}

export default App;
