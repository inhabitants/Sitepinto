import { Twitter, Youtube, Linkedin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Team = () => {
  const sectors = [
    {
      name: "Development",
      members: [
        {
          name: "Dev Member 1",
          role: "Smart Contracts",
          image: "/placeholder.svg",
          social: {
            twitter: "https://twitter.com/dev1",
            youtube: "https://youtube.com/@dev1",
            linkedin: "https://linkedin.com/in/dev1"
          }
        },
        {
          name: "Dev Member 2",
          role: "Frontend",
          image: "/placeholder.svg",
          social: {
            twitter: "https://twitter.com/dev2",
            youtube: "https://youtube.com/@dev2",
            linkedin: "https://linkedin.com/in/dev2"
          }
        }
      ]
    },
    {
      name: "Design",
      members: [
        {
          name: "Design Member 1",
          role: "UI/UX",
          image: "/placeholder.svg",
          social: {
            twitter: "https://twitter.com/design1",
            youtube: "https://youtube.com/@design1",
            linkedin: "https://linkedin.com/in/design1"
          }
        }
      ]
    },
    {
      name: "Research",
      members: [
        {
          name: "Research Member 1",
          role: "Tokenomics",
          image: "/placeholder.svg",
          social: {
            twitter: "https://twitter.com/research1",
            youtube: "https://youtube.com/@research1",
            linkedin: "https://linkedin.com/in/research1"
          }
        }
      ]
    },
    {
      name: "Outreach",
      members: [
        {
          name: "Outreach Member 1",
          role: "Community Manager",
          image: "/placeholder.svg",
          social: {
            twitter: "https://twitter.com/outreach1",
            youtube: "https://youtube.com/@outreach1",
            linkedin: "https://linkedin.com/in/outreach1"
          }
        }
      ]
    }
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

        {sectors.map((sector) => (
          <div key={sector.name} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-neutral-100 mb-8">{sector.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sector.members.map((member) => (
                <HoverCard key={member.name}>
                  <HoverCardTrigger asChild>
                    <div className="relative group cursor-pointer">
                      <div className="overflow-hidden rounded-full aspect-square">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-full">
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
        ))}
      </div>
    </section>
  );
};

export default Team;