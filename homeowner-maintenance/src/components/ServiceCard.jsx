// src/components/ServiceCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const ServiceCard = ({ service }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/service/${service.id}`);
    };

    return (
        <div className="service-card" onClick={handleCardClick}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p>Price: K{service.price}</p>
            <div className="service-card-footer">
                <span>Rating:</span>
                <ReactStars
                    count={5}
                    value={service.rating}
                    size={24}
                    activeColor="#ffd700"
                    edit={false}
                />
            </div>
        </div>
    );
};

export default ServiceCard;