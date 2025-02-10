const TrustedBy = () => {
  const companies = [
    { 
      name: "Lush", 
      className: "w-24",
      imageUrl: "/Lushlogo.png"
    },
    { 
      name: "SpellBorne", 
      className: "w-28",
      imageUrl: "/Spellborne-logo.png"
    },
    { 
      name: "Kgen", 
      className: "w-28",
      imageUrl: "/Kgen-logo.png"
    },
    { 
      name: "Outro", 
      className: "w-24",
      imageUrl: "/Outro.png"
    }
  ];

  return (
    <section className="py-24 bg-neutral-200/50">
      <div className="container-padding">
        <p className="text-center text-neutral-600 mb-12">Pinto está presente em</p>
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