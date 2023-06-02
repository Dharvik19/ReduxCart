import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from './Store/cart-ui-slice';
import Notification from './components/UI/Notification';
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state)=> state.cartui.cartIsVisible)
  const cart = useSelector((state)=> state.cart);
  const notification = useSelector((state)=>state.cartui.notification)
  useEffect(()=>{
   const sendCartData= async()=>{
    dispatch(cartUiActions.showNotif({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    }))
     const response = await fetch('https://redux-cart-14dbb-default-rtdb.firebaseio.com/cart.json', 
     {
      method: 'PUT',
      body:JSON.stringify(cart)
    }   
    )
    if(!response.ok){
      throw new Error('Sending cart data failed.');
    }
    dispatch(
      cartUiActions.showNotif({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      })
    )
  }
  if(isInitial){
    isInitial=false;
    return;
  }
   sendCartData().catch(error=>{
    dispatch(
      cartUiActions.showNotif({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!',
      })
    )
   });
  },[cart,dispatch])

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
    </>
  );
}

export default App;
