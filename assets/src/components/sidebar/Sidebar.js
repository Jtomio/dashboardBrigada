import "./Sidebar.css";
import logo from "../../img/Logo.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>Brigada Emergência Tupy</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fas fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fas fa-minus-square"></i>
          <a href="#">Home</a>
        </div>
        <h2>Usuário</h2>
        <div className="sidebar__link">
          <i className="fas fa-duotone fa-chart-simple"></i>
          <a href="#">Simulados</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-duotone fa-chart-simple"></i>
          <a href="#">PTE</a>
        </div>
        <div className="sidebar__link">
          <i className="fas fa-light fa-chart-simple"></i>
          <a href="#">Ocorrências</a>
        </div>
        <div className="sidebar__logout">
          <i className="fas fa-power-off"></i>
          <a href="#">Sair</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
