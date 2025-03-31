
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, MessageSquare, BarChart3, ClipboardList, UsersRound, UserPlus, Palette, Globe, Code, MoreHorizontal } from "lucide-react";

const Solutions = () => {
  const solutionItems = [
    {
      title: "Customer Service",
      description: "AI-powered solutions to enhance customer interactions and support. Our intelligent chatbots and voice assistants handle routine inquiries, while advanced analytics help identify customer pain points and improve satisfaction rates. This allows your team to focus on complex issues requiring the human touch.",
      icon: <MessageSquare className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Sales",
      description: "Smart systems to optimize your sales pipeline and increase conversions. Our AI analyzes customer data to identify high-value prospects, predicts buying behavior, and recommends personalized approaches for each client. Real-time analytics dashboards track performance metrics and provide actionable insights to boost your bottom line.",
      icon: <BarChart3 className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Marketing",
      description: "Data-driven marketing strategies to reach the right audience at the right time. Our AI tools analyze market trends, customer preferences, and competitor activities to create targeted campaigns with maximum impact. Automated content generation and optimization ensure consistent brand messaging across all channels.",
      icon: <Lightbulb className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Project Management",
      description: "Advanced tools to streamline workflow and meet deadlines consistently. Our AI-powered project management solutions provide real-time progress tracking, resource allocation optimization, and predictive analytics to identify potential bottlenecks before they impact your timeline. Automated reporting keeps stakeholders informed at every stage.",
      icon: <ClipboardList className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Resource Management",
      description: "Optimize allocation of materials and equipment across projects with our intelligent resource management platform. AI algorithms analyze historical usage patterns, current project requirements, and availability to ensure the right resources are at the right place at the right time, minimizing waste and maximizing efficiency.",
      icon: <UsersRound className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Hiring & Onboarding",
      description: "Streamline recruitment and training for construction teams with our AI-driven talent acquisition platform. Smart candidate matching, automated skills assessment, and personalized onboarding programs help you build and maintain high-performing teams. Continuous learning modules keep your workforce updated on the latest industry practices.",
      icon: <UserPlus className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Graphic Design",
      description: "Creative design solutions for construction marketing materials that capture attention and communicate your value proposition effectively. Our AI-assisted design tools help create compelling visuals while maintaining brand consistency. From project proposals to social media content, we ensure your visual communication stands out.",
      icon: <Palette className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Web Design",
      description: "Custom websites optimized for construction businesses that showcase your portfolio and generate qualified leads. Our responsive designs ensure excellent user experience across all devices, while intelligent SEO optimization improves your visibility to potential clients. Integrated analytics provide insights on visitor behavior to continuously improve performance.",
      icon: <Globe className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Software Development",
      description: "Tailored applications to meet your specific operational needs, from project tracking to client management. Our development team creates intuitive, scalable solutions that integrate seamlessly with your existing systems. Cloud-based deployment ensures accessibility from job sites while maintaining data security and compliance.",
      icon: <Code className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "More Coming Soon",
      description: "As technology evolves, we continuously expand our service offerings to meet the changing needs of the construction industry. Our research and development team is constantly exploring emerging technologies and innovative applications to provide you with cutting-edge solutions that maintain your competitive advantage.",
      icon: <MoreHorizontal className="h-10 w-10 text-elegant-blue-400" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#eeeeee]" id="solutions">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4 leading-tight" style={{ color: "#000000" }}>AI-Driven Solutions</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-8" style={{ color: "#000000" }}>
            Our comprehensive suite of AI technologies is designed specifically for the construction industry. 
            As technology evolves, we continuously expand our offerings to meet your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionItems.map((item, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white">
              <CardHeader className="pb-2 border-b border-gray-100">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 rounded-lg bg-elegant-blue-50">
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold font-display" style={{ color: "#000000" }}>{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base leading-relaxed text-elegant-gray-700" style={{ color: "#000000" }}>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
