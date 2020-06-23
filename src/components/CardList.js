import React, { Fragment, useState, useEffect } from 'react';

import Card from './Card';

const CardList = ({products, addToCart}) => {

    

    return (
        <Fragment>
            {
                
                <div>
                    <span className="products-length">{products.length} Product(s) found.</span>
                    <div className="card-list">
                        {
                            products.length === 0 ? <p className="text-center">Sorry, No products of the specified categories :-(</p> :
                            products.map(item => {
                                return (
                                    <Card key={item.id} data={item} addToCart={addToCart} />
                                )
                            })
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default CardList
