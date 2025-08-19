import React, { useState } from 'react';
import contactBg from '../../assets/contact.jpg';
import bgbg from '../../assets/bgbg.jpg';
import bgBlue from '../../assets/bg_blue.jpg';
import reservationImg1 from '../../assets/Reservation_img1.png';
import reservationImg2 from '../../assets/Reservation_img2.png';
import reservationImg3 from '../../assets/Reservation_img3.png';
import reservationImg4 from '../../assets/Reservation_img4.png';

import '../../css/stylesheet.css';
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Reservation',
        message: '',
        details: {}
    });

    const [notification, setNotification] = useState({ message: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/contact/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    details: formData.subject === 'Reservation' ? {
                        ...formData.details,
                        date: new Date(formData.details.date).toISOString()
                    } : undefined
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Failed to submit');
            }

            setNotification({ message: 'Message sent successfully!', type: 'success' });

            setFormData({
                name: '',
                email: '',
                subject: 'Reservation',
                message: '',
                details: {}
            });

        } catch (error) {
            console.error('Submission error:', error);
            setNotification({ message: error.message || 'Failed to send message', type: 'error' });
        }

        // Remove notification after 3 seconds
        setTimeout(() => setNotification({ message: '', type: '' }), 3000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleDetailsChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            details: {
                ...prev.details,
                [name]: value
            }
        }));
    };

    return (
        <>
            {/* Notification */}
            {notification.message && (
                <div className={`notification ${notification.type}`}>
                    {notification.message}
                </div>
            )}

            <section id="contain">
                <div className="contact_block_cp" style={{ background: `url(${contactBg}) no-repeat center`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col contact_block_in_cp">
                                <div className="contact_middle_cp">
                                    <div className="contact_top_cp">
                                        <div className="contact_title_cp">
                                            CONTACT US
                                        </div>
                                        <div className="contact_info_cp">
                                            Feel free to send us a message.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="our_block_cp" style={{ background: `url(${bgbg})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col our_block_in_cp">
                                <div className="our_middle_cp">
                                    <div className="our_top_cp">
                                        <div className="our_box_cp">
                                            <a href="#">
                                                <div className="our_img_cp">
                                                    <FaLocationDot />
                                                </div>
                                                <div className="our_title_cp">OUR OFFICE</div>
                                                <div className="our_info_cp">Delicious Cafe, 1649 Norman Street, Los Angeles, 90011</div>
                                            </a>
                                        </div>

                                        <div className="our_box_cp">
                                            <a href="#">
                                                <div className="our_img_cp">
                                                    <MdEmail />
                                                </div>
                                                <div className="our_title_cp">EMAIL US</div>
                                                <div className="our_info_cp">hello@deliciouscafe.com</div>
                                            </a>
                                        </div>

                                        <div className="our_box_cp">
                                            <a href="#">
                                                <div className="our_img_cp">
                                                    <MdWifiCalling3 />
                                                </div>
                                                <div className="our_title_cp">CALL US</div>
                                                <div className="our_info_cp">8 (800) 316-06-42</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="your_block_cp" style={{ background: `url(${bgBlue})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="col your_block_in_cp">
                                <div className="your_middle_cp">
                                    <form onSubmit={handleSubmit} className="your_top_cp">
                                        <div className="your_row_cp">
                                            <div className="your_input_cp">
                                                <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                                            </div>
                                            <div className="your_input_cp">
                                                <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="your_input_cp">
                                            <select name="subject" value={formData.subject} onChange={handleChange} className="form-select">
                                                <option>Reservation</option>
                                                <option>General Questions</option>
                                                <option>Feedback</option>
                                                <option>Complaint</option>
                                                <option>Suggestion</option>

                                            </select>
                                        </div>
                                        {formData.subject === 'Reservation' && (
                                            <div className="reservation-details">
                                                <div className="your_row_cp">
                                                    <div className="your_input_cp">
                                                        <input type="date" name="date" value={formData.details.date || ''} onChange={handleDetailsChange} required />
                                                    </div>
                                                    <div className="your_input_cp">
                                                        <input type="time" name="time" value={formData.details.time || ''} onChange={handleDetailsChange} required />
                                                    </div>
                                                </div>
                                                <div className="your_input_cp">
                                                    <input type="number" placeholder="Number of Guests" name="guests" value={formData.details.guests || ''} min="1" onChange={handleDetailsChange} required />
                                                </div>

                                            </div>
                                        )}
                                        <div className="your_input_cp">
                                            <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                                        </div>
                                        <div className="order_right_btn_op your_btn_cp">
                                            <button type="submit" className="common_btn_hp">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="reservation_block_cp">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col reservation_block_in_cp">
                            <div className="reservation_middle_cp">
                                <div className="reservation_top_cp">
                                    <div className="reservation_box_cp">
                                        <div className="reservation_box_img_cp">
                                            <img src={reservationImg1} alt="Location" />
                                        </div>
                                        <div className="reservation_box_title_cp">Delicious Cafe, 1649 Norman Street, Los Angeles, 90011</div>
                                    </div>
                                    <div className="reservation_box_cp">
                                        <div className="reservation_box_img_cp">
                                            <img src={reservationImg2} alt="Phone" />
                                        </div>
                                        <div className="reservation_box_title_cp">8 (800) 316-06-42</div>
                                    </div>
                                    <div className="reservation_box_cp">
                                        <div className="reservation_box_img_cp">
                                            <img src={reservationImg3} alt="Email" />
                                        </div>
                                        <div className="reservation_box_title_cp">
                                            <a href="#">hello@deliciouscafe.com</a>
                                        </div>
                                    </div>
                                    <div className="reservation_box_cp">
                                        <div className="reservation_box_img_cp">
                                            <img src={reservationImg4} alt="Contact" />
                                        </div>
                                        <div className="reservation_box_title_cp">
                                            <a href="#">Drop Us a Line</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
