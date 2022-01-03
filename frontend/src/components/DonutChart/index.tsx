import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [24.092, 3.991, 0, 2.169, 24.712, 701.931, 1064.756, 0.184, 0.555, 0, 13.654],
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