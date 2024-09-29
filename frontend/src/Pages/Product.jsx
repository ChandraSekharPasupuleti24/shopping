import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_products, data_product, new_collections } = useContext(ShopContext);
  const { productId } = useParams();

  let product = all_products.find((e) => e.id === Number(productId));

  if (!product) {
    product = data_product.find((e) => e.id === Number(productId));
  }

  if (!product) {
    product = new_collections.find((e) => e.id === Number(productId));
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
