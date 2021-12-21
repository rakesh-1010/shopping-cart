import React, { ChangeEvent } from "react"

interface MobileProps {
  mobile: string;
  handleMobileNumber: (e: ChangeEvent<HTMLInputElement>) => void
}

export const CustomerMobile: React.FC<MobileProps> = ({ mobile, handleMobileNumber }) => {
    const isMobileValid = mobile.length !== 10;
    return (
        <div className="mb-4" data-testid="mobile">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                Mobile
            </label>
            <input
                className={`shadow 
                appearance-none
                border
                ${isMobileValid ? 'border-red-500 mb-3' : 'border-green-500'}
                rounded w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline`}
                id="mobile"
                type="text"
                placeholder="Enter Mobile"
                value={mobile}
                onChange={handleMobileNumber}/>    
                {
                    isMobileValid &&
                    <p className="text-red-500 text-xs italic">Enter 10 digits valid number.</p>
                }
        
        </div>
  )
}