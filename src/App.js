import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import Notification from './components/UI/Notification';
import { sendCartData,fetchCartData } from './Store/cart-actions';
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state)=> state.cartui.cartIsVisible)
  const cart = useSelector((state)=> state.cart);
  const notification = useSelector((state)=>state.cartui.notification)
  useEffect(()=>{
   
  if(isInitial){
    isInitial=false;
    return;
  }
  dispatch(sendCartData(cart));
  },[cart,dispatch])
  useEffect(()=>{
    dispatch(fetchCartData());
    console.log("app se received")
  },[])
// const fetchData =()=> {
  
//     dispatch(fetchCartData());
// }
  return (
    <>
    {notification && <Notification
    status={notification.status}
    title={notification.title}
    message={notification.message}
    />}
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
      <button>fetch</button>
    </>
  );
}

export default App;
