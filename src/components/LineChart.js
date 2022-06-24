
import Chart from 'react-apexcharts'


const LineChart = ({ direction, warning }) => {
  // ** Chart Options
  const options = {
    chart: {
      zoom: {
        enabled: false
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false
      },
     
    },
    title:{
        text: 'Monthly Revenue',
        style: {
            fontSize:  '14px',
            fontFamily:  'MuseoSansRounded-700',
            color:  '#333333',
          },
    },
    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      strokeColors: ['#fff'],
      colors: ['#abafb4']
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    colors: ['#077997'],
    grid: {
      xaxis: {
        lines: {
          show: true
        }
      }
    },
   
    tooltip: {
      custom(data) {
        return `<div class=''>
              <span>${data.series[data.seriesIndex][data.dataPointIndex]}%</span>
            </div>`
      }
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'June',
        'July',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec',
       
      ]
    },
    yaxis: {
    }
  }

  // ** Chart Series
  const series = [
    {
      data: [280, 200, 220, 180, 270, 250,  200, 150, 160, 100, 150, 100,]
    }
  ]

  return (
    <div className=' z-40'>
     
      <div>
        <Chart options={options} series={series} type='line' height={200} />
      </div>
    </div>
  )
}

export default LineChart
