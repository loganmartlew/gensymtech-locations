import { Scatter } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import * as Zoom from 'chartjs-plugin-zoom';
import getGroupedLocations from '../selectors/locations';

const Map = () => {
  const state = useSelector(state => state);

  const groups = getGroupedLocations(state.locations);

  const mode = state.filters.coordinateMode === 0 ? 'posO' : 'posN';

  const getData = dim => {
    let data = [];

    for (let i = 0; i < groups[dim].length; i++) {
      data.push({ x: groups[dim][i][mode].x, y: groups[dim][i][mode].y });
    }

    return data;
  };

  const getLabels = dim => {
    let labels = [];

    for (let i = 0; i < groups[dim].length; i++) {
      labels.push(groups[dim][i].name);
    }

    return labels;
  };

  const getVisible = dim => {
    let visible = false;

    state.filters.visibleDimensions.forEach(dimension => {
      if (dimension.value === dim) visible = true;
    });

    return visible;
  };

  const data = {
    datasets: [
      {
        label: 'Overworld',
        data: getData('overworld'),
        backgroundColor: '#03cc00',
        labels: getLabels('overworld'),
        hidden: !getVisible('overworld'),
      },
      {
        label: 'Nether',
        data: getData('nether'),
        backgroundColor: '#cc1f00',
        labels: getLabels('nether'),
        hidden: !getVisible('nether'),
      },
      {
        label: 'End',
        data: getData('end'),
        backgroundColor: '#c702c1',
        labels: getLabels('end'),
        hidden: !getVisible('end'),
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      xAxes: [
        {
          ticks: {
            min: -100,
            max: 100,
            autoSkip: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: -100,
            max: 100,
            autoSkip: true,
            reverse: true,
          },
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const index = tooltipItem.index;
          return (
            dataset.labels[index] +
            ' X: ' +
            tooltipItem.xLabel +
            ', Z: ' +
            tooltipItem.yLabel
          );
        },
      },
    },
    pan: {
      enabled: true,
      mode: 'xy',
      speed: 10,
    },
    zoom: {
      enabled: true,
      drag: false,
      mode: 'xy',
      rangeMin: {
        x: -1000,
        y: -1000,
      },
      rangeMax: {
        x: 1000,
        y: 1000,
      },
    },
  };

  return (
    <div style={{ width: '750px', height: '750px' }}>
      <Scatter height={750} width={750} data={data} options={options} />
    </div>
  );
};

export default Map;
