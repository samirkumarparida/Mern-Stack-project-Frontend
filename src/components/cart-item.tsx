import { Link } from "react-router-dom";
type CartItemProps ={
    cartItem: any;
};


const CartItem = ({cartItem}: CartItemProps) => {

  // productId: "non-veg",
  // photo:'https://www.asligrill.com/wp-content/uploads/2023/12/what-is-shawarama-mobile.jpg',
  // name: "Chicken Shawrma",
  // price:130,
  // quanity:1,
  // stock:10,

  const {photo,ProductId,name,price,quantity,stock} = cartItem
  return (
  <div className="Cart-item">

    <img src={photo} alt={name}/>
    <article>
      <Link to= {'/product/${ProductId}'}>{name}</Link>
      <span>Rs{price}</span>
    </article>
<div>
<button>-</button>
<p>{quantity}</p>
<button>+</button>


</div>



  </div>
  );
  
  
};

export default CartItem;