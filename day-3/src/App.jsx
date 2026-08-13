import React, { useState } from 'react'
// import Counter from './Counter'
import ProductsCard from './ProductsCard';

const App = () => {
  const [productsData, setProductsData] = useState([
  {
    id: 1,
    name: "Aura Noise-Canceling Headphones",
    price: 299.99,
    details: "Over-ear wireless headphones with active noise cancellation and 30-hour battery life.",
    image: "https://picsum.photos/seed/product-1/400/300"
  },
  {
    id: 2,
    name: "Ergonomic Mesh Office Chair",
    price: 189.50,
    details: "High-back desk chair featuring adjustable lumbar support and breathable mesh.",
    image: "https://picsum.photos/seed/product-2/400/300"
  },
  {
    id: 3,
    name: "Minimalist Ceramic Coffee Mug",
    price: 18.00,
    details: "12oz hand-crafted matte ceramic mug suitable for hot and cold beverages.",
    image: "https://picsum.photos/seed/product-3/400/300"
  },
  {
    id: 4,
    name: "Ultra-Fast Mechanical Keyboard",
    price: 124.99,
    details: "RGB backlit mechanical keyboard with hot-swappable tactile switches.",
    image: "https://picsum.photos/seed/product-4/400/300"
  },
  {
    id: 5,
    name: "Smart Water Bottle with LED Indicator",
    price: 45.00,
    details: "Insulated stainless steel bottle that tracks hydration levels via a companion app.",
    image: "https://picsum.photos/seed/product-5/400/300"
  },
  {
    id: 6,
    name: "Portable LED Desk Lamp",
    price: 34.99,
    details: "Dimmable touch-control lamp with adjustable color temperatures and wireless charging pad.",
    image: "https://picsum.photos/seed/product-6/400/300"
  },
  {
    id: 7,
    name: "Waterproof Trail Running Shoes",
    price: 139.95,
    details: "Durable all-terrain running shoes with high-traction rubber outsoles.",
    image: "https://picsum.photos/seed/product-7/400/300"
  },
  {
    id: 8,
    name: "Compact Espresso Machine",
    price: 199.99,
    details: "15-bar pump pressure espresso maker with manual milk frother wand.",
    image: "https://picsum.photos/seed/product-8/400/300"
  },
  {
    id: 9,
    name: "4K Ultra HD Monitor 27-inch",
    price: 349.00,
    details: "IPS display with 99% sRGB color gamut and USB-C single-cable connectivity.",
    image: "https://picsum.photos/seed/product-9/400/300"
  },
  {
    id: 10,
    name: "Eco-Friendly Linen Duvet Cover Set",
    price: 89.99,
    details: "100% washed French flax linen set including duvet cover and two pillow shams.",
    image: "https://picsum.photos/seed/product-10/400/300"
  },
  {
    id: 11,
    name: "Wireless Bluetooth Speaker",
    price: 59.99,
    details: "Compact IPX7 waterproof speaker delivering 360-degree punchy audio sound.",
    image: "https://picsum.photos/seed/product-11/400/300"
  },
  {
    id: 12,
    name: "Leather Minimalist Wallet",
    price: 28.50,
    details: "Slim front-pocket wallet made from full-grain leather with RFID blocking.",
    image: "https://picsum.photos/seed/product-12/400/300"
  },
  {
    id: 13,
    name: "HD Webcam with Dual Microphones",
    price: 69.99,
    details: "1080p 60fps streaming webcam with auto-light correction and privacy shutter.",
    image: "https://picsum.photos/seed/product-13/400/300"
  },
  {
    id: 14,
    name: "Stainless Steel Chef's Knife",
    price: 75.00,
    details: "8-inch German steel kitchen knife with ergonomic pakkawood handle.",
    image: "https://picsum.photos/seed/product-14/400/300"
  },
  {
    id: 15,
    name: "Noise-Isolating Earbuds",
    price: 49.99,
    details: "True wireless in-ear earbuds featuring customizable silicone tips and quick charge.",
    image: "https://picsum.photos/seed/product-15/400/300"
  },
  {
    id: 16,
    name: "Adjustable Standing Desk Converter",
    price: 159.00,
    details: "Gas-spring desktop riser that transitions smoothly from sitting to standing heights.",
    image: "https://picsum.photos/seed/product-16/400/300"
  },
  {
    id: 17,
    name: "Canvas Travel Backpack",
    price: 64.95,
    details: "25L water-resistant vintage canvas backpack with padded 15.6-inch laptop sleeve.",
    image: "https://picsum.photos/seed/product-17/400/300"
  },
  {
    id: 18,
    name: "Fitness Tracker Smartwatch",
    price: 110.00,
    details: "Monitors heart rate, sleep quality, daily activity steps, and oxygen saturation.",
    image: "https://picsum.photos/seed/product-18/400/300"
  },
  {
    id: 19,
    name: "Cast Iron Skillet 12-Inch",
    price: 32.99,
    details: "Pre-seasoned heavy-duty cookware built for stovetop, oven, or campfire cooking.",
    image: "https://picsum.photos/seed/product-19/400/300"
  },
  {
    id: 20,
    name: "Aromatherapy Essential Oil Diffuser",
    price: 24.99,
    details: "300ml ultrasonic cool mist diffuser with 7 ambient color-changing LED lights.",
    image: "https://picsum.photos/seed/product-20/400/300"
  }
  ]);
  let deleteProducts = (id) =>{
    let products = productsData.filter((elem)=> elem.id !== id);
    setProductsData(products);
  }
  return (
    <div>
      

    <div className = "flex flex-wrap gap-4">
      {productsData.map((elem)=>{
        return <ProductsCard key={elem.id} product={elem} del = {deleteProducts} />
        
      } )}
    </div>
    </div>
  )
}

export default App
