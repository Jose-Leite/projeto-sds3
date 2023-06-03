import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [0, 108.211, 46.304, 0, 9.459, 25.501, 1583.485, 2443.289, 0.184, 11468.730, 0.610, 0, 80.763],
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