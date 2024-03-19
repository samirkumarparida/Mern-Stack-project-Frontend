import { FaPlus } from "react-icons/fa";

type ProductsProps ={
ProductId:string;
photo:string;
name:string;
price:number;
stock: number;
handler: () => void;
};
const server ="jbhvhhhv"

const ProductCard = ({
  ProductId,
  price,
  name,
  photo,
  stock,
  handler,
}:ProductsProps) =>{
  return(
     <div className="Product-card">
      
<img src={photo} alt={name}/>
<p>{name}</p>
<span>Rs.{price}</span>


<div>
  <button onClick={() => handler()}>
    <FaPlus />
    </button>
</div> 
</div>
  );
};

export default ProductCard;
