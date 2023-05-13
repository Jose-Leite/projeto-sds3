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
                data: [3, 232, 0, 37, 24, 14, 521, 1366, 49, 0, 1182, 0, 87]                  
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