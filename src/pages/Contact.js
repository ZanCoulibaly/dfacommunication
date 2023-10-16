import Menu from '../components/Menu';
import BgImage from '../videos/bgexpertise3.png';
export default function Contact(){
    return(
        <>
        <div className="hd-bg">
          <Menu />  
          <img
            src={BgImage}
          />
          <div className="bg-overlays"></div>
          <h1>Contact</h1>
        </div>
      </>
    )
}