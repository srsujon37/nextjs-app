import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const data = [
    {
      _id: "001",
      service_name: "Web Design",
      service_image:
        "https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg",
      service_description:
        "Professional and responsive web design services for modern websites.",
    },
    {
      _id: "002",
      service_name: "WordPress Development",
      service_image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      service_description:
        "Custom WordPress solutions including themes, plugins, and optimization.",
    },
    {
      _id: "003",
      service_name: "Shopify Store Setup",
      service_image:
        "https://images.pexels.com/photos/6347728/pexels-photo-6347728.jpeg",
      service_description:
        "Create and manage high-converting Shopify stores tailored to your brand.",
    },
    {
      _id: "004",
      service_name: "SEO Optimization",
      service_image:
        "https://images.pexels.com/photos/4458/desk-office-computer-apple.jpg",
      service_description:
        "Boost your website visibility and ranking through advanced SEO techniques.",
    },
    {
      _id: "005",
      service_name: "Email Marketing",
      service_image:
        "https://images.pexels.com/photos/1061588/pexels-photo-1061588.jpeg",
      service_description:
        "Strategic email campaigns to improve engagement and grow your audience.",
    },
  ];

  return (
    <div>
      <p className="font-bold text-2xl">Services</p>
      {data.map((d) => {
        return (
          <Link href={`/services/${d._id}`}>
            <div className="space-y-6 flex flex-col gap-5">
              <img className="w-full h-80" src={d.service_image} alt="" />
              <h3 className="font-bold text-3xl text-blue-500">
                {d.service_name}
              </h3>
             
            </div>
          </Link>
        );
      })}
    </div>
  );
}
