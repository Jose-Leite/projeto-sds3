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
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez', 'Jan/22', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', "Jul", "Ago", "Set", "Out"]
        },
        series: [
            {
                name: "Kg Recebidos",
                data: [108468, 113628,	123526, 138370, 186067, 187866, 219556, 162479, 257534, 204908, 255846, 235632, 170503, 177506, 183005, 129727, 151077, 156492, 180337, 189042, 220864, 139238]                  
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