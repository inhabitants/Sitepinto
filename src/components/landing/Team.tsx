import { Twitter, Youtube, Linkedin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Team = () => {
  const sectors = [
    {
      name: "Development",
      members: [
        {
          name: "PK",
          role: "Frontend",
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

        <div className="grid gap-16">
          {sectors.map((sector) => (
            <div key={sector.name} className="bg-neutral-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-neutral-100 mb-8 border-b border-neutral-700 pb-4">
                {sector.name}
              </h3>
              <div className="flex flex-wrap gap-8 justify-center">
                {sector.members.map((member) => (
                  <HoverCard key={member.name}>
                    <HoverCardTrigger asChild>
                      <div className="relative group cursor-pointer w-[75px] h-[75px]">
                        <div className="overflow-hidden rounded-full w-[75px] h-[75px]">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex flex-col items-center justify-center">
                          <p className="text-white text-xs font-medium">{member.name}</p>
                          <p className="text-neutral-300 text-xs">{member.role}</p>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto p-2">
                      <div className="flex justify-center space-x-2">
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full bg-neutral-100 hover:bg-accent-purple hover:text-white transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href={member.social.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full bg-neutral-100 hover:bg-accent-purple hover:text-white transition-colors"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-full bg-neutral-100 hover:bg-accent-purple hover:text-white transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
