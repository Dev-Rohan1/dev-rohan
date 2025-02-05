import React from "react";

const Services = () => {
  const serviceCategories = [
    {
      id: 1,
      title: "Web Development Services",
      services: [
        {
          id: 1,
          title: "Frontend Development",
          description: "We create stunning and responsive user interfaces.",
          icon: "💻",
        },
        {
          id: 2,
          title: "Backend Development",
          description: "We build robust and scalable server-side applications.",
          icon: "🖥️",
        },
        {
          id: 3,
          title: "Full-Stack Development",
          description: "End-to-end solutions for your web applications.",
          icon: "🌐",
        },
      ],
    },
    {
      id: 2,
      title: "Mobile App Development Services",
      services: [
        {
          id: 1,
          title: "iOS Development",
          description: "We build sleek and high-performance iOS apps.",
          icon: "🍏",
        },
        {
          id: 2,
          title: "Android Development",
          description: "We create intuitive and feature-rich Android apps.",
          icon: "🤖",
        },
        {
          id: 3,
          title: "Cross-Platform Development",
          description:
            "We develop apps that work seamlessly on both iOS and Android.",
          icon: "📱",
        },
      ],
    },
    {
      id: 3,
      title: "SEO & Digital Marketing Services",
      services: [
        {
          id: 1,
          title: "SEO Optimization",
          description:
            "We optimize your website to rank higher on search engines.",
          icon: "🔍",
        },
        {
          id: 2,
          title: "Content Marketing",
          description:
            "We create engaging content to drive traffic and conversions.",
          icon: "📝",
        },
        {
          id: 3,
          title: "Social Media Marketing",
          description:
            "We manage your social media presence to grow your audience.",
          icon: "📱",
        },
      ],
    },
    {
      id: 4,
      title: "Cloud & DevOps Services",
      services: [
        {
          id: 1,
          title: "Cloud Migration",
          description: "We help you migrate your applications to the cloud.",
          icon: "☁️",
        },
        {
          id: 2,
          title: "DevOps Automation",
          description: "We automate your development and deployment processes.",
          icon: "🤖",
        },
        {
          id: 3,
          title: "Cloud Security",
          description:
            "We ensure your cloud infrastructure is secure and compliant.",
          icon: "🔒",
        },
      ],
    },
    {
      id: 5,
      title: "UI/UX Design Services",
      services: [
        {
          id: 1,
          title: "User Research",
          description: "We conduct in-depth research to understand your users.",
          icon: "🔍",
        },
        {
          id: 2,
          title: "Wireframing & Prototyping",
          description: "We create wireframes and prototypes for your designs.",
          icon: "📐",
        },
        {
          id: 3,
          title: "UI/UX Design",
          description: "We design beautiful and user-friendly interfaces.",
          icon: "🎨",
        },
      ],
    },
  ];

  return (
    <section className="bg-purple-50 py-12 px-4 sm:px-8 lg:px-16 rounded-2xl mb-6">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-gray-800 font-bold text-center mb-2">
          Our Services
        </h2>
        <span className="block h-1 w-25 bg-blue-600 rounded-full mx-auto mb-8"></span>
        {serviceCategories.map((category) => (
          <div key={category.id} className="mb-12">
            <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
