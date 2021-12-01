import Chart from 'react-apexcharts';

const BarReciclMensal = () => {

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
                name: "Kg Reciclados",
                data: [26339, 86612, 92991, 141914, 165458, 219052, 188713, 194794, 215092, 172526, 172696, 0]                  
            }
        ]
    };

    return (
        <Chart 
            options={{ ...options, xaxis: mockData.labels}}
            series={mockData.series}
            title="Volumes Reciclados por Mês"
            type="bar"
            height="300"
        />
        

    );
}

export default BarReciclMensal;