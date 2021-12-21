import React, {FC} from "react"
import { PIZZA_PRICE, PIZZA_TYPES } from "../constants"
import { Items } from "../types"

interface MenuProps {
    cart: Items;
    cartTotal: number;
    discount: number;
    handleCartItems: (item: string, type: string) => void
}

export const PizzaMenu: FC<MenuProps> = ({ cart, cartTotal, discount, handleCartItems }) => {

    const cartItems = () => {
        let item, price;
        return (PIZZA_TYPES.map((type: string, index: number) => {
            item = (cart as any)[type.toLowerCase()];
            price = (PIZZA_PRICE as any)[type.toLowerCase()];
            return (
               <div className="flex flex-row p-4 text-gray-400 bg-white" key={index}>
                    <div className="basis-1/2">{type}</div>
                    <div className="basis-1/4 cursor-pointer select-none" onClick={() => handleCartItems(type.toLowerCase(), "dec")}>➖</div>
                    <div className="basis-1/4" data-testid={`${type}-count`}>{item}</div>
                    <div className="basis-1/4 cursor-pointer select-none" onClick={() => handleCartItems(type.toLowerCase(), "inc")}>➕</div>
                    <div className="basis-1/4">
                        ${item === 0 ? price : (item * price).toFixed(2)}
                    </div>
                </div> 
            )
        }))
        
    }
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="menu">
                🍕 Menu
            </label>
            <div className="grid grid-cols-1 divide-y">
                {cartItems()}
                <div className="flex flex-row p-4 text-gray-400 bg-white justify-between">
                    <div>Discount</div>
                    <div data-testid='discount'>${discount.toFixed(2)}</div>
                </div>
                <div className="flex flex-row p-4 text-gray-400 bg-white justify-between">
                    <div>Total</div>
                    <div data-testid='cartTotal'>${ (cartTotal).toFixed(2) }</div>
                </div>
            </div>
        </div>
  )
}