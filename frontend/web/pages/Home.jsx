import React from 'react';
import ChatWindow from '../components/ChatWidget/ChatWindow';

const Home = () => {
  return (
    <div className="container">
      <header style={{ padding: '50px 0', textAlign: 'center' }}>
        <h1>Welcome to Savoria</h1>
        <p>Experience the future of dining with our AI assistant.</p>
        <button className="btn btn-primary" style={{ marginTop: '20px' }}>Order Now</button>
      </header>
      <ChatWindow />
    </div>
  );
};

export default Home;
