import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TwitterIcon,
} from 'lucide-react';

export const socials = [
    { name: "Instagram", icon: <InstagramIcon size={26} />, link: "https://www.instagram.com/artbyparthi/" },
    { name: "YouTube", icon: <YoutubeIcon size={26} />, link: "https://www.youtube.com/@arts3805" },
    { name: "Facebook", icon: <FacebookIcon size={26} />, link: "" },
    { name: "X", icon: <TwitterIcon size={26} />, link: "" },
]

export const footerLinks = [
  {
    name: "Sitemap",
    links: [
      { name: "Home", link: "/artwork/home" },
      { name: "Gallery", link: "/artwork/gallery" },
      { name: "About", link: "/artwork/about" },
      { name: "Contact", link: "/artwork/contact" },
    ],
  },
  {
    name: "Socials",
    links: [
      { name: "Instagram", link: "https://www.instagram.com/artbyparthi/" },
      { name: "YouTube", link: "https://www.youtube.com/@arts3805" },
      { name: "Facebook", link: "" },
      { name: "X (Twitter)", link: "" },
    ],
  },
];
