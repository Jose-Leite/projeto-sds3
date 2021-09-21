import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import Tree from "components/Tree";
import Co2 from "components/Co2";
import Water from "components/Water";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-center text-primary py-3">Dashboard de Reciclagem</h1>

        <div className="row px-3">

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Volume Reciclado (Ton)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Contribuição Reciclador</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-center text-primary">Contribuição da Plataforma para a Natureza</h2>
        </div>

         <div className="row px-3">

          <div className="col-sm-4 py-3">
            <Co2 /> 
          </div>

          <div className="col-sm-4 py-3">
            <Tree /> 
          </div>

          <div className="col-sm-4 py-3">
            <Water /> 
	  </div>
    
        </div>

        <div className="py-3">
          <h2 className="text-center text-primary">Dados de Reciclagem</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
