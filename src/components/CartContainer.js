import { useDispatch,useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";
const CartContainer = () => {
    const dspatch=useDispatch();
    const {cartItems, total, amount} = useSelector ((store) => store.cart)
    if (amount < 1){
        return <section className="cart">
            <header>
                <h2> Your bag</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    }
    
    return(
        <section className="cart">
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {cartItems.map((item)=> {
            return <CartItem key={item.id} {...item} />;
            })}
        </div>
        <div className="cart-total">
        <footer>
            <hr />
            <h4>
            Total <span>${total.toFixed(2)}</span>
            </h4>
        <button className="btn clear-btn" onClick={() => dspatch(openModal())}>Clear Cart</button>
       </footer>
    </div>
        
    </section> 
    ); 
};

export default CartContainer;