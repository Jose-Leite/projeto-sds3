import Chart from 'react-apexcharts';

const BarODs = () => {

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
                name: "OD's Abertas",
                data: [0, 827, 23, 0, 49, 52, 514, 1680, 1, 560, 17, 71, 82]                  
            }
        ]
    };

    return (
        <Chart 
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            title="Ordens de Destinação (ODs)"
            type="bar"
            height="300"
        />
        

    );
}

export default BarODs;