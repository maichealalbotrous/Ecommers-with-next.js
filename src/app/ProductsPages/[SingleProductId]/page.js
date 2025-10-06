'use client'
import { useParams } from 'next/navigation'
import React from 'react'
import {Products} from '../../../components/ui/ProductCatalog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CartLogic from'../../../components/ui/CartLogic';
import addToCart from '../../../components/ui/CartLogic';

function SingleProductPage() {

  const params = useParams();
  const productId = Number(params.SingleProductId);
  const product = Products.find((p) => p.id === productId);


  if (!product) {
    return (
      <div className="flex justify-center items-center h-64 text-xl font-bold text-red-500">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
     
     <Carousel>
  <CarouselContent>
    <CarouselItem> 
        <img
        src={product.img}
        alt={product.name}
        className="w-3xl h-56 object-cover rounded mx-auto mb-4"
      /></CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
   
</Carousel>
     
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <div className="text-gray-600 mb-4">{product.description}</div>
      <div className="text-lg font-semibold text-green-700 mb-4">${product.price}</div>
      <button
       onClick={() => addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          img: product.img
        })}
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-bold">
        Add to Cart
      </button>
    </div>
  );
}

export default SingleProductPage;
