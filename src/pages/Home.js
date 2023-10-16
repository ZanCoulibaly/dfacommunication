import BgVideo from '../videos/dfacom.mp4';
import Menu from '../components/Menu';
import Contenair from '../components/Contenair';
export default function Home (){
return(
    <>
    <div className="videos">  
     <Menu/> 
            <video src={BgVideo} autoPlay muted loop className="video-bg"  type="video/mkv"/>
            <div className="bg-overlay"></div>
         
    </div>
    <Contenair/>
 </>
)
}