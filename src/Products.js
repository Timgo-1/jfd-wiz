import React, { Component } from 'react'
import hill from './no-post-image.png';

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: null,
        };
    }

    render() {
        return (
            <div class="wow">
                <ul className="products">
                    {this.props.products.map(product => (
                        <li key={product._id}>
                            <div className="product">
                                <div className="pow">
                                    <button onClick={() => product._id}><i class="fas fa-ellipsis-h"></i></button>
                                    <span>{product.published_at}</span>
                                    <b>{product.status}</b>
                                </div>
                                <div className="poa">
                                </div>
                                <div className="pob"> 
                                    {product.message} 
                                </div>
                                <div className="pod">
                                    <a href={"#" + product._id}>
                                        <div className="poe">
                                            <img src={product.image||hill} alt={hill} height="300em" width="300em"></img>
                                            <span><button onClick={() => product.link}><i class="fas fa-share-square"></i></button></span>  <br />
                                            {product.name}
                                        </div>
                                    </a>
                                </div>
                                <div className="pro">
                                    <button onClick={() => product._id}><i class="fas fa-thumbs-up"></i>Like</button>
                                    <span><button onClick={() => product._id}><i class="fa fa-trash" aria-hidden="true"></i>Delete</button></span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}