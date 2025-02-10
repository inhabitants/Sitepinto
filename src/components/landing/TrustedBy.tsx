const TrustedBy = () => {
  const companies = [
    { 
      name: "Stripe", 
      className: "w-24",
      imageUrl: "/Lushlogo.png"
    },
    { 
      name: "HubSpot", 
      className: "w-28",
      imageUrl: "/images/hubspot-logo.png"
    },
    { 
      name: "Intercom", 
      className: "w-28",
      imageUrl: "/images/intercom-logo.png"
    },
    { 
      name: "Asana", 
      className: "w-24",
      imageUrl: "/images/asana-logo.png"
    }
  ];

  return (
    <section className="py-24 bg-neutral-200/50">
      <div className="container-padding">
        <p className="text-center text-neutral-600 mb-12">Pinto está em:</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company) => (
            <div key={company.name} className={`${company.className} h-8 flex items-center justify-center`}>
              <img 
                src={company.imageUrl}
                alt={`${company.name} logo`}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;