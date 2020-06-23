import React from 'react'

const CartItem = ({product, changeQuantity}) => {
    return (
        <div className="cart-item">
            <img src={product.url} alt="cart-item" className="cart-item-image" />
            <div>
                <div>
                    <p className="item-title">{product.title}</p>
                    <span className="cart-item-price">Rs {product.price}</span>
                </div>
                <div>
                   
                    <div>
                     <button className="quantity-btn" onClick={() => changeQuantity(product, '-')}>Remove</button>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
