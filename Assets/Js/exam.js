let myChart;
let indexTime = 60;

function drawPieChart(value, maxValue) {
  const ctx = document.getElementById('countdown').getContext('2d');
  myChart = new Chart(ctx, {
    type: 'doughnut',
    text:indexTime,
    data: {
      datasets: [
        {
          data: [value, maxValue - value],
          backgroundColor: ['#00ffff', 'white'],
        },
      ],
    },
    options: {
      tooltips: {
        enabled: false,
      },
      subtitle: {
        display: true,
        text: indexTime,
        color: 'white',
        font: {
          size: 22,
          family: 'Roboto',
          weight: 'normal',
        },
        padding: {
          bottom: 10
        },
      plugins: {
        datalabels: {
          backgroundColor: function (context) {
            return context.dataset.backgroundColor;
          },
          display: function (context) {
            //let dataset = context.dataset;
            //let value = dataset.data[context.dataIndex];
            return value > 0;
          },
          color: 'white',
        },
      },
    },
  },
  });
}

function updateChart(chart, counter) {
  chart.data.datasets[0].data[1] = counter;
  chart.update();
}

const init = () => {
  drawPieChart(60 *150 /360, 60);

  let counter = 0;
  setInterval(() => {
    counter = counter + 1;

    updateChart(myChart, counter);
  }, 1000);
};

const timer = () => {
  indexTime--;
  document.getElementById("timer-right").innerText = indexTime;
  return indexTime;
}
init();