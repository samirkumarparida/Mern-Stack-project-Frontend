

import { useEffect,useState } from "react";
import { VscError} from 'react-icons/vsc';
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const CartItems= [
  {
    productId: "non-veg",
    photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ3CzDz1D9YoQZy-xo14rQxAm-GGNkGpTmgAl8d46JOQ&s',
    name: "Chicken Shawrma",
    price:130,
    quanity:7,
    stock:10,
  },
];
const Subtotal= 95;
const tax =  Math.round(Subtotal*0.18);
const shippingCharges = 20;
const discount = 10;
const total= Subtotal+tax+shippingCharges;

const Cart  = () => {

const [cuponCode,setcuponCode]= useState<string>("");
const [isValidcuponCode,setIsValidcuponCode]= useState<boolean>(false);


useEffect (()=>{

  const timeoutId= setTimeout(() => {
    if(Math.random()>0.5) setIsValidcuponCode(true);
    else setIsValidcuponCode(false);
    }, 1000);

return()=>{
  clearTimeout(timeoutId);
  setIsValidcuponCode(false);
};
},[cuponCode]);

  







  return (
  <div className="cart">
<main>


{ CartItems.length > 0? CartItems.map((i,idx) =>(
    
   <CartItem key={idx} cartItem={i}/>

  )) :(<h1>No Items Added</h1>)
}







</main>
<aside>

<p>Subtotal:Rs{Subtotal}</p>
<p>shippingCharges:Rs{shippingCharges}</p>
<p>tax:Rs{tax}</p>
<p>

Dicount -<em className="red">Rs{discount}</em>
</p>
<p>
  <b>
    Total:Rs{total}
  </b>
</p>

<input type="text"
placeholder="Cupon Code"
value={cuponCode}
onChange={(e)=> setcuponCode(e.target.value)} 
/>




{
  cuponCode &&
    (isValidcuponCode?(
    <span className="green">
    Rs{discount} off using the <code>{cuponCode}</code></span>)
    :(
    <span className="red">
    Invalid Cupon <VscError /> 
    </span>
  ))
}
{
  CartItems.length >0 && <Link t0 ="/shipping">Checkout</Link>
}


</aside>
  </div>);
  
};

export default Cart;