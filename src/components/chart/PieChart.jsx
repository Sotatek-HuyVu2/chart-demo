import React from 'react';
import {Pie} from 'react-chartjs-2';


const PieChart = (props) => {
    let delayed
    const {data} = props

    return (
        <Pie
            data={data}
            height={250}
            width={250}
            options={{
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
            }}
        />
    );
};

export default PieChart;
