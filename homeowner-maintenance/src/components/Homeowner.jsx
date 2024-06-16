// src/components/Homeowner.jsx
import React, { useEffect, useState } from 'react';
import ServicesList from './ServicesList';

const Homeowner = () => {
    const [services, setServices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredServices, setFilteredServices] = useState([]);

    useEffect(() => {
        // This is where you would fetch data from an API
        // For the sake of this example, we'll use a static list
        const fetchServices = async () => {
            const response = await fetch('/path-to-your-api/services');
            const data = await response.json();
            setServices(data);
        };

        // Example static data
        const staticServices = [
            { id: 1, name: 'Plumbing', category: 'Home Repair', description: 'Fixing leaks and clogs', price: 100, rating: 4, location: 'New York' },
            { id: 2, name: 'Electrical', category: 'Home Repair', description: 'Installing and repairing electrical systems', price: 150, rating: 5, location: 'Los Angeles' },
            { id: 3, name: 'Landscaping', category: 'Outdoor', description: 'Mowing, trimming, and planting', price: 50, rating: 3, location: 'New York' },
            { id: 4, name: 'Cleaning', category: 'Indoor', description: 'General house cleaning', price: 80, rating: 4, location: 'Chicago' },
        ];

        // Uncomment the line below to use the fetch call
        // fetchServices();

        // Using static data for now
        setServices(staticServices);
        setFilteredServices(staticServices);
    }, []);

    useEffect(() => {
        setFilteredServices(
            services.filter(service =>
                service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                service.location.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, services]);

    return (
        <div className="homeowner">
            <h1>Handyman Service App</h1>
            <input
                type="text"
                placeholder="Search by name, description, category, or location"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
            <ServicesList services={filteredServices} />
        </div>
    );
};

export default Homeowner;