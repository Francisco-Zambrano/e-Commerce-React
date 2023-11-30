import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './styles.css'
import { useForm } from 'react-hook-form';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Good from './assets/Good.svg'
import { Link } from 'react-router-dom'


const Checkout = () => {

  const [orderId, setOrderId] = useState("");
  const db = getFirestore();
  const {cart, totalToPay, clear} = useContext(CartContext)
  const { register, handleSubmit } = useForm();

    const buy = (data) => {

        const order = {
          client: data,
          products: cart,
          total: totalToPay()
        }
        
        const orderRef = collection(db, "order");
        addDoc(orderRef, order)
          .then((doc) => {
            setOrderId(doc.id);
            clear();
          })
    }

    if (orderId) {

      return (
        <div className='form-container'>
          <div className='check-purchase'>
            <img src={Good} alt="logo"/>
          </div>
          <h1>Thanks for your purchase!</h1>
          <p>Your Order Number is: {orderId}</p>
          <Link to="/"><button className='send-btn' type='submit'>Back to Products</button></Link>
        </div>
      )
    }

  return (
    <div className='form-container'>
         <h1>Complete the following form</h1>
        <form className='form' onSubmit={handleSubmit(buy)}>

            <input type='text' placeholder='name' {...register("name")} required/>
            <input type='phone' placeholder='phone' {...register("phone")} required/>
            <input type='email' placeholder='email' {...register("email")} required/>
            <button className='send-btn' type='submit'>Buy</button>

        </form>
    </div>
  )
}

export default Checkout