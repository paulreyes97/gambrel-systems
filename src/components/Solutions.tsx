
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, MessageSquare, BarChart3, ClipboardList, UsersRound, UserPlus, Palette, Globe, Code, MoreHorizontal } from "lucide-react";

const Solutions = () => {
  const solutionItems = [
    {
      title: "Customer Service",
      description: "AI-powered solutions to enhance customer interactions and support",
      icon: <MessageSquare className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Sales",
      description: "Smart systems to optimize your sales pipeline and increase conversions",
      icon: <BarChart3 className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Marketing",
      description: "Data-driven marketing strategies to reach the right audience",
      icon: <Lightbulb className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Project Management",
      description: "Advanced tools to streamline workflow and meet deadlines",
      icon: <ClipboardList className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Resource Management",
      description: "Optimize allocation of materials and equipment across projects",
      icon: <UsersRound className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Hiring & Onboarding",
      description: "Streamline recruitment and training for construction teams",
      icon: <UserPlus className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Graphic Design",
      description: "Creative design solutions for construction marketing materials",
      icon: <Palette className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Web Design",
      description: "Custom websites optimized for construction businesses",
      icon: <Globe className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "Software Development",
      description: "Tailored applications to meet your specific operational needs",
      icon: <Code className="h-10 w-10 text-elegant-blue-400" />
    },
    {
      title: "More Coming Soon",
      description: "As technology evolves, we continuously expand our service offerings",
      icon: <MoreHorizontal className="h-10 w-10 text-elegant-blue-400" />
    }
  ];

  return (
    <section className="py-20 px-6 bg-[#eeeeee]" id="solutions">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-elegant-gray-900 mb-4">AI-Driven Solutions</h2>
          <p className="text-elegant-gray-600 max-w-3xl mx-auto text-lg">
            Our comprehensive suite of AI technologies is designed specifically for the construction industry. 
            As technology evolves, we continuously expand our offerings to meet your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionItems.map((item, index) => (
            <Card key={index} className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-4">{item.icon}</div>
                <CardTitle className="text-xl font-bold text-elegant-gray-900">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-elegant-gray-600">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
