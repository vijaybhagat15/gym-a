import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const [isPaymentProcessed, setIsPaymentProcessed] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Fetching cart data from localStorage
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !value ? 'This field is required.' : '',
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required.';
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    alert('Your order has been placed!');
    localStorage.removeItem('cart');
    setIsPaymentProcessed(true);

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className="mx-auto py-12 px-6 font-sans bg-[#283618] border-b-2 border-white text-white">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 font-serif">Checkout</h1>

        {/* Cart Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 font-serif">Your Cart</h2>
          <div className="border rounded-lg p-4">
            {cart.length === 0 ? (
              <p className="font-sans">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold font-serif">{item.name}</h3>
                    <p className="font-sans">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-sans">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))
            )}
            <div className="flex justify-between font-semibold mt-4">
              <p className="font-sans">Total:</p>
              <p className="font-sans">${totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Shipping Form */}
        {!isPaymentProcessed && (
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {['name', 'phone', 'address', 'city', 'postalCode'].map((field) => (
                <div key={field} className="mb-4">
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium font-sans capitalize"
                  >
                    {field.replace(/([A-Z])/g, ' $1')}
                  </label>
                  <input
                    type={field === 'phone' ? 'tel' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    aria-label={field}
                    className={`mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 ${
                      errors[field] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                    }`}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              ))}
            </div>
            <button
              type="submit"
              className={`bg-orange-600 mt-3 py-3 px-6 rounded-md ${
                cart.length === 0 ? 'cursor-not-allowed opacity-50' : 'hover:bg-orange-700'
              } focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans`}
              disabled={cart.length === 0}
            >
              Place Order
            </button>
          </form>
        )}

        {/* Confirmation Message after Payment */}
        {isPaymentProcessed && (
          <div className="text-center mt-8">
            <p className="text-xl font-semibold font-serif">
              Thank you for your purchase!
            </p>
            <p className="font-sans">Your order is being processed.</p>
          </div>
        )}
      </div>
    </div>
  );
}
