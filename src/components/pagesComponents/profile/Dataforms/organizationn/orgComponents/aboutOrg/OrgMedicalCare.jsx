import { useState } from "react";

const OrgMedicalCare = ({ data, onChange }) => {
    const [spayedNeutered, setSpayedNeutered] = useState("")
    // const [adoptionContract, setAdoptionContract] = useState("")

    const update = (index, value) => {
        const updated = [...data];
        updated[index] = value;
        onChange(updated); // give updated data to onChange
    };

    return (
        <>
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">Medical Care and Adoption</label>

                <div className="space-y-2">
                    <label htmlFor="medicalCare" className="block text-xs text-gray-600">
                        Please describe each protocol if it varies from species or age of animals
                    </label>
                    <textarea
                        id="medicalCare"
                        rows={3}
                        placeholder="Describe standard medical care provided..."
                        value={data[0] || ""}
                        onChange={(e) => update(0, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="space-y-3">
                    <label className="block text-xs font-medium text-gray-700">Are all animals spayed/neutered?</label>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="yes-always"
                                name="spayedNeutered"
                                value="yes-always"
                                checked={spayedNeutered === 1}
                                onChange={(e) => {
                                    setSpayedNeutered(1);
                                    update(1, e.target.value)
                                }}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor="yes-always" className="text-sm text-gray-700">
                                Yes, always
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="someexceptions"
                                name="someexceptions"
                                value="No ,there are some exceptions"
                                checked={spayedNeutered === 2}
                                onChange={(e) => {setSpayedNeutered(2);
                                    update(1, e.target.value)
                                }}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor="someexceptions" className="text-sm text-gray-700">
                                No ,there are some exceptions
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="adoptersResponsible"
                                name="adoptersResponsible"
                                value="No, adopters are responsible"
                                checked={spayedNeutered === 3}
                                onChange={(e) => {setSpayedNeutered(3);
                                    update(1, e.target.value)
                                }}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor="adoptersResponsible" className="text-sm text-gray-700">
                                No, adopters are responsible
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="NotApplicable"
                                name="NotApplicable"
                                value="Not applicable to my organization "
                                checked={spayedNeutered === 4}
                                onChange={(e) => {setSpayedNeutered(4);
                                    update(1, e.target.value)
                                }}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor="NotApplicable" className="text-sm text-gray-700">
                                Not applicable to my organization
                            </label>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="sterilizationApproach" className="block text-xs text-gray-600">
                        Briefly describe your sterilization approach. If there are different protocols for adults vs. young pets, describe them separately
                    </label>
                    <textarea
                        id="sterilizationApproach"
                        rows={3}
                        placeholder="Describe your sterilization approach..."
                        value={data[2] || ""}
                        onChange={(e) => update(2, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* <div className="space-y-3">
                    <label className="block text-xs font-medium text-red-600">
                        Do you have an adoption contract? (PDF) *
                    </label>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="contract-yes"
                                name="adoptionContract"
                                value="yes"
                                checked={adoptionContract === "yes"}
                                onChange={(e) => setAdoptionContract(e.target.value)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor="contract-yes" className="text-sm text-gray-700">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id="contract-no"
                                name="adoptionContract"
                                value="no"
                                checked={adoptionContract === "no"}
                                onChange={(e) => setAdoptionContract(e.target.value)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                            />
                            <label htmlFor="contract-no" className="text-sm text-gray-700">
                                No
                            </label>
                        </div>
                    </div>
                    {adoptionContract === "yes" && (
                        <div className="mt-2">
                            <input
                                type="file"
                                accept=".pdf"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    )}
                </div> */}
            </div>
        </>
    );
}

export default OrgMedicalCare;
