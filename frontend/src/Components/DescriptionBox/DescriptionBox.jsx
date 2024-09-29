import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>E-commerce, put simply, is the practice of buying and selling goods or services using the Internet. It has gained immense popularity as a way of doing business because it's convenient and accessible at the same time. Instead of a physical store where the products to be sold are generally displayed, e-commerce businesses have virtual storefronts where customers can browse and purchase products or services online itself.</p>
            <p>
            To start an e-commerce business, you need an online platform that offers a smooth shopping experience for your customers. This could mean setting up an entirely new business or transforming an existing physical store into a digital platform for trade.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox