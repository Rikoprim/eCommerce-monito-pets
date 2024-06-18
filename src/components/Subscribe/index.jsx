import { useState } from 'react';
import './subscribe.scss'

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailPattern.test(email)) {
      alert('Subscription successful ! Thank you for subscribing.');
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };
  return (
    <div className="subscribe">
      <h2>Register now so you don&apos;t miss our programs</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe now</button>
      </form>
    </div>
  )
}

export default Subscribe