import { BiBuildings } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscFeedback,
} from "react-icons/vsc";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

export const links = [
  { link: "#tournaments", text: "tournaments", icon: <BiBuildings /> },
  { link: "#winners", text: "Winners", icon: <GiTrophyCup /> },
  { link: "#feedbacks", text: "Feedback", icon: <VscFeedback /> },
  {
    link: "#contact",
    text: "Contact",
    icon: <MdOutlineConnectWithoutContact />,
  },
];

export const bgmiData = [
  {
    title: "BGMI Showdown",
    image: "https://www.insidesport.in/wp-content/uploads/2023/05/BA.jpg",
    mode: "Squad",
    time: "30:45",
    prize: "₹5,000",
    tags: ["Online", "Squad"],
    link: "#",
  },
  {
    title: "BGMI Showdown",
    image: "https://www.insidesport.in/wp-content/uploads/2023/05/BA.jpg",
    mode: "Duo",
    time: "30:45",
    prize: "₹3,000",
    tags: ["Online", "Squad"],
    link: "#",
  },
  {
    title: "BGMI Showdown",
    image: "https://www.insidesport.in/wp-content/uploads/2023/05/BA.jpg",
    mode: "Solo",
    time: "30:45",
    prize: "₹1,000",
    tags: ["Online", "Squad"],
    link: "#",
  },
];

export const ValorantData = [
  {
    title: "Valorant Duel",
    image:
      "https://th.bing.com/th/id/OIP.AcClyug3vhA7Nm5R-nVe3gHaEK?w=1200&h=675&rs=1&pid=ImgDetMain",
    mode: "5 vs 5",
    date: "May 22, 2025",
    prize: "₹5,000",
    tags: ["TPP", "FPP"],
    link: "#",
  },
  {
    title: "Valorant Duel",
    image:
      "https://th.bing.com/th/id/OIP.AcClyug3vhA7Nm5R-nVe3gHaEK?w=1200&h=675&rs=1&pid=ImgDetMain",
    mode: "Duo",
    date: "May 22, 2025",
    prize: "₹3,000",
    tags: ["TPP", "FPP"],
    link: "#",
  },
  {
    title: "Valorant Duel",
    image:
      "https://th.bing.com/th/id/OIP.AcClyug3vhA7Nm5R-nVe3gHaEK?w=1200&h=675&rs=1&pid=ImgDetMain",
    mode: "Solo",
    date: "May 22, 2025",
    prize: "₹1,000",
    tags: ["TPP", "FPP"],
    link: "#",
  },
];

export const CodData = [
  {
    title: "Call of Duty: Mobile Warzone",
    image:
      "https://th.bing.com/th/id/OIP.3xRzsrrHdcimbOprP0yZ4QHaDR?pid=ImgDet&w=199&h=87&c=7&dpr=1.3",
    mode: "5 vs 5",
    date: "May 28, 2025",
    prize: "₹5,000",
    tags: ["TPP", "FPP"],
    link: "#",
  },
  {
    title: "Call of Duty: Mobile Warzone",
    image:
      "https://th.bing.com/th/id/OIP.3xRzsrrHdcimbOprP0yZ4QHaDR?pid=ImgDet&w=199&h=87&c=7&dpr=1.3",
    mode: "Duo",
    date: "May 28, 2025",
    prize: "₹3,000",
    tags: ["TPP", "FPP"],
    link: "#",
  },
  {
    title: "Call of Duty: Mobile Warzone",
    image:
      "https://th.bing.com/th/id/OIP.3xRzsrrHdcimbOprP0yZ4QHaDR?pid=ImgDet&w=199&h=87&c=7&dpr=1.3",
    mode: "Solo",
    date: "May 28, 2025",
    prize: "₹1,000",
    tags: ["TPP", "FPP"],
    link: "#",
  },
];

