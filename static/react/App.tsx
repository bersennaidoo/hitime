import React, { useState } from "react";
import Header from "./components/blocks/Header/Header";
import ThumbnailContainer from "./components/features/CoffeeShop/ThumbnailContainer/ThumbnailContainer";

function App() {
  const items = [
    { itemId: "1", imageId: "/images/200x200.png", title: "Drip Coffee", price: 0, description: "A product", salePrice: 0 },
    { itemId: "2", imageId: "/images/200x200.png", title: "Cookie", price: 0, description: "A product", salePrice: 0 },
    { itemId: "3", imageId: "/images/200x200.png", title: "Croissant", price: 0, description: "A product", salePrice: 0 },
    { itemId: "4", imageId: "/images/200x200.png", title: "Cupcake", price: 0, description: "A product", salePrice: 0 },
    { itemId: "5", imageId: "/images/200x200.png", title: "French Press", price: 0, description: "A product", salePrice: 0},
    { itemId: "6", imageId: "/images/200x200.png", title: "Iced Coffee", price: 0, description: "A product", salePrice: 0},
  ];
  return (
    <div className="pt-5 mt-5">
      <Header />
      <ThumbnailContainer items={items} />
    </div>
  );
}

export default App;
