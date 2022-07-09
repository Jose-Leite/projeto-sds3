import Chart from 'react-apexcharts';

const BarOSs = () => {

    const options = {
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'botton', // top, center, bottom
                },
              }
    
        },
        
    };
    
    const mockData = {
        labels: {
            categories: ['BDPWaste', 'Codel', 'Ecobras', 'Ecodescarte', 'EcoTI - BA', 'EcoTI - SE', 'Natal', 'Reciclo', 'Reeecicle', 'Sete Ambiental', 'WEEE', 'Zero Impacto']
        },
        series: [
            {
                name: "OS's Abertas",
                data: [6, 215, 15, 6, 55, 158, 2054, 1495, 206, 642, 12, 451]                  
            }
        ]
    };

    return (
        <Chart 
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            title="Ordens de Serviço (OSs)"
            type="bar"
            height="300"
        />
        

    );
}

export default BarOSs;