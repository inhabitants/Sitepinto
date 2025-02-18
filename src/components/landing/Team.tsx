import { Twitter, Youtube, Linkedin } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Team = () => {
  const sectors = [
    {
      name: "Callers",
      members: [
        {
          name: "Tarcio",
          role: "IA e Virtuals",
          image: "/tarcio.jpg",
          social: {
            twitter: "https://x.com/"
          }
        },
        {
          name: "Borderless",
          role: "Research em IA e DeFi",
          image: "/borderless.jpg",
          social: {
            twitter: "https://x.com/Borderless_DeFi"
          }
        },
        {
          name: "Kohari",
          role: "Gamefi e airdrops",
          image: "/kohari.jpg",
          social: {
            twitter: "https://x.com/eukohari"
          }
        },
        {
          name: "Skott",
          role: "Front de Solana",
          image: "/skott.jpg",
          social: {
            twitter: "https://x.com/skottrun"
          }
        },
        {
          name: "Talles",
          role: "DeFi e narrativas de mercado",
          image: "/talles.jpg",
          social: {
            twitter: "https://twitter.com/talles"
          }
        },
        {
          name: "Leitas",
          role: "Farming de airdrops avançados",
          image: "/leitas.jpg",
          social: {
            twitter: "https://x.com/leitas873"
          }
        },
        {
          name: "Gaskan",
          role: "Especialista em rede SUI",
          image: "/gaskan.jpg",
          social: {
            twitter: "https://x.com/e88henrique"
          }
        },
        {
          name: "Tato",
          role: "Alphas e oportunidades free",
          image: "/tato.jpg",
          social: {
            twitter: "https://x.com/TATOnft"
          }
        },
        {
          name: "Milca0",
          role: "GameFi e play-to-earn",
          image: "/milca.jpg",
          social: {
            twitter: "https://x.com/milca0_"
          }
        },
        {
          name: "Mendes",
          role: "Solana e multi-chain games",
          image: "/mendes.jpg",
          social: {
            twitter: "https://x.com/mendes_degen"
          }
        },
        {
          name: "Tembz",
          role: "Perpétuos e projetos early-stage",
          image: "/tembzz.jpg",
          social: {
            twitter: "https://x.com/andretembz"
          }
        }
      ]
    },
    {
      name: "Community Managers",
      members: [
        {
          name: "Marelo",
          role: "Community Lead",
          image: "/marelo.jpg",
          social: {
            twitter: "https://x.com/MareloFuma"
          }
        },
        {
          name: "Blastoise",
          role: "Event Manager",
          image: "/blastoise.jpg",
          social: {
            twitter: "https://x.com/Blastoiise_"
          }
        },
        {
          name: "Profeh",
          role: "Discord Manager",
          image: "/profeh.jpg",
          social: {
            twitter: "https://x.com/0xprofeh"
          }
        }
      ]
    },
    {
      name: "Development",
      members: [
        {
          name: "Borderless",
          role: "Product / AI",
          image: "/borderless.jpg",
          social: {
            twitter: "https://x.com/Borderless_DeFi"
          }
        },
        {
          name: "PK",
          role: "Frontend",
          image: "/PK.jpg",
          social: {
            twitter: "https://x.com/x06pk"
          }
        },
        {
          name: "Sinners",
          role: "Bots/Backend",
          image: "/sinners.jpg",
          social: {
            twitter: "https://twitter.com/dev2",
            linkedin: "https://x.com/___sinners___"
          }
        }
      ]
    },
    {
     name: "Design",
  members: [
    {
      name: "Loirin",
      role: "UI",
      image: "/loirin.jpg",
      social: {
        twitter: "https://twitter.com/design1",
        youtube: "https://youtube.com/@design1",
        linkedin: "https://linkedin.com/in/design1"
      }
    },
    {
      name: "Rillen",
      role: "Graphic Design",
      image: "/rillen.jpg",
      social: {
        twitter: "https://x.com/RillenFi"
      }
    }
  ]
},
{
      name: "Research",
  members: [
    {
      name: "Flyer",
      role: "Tokenomics",
      image: "/flyer.jpg",
      social: {
        twitter: "https://x.com/0x_Flyer"
      }
    },
    {
      name: "Leet",
      role: "Market/protocol Analysis",
      image: "/leet.jpg",
      social: {
        twitter: "https://x.com/leesc_"
      }
    },
    {
      name: "Alemalta",
      role: "Blockchain Researcher",
      image: "alemalta.jpg",
      social: {
        twitter: "https://x.com/alemaltabtc"
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

  const SocialLinks = ({ social }: { social: Record<string, string> }) => {
    return (
      <div className="flex justify-center space-x-2">
        {social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-neutral-100 hover:bg-accent-purple hover:text-white transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
        )}
        {social.youtube && (
          <a
            href={social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-neutral-100 hover:bg-accent-purple hover:text-white transition-colors"
          >
            <Youtube className="w-4 h-4" />
          </a>
        )}
        {social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-neutral-100 hover:bg-accent-purple hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    );
  };

  return (
    <section className="py-24 bg-neutral-800">
      <div className="container-padding">
        <div className="text-center mb-16">
          <span className="bg-accent-purple/10 text-accent-purple px-4 py-1.5 rounded-full text-sm font-medium">
            MEMBROS
          </span>
          <h2 className="heading-lg mt-6 text-neutral-100">Core members da DAO</h2>
          <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
            Conheça os membros proeminentes de nossa comunidade descentralizada.
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
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full flex flex-col items-center justify-center px-1">
                          <p className="text-white text-xs font-medium text-center">{member.name}</p>
                          <p className="text-neutral-300 text-xs text-center leading-tight">{member.role}</p>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto p-2">
                      <SocialLinks social={member.social} />
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
