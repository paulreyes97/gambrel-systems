
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]" id="top">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="bg-black py-24">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="heading-xl mb-6 text-white">Privacy Policy</h1>
            <p className="body-lg text-gray-300 max-w-3xl mx-auto">
              Effective Date: May 1, 2024
            </p>
          </div>
        </section>
        
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-200 text-black max-w-4xl mx-auto">
              <p className="body-md mb-6">
                Gambrel Systems LLC ("Gambrel," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and disclose information when you use our websites, applications, products, and services (collectively, the "Services").
              </p>
              
              <h2 className="heading-md mb-4 mt-8">Information We Collect</h2>
              <p className="body-md mb-4">We collect the following categories of information:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Information you provide directly to us, such as your name, email address, company information, and any other information you choose to provide.</li>
                <li>Information we collect automatically when you use our Services, such as device information, usage data, and cookies.</li>
                <li>Information from third-party sources, such as business partners, analytics providers, and advertising networks.</li>
              </ul>
              
              <h2 className="heading-md mb-4 mt-8">How We Use Your Information</h2>
              <p className="body-md mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, offers, and events, and provide news and information we think will interest you</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Personalize your experience using our Services</li>
              </ul>
              
              <h2 className="heading-md mb-4 mt-8">Sharing of Information</h2>
              <p className="body-md mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Service providers who perform services on our behalf</li>
                <li>Business partners with whom we jointly offer products or services</li>
                <li>Law enforcement or other government entities as required by law</li>
                <li>Other parties in connection with a company transaction, such as a merger, sale of company assets, or financing</li>
              </ul>
              
              <h2 className="heading-md mb-4 mt-8">Your Choices</h2>
              <p className="body-md mb-6">
                You have certain choices about how we use your information, including the ability to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Opt out of receiving promotional communications from us</li>
                <li>Update or correct your account information</li>
                <li>Delete your account and personal information</li>
                <li>Control cookies and tracking technologies through your browser settings</li>
              </ul>
              
              <h2 className="heading-md mb-4 mt-8">Security</h2>
              <p className="body-md mb-6">
                We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
              
              <h2 className="heading-md mb-4 mt-8">Changes to This Privacy Policy</h2>
              <p className="body-md mb-6">
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you as required by applicable law.
              </p>
              
              <h2 className="heading-md mb-4 mt-8">Contact Us</h2>
              <p className="body-md mb-2">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="body-md">
                Gambrel Systems LLC<br />
                Address: 180 Gamble Ln<br />
                Pueblo, CO 81001<br />
                Email: privacy@gambrelsystems.com<br />
                Phone: +1 (786) 321-8832
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
