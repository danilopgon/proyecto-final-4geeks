import Lottie from "lottie-react";
import check from "../../assets/animations/UYite2OzKA.json";
import { Link } from "react-router-dom";


export const StepFinal = () => {
    return (
        <div className="w-full h-full bg-slate-300 sm:w-[80%] lg:w-[80%] xl:w-[90%] mx-auto flex flex-col items-center p-1 rounded animate-fade-left">
      <div className="w-[30%] flex justify-center animate-pulse">
        <Lottie animationData={check}/>
      </div>
      <h2 className="my-0 text-4xl font-semibold text-center text-black">
        Felicidades!! <br/> Has creado tu nuevo grupo
      </h2>
      <div className="my-8">
        <Link to="/dashboard" className="btn btn-primary">Ir al Dashboard</Link>
      </div>
      
    </div>
    )
}