
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, MessageSquare, BarChart3, ClipboardList, UsersRound, UserPlus, Palette, Globe, Code, MoreHorizontal } from "lucide-react";

const Solutions = () => {
  const solutionItems = [
    {
      title: "Customer Service",
      description: "AI-powered solutions to enhance customer interactions and support. Our intelligent chatbots and voice assistants handle routine inquiries, while advanced analytics help identify customer pain points and improve satisfaction rates. This allows your team to focus on complex issues requiring the human touch. Our systems integrate seamlessly with your existing CRM platforms and provide comprehensive analytics to continuously refine customer experience.",
      icon: <MessageSquare className="h-12 w-12 text-[#8B5CF6]" />
    },
    {
      title: "Sales",
      description: "Smart systems to optimize your sales pipeline and increase conversions. Our AI analyzes customer data to identify high-value prospects, predicts buying behavior, and recommends personalized approaches for each client. Real-time analytics dashboards track performance metrics and provide actionable insights to boost your bottom line. Advanced lead scoring algorithms prioritize your team's efforts on opportunities with the highest potential return, increasing efficiency and conversion rates.",
      icon: <BarChart3 className="h-12 w-12 text-[#D946EF]" />
    },
    {
      title: "Marketing",
      description: "Data-driven marketing strategies to reach the right audience at the right time. Our AI tools analyze market trends, customer preferences, and competitor activities to create targeted campaigns with maximum impact. Automated content generation and optimization ensure consistent brand messaging across all channels. Predictive analytics help forecast campaign performance and recommend budget allocation adjustments to maximize ROI and engagement metrics across different market segments.",
      icon: <Lightbulb className="h-12 w-12 text-[#F97316]" />
    },
    {
      title: "Project Management",
      description: "Advanced tools to streamline workflow and meet deadlines consistently. Our AI-powered project management solutions provide real-time progress tracking, resource allocation optimization, and predictive analytics to identify potential bottlenecks before they impact your timeline. Automated reporting keeps stakeholders informed at every stage. Intelligent scheduling algorithms balance workloads across team members and adjust timelines based on real-time progress data to maintain project momentum and delivery targets.",
      icon: <ClipboardList className="h-12 w-12 text-[#0EA5E9]" />
    },
    {
      title: "Resource Management",
      description: "Optimize allocation of materials and equipment across projects with our intelligent resource management platform. AI algorithms analyze historical usage patterns, current project requirements, and availability to ensure the right resources are at the right place at the right time, minimizing waste and maximizing efficiency. Our systems integrate with your inventory management software and provide advanced forecasting to prevent shortages and reduce excess capacity, optimizing your capital and operational expenditures.",
      icon: <UsersRound className="h-12 w-12 text-[#8B5CF6]" />
    },
    {
      title: "Hiring & Onboarding",
      description: "Streamline recruitment and training for construction teams with our AI-driven talent acquisition platform. Smart candidate matching, automated skills assessment, and personalized onboarding programs help you build and maintain high-performing teams. Continuous learning modules keep your workforce updated on the latest industry practices. Our platform includes predictive retention analysis to identify flight risks and recommend interventions, reducing turnover and protecting your investment in human capital.",
      icon: <UserPlus className="h-12 w-12 text-[#D946EF]" />
    },
    {
      title: "Graphic Design",
      description: "Creative design solutions for construction marketing materials that capture attention and communicate your value proposition effectively. Our AI-assisted design tools help create compelling visuals while maintaining brand consistency. From project proposals to social media content, we ensure your visual communication stands out. Our platform includes automated brand guidelines enforcement and template customization engines that allow for rapid creation of professional materials tailored to specific audiences and channels.",
      icon: <Palette className="h-12 w-12 text-[#F97316]" />
    },
    {
      title: "Web Design",
      description: "Custom websites optimized for construction businesses that showcase your portfolio and generate qualified leads. Our responsive designs ensure excellent user experience across all devices, while intelligent SEO optimization improves your visibility to potential clients. Integrated analytics provide insights on visitor behavior to continuously improve performance. Our platforms include AI-driven content personalization that adapts messaging based on visitor profiles and behavior, increasing engagement and conversion rates.",
      icon: <Globe className="h-12 w-12 text-[#0EA5E9]" />
    },
    {
      title: "Software Development",
      description: "Tailored applications to meet your specific operational needs, from project tracking to client management. Our development team creates intuitive, scalable solutions that integrate seamlessly with your existing systems. Cloud-based deployment ensures accessibility from job sites while maintaining data security and compliance. Our agile development methodology incorporates continuous feedback loops and automated testing to deliver solutions that evolve with your business needs while maintaining stability and performance.",
      icon: <Code className="h-12 w-12 text-[#8B5CF6]" />
    },
    {
      title: "More Coming Soon",
      description: "As technology evolves, we continuously expand our service offerings to meet the changing needs of the construction industry. Our research and development team is constantly exploring emerging technologies and innovative applications to provide you with cutting-edge solutions that maintain your competitive advantage. Stay tuned for upcoming services in augmented reality site visualization, drone-based progress monitoring, and predictive maintenance systems for equipment fleets and building systems.",
      icon: <MoreHorizontal className="h-12 w-12 text-[#D946EF]" />
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#eeeeee] to-[#f6f6f7]" id="solutions">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-display mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#403E43] to-[#8B5CF6]">AI-Driven Solutions</h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8" style={{ color: "#000000" }}>
            Our comprehensive suite of AI technologies is designed specifically for the construction industry. 
            We leverage cutting-edge artificial intelligence to solve your most challenging business problems and create competitive advantages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
          {solutionItems.map((item, index) => (
            <Card 
              key={index} 
              className="border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-white hover:translate-y-[-4px]"
            >
              <CardHeader className="pb-2 border-b border-gray-100">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-[#f1f1f1] to-[#eeeeee] shadow-sm">
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold font-display" style={{ color: "#000000" }}>{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardDescription className="text-base leading-relaxed text-elegant-gray-700" style={{ color: "#000000" }}>
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
