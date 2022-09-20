import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart(props) {

    var delayed
    const {data} = props

    return (
        <div>
            <Bar
                data={data}
                height={308}
                width={300}
                options={{
                    maintainAspectRatio: false,
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 500 + context.datasetIndex * 500;
                            }
                            return delay;
                        },
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                        x: {
                            grid: {
                                display: false
                            }
                        }
                    }

                }}
            />
        </div>
    );
}

export default BarChart;
