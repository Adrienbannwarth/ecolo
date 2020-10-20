export const myBubbleChart = {
  type: 'bubble',
  data: {
    labels: ['Plastiques', 'Cartons', 'Déchets vert', 'Eléctroménager'],
    datasets: [
      { // one line graph
        label: 'ECOLO',
        data: [
          {
            x: 3,
            y: 7,
            r: 10
          },
          {
            x: 2,
            y: 4,
            r: 10
          },
          {
            x: 4,
            y: 5,
            r: 20
          }
        ],
        backgroundColor: [
          'rgb(57, 94, 237)', // Blue
          'rgb(6, 173, 155)', // green
          'rgb(39, 19, 89)', // darkblue
          'rgb(175, 180, 224)' // purple
        ],
        borderColor: [
          '#ffffff',
          '#ffffff',
          '#ffffff',
          '#ffffff'
        ],
        borderWidth: 3
      }
    ]
  },
  options: {
    responsive: true,
    lineTension: 1
  }
}

export default myBubbleChart;