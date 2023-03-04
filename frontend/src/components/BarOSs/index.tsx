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
            categories: ['BDPWaste', 'Codel', 'Ecobras', 'Ecodescarte', 'EcoTI - BA', 'EcoTI - SE', 'Natal', 'Reciclo', 'Reeecicle', 'RFR Reciclagem' , 'Sete Ambiental', 'WEEE', 'Zero Impacto']
        },
        series: [
            {
                name: "OS's Abertas",
                data: [11, 357, 17, 6, 64, 158, 3152, 2255, 206, 12, 879, 12, 796]                  
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