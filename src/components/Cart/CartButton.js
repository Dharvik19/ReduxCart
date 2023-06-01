import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartActions, uiActions } from '../../Store/cart-slice';
const CartButton = () => {

  const dispatch = useDispatch();
  const toggleHandler = ()=>{
    dispatch(cartActions.cartToggle());
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
