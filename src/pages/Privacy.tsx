
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6 lg:px-8">
            <h1 className="heading-lg mb-10">Privacy Policy</h1>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground mb-6">Last Updated: March 26, 2025</p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">1. Introduction</h2>
              <p className="mb-6">
                At Gambrel Systems LLC ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our applications, or engage with our services.
              </p>
              <p className="mb-6">
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, company information, job title, and other contact details you provide when you register for an account, submit forms, or communicate with us.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website and services, including IP address, browser type, pages visited, time spent on pages, and other analytics data.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about the device you use to access our services, including device type, operating system, and unique device identifiers.
                </li>
                <li>
                  <strong>Construction Project Data:</strong> Information related to construction projects that you upload or input into our systems for analysis and processing by our AI solutions.
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>Providing, operating, and maintaining our services</li>
                <li>Improving, personalizing, and expanding our services</li>
                <li>Understanding and analyzing how you use our services</li>
                <li>Developing new products, services, features, and functionality</li>
                <li>Communicating with you about our services, updates, and promotions</li>
                <li>Processing transactions and sending related information</li>
                <li>Finding and preventing fraud</li>
                <li>Responding to customer service requests and support needs</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and contractors who perform services on our behalf.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share your information with your consent or as otherwise disclosed at the time of collection.
                </li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">5. Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">6. Your Rights and Choices</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>The right to access and receive a copy of your personal information</li>
                <li>The right to rectify or update your personal information</li>
                <li>The right to erase your personal information</li>
                <li>The right to restrict processing of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="mb-6">
                To exercise these rights, please contact us at support@gambrelsystems.com.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">7. Cookie Policy</h2>
              <p className="mb-6">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">8. Children's Privacy</h2>
              <p className="mb-6">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contact Us</h2>
              <p className="mb-6">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-6">
                Gambrel Systems LLC<br />
                Address: 180 Gamble Ln<br />
                Pueblo, CO 81001<br />
                Email: support@gambrelsystems.com<br />
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
