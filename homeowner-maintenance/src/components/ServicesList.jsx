// src/components/ServicesList.jsx
import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesList = ({ services }) => {
    return (
        <div className="services-list">
            {services.map(service => (
                <ServiceCard key={service.id} service={service} />
            ))}
        </div>
    );
};

export default ServicesList;