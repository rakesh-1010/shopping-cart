import React, { ChangeEvent } from 'react';
import { Items, User } from '../types';
import { CustomerType } from './customerType';
import { PizzaMenu } from "./menu"
import { CustomerMobile } from './mobileNumber';

const CustomerName = () => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name"/>
    </div>
  )
}

export interface CartProps {
  cart: Items;
  user: User;
  cartTotal: number;
  discount: number;
  customerType: string;
  handleMobileNumber: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCartItems: (item: string, type: string) => void
  handleDiscount: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const CartDetails: React.FC<CartProps> = ({cart, user, cartTotal, discount, customerType, handleDiscount, handleMobileNumber, handleCartItems }) => {
  return(
    <div className="w-96">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
        <CustomerMobile mobile={ user.mobile } handleMobileNumber={ handleMobileNumber}/>
        <CustomerName />
        <CustomerType handleDiscount={handleDiscount} customerType={ customerType }/>
        <PizzaMenu cart={cart} cartTotal={cartTotal} handleCartItems={handleCartItems} discount={ discount }/>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Rakesh Kumar All rights reserved.
      </p>
    </div>
  )
}