import { HomeIcon, ImageIcon, PhoneIcon, UserIcon, BrushIcon } from "lucide-react";

export const clientSites = [
  { name: "Home", link: "/artwork/home", icon: <HomeIcon size={22} /> },
  { name: "Gallery", link: "/artwork/gallery", icon: <ImageIcon size={22} /> },
  { name: "About", link: "/artwork/about", icon: <UserIcon size={22} /> },
  { name: "Contact", link: "/artwork/contact", icon: <PhoneIcon size={22} /> },
];

export const adminSites = [
  {
    name: "Artist",
    link: `/artwork-admin/dashboard/artist`,
    icon: <BrushIcon size={22} />,
  },
  {
    name: "Gallery",
    link: `/artwork-admin/dashboard/gallery`,
    icon: <ImageIcon size={22} />,
  },
];