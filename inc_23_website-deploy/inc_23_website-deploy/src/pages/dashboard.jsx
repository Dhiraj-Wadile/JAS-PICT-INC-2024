import "./styles/dashboard.css";
import bg from "../assets/images/alBG.jpg";
import AdminData from "../components/adminData";

function Dashboard() {

  return (
    <div
      className="w-full min-h-screen bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-slate-500/50 rounded-2xl mb-5 px-2 py-4">
        <AdminData />
      </div>
    </div>
  );
}

export default Dashboard;
