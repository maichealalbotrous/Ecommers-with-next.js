'use client'
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from './button';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import CartLogic from './CartLogic';
import Header from './Header';
import addToCart from './CartLogic';
export  const ProductsCatalog = [
  {
    id: 1,
    name: "bracelets",
    type: "bracelet",
    
  },
  {
    id: 2,
    name: "necklaces",
    type: "necklace",
   
  },
];

export const Products = [
  {
    id: 1,
    img: "/photo_2025-10-01_17-10-35.jpg",
    name: "bracelet1",
    description:
      "Beautiful bracelet made of silver and adorned with sparkling gemstones. Perfect for adding a touch of elegance to any outfit.",
    type: "bracelet",
    price: 50,
    quantity: 1,
  },
  {
    id: 2,
    img: "/photo_2025-10-01_17-10-35.jpg",
    description:
      "Beautiful bracelet made of silver and adorned with sparkling gemstones. Perfect for adding a touch of elegance to any outfit.",
    name: "bracelet2",
    type: "bracelet",
    price: 60,
    quantity: 1,
  },
  {
    id: 3,
    img: "/photo_2025-10-01_17-10-35.jpg",
    description:
      "Beautiful bracelet made of silver and adorned with sparkling gemstones. Perfect for adding a touch of elegance to any outfit.",
    name: "necklace1",
    type: "necklace",
    price: 70,
    quantity: 1,
  },
  {
    id: 4,
    img: "/photo_2025-10-01_17-10-35.jpg",
    description:
      "Beautiful bracelet made of silver and adorned with sparkling gemstones. Perfect for adding a touch of elegance to any outfit.",
    name: "necklace2",
    type: "necklace",
    price: 80,
    quantity: 1,
  },
];

function ProductCatalog() {
  
  const addToCartlog = (id,name,price,image) => {
  addToCart(id, name, price, image);  
  }
  return (
    <div className="ProductsCatalogContainar p-4">

      <Tabs defaultValue={ProductsCatalog[0].type} className="w-full max-w-xl">
        <TabsList>
          {ProductsCatalog.map((cat) => (
            <TabsTrigger className=' cursor-pointer' key={cat.id} value={cat.type}>
              {cat.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {ProductsCatalog.map((cat) => (
          <TabsContent key={cat.id} value={cat.type}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {Products.filter((p) => p.type === cat.type).map((product) => (
                <Link href={`/ProductsPages/${product.id}`} key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
                  <img src={product.img} alt={product.name} className="  w-3xs h-3xs object-cover rounded mb-2" />
                  <div className="font-semibold ProductName">{product.name}</div>
                  <div className="text-gray-600 text-sm mb-2 Productdescription">{product.description}</div>
                  <div className="font-bold  text-green-600 text-2xl ProductPrice">${product.price}</div>
               <Button
  onClick={(e) => {
    e.preventDefault();   
    e.stopPropagation();     
    addToCartlog(product.id, product.name, product.price, product.img);
  }}
  className="mt-5 font-extrabold Add-To-Cart"
>
  <ShoppingCart />
  Add To Cart
</Button>
                </Link>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default ProductCatalog;
