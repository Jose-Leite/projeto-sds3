import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [10.624, 1.487, 0.000, 1.672, 18.155, 373.083, 706.540, 0.000, 0.000, 0.000, 12.284],
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