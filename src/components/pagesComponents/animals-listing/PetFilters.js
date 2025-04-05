import { ChevronDown } from "lucide-react"

const PetFilters = ({ updateFilter }) => {

  return (
    <div className="w-full md:w-1/4 bg-white p-6 rounded-md h-fit">
      <h2 className="text-3xl font-bold mb-6">Filters</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">Breed</h3>
          <div className="relative">
            <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10" onChange={(e) => updateFilter("breed", e.target.value)}>
              <option value="">All Breeds</option>
              <option value="persian">Persian</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Specie</h3>
          <div className="relative">
            <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10" onChange={(e) => updateFilter("specie", e.target.value)}>
              <option value="">All Species</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Other">Other</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Size</h3>
          <div className="relative">
            <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10" onChange={(e) => updateFilter("size", e.target.value)}>
              <option value="">All Sizes</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2">Gender</h3>
          <div className="relative">
            <select className="w-full bg-[#f4f4f4] p-3 rounded-md appearance-none pr-10" onChange={(e) => updateFilter("gender", e.target.value)}>
              <option value="">All Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-primary h-5 w-5" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default PetFilters;
