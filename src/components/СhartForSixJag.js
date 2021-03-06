import React from 'react';
import { Pie } from 'react-chartjs-2';

export default function Piechart({ mandatorySpendin, saving, optionalSpending, selfDevelopment, spender, presents}) {

const data = {
  labels: ['На оплату базовых потребностей', 'Lifestyle-расходы. Сюда относится покупка желаемых вещей. Они не обязательны.', 'Для накопления сбережений на запланированные крупные покупки, инвестирование и непредвиденные траты.'],
  datasets: [
    {
      label: '# of Votes',
      data: [mandatorySpendin, saving, optionalSpending, selfDevelopment, spender, presents],
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
