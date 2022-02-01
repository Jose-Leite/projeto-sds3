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
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan/22']
        },
        series: [
            {
                name: "Kg Recebidos",
                data: [108468, 113628,	123526, 138370, 186067, 187866, 219556, 162479, 257534, 204908, 255846, 235632]                  
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