import Chart from 'react-apexcharts';

const BarRecbMensal = () => {

    const options = {
        plotOptions: {
            bar: {
                dataLabels: {
                  position: 'botton', // top, center, bottom
                },
              }
    
        },
        
    };
    
    const mockData = {
        labels: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        },
        series: [
            {
                name: "Kg Recebidos",
                data: [102387, 106589,	121879, 137705, 186442, 187583, 171701, 160630, 229986, 179618, 227566, 230076]                  
            }
        ]
    };

    return (
        <Chart 
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            title="Volumes Recebidos por Mês"
            type="bar"
            height="300"
        />
        

    );
}

export default BarRecbMensal;