import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [25.184, 3.991, 0, 3.271, 25.501, 703.253, 1071.345, 0.184, 0.555, 0, 17.224],
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