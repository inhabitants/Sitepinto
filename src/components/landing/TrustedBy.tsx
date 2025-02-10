const TrustedBy = () => {
  const companies = [
    { 
      name: "Lush", 
      className: "w-32",
      imageUrl: "/Lushlogo.png",
      link: "https://www.lush.com",
      target: "_blank"

    },
    { 
      name: "SpellBorne", 
      className: "w-48",
      imageUrl: "/Spellborne-logo.png",
      link: "https://spellborne.com",
      target: "_blank"
    },

    { 
      name: "Kgen", 
      className: "w-40",
      imageUrl: "/Kgen-logo.png",
      link: "https://kgen.com",
      target: "_blank"

    },
    { 
      name: "Blast", 
      className: "w-40",
      imageUrl: "/BlastLogo.svg",
      link: "https://blast.io",
      target: "_blank"

    }
  ];

  return (
    <section className="py-24 bg-neutral-200/50">
      <div className="container-padding">
        <p className="text-center text-neutral-600 mb-12">Pinto está presente em</p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${company.className} h-8 flex items-center justify-center transition-opacity hover:opacity-80`}
            >
              <img 
                src={company.imageUrl}
                alt={`${company.name} logo`}
                className="h-full object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;