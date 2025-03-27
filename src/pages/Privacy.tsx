
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col" id="top">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="bg-gambrel-gray-light py-24">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="heading-xl mb-6">Privacy Policy</h1>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              How we collect, use, and protect your information
            </p>
          </div>
        </section>
        
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p>Last Updated: June 1, 2023</p>
              
              <h2>Introduction</h2>
              <p>Gambrel Systems LLC ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy.</p>
              <p>This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
              
              <h2>Information We Collect</h2>
              <p>We collect several types of information from and about users of our website, including information:</p>
              <ul>
                <li>By which you may be personally identified, such as name, email address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information");</li>
                <li>That is about you but individually does not identify you, such as job title, industry, or company size; and/or</li>
                <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
              <ul>
                <li>To present our website and its contents to you;</li>
                <li>To provide you with information, products, or services that you request from us;</li>
                <li>To fulfill any other purpose for which you provide it;</li>
                <li>To provide you with notices about your account;</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;</li>
                <li>To notify you about changes to our website or any products or services we offer or provide through it;</li>
                <li>In any other way we may describe when you provide the information; and</li>
                <li>For any other purpose with your consent.</li>
              </ul>
              
              <h2>Disclosure of Your Information</h2>
              <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.</p>
              <p>We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
              <ul>
                <li>To our subsidiaries and affiliates;</li>
                <li>To contractors, service providers, and other third parties we use to support our business;</li>
                <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Gambrel Systems's assets;</li>
                <li>To fulfill the purpose for which you provide it;</li>
                <li>For any other purpose disclosed by us when you provide the information; and/or</li>
                <li>With your consent.</li>
              </ul>
              
              <h2>Contact Information</h2>
              <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
              <p>
                Gambrel Systems LLC<br />
                Address: 180 Gamble Ln<br />
                Pueblo, CO 81001<br />
                Phone: +1 (786) 321-8832<br />
                Email: privacy@gambrelsystems.com
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
