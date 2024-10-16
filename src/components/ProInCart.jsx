import trash from "../assets/icons/trash.png";
import { useDispatch,useSelector } from "react-redux";
import { removeFromCart } from "../Redux/cartSlice";

function ProInCart() {
  const items= useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch()
  
  return (
    <div className="flex font-nunito">
      <ul className="w-full mx-5">
          {items && items.map((item, id) => (
            <li key={id}>
              <div className="flex p-2 justify-between">
                <div className="flex gap-5">
                  <img className="w-16 aspect-square border border-black rounded-md" src={item.image} alt="" />
                  <div className="flex flex-col justify-between">
                    <span className="text-base text-gray-900">{item.title}</span>
                    <span className="text-base text-gray-900">-{item.quantity}+</span>
                    <span>{item.prcie}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <img onClick={()=>dispatch(removeFromCart(item))} className="w-4 mt-2 opacity-70 hover:opacity-100 hover:scale-110 cursor-pointer aspect-square" src={trash} alt="" />
                  {/* <span>{price}</span> */}
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ProInCart;
