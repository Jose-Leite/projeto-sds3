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
            categories: ['BDPWaste', 'Codel', 'Ecobras', 'Ecodescarte', 'EcoTI - BA', 'EcoTI - SE', 'Natal', 'Reciclo', 'Reeecicle', 'Sete Ambiental', 'WEEE', 'Zero Impacto']
        },
        series: [
            {
                name: "Ton Reciclados",
                data: [0, 30.759, 3.991, 0, 4.987, 25.501, 839.554, 1186.968, 0.184, 0.610, 0, 23.727]                  
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