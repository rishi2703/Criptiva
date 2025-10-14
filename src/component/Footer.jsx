import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black px-8 py-10" >
        <div className="grid  grid-cols-2 ">
     <div > 
         <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <img src="/Images/image 1.png" alt="Logo" className="h-18"/>
        </div>

        <div className="flex gap-16 font-semibold mb-2 text-[22px]">
          <div className="">
            <div className="mb-2 ">Learn</div>
            <ul className="space-y-1 mb-2" >
              <li>
                <Link to="#">Community</Link>
              </li>
              <li>
                <Link to="#">Criptiva Learn</Link>
              </li>
              <li>
                <Link to="#">Discord</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-2 ">Community</div>
            <ul>
              <li>
                <Link to="#">Discord</Link>
              </li>
            </ul>
          </div>
        </div>
        <div >
<div>

</div>
    </div>
      </div>
     </div>
          
</div>


  <div className="flex flex-col md:flex-row justify-between items-center text-[22px] gap-4">
                 <div className="flex items-center gap-2">
                    <span></span>
                    <span>English</span>
                    </div>    
                </div> 
                <div>
                    
                </div>
          <hr className="my-8 border-gray-300" />
    


      <div className="mt-6 flex flex-col md:flex-row justify-between text-[22px] text-gray-500 gap-2">
        <div className="flex gap-4">
          <Link to="#" className="hover:underline">Privacy Policy</Link>
          <Link to="#" className="hover:underline">Terms of Use</Link>
          <Link to="#" className="hover:underline">Contributor License Agreement</Link>
        </div>
        <div>&copy; 2025 Consensys, Inc.</div>
      </div>
      
    </footer>
  );
};

export default Footer;
