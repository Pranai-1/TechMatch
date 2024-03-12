// components/MyButton.js
'use client'

import axios from "axios";

const MyButton = () => {
  async function getDetails() {
    try {
      const response = await axios.get("api/leetcode")
      console.log(response.data.obj.submitStats.acSubmissionNum[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <button className="bg-blue-700 rounded-lg p-2" onClick={getDetails}>
      Get Details
    </button>
  );
};

export default MyButton;
