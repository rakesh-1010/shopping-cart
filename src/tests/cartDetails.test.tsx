import React from 'react';
import { render, screen } from '@testing-library/react';
import { CartDetails, CartProps } from '../components/cartDetails';

const cartProps: CartProps = {
    user: {
        name: 'RK',
        mobile: '9897808136'
    },
    cart: {
        small: 0,
        medium: 0,
        large: 1,
    },
    cartTotal: 19.99,
    discount: 0,
    customerType: 'Amazon',
    handleMobileNumber: jest.fn(),
    handleCartItems: jest.fn(),
    handleDiscount: jest.fn(),
};
test('loads and displays cartItems, total, discount', () => {
    render(
        <CartDetails
            user={cartProps.user}
            cart={cartProps.cart}
            cartTotal={cartProps.cartTotal}
            discount={2}
            customerType={'default'}
            handleMobileNumber={jest.fn()}
            handleCartItems={jest.fn()}
            handleDiscount={jest.fn()}
        />
    )
    expect(screen.getByTestId('mobile')).toHaveTextContent('Mobile')
    expect(screen.getByTestId('discount')).toHaveTextContent('$2')
    expect(screen.getByTestId('cartTotal')).toHaveTextContent('$19.99')
    expect(screen.getByTestId('Large-count')).toHaveTextContent('1')
    expect(screen.getByTestId('Small-count')).toHaveTextContent('0')
})