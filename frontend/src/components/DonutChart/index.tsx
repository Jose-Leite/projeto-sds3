import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [0, 109.743, 46.304, 0, 9.459, 25.501, 1653.930, 2535.031, 0.184, 12299.630, 0.610, 0, 80.763],
        labels: ['BDPWaste', 'Codel', 'Ecobras', 'Ecodescarte', 'EcoTI - BA', 'EcoTI - SE', 'Natal', 'Reciclo', 'Reeecicle', 'RFR Reciclagem' , 'Sete Ambiental', 'WEEE', 'Zero Impacto']
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