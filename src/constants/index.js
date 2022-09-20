export const DATA_PIE_CHART = {
    labels: ['Vue', 'React', 'Python', 'Nodejs', 'Php', 'Java'], datasets: [{
        label: 'Develop',
        data: [20, 40, 3, 10, 2, 3],
        backgroundColor: ['rgba(255, 99, 132, 0.4)', 'rgba(54, 162, 235, 0.4)', 'rgba(255, 206, 86, 0.4)', 'rgba(75, 192, 192, 0.4)', 'rgba(153, 102, 255, 0.4)', 'rgba(255, 159, 64, 0.4)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 0.3
    }]
}

export const DATA_LINE_CHART = {
    labels: ['May', 'June', 'July', 'August', 'Sept', 'October'],
    datasets: [
        {
            label: 'React',
            data: [22, 4, 13, 20, 4, 13],
            borderColor: 'rgba(54, 162, 235, 0.5)',
            backgroundColor: 'rgba(54, 162, 235, 1)',
        },
        {
            label: 'Vue',
            data: [2, 8.5, 4, 5, 7.5, 6],
            borderColor: 'rgba(255, 99, 132, 0.5)',
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ]
}
export const DATA_GOOGLE_ANATYTICS = {
    labels: [
        '12-01-2020', '01-01-2021', '02-01-2021',
        '03-01-2021', '04-01-2021', '05-01-2021',
        '06-01-2021', '07-01-2021', '08-01-2021',
        '09-01-2021', '10-01-2021', '11-01-2021',
        '12-01-2021', '01-01-2022', '02-01-2022',
        '03-01-2022', '04-01-2022', '05-01-2022',
        '06-01-2022', '07-01-2022', '08-01-2022',
        '09-01-2022', '10-01-2022', '11-01-2022',
        '12-01-2022', '01-01-2023',
    ],
    datasets: [
        // Indigo line
        {
            label: 'Hiện tại',
            data: [
                0, 8700, 7500, 12000, 11000, 9500, 10500,
                10000, 15000, 9000, 10000, 7000, 22000, 2000,
                9800, 9000, 10000, 8000, 15000, 12000, 11000,
                13000, 11000, 15000, 17000, 18000,
            ],
            fill: true,
            backgroundColor: 'transparent',
            borderColor: '#4285F4',
            borderWidth: 2,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: '#4285F4',
        },
        // Gray line
        {
            label: 'Kỳ trước',
            data: [
                8000, 5000, 6500, 2000, 6500, 12000, 8000,
                9000, 8000, 8000, 12500, 10000, 10000, 12000,
                11000, 16000, 12000, 10000, 10000, 14000, 9000,
                10000, 15000, 12500, 14000, 11000,
            ],
            fill: false,
            borderWidth: 1,
            borderColor: '#4285F4',
            backgroundColor: 'transparent',
            borderDash: [4,5],
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: '#4285F4',
        },
    ],
}