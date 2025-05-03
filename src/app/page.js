import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import ParticlesComponent from "@/components/Particles";


export default function Home() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <ParticlesComponent id="particles" />
<Main/>
<Navbar/>
     
    </div>
  );
}
