import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const {product} = props
  return (
    <div className="breadcrum">
        HOME <img src={arrow_icon} alt="" height={13} width={15}/> SHOP <img src={arrow_icon} alt="" height={13} width={15}/> {product.category} <img src={arrow_icon} alt="" height={13} width={15}/> {product.name}
    </div>
  )
}

export default Breadcrums