import { Twitter, Youtube, Linkedin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Team = () => {
  const members = [
    {
      name: "Ethermage",
      role: "Virtuals Protocol",
      image: "/lovable-uploads/99258f35-9491-4e71-bfb9-809809eeb77c.png",
      social: {
        twitter: "https://twitter.com/ethermage",
        youtube: "https://youtube.com/@ethermage",
        linkedin: "https://linkedin.com/in/ethermage"
      }
    },
    {
      name: "Jin",
      role: "A116z",
      image: "/lovable-uploads/99258f35-9491-4e71-bfb9-809809eeb77c.png",
      social: {
        twitter: "https://twitter.com/jin",
        youtube: "https://youtube.com/@jin",
        linkedin: "https://linkedin.com/in/jin"
      }
    },
    // ... outros membros aqui
  ];

  return (
    <section className="py-24 bg-neutral-800">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            NOSSA EQUIPE
          </span>
          <h2 className="heading-lg mt-6 text-neutral-100">Membros da DAO</h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            Conheça os membros que fazem parte da nossa comunidade descentralizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <HoverCard key={member.name}>
              <HoverCardTrigger asChild>
                <div className="relative group cursor-pointer">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-neutral-300">{member.role}</p>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-100 hover:bg-accent-purple hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-100 hover:bg-accent-purple hover:text-white transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-neutral-100 hover:bg-accent-purple hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;