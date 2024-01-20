import {postItems} from '../AddItemApi/addItem.api';
import { useState } from 'react';

function AddItemForm (props) {
    const [nameValue, setNameValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [unitValue, setUnitValue] = useState('');
    
    // // handleChangeOfName - tracks what you type into the form
    // const handleChangeOfName = (event) => {
    //     setNameValue(event.target.value);
    // };
    // // handleChangeOfQuantity - tracks what you type into the form
    // const handleChangeOfQuantity = (event) => {
    //     setQuantityValue(event.target.value);
    // };
    // // handleChangeOfUnit - tracks what you type into the form
    // const handleChangeOfUnit = (event) => {
    //     setUnitValue(event.target.value);
    // };
    
    const handleSubmitShoppingList= (event) => {
        event.preventDefault(); // stops the page from refreshing when submit button is pressed
        console.log ('Values for submit: ', {
            name: nameValue,
            quantity: quantityValue,
            unit: unitValue,
        });
    
        //post data
        postItems({
            name: nameValue, 
            quantity: Number(quantityValue),
            unit: unitValue,
        })
        .then((response) => {
            props.listRefreshCallback();
            
            //clear
            setNameValue('');
            setQuantityValue('');
            setUnitValue('');
        })
        .catch((err) => {
            console.error('ERROR:', err);
        });
    }; // end of handleSubmitShoppingList()

    return(
        <div>
            <form className="container">
                <h1>Add an Item</h1>
                {/* Item:<input type="text" onChange={handleChangeOfName} value={nameValue}></input>  */}
                Item:<input onChange={(event) => setNameValue(event.target.value)} value={nameValue}></input>
                <br></br>
                {/* Quantity:<input type="text" onChange={handleChangeOfQuantity} value={quantityValue}></input> */}
                Quantity:<input onChange={(event) => setQuantityValue(event.target.value)} value={quantityValue}></input>
                {/* Unit:<input type="text" onChange={handleChangeOfUnit} value={unitValue}></input> */}
                Unit:<input onChange={(event) => setUnitValue(event.target.value)} value={unitValue}></input>
                <button onClick={handleSubmitShoppingList}>Save</button>
            </form>
        </div>
    )

}

export default AddItemForm;