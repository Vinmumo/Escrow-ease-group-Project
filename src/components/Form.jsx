import React, { useState } from 'react';


function PaymentForm() {
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setPaymentMethods([...paymentMethods, value]);
        } else {
            setPaymentMethods(paymentMethods.filter(method => method !== value));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            paymentMethods,
            name,
            email,
            phone
        });
    };

    return (
      <div className="payment-container">
        <div className='car'>
          <h2>Car</h2>
          <img src="" alt='car'className='dog-image'/>
          <h3>Price</h3>
        </div>
      
        <div className="payment-form-container">
            <h2>Start Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className="payment-methods">
                    <label className="payment-method">
                        <input 
                            type="checkbox"
                            value="M-Pesa"
                            checked={paymentMethods.includes('M-Pesa')}
                            onChange={handleCheckboxChange}
                        />
                        M-Pesa
                    </label>
                    <label className="payment-method">
                        <input 
                            type="checkbox"
                            value="Card"
                            checked={paymentMethods.includes('Card')}
                            onChange={handleCheckboxChange}
                        />
                        Card
                    </label>
                    <label className="payment-method">
                        <input 
                            type="checkbox"
                            value="PayPal"
                            checked={paymentMethods.includes('PayPal')}
                            onChange={handleCheckboxChange}
                        />
                        PayPal
                    </label>
                </div>
                <div className='info'>
                <div>
                    <label>
                        
                        <input 
                        className='name'
                            placeholder='Name'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                       
                        <input 
                         className='name'
                        placeholder='Email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        
                        <input 
                         className='name'
                        placeholder='Phone Number'
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </label>
                </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="seller-info">
              <img src=""alt="Seller" className="seller-image" />
              <p className='seller-name'>Seller Name</p>
            </div>
        </div>
    );
}

export default PaymentForm;
