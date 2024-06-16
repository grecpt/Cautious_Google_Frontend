// src/components/ServiceItem.jsx
import React from 'react';

const ServiceItem = ({ service }) => {
    return (
        <div className="service-item">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <span>Price: K{service.price}</span>
        </div>
    );
};

export default ServiceItem;
