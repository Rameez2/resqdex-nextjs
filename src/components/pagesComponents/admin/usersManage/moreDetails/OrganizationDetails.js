import React from 'react';

const OrganizationDetails = ({ Info }) => {
    if (!Info) {
        return <div className="p-4 text-center">No organization details available.</div>;
    }

    return (
        <div
            className="p-6 bg-white rounded-lg shadow-lg overflow-auto max-h-screen"
            style={{
                boxShadow:
                    'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
            }}
        >
            <h1 className="text-2xl font-bold mb-6 text-center">Organization Details</h1>

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

                {/* Mission and Vision */}
                <div className="flex-1 min-w-[250px] mb-6">
                    <h2 className="text-xl font-semibold mb-3">Mission and Vision</h2>
                    <ul className="list-disc ml-6">
                        {Info.mission_and_vision.map((item, idx) => (
                            <li key={idx} className="mb-2">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div className="flex-1 min-w-[250px] mb-6">
                    <h2 className="text-xl font-semibold mb-3">Services</h2>
                    <ul className="list-disc ml-6">
                        {Info.services.map((item, idx) => (
                            <li key={idx} className="mb-2">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Legal and Compliance */}
                <div className="flex-1 min-w-[250px] mb-6">
                    <h2 className="text-xl font-semibold mb-3">Legal and Compliance</h2>
                    <ul className="list-disc ml-6">
                        {Info.legal_and_compliance.map((item, idx) => (
                            <li key={idx} className="mb-2">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Partnership and Collaborations */}
                <div className="flex-1 min-w-[250px] mb-6">
                    <h2 className="text-xl font-semibold mb-3">Partnership and Collaborations</h2>
                    <ul className="list-disc ml-6">
                        {Info.partnership_and_collabs.map((item, idx) => (
                            <li key={idx} className="mb-2">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Adoption Process */}
                <div className="flex-1 min-w-[250px] mb-6">
                    <h2 className="text-xl font-semibold mb-3">Adoption Process</h2>
                    <ul className="list-disc ml-6">
                        {Info.adoption_process.map((item, idx) => (
                            <li key={idx} className="mb-2">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Feedback and Impact */}
                <div className="flex-1 min-w-[250px] mb-6">
                    <h2 className="text-xl font-semibold mb-3">Feedback and Impact</h2>
                    <ul className="list-disc ml-6">
                        {Info.feedback_and_impact.map((item, idx) => (
                            <li key={idx} className="mb-2">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Operations and Staffing */}
                <div className="flex-1 min-w-[250px] mb-6">
                    <h2 className="text-xl font-semibold mb-3">Operations and Staffing</h2>
                    <p className="ml-6">{Info.operations_and_staffing}</p>
                </div>

                {/* Funding and Financials */}
                <div className="flex-1 min-w-[250px] mb-6">
                    <h2 className="text-xl font-semibold mb-3">Funding and Financials</h2>
                    <p className="ml-6">{Info.funding_and_financials}</p>
                </div>

                {/* Additional Info */}
                <div className="flex-1 min-w-[250px] mb-6">
                    <h2 className="text-xl font-semibold mb-3">Additional Info</h2>
                    <p className="ml-6">{Info.additional_info}</p>
                </div>


            </div>
        </div>
    );
};

export default OrganizationDetails;
