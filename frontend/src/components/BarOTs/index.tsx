import Chart from 'react-apexcharts';

const BarOTs = () => {

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
                name: "OT's Abertas",
                data: [3, 258, 0, 37, 24, 14, 527, 1498, 49, 0, 1257, 0, 87]                  
            }
        ]
    };

    return (
        <Chart 
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            title="Ordens de Transporte (OTs)"
            type="bar"
            height="300"
        />
        

    );
}

export default BarOTs;