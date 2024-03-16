import { useState } from "react";

export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0);

  const handleAddToCartClick = () => {
    setItemsInCart(itemsInCart + 1);
    alert(`you added ${itemsInCart + 1}`);
  };
  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex] + " " + product.name}
          alt={product.name}
        />
        <button
          disabled={currentImageIndex >= product.imageUrls.length - 1}
          onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
        >
          Next
        </button>
        <button
          disabled={currentImageIndex <= 0}
          onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
        >
          Previous
        </button>
      </div>

      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => setShowDescription(!showDescription)}>
        {showDescription ? "Hide " : "Show"} Description
      </button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      <div>You order this item {itemsInCart} times</div>
      {!product.isInStock && "The product is out of stock"}
    </>
  );
}
