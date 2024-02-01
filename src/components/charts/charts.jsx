import React, { useEffect } from 'react';
import { ChartContainer, ChartTitle } from './charts.e';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useMain } from '../../context/main-context';

const Charts = ({ id }) => {
  const main = useMain();

  useEffect(() => {
    main.getOneUserData(id);
  }, []);
  console.log(main.drawerData);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,

    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'right',
      },
    },
  };

  // меняю форму страшной даты
  const labels = main.drawerData?.map((item) => {
    const date = new Date(item.created_at);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('ru-RU', options).replace(/\./g, ''); // заменяем точки
  });
  // получаем  токены
  const tokensCh = main.drawerData?.map((item) => item.amount);

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: tokensCh,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgb(19, 91, 139)',
        yAxisID: 'y',
      },
    ],
  };
  return (
    <ChartContainer>
      <ChartTitle>Использование токенов</ChartTitle>
      <Line data={data} options={options} />
    </ChartContainer>
  );
};

export default Charts;
