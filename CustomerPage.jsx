// CustomerPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/customerpage.css'; // Import the CSS file

function CustomerPage() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="rbi-logo"></span>
        </div>
        <div className="navbar-right">
          <span>You're secure with us!</span>
        </div>
      </nav>
      <div className="button-container">
        <Link to="/create-account">
          <button>Create an Account</button>
        </Link>
        <Link to="/login">
        <button>Already Have an Account</button>
        </Link>
      </div>
      <div className="bank-info">
        <h2>About Our Bank</h2>
        <p>"Welcome to our bank! We're here to provide top-notch banking services tailored just for you. Whether you're saving, investing, or borrowing, our dedicated team is ready to assist you every step of the way. Thank you for choosing us as your trusted financial partner!"</p>
      </div>
      <footer className="footer">
        <h3>Contact Details</h3>
        <p>If you have any questions or need assistance, feel free to contact us:</p>
        <ul>
          <li>Email: info@bank.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Bank Street, City, Country</li>
        </ul>
      </footer>
    </div>
  );
}

export default CustomerPage;
