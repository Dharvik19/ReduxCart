import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
 const productsData = [
  { 
    id:'p1',
    title: 'sushi',
    price: 6,
    description: "red salmon sushi",
    quantity: 1
  },
  {
    id:'p2',
    title: 'pasta',
    price: 7,
    description: "white sauce pasta",
    quantity: 1
  },
  {
    id:'p3',
    title: 'pizza',
    price: 9.5,
    description: "classic Margherita Pizza",
    quantity: 1
  },
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsData.map((item)=>(
          <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          quantity={item.quantity}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;
