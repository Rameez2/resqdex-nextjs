import { ChevronDown } from "lucide-react"

const PetFilters = () => {
    return (
        <div className="w-full md:w-1/4 bg-white p-6 rounded-md h-fit">
          <h2 className="text-3xl font-bold mb-6">Filters</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Breed</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select breed</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Specie</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select breed</option>
                  <option>Cat</option>
                  <option>Dog</option>
                  <option>Horse</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Age</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select age</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Size</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select size</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Gender</h3>
              <div className="relative">
                <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10">
                  <option>Select gender</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e17716] h-5 w-5" />
              </div>
            </div>

          </div>
        </div>
    );
}

export default PetFilters;
