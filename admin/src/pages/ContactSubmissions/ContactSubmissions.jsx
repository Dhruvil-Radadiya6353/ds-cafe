import React, { useState, useEffect } from 'react';
import './contactsubmissions.css';

const ContactSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = selectedCategory === 'all' 
          ? 'http://localhost:4000/api/contact' 
          : `http://localhost:4000/api/contact?category=${selectedCategory}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (response.ok) {
          setSubmissions(data.data);
          document.documentElement.style.setProperty('--msg-count', data.data.length);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <div className="contact-submissions">
      <h1>Contact Submissions</h1>
      
      <div className="filter-section">
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="Reservation">Reservations</option>
          <option value="Feedback">Feedback</option>
          <option value="Complaint">Complaints</option>
          <option value="General Questions">General Questions</option>
          <option value="Suggestion">Suggestions</option>
        </select>
      </div>

      <div className="submissions-list">
        {submissions.map((sub) => (
          <div key={sub._id} className="submission-card">
            <div className="submission-header">
              <h3>{sub.subject}</h3>
              <span className="date">
                {new Date(sub.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="submission-body">
              <p><strong>From:</strong> {sub.name} ({sub.email})</p>
              <p><strong>Message:</strong> {sub.message}</p>
              {sub.subject === 'Reservation' && sub.details && (
                <div className="reservation-details">
                  <p><strong>Date:</strong> {new Date(sub.details.date).toLocaleDateString()}</p>
                  <p><strong>Time:</strong> {sub.details.time}</p>
                  <p><strong>Guests:</strong> {sub.details.guests}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSubmissions;
