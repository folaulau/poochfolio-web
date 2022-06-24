import Chart from 'react-apexcharts'

const DonutChart = () => {
  const donutColors = {
    series1: '#077997',
    series2: '#85d8e7',
  }

  // ** Chart Options
  const options = {
    title:{
      text: 'Analytics',
      style: {
          fontSize:  '16px',
          fontFamily:  'MuseoSansRounded-700',
          color:  '#333333',
        },
       
      },
    legend: {
      show: true,
      position: 'left',
      floating: true,
      fontSize: '14px',
      fontFamily: 'MuseoSansRounded-500',
      labels: {
        useSeriesColors: true,
        fontFamily:  'MuseoSansRounded-700',
    },
    itemMargin: {
      vertical: 5
  },
    },
    
    labels: ['Occupancy', 'Vacancy', ],

    colors: [donutColors.series1,  donutColors.series2],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${parseInt(val)}%`
      }
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1rem',
              fontFamily: 'MuseoSansRounded-500'
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'MuseoSansRounded-500',
              formatter(val) {
                return `${parseInt(val)}%`
              }
            },
            total: {
              show: false,
              fontSize: '1.5rem',
              label: 'Operational',
              formatter() {
                return '31%'
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 250
          },
          legend: {
            position: 'left',
            fontFamily: 'MuseoSansRounded-500'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 100
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: false,
                  name: {
                    fontSize: '1rem',
                    fontFamily: 'MuseoSansRounded-500'
                  },
                  value: {
                    fontSize: '1rem',
                    fontFamily: 'MuseoSansRounded-500'
                  },
                  total: {
                    fontSize: '1rem',
                    fontFamily: 'MuseoSansRounded-500'
                  }
                }
              }
            }
          }
        }
      }
    ]
  }

  // ** Chart Series
  const series = [75, 25]

  return (
    <div>
      <div className='mt-8 '>
        <Chart options={options} series={series} type='donut' height={200} />
      </div>
    </div>
  )
}

export default DonutChart
