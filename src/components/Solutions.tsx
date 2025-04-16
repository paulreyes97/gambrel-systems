
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Lightbulb, MessageSquare, BarChart3, ClipboardList, Building, UserPlus, Palette, Globe, Code, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Solutions = () => {
  const mainSolutionItems = [
    {
      title: "Customer Service",
      description: "AI-powered solutions to enhance customer interactions and support. Our intelligent chatbots and voice assistants handle routine inquiries, while advanced analytics help identify customer pain points and improve satisfaction rates.",
      icon: <MessageSquare className="h-10 w-10 text-[#1E3A8A]" />,
      path: "/"
    },
    {
      title: "Sales",
      description: "Smart systems to optimize your sales pipeline and increase conversions. Our AI analyzes customer data to identify high-value prospects, predicts buying behavior, and recommends personalized approaches for each client.",
      icon: <BarChart3 className="h-10 w-10 text-[#1E3A8A]" />,
      path: "/"
    },
    {
      title: "Marketing",
      description: "Data-driven marketing strategies to reach the right audience at the right time. Our AI tools analyze market trends, customer preferences, and competitor activities to create targeted campaigns with maximum impact.",
      icon: <Lightbulb className="h-10 w-10 text-[#1E3A8A]" />,
      path: "/"
    },
    {
      title: "Project Management",
      description: "Advanced tools to streamline workflow and meet deadlines consistently. Our AI-powered project management solutions provide real-time progress tracking, resource allocation optimization, and predictive analytics to identify potential bottlenecks.",
      icon: <ClipboardList className="h-10 w-10 text-[#1E3A8A]" />,
      path: "/"
    },
    {
      title: "Resource Management",
      description: "Optimize allocation of resources across projects with our intelligent management platform. AI algorithms analyze historical usage patterns, current requirements, and availability to ensure the right resources are at the right place at the right time.",
      icon: <Building className="h-10 w-10 text-[#1E3A8A]" />,
      path: "/"
    },
    {
      title: "Hiring & Onboarding",
      description: "Streamline recruitment and training for teams with our AI-driven talent acquisition platform. Smart candidate matching, automated skills assessment, and personalized onboarding programs help you build and maintain high-performing teams.",
      icon: <UserPlus className="h-10 w-10 text-[#1E3A8A]" />,
      path: "/"
    },
  ];

  const otherSolutionItems = [
    {
      title: "Graphic Design",
      description: "Creative design solutions for marketing materials that capture attention and communicate your value proposition effectively. Our AI-assisted design tools help create compelling visuals while maintaining brand consistency.",
      icon: <Palette className="h-10 w-10 text-[#1E3A8A]" />,
      path: "/"
    },
    {
      title: "Web Design",
      description: "Custom websites optimized for businesses that showcase your portfolio and generate qualified leads. Our responsive designs ensure excellent user experience across all devices, while intelligent SEO optimization improves your visibility.",
      icon: <Globe className="h-10 w-10 text-[#1E3A8A]" />,
      path: "/"
    },
    {
      title: "Software Development",
      description: "Tailored applications to meet your specific operational needs, from project tracking to client management. Our development team creates intuitive, scalable solutions that integrate seamlessly with your existing systems.",
      icon: <Code className="h-10 w-10 text-[#1E3A8A]" />,
      path: "/"
    },
    {
      title: "More Coming Soon",
      description: "As technology evolves, we continuously expand our service offerings to meet the changing needs of businesses. Our research and development team is constantly exploring emerging technologies and innovative applications to provide you with cutting-edge solutions.",
      icon: <MoreHorizontal className="h-10 w-10 text-[#1E3A8A]" />,
      path: "/"
    }
  ];

  const SolutionCard = ({ item }) => (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white">
      <CardHeader className="pb-2 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-2">
          {item.icon}
          <CardTitle className="text-2xl font-bold font-display" style={{ color: "#000000" }}>{item.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <CardDescription className="text-base leading-relaxed text-elegant-gray-700" style={{ color: "#000000" }}>{item.description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild variant="outline" className="mt-2">
          <Link to={item.path}>
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <section className="py-24 px-6 bg-[#eeeeee]" id="solutions">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4 leading-tight" style={{ color: "#000000" }}>AI-Driven Solutions</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-8" style={{ color: "#000000" }}>
            Our comprehensive suite of AI technologies is designed to transform how businesses operate. 
            From customer service to resource management, we deliver intelligent automation at every level.
          </p>
        </div>
        
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainSolutionItems.map((item, index) => (
              <SolutionCard key={index} item={item} />
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4 leading-tight" style={{ color: "#000000" }}>Other Solutions</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-8" style={{ color: "#000000" }}>
            Beyond our core offerings, we provide additional specialized services to support all aspects of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherSolutionItems.map((item, index) => (
            <SolutionCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
