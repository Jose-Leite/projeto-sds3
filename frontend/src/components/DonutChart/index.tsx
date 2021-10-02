import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [11.399, 1.487, 0.000, 1.672, 23.691, 471.747, 808.501, 0.184, 0.000, 0.000, 12.284],
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