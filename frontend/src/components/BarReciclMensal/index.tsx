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
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan/22', 'Fev']
        },
        series: [
            {
                name: "Kg Reciclados",
                data: [26339, 90712, 93643, 142116, 166545, 219788, 189244, 197028, 209382, 176002, 176982, 162728, 0]                  
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