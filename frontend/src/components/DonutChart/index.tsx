import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [0, 90.949, 46.304, 0, 9.459, 25.501, 1423.388, 2182.867, 0.184, 5473.740, 0.610, 0, 80.763],
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