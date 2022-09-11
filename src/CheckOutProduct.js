import React from 'react';
import './CheckOutProduct.css';

import {useStateValue} from './StateProvider';

function CheckOutProduct(props) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBaseket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id,
        })
    }

  return (
    <div className = "checkoutProduct">
        <img className = "checkoutProduct_image" src = {props.image} alt=""/>
        <div className = "checkoutProduct_info">
            <p className = "checkoutProduct_title">{props.title}</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{props.price}</strong>
            </p>
        <div className="checkoutProduct_rating">{props.rating}</div>
        {!props.hideButton && (<button onClick={removeFromBaseket}>Remove from basket</button>)}
        {/* <button onClick={removeFromBaseket}>Remove from basket</button> */}
        </div>
    </div>
  )
}

export default 
CheckOutProduct