import React from 'react';
import './admin.css';
export const AdminCard = ({title, counter}) => {
  return (
    <div className="col-md-4">
      <div className="admin-card">
        <h2>{counter}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
};
