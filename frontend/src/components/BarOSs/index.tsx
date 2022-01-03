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
            categories: ['Codel', 'Ecobras', 'Ecodescarte', 'EcoTI - BA', 'EcoTI - SE', 'Natal', 'Reciclo', 'Reeecicle', 'Sete Ambiental', 'WEEE', 'Zero Impacto']
        },
        series: [
            {
                name: "OS's Abertas",
                data: [106, 7, 6, 29, 119, 1189, 1042, 175, 202, 0, 214]                  
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