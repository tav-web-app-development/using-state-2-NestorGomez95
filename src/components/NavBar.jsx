import  { useState } from 'react';
export default function NavBar({ user } = false) {
  const [addToCart, setItemsInCart] = useState(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [useShippingAsBilling, setUseShippingAsBilling] = useState(false);
  const [shipping, setShipping] = useState({ firstName: '', lastName: '', address: '', city: '', state: '', postalCode: '' });
  const [billing, setBilling] = useState({ firstName: '', lastName: '', address: '', city: '', state: '', postalCode: '' });

  const handleAddToCartClick = () => {
    setItemsInCart(addToCart + 1);
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
      {user ? (
        <span>Welcome {user.firstName} {user.lastName}</span>
      ) : (
        <a href="#">Login</a>
      )}
      <span>
        {user && user.itemsInCart !== 0 ? `${user.itemsInCart} in your cart` : ''}
      </span>
      <a href="#home">Home</a>
      <a href="#laptops">Laptops</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
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
    </>
  );
}