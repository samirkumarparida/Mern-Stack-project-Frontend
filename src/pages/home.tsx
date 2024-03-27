import {Link} from 'react-router-dom'
import ProductCard from '../components/product-card';

const Home = () => {


  const addToCartHandler =() =>{};

  return (
  <div className="home">
<section></section>

    <h1>Latest Products 

      <Link to="/search" className="findmore">
        More</Link>
    </h1>

<main>
<ProductCard 
ProductId="hgcggf" 
name= "Chicken Shawrma" 
price={130} 
stock={456} 
handler={addToCartHandler} 
 photo='https://www.asligrill.com/wp-content/uploads/2023/12/what-is-shawarama-mobile.jpg' />
  </main>



  </div>
  ); 
};

export default Home;