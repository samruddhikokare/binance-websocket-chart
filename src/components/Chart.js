import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        // Update chart data based on the prop `data`
        if (data) {
            setChartData({
                labels: data.map(item => item.time),
                datasets: [
                    {
                        label: 'Price',
                        data: data.map(item => item.price),
                        borderColor: 'rgba(75,192,192,1)',
                        fill: false,
                    },
                ],
            });
        }
    }, [data]);

    return (
        <div>
            <Line data={chartData} />
        </div>
    );
};

export default Chart;
