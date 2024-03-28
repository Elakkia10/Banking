import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/admin.css';

function AdminPage() {
  return (
    <div className="admin-container">
      <h1>Welcome Admin!</h1>
      <div className="button-container">
        <Link to="/approve-accounts">
          <button className="admin-button" style={{ backgroundColor: 'green' }}>Approval of Accounts</button>
        </Link>
        <Link to="/transactions">
          <button className="admin-button" style={{ backgroundColor: '#008CBA' }}>Transactions Done</button>
        </Link>
        <Link to="/customer-details">
          <button className="admin-button" style={{ backgroundColor: '#f44336' }}>Customer Details</button>
        </Link>
        <Link to="/Loan-details">
          <button className="admin-button" style={{ backgroundColor: '#FFC107' }}>Loan Details</button>
        </Link>
        <Link to="/Bank-registration">
          <button className="admin-button" style={{ backgroundColor: '#795548' }}>Bank Registration Main</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPage;
