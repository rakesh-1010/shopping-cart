import React, { FC } from "react";

interface Props {
    customerType: string;
    handleDiscount: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const CustomerType: FC<Props> = ({ customerType, handleDiscount }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Customer Type
      </label>
      <div className="inline-block relative w-full">
            <select name="type" id="customer" onChange={ handleDiscount} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option value="default">default</option>
                <option value="Amazon">Amazon</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Facebook">Facebook</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
        </div>
        {customerType === "Microsoft" &&
            <p className="text-green-500 text-xs italic">% Microsoft Gets a 3 for 2 deal for Small Pizzas</p>
        } 
        {customerType === "Amazon" &&
            <p className="text-green-500 text-xs italic">% Amazon Gets a discount on Large Pizza where the price drops to $19.99 per pizza</p>
        }
        {customerType === "Facebook" &&
            <p className="text-green-500 text-xs italic">% Facebook Gets a 5 for 4 deal on Medium Pizza</p>
        }
    </div>
  )
}