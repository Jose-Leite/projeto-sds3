import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [0, 39.233, 35.211, 0, 8.260, 25.501, 971.407, 1385.298, 0.184, 0.610, 0, 29.497],
        labels: ['BDPWaste', 'Codel', 'Ecobras', 'Ecodescarte', 'EcoTI - BA', 'EcoTI - SE', 'Natal', 'Reciclo', 'Reeecicle', 'Sete Ambiental', 'WEEE', 'Zero Impacto']
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