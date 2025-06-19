import { MapPin, Mail, Globe, Users, Heart, FileText, Shield, Dog, Cat, Bird, Fish, Rabbit } from "lucide-react"
import { useState } from "react";

const AnimalsAdoptedOut = ({ data, onChange }) => {
    const [animalTypes, setAnimalTypes] = useState([])


    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <div className="space-y-4">
            <label className="block text-sm font-medium text-red-600">
                Types of Animals You Have Adopted Out
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { id: "dogs", label: "Dogs", icon: Dog, color: "from-amber-500 to-orange-500" },
                    { id: "cats", label: "Cats", icon: Cat, color: "from-purple-500 to-pink-500" },
                    { id: "horses", label: "Horses", icon: Users, color: "from-amber-600 to-yellow-600" },
                    { id: "reptiles", label: "Reptiles", icon: Shield, color: "from-green-600 to-emerald-600" },
                    { id: "pocketpets", label: "Pocket pets", icon: Heart, color: "from-pink-500 to-rose-500" },
                    { id: "rabbits", label: "Rabbits", icon: Rabbit, color: "from-gray-500 to-slate-600" },
                    { id: "farm", label: "Farm animals", icon: Users, color: "from-yellow-500 to-amber-500" },
                    { id: "birds", label: "Birds", icon: Bird, color: "from-sky-500 to-blue-500" },
                    { id: "exotics", label: "Exotics", icon: Heart, color: "from-violet-500 to-purple-500" },
                    { id: "fish", label: "Fish", icon: Fish, color: "from-cyan-500 to-teal-500" },
                    { id: "ferrets", label: "Ferrets", icon: Users, color: "from-indigo-500 to-blue-600" },
                ].map((animal, index) => (
                    <div key={animal.id} className="relative group">
                        <input
                            type="checkbox"
                            id={animal.id}
                            checked={data[index]}
                            onChange={(e) => update(index, e.target.checked)}
                            className="sr-only peer"
                            
                        />
                        <label
                            htmlFor={animal.id}
                            className="flex flex-col items-start justify-between px-4 py-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 group-hover:shadow-md"
                        >
                            <span className="text-sm font-medium text-gray-700 peer-checked:text-blue-700">
                                {animal.label}
                            </span>
                            {animal.id === "farm" && (
                                <span className="text-xs text-gray-500 mt-1">
                                    Farm Animals (like cows, goats, pigs, sheep)
                                </span>
                            )}
                            {animal.id === "pocketpets" && (
                                <span className="text-xs text-gray-500 mt-1">
                                    Pocket Pals (like hamsters, rats, and guinea pigs)
                                </span>
                            )}
                        </label>
                    </div>
                ))}

            </div>


        </div>
    );
}

export default AnimalsAdoptedOut;
