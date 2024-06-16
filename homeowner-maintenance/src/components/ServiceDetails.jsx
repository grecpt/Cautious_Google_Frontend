// src/components/ServiceDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ServiceDetails = () => {
    const { id } = useParams();
    const [services, setServices] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeSlot, setTimeSlot] = useState('');
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    useEffect(() => {
        // Fetch all services from API or set static data
        const fetchServices = async () => {
            // Replace with actual API endpoint or method to fetch services
            // Example using static data:
            setServices([
                {
                    id: 1,
                    name: 'Plumbing',
                    category: 'Home Repair',
                    description: 'Fixing leaks and clogs',
                    price: 100,
                    rating: 4,
                    location: 'New York',
                    provider: 'John Doe',
                    contact: 'john.doe@example.com',
                    phone: '123-456-7890',
                    duration: '2 hours',
                    images: [
                        'https://via.placeholder.com/150',
                        'https://via.placeholder.com/150'
                    ],
                    availability: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'],
                    detailedDescription: [
                        'Diagnostic and repair of plumbing issues',
                        'Replacement of faulty fixtures and pipes',
                        'Installation of new plumbing systems',
                        'Emergency plumbing services available'
                    ]
                },
                {
                    id: 2,
                    name: 'Electrical Repair',
                    category: 'Home Repair',
                    description: 'Electrical wiring, fixture installation, and repairs',
                    price: 120,
                    rating: 4.5,
                    location: 'Los Angeles',
                    provider: 'Jane Smith',
                    contact: 'jane.smith@example.com',
                    phone: '987-654-3210',
                    duration: '1.5 hours',
                    images: [
                        'https://via.placeholder.com/150',
                        'https://via.placeholder.com/150'
                    ],
                    availability: ['10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'],
                    detailedDescription: [
                        'Electrical system troubleshooting and diagnostics',
                        'Installation of lighting and electrical fixtures',
                        'Rewiring and circuit breaker panel upgrades',
                        'Emergency electrical services available'
                    ]
                },
                {
                    id: 3,
                    name: 'Landscaping',
                    category: 'Outdoor',
                    description: 'Moving, trimming, and planting',
                    price: 50,
                    rating: 3,
                    location: 'Los Angeles',
                    provider: 'Jane Smith',
                    contact: 'jane.smith@example.com',
                    phone: '987-654-3210',
                    duration: '1.5 hours',
                    images: [
                        'https://via.placeholder.com/150',
                        'https://via.placeholder.com/150'
                    ],
                    availability: ['10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'],
                    detailedDescription: [
                        'Lawn mowing',
                        'Tree and shrub trimming',
                        'Irrigration system maintenance',
                    ]
                },
                {
                    id: 4,
                    name: 'Cleaning',
                    category: 'General house cleaning',
                    description: 'Moving, trimming, and planting',
                    price: 50,
                    rating: 4,
                    location: 'Los Angeles',
                    provider: 'Jane Smith',
                    contact: 'jane.smith@example.com',
                    phone: '987-654-3210',
                    duration: '1 hour',
                    images: [
                        'https://via.placeholder.com/150',
                        'https://via.placeholder.com/150'
                    ],
                    availability: ['10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'],
                    detailedDescription: [
                        'Wiping down surfaces such as shelves, tables, and other furnitures to remove dust',
                        'Vaccuming carpets and rugs',
                        'Sweeping hard floors to remove dust, dirt, and debris',
                    ]
                }
                // Add more services as needed
            ]);
        };

        fetchServices();
    }, []);

    const handleBooking = (e) => {
        e.preventDefault();
        // Handle booking logic here
        // For now, we just set booking confirmed to true
        setBookingConfirmed(true);
    };

    const service = services.find(service => service.id === parseInt(id));

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div className="service-details">
            <Link to="/">Back to Services</Link>
            <h2>{service.name}</h2>
            <p><strong>Category:</strong> {service.category}</p>
            <p><strong>Description:</strong> {service.description}</p>
            <p><strong>Price:</strong> K{service.price}</p>
            <p><strong>Duration:</strong> {service.duration}</p>
            <p><strong>Rating:</strong> {service.rating}</p>
            <p><strong>Location:</strong> {service.location}</p>
            <p><strong>Provider:</strong> {service.provider}</p>
            <p><strong>Contact:</strong> {service.contact}</p>
            <p><strong>Phone:</strong> {service.phone}</p>

            <div className="service-images">
                {service.images.map((image, index) => (
                    <img key={index} src={image} alt={`Service ${index + 1}`} />
                ))}
            </div>

            <div className="detailed-description">
                <h3>Detailed Description:</h3>
                <ul>
                    {service.detailedDescription.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            {bookingConfirmed ? (
                <div className="booking-confirmation">
                    <h3>Booking Confirmed!</h3>
                    <p>Your service is booked for {selectedDate.toDateString()} at {timeSlot}.</p>
                </div>
            ) : (
                <form onSubmit={handleBooking} className="booking-form">
                    <h3>Book Service</h3>
                    <div className="form-group">
                        <label htmlFor="date">Select Date:</label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="MMMM d, yyyy"
                            minDate={new Date()}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="timeSlot">Select Time Slot:</label>
                        <select
                            id="timeSlot"
                            value={timeSlot}
                            onChange={(e) => setTimeSlot(e.target.value)}
                            required
                        >
                            <option value="">Select a time slot</option>
                            {service.availability.map((slot, index) => (
                                <option key={index} value={slot}>{slot}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit">Book Now</button>
                </form>
            )}
        </div>
    );
};

export default ServiceDetails;