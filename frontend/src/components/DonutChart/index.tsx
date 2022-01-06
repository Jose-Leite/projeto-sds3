import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [24.431, 3.991, 0, 2.169, 24.712, 701.931, 1068.459, 0.184, 0.555, 0, 17.176],
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