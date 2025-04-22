
const Page = () => {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Resqdex Member Terms of Service Agreement</h1>
            <p className="text-gray-500 text-center mb-12">Last Updated April 17, 2025</p>

            <div className="space-y-8 text-gray-800">
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
                    <p>Welcome to Resqdex! We are pleased to provide a platform for legitimate animal shelters, humane societies, SPCA, animal rescue organizations, and veterinary offices to list pets available for adoption. By using our services, you agree to comply with the following terms of service. Please read this agreement carefully. If you do not agree with these terms, please refrain from using our services.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">1. Membership Eligibility</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Membership is open to legitimate animal shelters and rescue organizations.</li>
                        <li>Organizations do not need to hold 501(c)(3) non-profit status but must operate as a legitimate rescue organization.</li>
                        <li>You must have the necessary local or state permits and no pending or confirmed animal control or criminal citations.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Responsibilities</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Keep your pet listings current and accurate, promptly removing unavailable pets.</li>
                        <li>Maintain a valid email address or phone number and treat all inquiries with courtesy.</li>
                        <li>All content must be appropriate for all ages without profanity or offensive material.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">3. Pet Listings</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Only pets currently available for adoption may be posted.</li>
                        <li>All pet information must be true and accurate.</li>
                        <li>No application fees; only adoption fees upon completion.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">4. Prohibited Practices</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>No auction or breeder pets.</li>
                        <li>Only post pets under your direct care.</li>
                        <li>No content encouraging declawing or harmful practices.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">5. Communication</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Consent to receive notifications from Resqdex.</li>
                        <li>Provide accurate contact information and respond promptly.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">6. Compliance and Monitoring</h2>
                    <p>Operate in accordance with laws and regulations. Resqdex reserves the right to remove accounts/posts that violate these terms.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">7. Code of Conduct</h2>
                    <p>Members must maintain a positive community experience and truthful, current pet listings.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">8. Modifications and Updates</h2>
                    <p>Terms may be revised at any time. Continued use signifies acceptance.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">9. Acceptance of Terms</h2>
                    <p>By signing up, you agree to comply with Resqdex’s Terms of Service and Privacy Policy on behalf of your organization.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
                    <p>Thank you for your commitment to helping homeless animals. For any questions, contact us at <a href="mailto:support@resqdex.com" className="text-primary underline">support@resqdex.com</a>.</p>
                </section>
            </div>
        </div>
    );
}

export default Page;
