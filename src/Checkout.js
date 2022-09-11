import React from 'react';
import Subtotal from './Subtotal';
import './Checkout.css';
import {useStateValue} from './StateProvider';
import CheckOutProduct from './CheckOutProduct';

function Checkout(){

    const [{basket, user}, dispatch] = useStateValue();

    return (
    <div className = 'checkout'>
        <div className = 'checkout_left'>
            <img 
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt = ""
            />
            <div>
                <h3>Hello {user?.email}</h3>
                <h2 className = "checkout_title">
                    This is your basket
                </h2>
                {basket.map(item => (
                    <CheckOutProduct 
                        id = {item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className = 'checkout_right'>
            <Subtotal />
        </div>
    </div>
    );
}

export default Checkout