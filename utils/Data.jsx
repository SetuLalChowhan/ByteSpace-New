import s1 from "@/assets/courses/s1.png";
import s2 from "@/assets/courses/s2.png";
import s3 from "@/assets/courses/s3.png";
import s4 from "@/assets/courses/s4.png";
import s5 from "@/assets/courses/s5.png";
import s6 from "@/assets/courses/s6.png";

import m1 from "@/assets/courses/m1.png";
import m2 from "@/assets/courses/m2.png";
import m3 from "@/assets/courses/m3.png";
import m4 from "@/assets/courses/m4.png";

import review1 from "@/assets/review/review1.png";
import review2 from "@/assets/review/review2.png";
import review3 from "@/assets/review/review3.png";

import {
  DesignSvg,
  DevelopmentSvg,
  LaptopSvg,
  BusinessSvg,
  MarketingSvg,
  PhotographySvg,
} from "@/components/common/CustomSvg";

export const memberImages = [m1, m2, m3, m4];

export const coursesData = [
  {
    id: 1,
    image: s1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    tags: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
    members: [m1, m2, m3, m4],
    memberCount: "26+",
    price: "$25",
    billingPeriod: "/lifetime",
  },
  {
    id: 2,
    image: s2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    tags: ["14 Lessons", "1 hour 45 mins", "42 Comments"],
    members: [m1, m2, m3, m4],
    memberCount: "26+",
    price: "$25",
    billingPeriod: "/lifetime",
  },
  {
    id: 3,
    image: s3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    tags: ["22 Lessons", "3 hours 10 mins", "85 Comments"],
    members: [m1, m2, m3, m4],
    memberCount: "26+",
    price: "$25",
    billingPeriod: "/lifetime",
  },
  {
    id: 4,
    image: s4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    tags: ["16 Lessons", "2 hours 30 mins", "38 Comments"],
    members: [m1, m2, m3, m4],
    memberCount: "26+",
    price: "$25",
    billingPeriod: "/lifetime",
  },
  {
    id: 5,
    image: s5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    tags: ["18 Lessons", "2 hours 50 mins", "64 Comments"],
    members: [m1, m2, m3, m4],
    memberCount: "26+",
    price: "$25",
    billingPeriod: "/lifetime",
  },
  {
    id: 6,
    image: s6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: "4.5",
    level: "Beginner",
    tags: ["20 Lessons", "3 hours 15 mins", "51 Comments"],
    members: [m1, m2, m3, m4],
    memberCount: "26+",
    price: "$25",
    billingPeriod: "/lifetime",
  },
];

export const exploreCategoriesData = [
  {
    id: 1,
    title: "Design",
    Icon: DesignSvg,
  },
  {
    id: 2,
    title: "Development",
    Icon: DevelopmentSvg,
  },
  {
    id: 3,
    title: "IT & Software",
    Icon: LaptopSvg,
  },
  {
    id: 4,
    title: "Business",
    Icon: BusinessSvg,
  },
  {
    id: 5,
    title: "Marketing",
    Icon: MarketingSvg,
  },
  {
    id: 6,
    title: "Photography",
    Icon: PhotographySvg,
  },
];

export const reviewsData = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: review1,
    review:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: review2,
    review:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: review3,
    review:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export const footerColumns = [
  [
    { name: "Featured Courses", href: "/courses" },
    { name: "Featured Categories", href: "#" },
    { name: "Business", href: "#" },
    { name: "IT", href: "#" },
    { name: "Design", href: "#" },
  ],
  [
    { name: "Development", href: "#" },
    { name: "Marketing", href: "#" },
    { name: "Photography", href: "#" },
    { name: "Finance", href: "#" },
    { name: "Sport", href: "#" },
  ],
  [
    { name: "Become a Creator", href: "/register" },
    { name: "Affiliate Program", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Help", href: "#" },
    { name: "About", href: "#" },
  ],
];

export const footerBottomLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Cookies Settings", href: "#" },
];
