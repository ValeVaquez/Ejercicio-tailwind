import './App.css';
import imagen1 from '../src/Imagenes/imagen1.jpeg'
import imagen2 from '../src/Imagenes/imagen2.jpeg'

function App() {
  return (
    <div className="sm:w-screen  bg-red-100">
      
      <div className="rounded-lg p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
      
          <img src={imagen1} alt="" className="imagen"  />
         
        </div>
        <hr className=" flex  justify-center items-center border-solid border-2 border-red-800 bg-red-800  mb-8"></hr>
        <div className="p-2 container ml-auto mr-auto flex flex-wrap lg:max-w-0xl lg:px-5 mb-8">
        <button className="botones">
  AboutMe
</button>
<button className="botones">
 Briefcase
</button>
<button className="botones">
  Projects
</button>
</div>
<hr className=" flex justify-center items-center border-solid border-2 border-red-800 bg-red-800 mb-8"></hr>

<img src={imagen2} alt="" className="imagen"  />
<p className='flex  justify-center items-center text-3xl'>Valeria Vaquez Triana</p>
       
       
        </div>
  
  );
}

export default App;
