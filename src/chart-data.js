export const planetChartData = {
  type: 'doughnut',
  data: {
    labels: ['Douche', 'WC', 'Linge', 'Vaisselle', 'Nourriture', 'Arrosage', 'Eau potable'],
    datasets: [
      { // one line graph
        label: 'ECOLO',
        data: [39, 20, 12, 10, 6, 6, 1],
        backgroundColor: [
          'rgba(51, 51, 51, 1)',
          'rgba(194, 197, 190, 1)',
          'rgba(231, 83, 82, 1)',
          'rgba(246, 213, 133, 1)',
          'rgba(90, 157, 179, 1)',
          'rgba(159, 219, 171, 1)',
          'rgb(175, 180, 224)'
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff'
        ],
        borderWidth: 2
      }
    ]
  },

  options: {
    responsive: true,
    lineTension: 1
  },
}

export default planetChartData;