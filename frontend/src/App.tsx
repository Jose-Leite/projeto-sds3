import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import Tree from "components/Tree";
import Co2 from "components/Co2";
import Water from "components/Water";
import Cont from "components/Contribution";
import BarOTs from "components/BarOTs";
import BarOSs from "components/BarOSs";
import BarODs from "components/BarODs";
import PlanilhaM from "components/PlanilhaM";
import BarReciclMensal from "components/BarReciclMensal";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-center text-primary py-3">Dashboard de Reciclagem</h1>

        <div className="row px-3">

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Volume Reciclado por Reciclador(Ton)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Contribuição Reciclador</h5>
            <DonutChart />
          </div>
        </div>

        <div className="row px-3">

          <div className="col-sm-12">
            <PlanilhaM />
          </div>
        </div>

        <div className="row px-4" >
          <div className="col-sm-12">
            <h5 className="text-center text-secondary">Volume Reciclado por Mês</h5>
            <BarReciclMensal />
          </div>
        </div>
        
        <div className="py-3">
          <h2 className="text-center text-primary">Quantidade de Ordens Abertas</h2>
        </div>

        <div className="row px-3">

          <div className="col-sm-4 py-3">
            <h5 className="text-center text-secondary">Ordens de Transporte (OT's)</h5>
            <BarOTs />
          </div>

          <div className="col-sm-4 py-3">
            <h5 className="text-center text-secondary">Ordens de Serviço (OS's)</h5>
            <BarOSs />
          </div>

          <div className="col-sm-4 py-3">
          <h5 className="text-center text-secondary">Ordens de Destinação (OD's)</h5>
            <BarODs />
          </div>

        </div>

        <div className="py-3">
          <h2 className="text-center text-primary">Contribuição da Plataforma para a Natureza</h2>
        </div>

        <div className="col-sm-12 px-25 py-2">
          <Cont />
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
          <h2 className="text-center text-primary">Volumes de Reciclagem</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