export const winners = [
  {
    id: 1,
    name: "Team Hydra",
    game: "BGMI",
    image: "http://tse3.mm.bing.net/th?id=OIP.ELDxiJYCJPodCP1qoO2qVgHaEo",
    caption: "BGMI Masters 2025 Champion",
    overlay: <span className="text-sm font-bold">🥇 1st Place</span>,
    totalKills: 72,
    mvp: "AlphaX",
    prize: "₹5,000",
    lineup: ["AlphaX", "Blaze", "Nova", "Rogue"],
    bg: "bg-yellow-900",
  },

  {
    id: 2,
    name: "GodLike Esports",
    game: "Call of Duty",
    image: "http://tse3.mm.bing.net/th?id=OIP.ELDxiJYCJPodCP1qoO2qVgHaEo",
    caption: "COD Mobile Showdown Winner",
    overlay: <span className="text-sm font-bold">🥈 2nd Place</span>,
    totalKills: 59,
    mvp: "Ranger",
    prize: "₹3,000",
    lineup: ["Ranger", "ClutchGod", "Zeno", "Virus"],
    bg: "bg-purple-900",
  },
  {
    id: 3,
    name: "Team Mogo",
    game: "Valorant",
    image: "http://tse3.mm.bing.net/th?id=OIP.ELDxiJYCJPodCP1qoO2qVgHaEo",
    caption: "Valorant VCT 2025 Finalist",
    overlay: <span className="text-sm font-bold">🥉 3rd Place</span>,
    totalKills: 66,
    mvp: "Kraze",
    prize: "₹1,000",
    lineup: ["Kraze", "Z1r0", "Ghost", "Viper", "Revolt"],
    bg: "bg-pink-900",
  },
];

export const footers = [
  { icon: <VscHome size={18} />, label: "Home", onClick: () => alert("Home!") },
  {
    icon: <VscArchive size={18} />,
    label: "Archive",
    onClick: () => alert("Archive!"),
  },
  {
    icon: <VscAccount size={18} />,
    label: "Profile",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <VscSettingsGear size={18} />,
    label: "Settings",
    onClick: () => alert("Settings!"),
  },
];

export const explore = [
  {
    id: 1,
    color: "bg-green-300",
    label: "BGMI",
    url: "https://res.cloudinary.com/dog7mdcfa/video/upload/v1747834200/bgmi.mp4",
    matches: [
      {
        id: 1,
        title: "BGMI Showdown",
        image: "https://www.insidesport.in/wp-content/uploads/2023/05/BA.jpg",
        mode: "Squad",
        time: "30:45",
        prize: "₹5,000",
        tags: ["Online", "Squad"],
        link: "#",
      },
      {
        id: 2,
        title: "BGMI Showdown",
        image: "https://www.insidesport.in/wp-content/uploads/2023/05/BA.jpg",
        mode: "Duo",
        time: "30:45",
        prize: "₹3,000",
        tags: ["Online", "Squad"],
        link: "#",
      },
      {
        id: 3,
        title: "BGMI Showdown",
        image: "https://www.insidesport.in/wp-content/uploads/2023/05/BA.jpg",
        mode: "Solo",
        time: "30:45",
        prize: "₹1,000",
        tags: ["Online", "Squad"],
        link: "#",
      },
    ],
  },
  {
    id: 2,
    color: "bg-red-300",
    label: "VALORANT",
    url: "https://res.cloudinary.com/dog7mdcfa/video/upload/v1747834477/c41jk6mt3wpulgpcnawb.mp4",
    matches: [
      {
        id: 1,
        title: "Valorant Duel",
        image:
          "https://th.bing.com/th/id/OIP.AcClyug3vhA7Nm5R-nVe3gHaEK?w=1200&h=675&rs=1&pid=ImgDetMain",
        mode: "5 vs 5",
        date: "May 22, 2025",
        prize: "₹5,000",
        tags: ["TPP", "FPP"],
        link: "#",
      },
      {
        id: 2,
        title: "Valorant Duel",
        image:
          "https://th.bing.com/th/id/OIP.AcClyug3vhA7Nm5R-nVe3gHaEK?w=1200&h=675&rs=1&pid=ImgDetMain",
        mode: "Duo",
        date: "May 22, 2025",
        prize: "₹3,000",
        tags: ["TPP", "FPP"],
        link: "#",
      },
      {
        id: 3,
        title: "Valorant Duel",
        image:
          "https://th.bing.com/th/id/OIP.AcClyug3vhA7Nm5R-nVe3gHaEK?w=1200&h=675&rs=1&pid=ImgDetMain",
        mode: "Solo",
        date: "May 22, 2025",
        prize: "₹1,000",
        tags: ["TPP", "FPP"],
        link: "#",
      },
    ],
  },
  {
    id: 3,
    color: "bg-purple-300",
    label: "APEX LEGENDS",
    url: "https://res.cloudinary.com/dog7mdcfa/video/upload/v1747834629/r8rtbceitfvwqk1ktns2.mp4",
    matches: [
      {
        id: 1,
        title: "Call of Duty: Mobile Warzone",
        image:
          "https://th.bing.com/th/id/OIP.3xRzsrrHdcimbOprP0yZ4QHaDR?pid=ImgDet&w=199&h=87&c=7&dpr=1.3",
        mode: "5 vs 5",
        date: "May 28, 2025",
        prize: "₹5,000",
        tags: ["TPP", "FPP"],
        link: "#",
      },
      {
        id: 2,
        title: "Call of Duty: Mobile Warzone",
        image:
          "https://th.bing.com/th/id/OIP.3xRzsrrHdcimbOprP0yZ4QHaDR?pid=ImgDet&w=199&h=87&c=7&dpr=1.3",
        mode: "Duo",
        date: "May 28, 2025",
        prize: "₹3,000",
        tags: ["TPP", "FPP"],
        link: "#",
      },
      {
        id: 3,
        title: "Call of Duty: Mobile Warzone",
        image:
          "https://th.bing.com/th/id/OIP.3xRzsrrHdcimbOprP0yZ4QHaDR?pid=ImgDet&w=199&h=87&c=7&dpr=1.3",
        mode: "Solo",
        date: "May 28, 2025",
        prize: "₹1,000",
        tags: ["TPP", "FPP"],
        link: "#",
      },
    ],
  },
];

