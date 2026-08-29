import {
  Home,
  User,
  Users,
  StickyNotes,
  BriefcaseBusiness,
  MessageCircleQuestionMark,
} from "lucide-react";

export const SideBarLinks = [
  {
    logo: Home,
    label: "Home",
    route: "/",
  },
  {
    logo: Users,
    label: "Community",
    route: "/community",
  },
  {
    logo: StickyNotes,
    label: "Collections",
    route: "/collection",
  },
  {
    logo: BriefcaseBusiness,
    label: "Find-Jobs",
    route: "/jobs",
  },
  {
    logo: BriefcaseBusiness,
    label: "Tags",
    route: "/tags",
  },
  {
    logo: User,
    label: "Profile",
    route: "/profile",
  },
  {
    logo: MessageCircleQuestionMark,
    label: "Ask a question",
    route: "/ask-question",
  },
];
