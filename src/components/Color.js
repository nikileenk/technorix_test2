import React from 'react'

const Color = ({selectedSizes, setSize}) =>  {

    const sizes = ['black', 'white'];

    return (
        <div className="sizes">
            <h3>Color</h3>
            <div className="size-list">
                {
                    sizes.map((size, index) => {
                        return (
                            <button 
                                className={ "size" + (selectedSizes.includes(size) ? " selected-size" : "")}
                                key={index}
                                onClick={() => setSize(size)}
                            >
                                {size}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Color;
