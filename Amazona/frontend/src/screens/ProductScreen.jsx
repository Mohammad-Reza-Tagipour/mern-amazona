import React from 'react';
import data from '../data';
import { useParams } from 'react-router-dom';
export const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};
export default ProductScreen;
