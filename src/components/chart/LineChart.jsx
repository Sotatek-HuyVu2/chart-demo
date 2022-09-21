import React from 'react';
import {Line} from 'react-chartjs-2';

function LineChart(props) {

    var delayed
    const {data} = props

    const formatThousands = (value) => Intl.NumberFormat('en-US', {
        maximumSignificantDigits: 3,
        notation: 'compact',
    }).format(value);

    return (
        <div>
            <Line className="bg-light"
                  data={data}
                  height={300}
                  options={{
                      maintainAspectRatio: false,
                      layout: {
                          padding: 20,
                      },
                      scales: {
                          y: {
                              beginAtZero: true,
                              position: 'right',
                              grid: {
                                  drawBorder: false,
                              },
                              ticks: {
                                  callback: (value) => formatThousands(value),
                              },
                          },
                          x: {
                              type: 'time',
                              time: {
                                  parser: 'MM-DD-YYYY',
                                  unit: 'month',
                                  displayFormats: {
                                      month: 'MMM YY',
                                  },
                              },
                              grid: {
                                  display: false,
                                  drawBorder: false,
                              },
                              ticks: {
                                  autoSkipPadding: 48,
                                  maxRotation: 0,
                              },
                          },
                      },
                      plugins: {
                          legend: {
                              display: true,
                              position: 'bottom',
                              labels: {
                                  padding: 50,
                              }
                          },
                          legendCallback: function (chart) {
                              // Return the HTML string here.
                              console.log(chart.data.datasets);
                              var text = [];
                              text.push('<ul class="' + chart.id + '-legend">');
                              for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                                  text.push('<li><span id="legend-' + i + '-item" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"   onclick="updateDataset(event, ' + '\'' + i + '\'' + ')">');
                                  if (chart.data.labels[i]) {
                                      text.push(chart.data.labels[i]);
                                  }
                                  text.push('</span></li>');
                              }
                              text.push('</ul>');
                              return text.join("");
                          },
                          tooltip: {
                              callbacks: {
                                  title: () => false, // Disable tooltip title
                                  label: (context) => ' Người dùng:' + formatThousands(context.parsed.y),
                              },
                          },
                      },
                      interaction: {
                          intersect: false,
                          mode: 'nearest',
                      },
                      animation: {
                          onComplete: () => {
                              delayed = true;
                          },
                          delay: (context) => {
                              let delay = 0;
                              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                  delay = context.dataIndex * 100 + context.datasetIndex * 100;
                              }
                              return delay;
                          },
                      },
                  }}
            />
        </div>
    );
}

export default LineChart;
