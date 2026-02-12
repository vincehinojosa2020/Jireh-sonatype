import { MessageCircle, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const SocialConnect = () => {
  const channels = [
    {
      id: "text",
      name: "Text Now",
      icon: MessageCircle,
      href: "sms:2109809174",
      color: "bg-[#F5A623]",
      hoverColor: "hover:bg-[#e09620]",
      primary: true
    },
    {
      id: "call",
      name: "Call",
      icon: Phone,
      href: "tel:2109809174",
      color: "bg-[#0A4F60]",
      hoverColor: "hover:bg-[#0d6377]"
    },
    {
      id: "facebook",
      name: "Facebook",
      icon: Facebook,
      href: "https://m.me/jirehRandC",
      color: "bg-[#1877F2]",
      hoverColor: "hover:bg-[#1565c0]"
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      href: "https://ig.me/m/jirehrac",
      color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]",
      hoverColor: "hover:opacity-90"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/erik-camacho-9314a3381/",
      color: "bg-[#0A66C2]",
      hoverColor: "hover:bg-[#084d8f]"
    }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {channels.map((channel) => (
        <a
          key={channel.id}
          href={channel.href}
          target={channel.href.startsWith("http") ? "_blank" : undefined}
          rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
          data-testid={`connect-${channel.id}`}
          className={`flex items-center gap-2 ${channel.color} ${channel.hoverColor} text-white px-4 py-3 rounded-xl font-semibold transition-all hover:-translate-y-0.5 shadow-lg ${channel.primary ? "px-6" : ""}`}
        >
          <channel.icon className="w-5 h-5" />
          <span className={channel.primary ? "" : "hidden sm:inline"}>{channel.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialConnect;
