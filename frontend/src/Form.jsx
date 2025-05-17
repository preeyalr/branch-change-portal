import { useState } from 'react';
import axios from 'axios';
import './App.css';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    currentBranch: '',
    requestedBranch: [], // now an array
    category: '',
    categoryAlloted: '',
    gender: '',
    dob:'',
    cgpa:'',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/branch-change', formData);
      setMessage(response.data.message || 'Request submitted successfully!');
    } catch (error) {
      console.error(error);
      setMessage('Something went wrong. Please try again.');
    }
  };
const handleCheckboxChange = (e) => {
  const { value, checked } = e.target;

  setFormData((prev) => {
    const updatedBranches = checked
      ? [...prev.requestedBranch, value] // add
      : prev.requestedBranch.filter((v) => v !== value); // remove

    return {
      ...prev,
      requestedBranch: updatedBranches,
    };
  });
};

  return (
    <div className="form-container">
      <h1>Branch Change Request</h1>
      <form onSubmit={handleSubmit}>
     {/*name */}
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {/*roll number */}
        <input
          type="text"
          name="rollNumber"
          placeholder="Roll Number"
          value={formData.rollNumber}
          onChange={handleChange}
          required
        />
     {/*current Branch */}
        <select
  name="currentBranch"
  value={formData.currentBranch}
  onChange={handleChange}
  required
>
  <option value="">Select Branch</option>
  <option value="CSE">Computer Science and Engineering (CSE)</option>
  <option value="ECE">Electronics and Communication Engineering (ECE)</option>
  <option value="ME">Mechanical Engineering (ME)</option>
  <option value="CE">Civil Engineering (CE)</option>
  <option value="EE">Electrical Engineering (EE)</option>
  <option value="IT">Information Technology (IT)</option>
</select>
        {/*requested Branch */}
       <div className="mb-4">
  <label className="block font-semibold mb-2" htmlFor="requestedBranch-CSE">Requested Branches</label>

  {["CSE", "ECE", "ME", "CE", "EE", "IT"].map((branch) => (
    <div key={branch} className="flex items-center mb-1">
      <input
        type="checkbox"
        id={`requestedBranch-${branch}`}
        name="requestedBranch"
        value={branch}
        checked={formData.requestedBranch.includes(branch)}
        onChange={handleCheckboxChange}
        className="mr-2"
      />
      <label htmlFor={`requestedBranch-${branch}`}>
        {branch} - {
          {
            CSE: "Computer Science",
            ECE: "Electronics & Comm",
            ME: "Mechanical Engg",
            CE: "Civil Engg",
            EE: "Electrical Engg",
            IT: "Information Tech",
          }[branch]
        }
      </label>
    </div>
  ))}
</div>


     {/*category */}
        <select
    name="category"
    value={formData.category}
    onChange={handleChange}
    required
  >
    <option value="">Category</option>
    <option value="General">General</option>
    <option value="OBC">OBC</option>
    <option value="SC">SC</option>
    <option value="ST">ST</option>
    <option value="EWS">EWS</option>
</select>
{/*category alloted */}
        <select
    name="categoryAlloted"
    value={formData.categoryAlloted}
    onChange={handleChange}
    required
  >  
    {/* value={formData.categoryAlloted}
    onChange={handleChange}
    required */}
    <option value="">Category alloted</option>
    <option value="General male">General male</option>
    <option value="General female">General female</option>
    <option value="OBC male">OBC male</option>
    <option value="OBC female">OBC female</option>
    <option value="SC male">SC male</option>
    <option value="SC female">SC female</option>
    <option value="ST male">ST male</option>
    <option value="ST female">ST female</option>
    <option value="EWS male">EWS male</option>
    <option value="EWS female">EWS female</option>
</select>
     {/* Gender */}
       <select 
name="gender"
 value={formData.gender} 
 onChange={handleChange} 
 required>
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>
     {/* Date of Birth */}
      <input
       type="date"
  name="dob"
  value={formData.dob}
  onChange={handleChange}
  required
       />
     {/* CGPA */}
      <input
      type="number"
  step="0.01"
  min="0"
  max="10"
  name="cgpa"
  placeholder="CGPA"
  value={formData.cgpa}
  onChange={handleChange}
  required
      />
        <button type="submit">Submit Request</button>
      </form>
axios.post('http://localhost:8080/api/branch-change', formData);

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Form;
