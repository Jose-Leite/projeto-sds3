import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [0, 85.148, 46.304, 0, 9.459, 25.501, 1355.667, 2089.971, 0.184, 2487.100, 0.610, 0, 72.005],
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