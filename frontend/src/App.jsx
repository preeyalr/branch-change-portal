import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    currentBranch: '',
    requestedBranch: [],
    category: '',
    categoryAlloted: '',
    gender: '',
    dob: '',
    cgpa: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox group for requestedBranch
    if (name === 'requestedBranch') {
      setFormData((prev) => {
        const updated = checked
          ? [...prev.requestedBranch, value]
          : prev.requestedBranch.filter((branch) => branch !== value);
        return { ...prev, requestedBranch: updated };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'number' ? parseFloat(value) : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/branch-change', formData);
      setMessage('Form submitted successfully!');
    } catch (error) {
      console.error('Error posting branch change:', error);
      setMessage('Failed to submit form.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Branch Change Request</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="border p-2 w-full" />

        <input type="text" name="rollNumber" value={formData.rollNumber} onChange={handleChange} placeholder="Roll Number" required className="border p-2 w-full" />

        <select name="currentBranch" value={formData.currentBranch} onChange={handleChange} required className="border p-2 w-full">
          <option value="">Select Current Branch</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="ME">ME</option>
          <option value="CE">CE</option>
          <option value="EE">EE</option>
          <option value="IT">IT</option>
        </select>

        <div>
          <label className="block font-semibold">Requested Branches</label>
          {['CSE', 'ECE', 'ME', 'CE', 'EE', 'IT'].map((branch) => (
            <div key={branch} className="flex items-center gap-2">
              <input
                type="checkbox"
                name="requestedBranch"
                value={branch}
                checked={formData.requestedBranch.includes(branch)}
                onChange={handleChange}
              />
              <label>{branch}</label>
            </div>
          ))}
        </div>

        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" required className="border p-2 w-full" />

        <input type="text" name="categoryAlloted" value={formData.categoryAlloted} onChange={handleChange} placeholder="Category Allotted" required className="border p-2 w-full" />

        <select name="gender" value={formData.gender} onChange={handleChange} required className="border p-2 w-full">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="border p-2 w-full" />

        <input type="number" step="0.01" name="cgpa" value={formData.cgpa} onChange={handleChange} placeholder="CGPA" required className="border p-2 w-full" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>

      {message && <p className="mt-4 text-sm text-green-600">{message}</p>}
    </div>
  );
}

export default App;