export const trophy = [
  {
    bgmi: [
      {
        id: 1,
        title: "BGMI Rising 2023",
        imgSrc:
          "https://th.bing.com/th/id/OIP.ymu0kxEIMj4kxkcWrR8--gHaJL?cb=iwp2&pid=ImgDet&w=199&h=245&c=7&dpr=1.3",
        color: "",
      },
      {
        id: 2,
        title: "BGMI Masters Series",
        imgSrc:
          "https://th.bing.com/th/id/OIP.0-XMwYvZedGCwxXuTvPrVwHaEK?cb=iwp2&pid=ImgDet&w=199&h=112&c=7&dpr=1.3",
        color: "",
      },
      {
        id: 3,
        title: "BGMI India Pro Series Season 1",
        imgSrc: "https://i.ytimg.com/vi/t4t64GjmQII/maxresdefault.jpg",
        color: "",
      },
    ],
    fortnite: [
      {
        id: 1,
        title: "Fortnite Champion Series (FNCS)",
        imgSrc:
          "https://th.bing.com/th/id/OIP.AhbPHXUGJOfjtSDTqF-T5QHaE8?w=269&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
        color: "",
      },
      {
        id: 2,
        title: "Fortnite World Cup",
        imgSrc:
          "https://th.bing.com/th/id/OIP.a5STnb-H5jbq1Fsk7qWeFgHaE8?w=266&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
        color: "",
      },
      {
        id: 3,
        title: "DreamHack Online Open",
        imgSrc:
          "https://th.bing.com/th/id/OIP.GIG0oXPvUuQi_HCVV9R8fQHaJQ?w=139&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3",
        color: "",
      },
    ],
    apex: [
      {
        id: 1,
        title: "ALGS Championship",
        imgSrc:
          "https://www.volpinprops.com/wp-content/uploads/2023/04/1345EAG-ALGS-Champ-Trophy-22.jpg",
        color: "",
      },
      {
        id: 2,
        title: "Twitch Rivals: Apex Legends Showdown",
        imgSrc:
          "https://th.bing.com/th/id/OIP.gxwxUxnBqyT72sg7_0H_zAHaE8?cb=iwp2&pid=ImgDet&w=199&h=132&c=7&dpr=1.3",
        color: "",
      },
      {
        id: 3,
        title: "ALGS Split 1 Playoffs",
        imgSrc:
          "https://th.bing.com/th/id/OIP.sxJ6PhA-iSffKtQk58obhAHaE8?cb=iwp2&pid=ImgDet&w=199&h=132&c=7&dpr=1.3",
        color: "",
      },
    ],
  },
];
