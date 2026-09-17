import { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts'



const Chart = () => {
    const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  const getChartOptions = () => ({
    series: [35.1, 23.5, 2.4, 5.4],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      height: 320,
      width: "100%",
      type: "donut",
    },
    stroke: {
      colors: ["transparent"],
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20,
            },
            total: {
              showAlways: true,
              show: true,
              label: "Pengguna Layanan",
              fontFamily: "Inter, sans-serif",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                return sum + 'k';
              },
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: function (value) {
                return value + 'k';
              },
            },
          },
          size: "80%",
        },
      },
    },
    grid: {
      padding: {
        top: -2,
      },
    },
    labels: ["Tulungagung", "Madiun", "Bojonegoro", "Pasuruan"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + 'k';
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + 'k';
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  });

  useEffect(() => {
    if (!chartRef.current) return;

    const chartInstance = new ApexCharts(chartRef.current, getChartOptions());
    chartInstance.render();
    setChart(chartInstance);

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className="max-w-sm w-full mx-auto p-4 md:p-6">
      <div id="donut-chart" ref={chartRef}></div>
    </div>
  )
}

export default Chart
