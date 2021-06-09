import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function Piechart({financialPurposes, mandatorySpend, convert}) {

const data = {
  labels: ['На финансовые цели', 'На обязательные траты', 'Недельный конверт'],
  datasets: [
    {
      label: '# of Votes',
      data: [financialPurposes, mandatorySpend, convert],
     backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

return (
  <>
    <div className='header'>
      <h1 className='title'>Аналитика</h1>
   </div>
    <Pie data={data} />
  </>
);
}
