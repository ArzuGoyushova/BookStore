import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const CheckoutSteps = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className='w-full'>
      <div>
        <div className='flex justify-between'>
          <span>Information</span>
          <span>Delivery</span>
          <span>Payment</span>
        </div>
        <div className='flex justify-between'>
        <span className={`border ${step >= 1 ? 'border-orange-500 bg-orange-500' : 'border-gray-500'} px-4 py-2`}>
    {step > 1 ? <FaCheck /> : '1'}
  </span>
  <span className={`line ${step >= 2 ? 'line-orange' : 'line-gray'}`} />
  <span className={`border ${step >= 2 ? 'border-orange-500 bg-orange-500' : 'border-gray-500'} px-4 py-2`}>
    {step > 2 ? <FaCheck /> : '2'}
  </span>
  <span className={`line ${step >= 3 ? 'line-orange' : 'line-gray'}`} />
  <span className={`border ${step >= 3 ? 'border-orange-500 bg-orange-500' : 'border-gray-500'} px-4 py-2`}>
    {step > 3 ? <FaCheck /> : '3'}
  </span>
        </div>
        <div className='my-4'>
          {step === 1 && (
            <form className='flex flex-col space-y-2'>
            <label className='font-bold' htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              className='border border-gray-400 p-2'
            />

            <label className='font-bold' htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Your Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              className='border border-gray-400 p-2'
            />

            <label className='font-bold' htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              className='border border-gray-400 p-2'
            />

            <label className='font-bold' htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Your Mobile Number*"
              value={formData.mobileNumber}
              onChange={handleChange}
              className='border border-gray-400 p-2'
            />
<br/>
            <button className='border border-gray-700 p-2 font-bold' type="button" onClick={handleNextStep}>
              Next Step
            </button>
          </form>
          )}
          {step === 2 && (
            <form className='flex flex-col space-y-2'>
            <label className='font-bold' htmlFor="deliveryMethod">Delivery Method</label>
            <input
              type="text"
              id="deliveryMethod"
              name="deliveryMethod"
              placeholder="Delivery Method*"
              value={formData.deliveryMethod}
              onChange={handleChange}
              className='border border-gray-400 p-2'
            />
          
            <label className='font-bold' htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City*"
              value={formData.city}
              onChange={handleChange}
              className='border border-gray-400 p-2'
            />
          
            <label className='font-bold' htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              placeholder="Street*"
              value={formData.street}
              onChange={handleChange}
              className='border border-gray-400 p-2'
            />
          
            <label className='font-bold' htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              placeholder="Postal Code*"
              value={formData.postalCode}
              onChange={handleChange}
              className='border border-gray-400 p-2'
            />
          
            <br />
          
            <button className='border border-gray-700 p-2 font-bold' type="button" onClick={handleNextStep}>
              Next Step
            </button>
          </form>
          
          )}
          {step === 3 && (
            // Form for Payment Information
            <form className='flex flex-col space-y-2'>
            <label className='font-bold' htmlFor="paymentMethod">Payment Method</label>
            <input
              type="text"
              id="paymentMethod"
              name="paymentMethod"
              placeholder="Payment Method*"
              value={formData.paymentMethod}
              onChange={handleChange}
              className='border border-gray-400 p-2'
            />
          
            <label className='font-bold' htmlFor="cardInfo">Card Info</label>
            <input
              type="text"
              id="cardInfo"
              name="cardInfo"
              placeholder="Card Info*"
              value={formData.cardInfo}
              onChange={handleChange}
              className='border border-gray-400 p-2'
            />
          
            <label className='font-bold'>
              <input
                type="checkbox"
                id="termsAndConditions"
                name="termsAndConditions"
                checked={formData.termsAndConditions}
                onChange={handleChange}
                className='mr-2'
              />
              Agree to Terms and Conditions
            </label>
          
            <br />
          
            <button className='border border-gray-700 p-2 font-bold' type="button" onClick={handleNextStep}>
              Pay and Place Order
            </button>
          </form>
          
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
