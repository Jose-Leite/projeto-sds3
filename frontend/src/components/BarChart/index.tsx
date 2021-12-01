import Chart from 'react-apexcharts';

const BarChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Codel', 'Ecobras', 'Ecodescarte', 'EcoTI - BA', 'EcoTI - SE', 'Natal', 'Reciclo', 'Reeecicle', 'Sete Ambiental', 'WEEE', 'Zero Impacto']
        },
        series: [
            {
                name: "Ton Reciclados",
                data: [21.319, 3.991, 0, 1.681, 23.691, 635.278, 976.253, 0.184, 0.136, 0, 13.654]                  
            }
        ]
    };

    return (
        <Chart 
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="300"
        />
        

    );
}

export default BarChart;