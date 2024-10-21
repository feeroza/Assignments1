import Link from "next/link";
const HomePage=()=> {
  return (
    <div>
      This is home page
      
      <li><Link href="About"className="div">About</Link></li>
      <li><Link href="Services"className="div">Our Services</Link></li>
      <li><Link href="Contect"className="div">Contect Us</Link></li>
        </div>
      
  );
}
export default HomePage;