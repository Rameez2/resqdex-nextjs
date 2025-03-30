import {  ArrowRight } from "lucide-react"


const ArrowButton = () => {
    return (
            <button className="h-10 w-10 rounded-full border border-[#e17716] flex items-center justify-center text-[#e17716]">
                <ArrowRight className="h-5 w-5" />
          </button>
    );
}

export default ArrowButton;
