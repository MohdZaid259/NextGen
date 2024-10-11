import React from "react";
import trash from "../assets/icons/trash.png";
import { useDispatch,useSelector } from "react-redux";
import { removeFromCart } from "../Redux/cartSlice";

function ProInCart() {
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  console.log(items)
  return (
    <div className="flex font-nunito">
      <ul className="w-full mx-5">
          {/* {items.length!==0 && items.map((item, id) => (
            <li key={id}>
              <div className="flex  p-2 justify-between">
                <img className="w-16 aspect-square rounded-md" src={item.image} alt="" />
                <div className="flex flex-col justify-between">
                  <span className="text-sm text-gray-700">{item.title}</span>
                  <span>-{totalQuantity}+</span>
                </div>
                <div className="flex flex-col justify-between">
                  <img onClick={(e)=>dispatch(removeFromCart(e))} className="w-4 aspect-square" src={trash} alt="" />
                  <span>{totalPrice}</span>
                </div>
              </div>
            </li>
          ))} */}
      </ul>
    </div>
  );
}

export default ProInCart;
