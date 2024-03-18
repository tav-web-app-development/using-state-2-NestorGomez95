import { useState } from 'react';
export default function ProductCard({ product, addToCart, itemsInCart }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(false);
  const [shipping, setShipping] = useState({ firstName: '', lastName: '', address: '', city: '', state: '', postalCode: '' });
  const [billing, setBilling] = useState({ firstName: '', lastName: '', address: '', city: '', state: '', postalCode: '' });

  const handleAddToCartClick = () => {
    addToCart(product);
    alert(`You added 1 item to your cart`);
  };

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === 'shipping') {
      setShipping({ ...shipping, [name]: value.trim() });
    } else {
      setBilling({ ...billing, [name]: value.trim() });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedShipping = { ...shipping, firstName: shipping.firstName.trim(), lastName: shipping.lastName.trim() };
    const finalBilling = useShippingAsBilling ? trimmedShipping : { ...billing, firstName: billing.firstName.trim(), lastName: billing.lastName.trim() };
    console.log('Shipping:', trimmedShipping, 'Billing:', finalBilling);
  };

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex]}
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

      <button onClick={() => setShowCheckout(!showCheckout)}>Checkout</button>
      {showCheckout && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={(e) => handleInputChange(e, 'shipping')} />
          <input type="text" name="lastName" placeholder="Last Name" onChange={(e) => handleInputChange(e, 'shipping')} />
          <input type="text" name="address" placeholder="Address" onChange={(e) => handleInputChange(e, 'shipping')} />
          <input type="text" name="city" placeholder="City" onChange={(e) => handleInputChange(e, 'shipping')} />
          <input type="text" name="state" placeholder="State" onChange={(e) => handleInputChange(e, 'shipping')} />
          <input type="text" name="postalCode" placeholder="Postal Code" onChange={(e) => handleInputChange(e, 'shipping')} />
          <label>
            <input type="checkbox" checked={useShippingAsBilling} onChange={() => setUseShippingAsBilling(!useShippingAsBilling)} />
            Use shipping address as billing address
          </label>
          {!useShippingAsBilling && (
            <>
              <input type="text" name="firstName" placeholder="First Name" onChange={(e) => handleInputChange(e, 'billing')} />
              <input type="text" name="lastName" placeholder="Last Name" onChange={(e) => handleInputChange(e, 'billing')} />
              <input type="text" name="address" placeholder="Address" onChange={(e) => handleInputChange(e, 'billing')} />
              <input type="text" name="city" placeholder="City" onChange={(e) => handleInputChange(e, 'billing')} />
              <input type="text" name="state" placeholder="State" onChange={(e) => handleInputChange(e, 'billing')} />
              <input type="text" name="postalCode" placeholder="Postal Code" onChange={(e) => handleInputChange(e, 'billing')} />
            </>
          )}
          <button type="submit">Submit</button>
        </form>
      )}
      {!product.isInStock && <div>The product is out of stock</div>}
      {itemsInCart !== 0 && <div>{itemsInCart} in your cart</div>}
    </>
  );
}