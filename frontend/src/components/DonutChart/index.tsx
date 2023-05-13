import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [0, 100.866, 46.304, 0, 9.459, 25.501, 1580.799, 2386.926, 0.184, 11618.140, 0.610, 0, 80.763]
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