import Menu from '../components/Menu';
import BgImage from '../videos/bgexpertise3.png';
import logo from '../videos/dfabgniv2.png';
export default function Agence() {
  return (
    <>
      <div className="hd-bg">
        <Menu />  
        <img
          src={BgImage}
        />
        <div className="bg-overlays"></div>
        <h1>Agence</h1>
        <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <img
          src={logo}
        />
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Special title treatment</h2>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur </p>
      </div>
    </div>
  </div>
</div>
        </div>
      
    </>
  );
}
