import { cartUiActions } from "./cart-ui-slice";
import { cartActions } from "./cart-slice";

export const sendCartData =(cart)=>{
    return async (dispatch) =>{
        dispatch(cartUiActions.showNotif({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
          }))

          const sendRequest = async()=>{
            const response = await fetch('https://redux-cart-14dbb-default-rtdb.firebaseio.com/cart.json', 
          {
           method: 'PUT',
           body:JSON.stringify(cart)
         }   
         )
         if(!response.ok){
           throw new Error('Sending cart data failed.');
         }  
         
          };
          try{
           await sendRequest();
           dispatch(
            cartUiActions.showNotif({
              status: 'success',
              title: 'Success!',
              message: 'Sent cart data successfully!',
            })
          )
          }catch(error){
            dispatch(
                cartUiActions.showNotif({
                  status: 'error',
                  title: 'Error!',
                  message: 'Sending cart data failed!',
                })
              )
          }
    }
}

export const fetchCartData = ()=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response = await fetch('https://redux-cart-14dbb-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error("fetching failed ");
            }
            const data = await response.json();
            console.log(data);
            return data;
        }
        try{
          const cartData = await  fetchData();
          dispatch(cartActions.replaceCart({
            items:cartData.items,
            totalQuantity: cartData.totalQuantity,

          }))
   }catch(error){
    console.log(error);
   }
    }
    
}