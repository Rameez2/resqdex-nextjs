import {  ArrowRight,ArrowLeft } from "lucide-react"

const ArrowButton = ({right = true}) => {
    return (
            <button className="h-10 w-10 rounded-full border border-primary flex items-center justify-center text-primary hover:scale-110 transition-transform duration-100 ease-in-out cursor-pointer">
                {right ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
          </button>
    );
}

export default ArrowButton;
