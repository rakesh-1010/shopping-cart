import React, { ChangeEvent, useEffect, useState } from 'react';
import { CartDetails } from '../components/cartDetails';
import { PIZZA_PRICE } from '../constants';
import { Items } from '../types';

const Cart = () => {
    const items: Items = {
        small: 0,
        medium: 0,
        large: 0
    };

    const [user, setUser] = useState({
        name: '',
        mobile: ''
    });
    const [cart, setCart] = useState(items);
    const [cartTotal, setCartTotal] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [customerType, setCustomerType] = useState("default");

    const handleCartItems = (item: string, type: string): void => {
        const cartItem = (cart as any)[item];
        if (type === "inc") {
            setCart({
                ...cart,
                [item]: cartItem + 1
            })
        } else if (type === "dec" && cartItem > 0) {
            setCart({
                ...cart,
                [item]: cartItem - 1
            })
        }
    }

    useEffect(() => {
        calculateDiscount();
        calculateCartTotal();
    }, [cart, discount, customerType]);

    const calculateCartTotal = () => {
        let total = 0;
        for (const item in cart) {
            total = total + (cart as any)[item] * (PIZZA_PRICE as any)[item]
        }
        setCartTotal((total-discount));
    }

    const calculateDiscount = () => {
        switch (customerType) {
            case "Amazon":
                setDiscount(cart.large * 2);
                break;
            case "Microsoft":
                setDiscount(Math.floor(cart.small / 3) * PIZZA_PRICE.small);
                break;
            case "Facebook":
                setDiscount(Math.floor(cart.medium / 5) * PIZZA_PRICE.medium);
                break;
            default:
                setDiscount(0);
                break;
        }
    }

    const handleDiscount = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const type = event.target.value;
        setCustomerType(type);
    }

    const handleMobileNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            mobile: e.target.value
        })
    }

    return (
        <CartDetails
            user={user}
            cart={cart}
            cartTotal={cartTotal}
            discount={discount}
            customerType={customerType}
            handleMobileNumber={handleMobileNumber}
            handleCartItems={handleCartItems}
            handleDiscount={handleDiscount}
        />
    )
}

export default Cart;