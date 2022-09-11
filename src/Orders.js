import React, {useState, useEffect} from 'react';
import './Order.css';
import { useStateValue } from './StateProvider';
import {db} from './firebase';
import Order from './Order';
function Orders() {

    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState();

    useEffect(() => {
        if(user){
          db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapsShot => {
                setOrders(snapsShot.docs.map(doc =>({
                    id: doc.id,
                    data: doc.data(),
                })))
            })
        } else{
            setOrders([])
        }

    }, [user])

  return (
    <div className="orders">
        <h1>Yours Order</h1>
        <div className='orders_order'>
            {orders?.map(order => {
                <Order order={order}/>
            })}
        </div>
    </div>
  )
}

export default Orders