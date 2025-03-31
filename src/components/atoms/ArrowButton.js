import {  ArrowRight,ArrowLeft } from "lucide-react"

const ArrowButton = ({right = true}) => {
    return (
            <button className="h-10 w-10 rounded-full border border-[#e17716] flex items-center justify-center text-[#e17716] cursor-pointer">
                {right ? <ArrowRight className="h-5 w-5" /> : <ArrowLeft className="h-5 w-5" />}
          </button>
    );
}

export default ArrowButton;
