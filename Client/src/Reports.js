import React from 'react';
import axios from 'axios';

const Reports = ({ reportType, setReportType }) => {
  const handleFetchReports = async () => {
    try {
      const response = await axios.get(`/api/reports?type=${reportType}`);
      if (response.status === 200) {
        console.log('Report Data:', response.data);
      }
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  return (
    <div>
      <h2>Reports</h2>
      <div className="mb-3">
        <label className="form-label">Report Type:</label>
        <select className="form-select" value={reportType} onChange={(e) => setReportType(e.target.value)}>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
        <button className="btn btn-info mt-2" onClick={handleFetchReports}>Fetch Reports</button>
      </div>
    </div>
  );
};

export default Reports;