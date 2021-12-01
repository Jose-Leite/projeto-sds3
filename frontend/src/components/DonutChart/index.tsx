import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [21.319, 3.991, 0, 1.681, 23.691, 635.278, 976.253, 0.184, 0.136, 0, 13.654],
        labels: ['Codel', 'Ecobras', 'Ecodescarte', 'EcoTI - BA', 'EcoTI - SE', 'Natal', 'Reciclo', 'Reeecicle', 'Sete Ambiental', 'WEEE', 'Zero Impacto']
    }
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart 
            options={{ ...options, labels: mockData.labels}}
            series={mockData.series}
            type="donut"
            height="300"
        />
        

    );
}

export default DonutChart;