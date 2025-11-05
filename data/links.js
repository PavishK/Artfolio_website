import {
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
} from 'lucide-react';

export const socials = [
  { icon:<InstagramIcon size={26}/>, link:''},
  { icon:<YoutubeIcon size={26}/>, link:''},
  { icon:<FacebookIcon size={26}/>, link:''},
]

export const footerLinks = [
  {
    name: "Sitemap",
    links: [
      { name: "Home", link: "/artwork/home" },
      { name: "About", link: "/artwork/about" },
      { name: "Contact", link: "https://www.youtube.com/" },
    ],
  },
  {
    name: "Socials",
    links: [
      { name: "Instagram", link: "https://www.instagram.com/artbyparthi/" },
      { name: "YouTube", link: "https://www.youtube.com/@arts3805" },
      { name: "Facebook", link: "" },
    ],
  },
];
