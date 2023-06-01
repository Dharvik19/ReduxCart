import classes from './CartButton.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { cartUiActions} from '../../Store/cart-ui-slice';
const CartButton = () => {

  const dispatch = useDispatch();
  const totalQuantity = useSelector((state)=>state.cart.totalQuantity);
  const toggleHandler = ()=>{
    dispatch(cartUiActions.cartToggle());
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
