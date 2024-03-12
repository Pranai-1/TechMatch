// 'use client'

// import { useEffect, useRef } from 'react'; // Import useRef hook
// import { Chart, registerables } from 'chart.js';
// import 'chartjs-adapter-moment';

// Chart.register(...registerables);

// const SubmissionCalendar = ({ submissionData }: { submissionData: any }) => {
//   const chartRef = useRef<HTMLCanvasElement | null>(null); // Use useRef hook to reference the canvas element

//   useEffect(() => {
//     if (submissionData && chartRef.current) {
//       const timestamps = Object.keys(submissionData).map(Number);
//       const submissionCounts = Object.values(submissionData);

//       const ctx = chartRef.current.getContext('2d');
//       if (ctx) {
//         // Destroy existing chart instance if it exists
//         Chart.getChart(chartRef.current)?.destroy();

//         // Create new chart instance
//         new Chart(ctx, {
//           type: 'line',
//           data: {
//             labels: timestamps.map(timestamp => new Date(timestamp * 1000).toLocaleDateString()),
//             datasets: [{
//               label: 'Submissions',
//               data: submissionCounts,
//               borderColor: 'rgb(75, 192, 192)',
//               tension: 0.1,
//               fill: false
//             }]
//           },
//           options: {
//             scales: {
//               x: {
//                 type: 'time',
//                 time: {
//                   unit: 'day',
//                   tooltipFormat: 'll'
//                 }
//               },
//               y: {
//                 beginAtZero: true
//               }
//             }
//           }
//         });
//       }
//     }
//   }, [submissionData]);

//   return (
//     <div>
//       <canvas id="submissionChart" ref={chartRef} width="800" height="400"></canvas> {/* Use ref attribute to reference the canvas element */}
//     </div>
//   );
// };

// export default SubmissionCalendar;
