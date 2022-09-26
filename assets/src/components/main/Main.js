import hello from "../../img/Logo.png";
import Chart from "../charts/Chart";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Olá</h1>
            <p>Indicadores Brigada</p>
          </div>
        </div>

        <div className="main__cards">
          <div className="card">
            <i className="fa fa-light fa-square-person-confined"></i>
            <div className="card_inner">
              <p className="text-primary-p">Espaço Confinado</p>
              <span className="font-bold text-title">788</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-solid fa-arrow-up-1-9 text-red"></i>
            <div className="card_inner">
              <p className="text-primary-p">Altura</p>
              <span className="font-bold text-title">130</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-solid fa-people-roof text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">Telhado</p>
              <span className="font-bold text-title">88</span>
            </div>
          </div>
          <div className="card">
            <i className="fa fa-brands fa-hotjar text-yellow"></i>
            <div className="card_inner">
              <p className="text-primary-p">A quente</p>
              <span className="font-bold text-title">488</span>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Ubatuba, São Paulo, BR</p>
              </div>
              <i className="fa fa-usd"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Ubatuba, São Paulo, BR</p>
              </div>
              <i className="fa fa-area-chart"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Lucro</h1>
                <h1>R$2500</h1>
              </div>
              <div className="card2">
                <h1>Pagamentos</h1>
                <h1>R$500</h1>
              </div>
              <div className="card3">
                <h1>Custos</h1>
                <h1>R$200</h1>
              </div>
              <div className="card4">
                <h1>Dados</h1>
                <h1>R$190</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
