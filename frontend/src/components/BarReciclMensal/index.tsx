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
            categories: ['Jan/21', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan/22', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', "Ago", "Set", "Out", "Nov", "Dez", "Jan/23", "Fev", "Mar", "Abr", "Mai"]
        },
        series: [
            {
                name: "Kg Reciclados",
                data: [26339, 90712, 93643, 142116, 166545, 219788, 189244, 197028, 209382, 176002, 176982, 162728, 128780, 136990, 181336, 84713, 112874, 154528, 138325, 172608, 207822, 160358, 1986182, 743296, 2188760, 2122646, 2908162, 2422246, 66394]                  
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