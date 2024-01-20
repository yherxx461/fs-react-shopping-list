import {postItems} from '../AddItemApi/addItem.api';
import { useState } from 'react';

function AddItemForm (props) {
    const [nameValue, setNameValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [unitValue, setUnitValue] = useState('');
    
    // handleChangeOfName - tracks what you type into the form
    const handleChangeOfName = (event) => {
        setNameValue(event.target.value);
    };
    // handleChangeOfQuantity - tracks what you type into the form
    const handleChangeOfQuantity = (event) => {
        setQuantityValue(event.target.value);
    };
    // handleChangeOfUnit - tracks what you type into the form
    const handleChangeOfUnit = (event) => {
        setUnitValue(event.target.value);
    };
    const handleSubmitShoppingList= (event) => {
        event.preventDefault(); // stops the page from refreshing when submit button is pressed
        console.log ('Values for submit: ', {
            name: nameValue,
            quantity: quantityValue,
            unit: unitValue
        });
    
        //post data
        postItems({
            name: nameValue,
            quantity: quantityValue,
            unit: unitValue,
        })
        .then((response) => {
            props.listRefreshCallback();
            
            //clear
            setNameValue('');
            setQuantity('');
            setUnitValue('');
        })
        .catch((err) => {
            console.error('ERROR:', err);
        });
    }; // end of handleSubmitShoppingList()

    return(
        <div>
            <form onSubmit={handleSubmitShoppingList}>
            <h1>Add an Item</h1>
            Item:<input type="text" onChange={handleChangeOfName} value={nameValue}></input> 
            Quantity:<input type="text" onChange={handleChangeOfQuantity} value={quantityValue}></input>
            Unit:<input type="text" onChange={handleChangeOfUnit} value={unitValue}></input>
            <button >Save</button>
            </form>
        </div>
    )

}

export default AddItemForm;