import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/First.css';

const First = () => {
  return (
    <div className="bank-container">
      <header className="bank-header">
        <h1>EVB</h1>
      </header>
      <div className="bank-content">
        <h2>Welcome to EVB</h2>
        <p>We are committed to providing excellent banking services to our customers.</p>
        <div className="bank-btn-container">
          <Link to="/signup" className="bank-btn">Sign Up</Link>
          <Link to="/signin" className="bank-btn">Sign In</Link>
        </div>
      </div>
      <footer className="bank-footer">
        <p>&copy; 2024 EVB. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default First;
