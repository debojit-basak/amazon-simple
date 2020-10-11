import React from 'react';
//import {removeProduct} from '../Review/Review';

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity, key} = props.product;
    const reviewItemStyle={
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h3 className="product-name">{name}</h3>
        
            <p>{quantity}</p>
            <br/>
            <button
           className="main-button"
             onClick={()=>props.removeProduct(key)}>Remove</button>

        </div>
    );
};

export default ReviewItem;