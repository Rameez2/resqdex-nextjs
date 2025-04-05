import React from 'react';

const AdopterDetails = ({ Info }) => {
  if (!Info) {
    return <div className="p-4 text-center">No adopter details available.</div>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg overflow-auto max-h-screen"
         style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px' }}>
      <h1 className="text-2xl font-bold mb-6 text-center">Adopter Details</h1>

      {/* Flex Container for Information Sections */}
      <div className="flex flex-wrap gap-6">
        
        {/* Personal Information */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h2 className="text-xl font-semibold mb-3">Personal Information</h2>
          <ul className="list-disc ml-6">
            {Info.personal_info.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>

        {/* Household Information */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h2 className="text-xl font-semibold mb-3">Household Information</h2>
          <ul className="list-disc ml-6">
            {Info.household_info.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>

        {/* Experience with Pets */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h2 className="text-xl font-semibold mb-3">Experience with Pets</h2>
          <ul className="list-disc ml-6">
            {Info.experience_with_pets.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>

        {/* Adoption Intentions */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h2 className="text-xl font-semibold mb-3">Adoption Intentions</h2>
          <ul className="list-disc ml-6">
            {Info.adoption_intentions.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>

        {/* Lifestyle Commitment */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h2 className="text-xl font-semibold mb-3">Lifestyle Commitment</h2>
          <ul className="list-disc ml-6">
            {Info.lifestyle_commitment.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>

        {/* Financial Considerations */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h2 className="text-xl font-semibold mb-3">Financial Considerations</h2>
          <ul className="list-disc ml-6">
            {Info.financial_considerations.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>

        {/* References */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h2 className="text-xl font-semibold mb-3">References</h2>
          <ul className="list-disc ml-6">
            {Info.references.map((item, idx) => (
              <li key={idx} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Additional Information */}
        <div className="flex-1 min-w-[250px] mb-6">
          <h2 className="text-xl font-semibold mb-3">Additional Information</h2>
          <p className="ml-6">{Info.additional_info}</p>
        </div>

      </div>
    </div>
  );
};

export default AdopterDetails;
