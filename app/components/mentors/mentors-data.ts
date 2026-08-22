/**
 * The program year currently running. Mentors whose `mentorYears` include this
 * number are shown under the "This year's mentors" tab.
 */
export const currentProgramYear = 9;

/**
 * Industry tags a mentor can be filtered by. Kept as a const tuple rather than a
 * TypeScript `enum` so the values stay plain strings once they reach an API.
 */
export const mentorIndustries = [
  "tech-and-innovation",
  "manufacturing",
  "engineering",
  "commercial-and-marketing",
  "entrepreneur-and-start-up",
  "food-and-beverage",
  "financial-and-investment",
] as const;

export type MentorIndustry = (typeof mentorIndustries)[number];

export const mentorIndustryLabels: Record<MentorIndustry, string> = {
  "tech-and-innovation": "Tech & Innovation",
  manufacturing: "Manufacturing",
  engineering: "Engineering",
  "commercial-and-marketing": "Commercial & Marketing",
  "entrepreneur-and-start-up": "Entrepreneur & Start Up",
  "food-and-beverage": "Food & Beverage",
  "financial-and-investment": "Financial & Investment",
};

export type Mentor = {
  id: string;
  /** Portrait shown at the top of the card. */
  mentorPictureUrl: string;
  /** Thai nickname, rendered as the card headline (e.g. "พี่เอิร์ธ"). */
  nickname: string;
  fullName: string;
  /** Chula Engineering department abbreviation shown in the pill (e.g. "ICE"). */
  department: string;
  /** Intania cohort number, rendered as "Intania {classYear}". */
  classYear: number;
  position: string;
  /** Optional — plenty of mentors have no usable logo asset. */
  companyLogoUrl?: string;
  companyName: string;
  industries: MentorIndustry[];
  /** Program years this person mentored in, e.g. [7, 9]. */
  mentorYears: number[];
};

const placeholderPicture = "/mentors/mentor-placeholder.svg";
const placeholderLogo = "/mentors/company-placeholder.svg";

/**
 * Placeholder roster. Replace with the real mentor records — the shape is what
 * the page depends on, not the contents.
 */
export const mentors: Mentor[] = [
  {
    id: "mentor-01",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่เอิร์ธ",
    fullName: "Firstname Lastname",
    department: "ICE",
    classYear: 67,
    position: "Position, CEO, CTO, CFO",
    companyLogoUrl: placeholderLogo,
    companyName: "XYZ Company Co., Ltd.",
    industries: ["tech-and-innovation", "entrepreneur-and-start-up"],
    mentorYears: [7, 9],
  },
  {
    id: "mentor-02",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่มิ้นท์",
    fullName: "Firstname Lastname",
    department: "CEDT",
    classYear: 65,
    position: "Head of Product",
    companyLogoUrl: placeholderLogo,
    companyName: "XYZ Company Co., Ltd.",
    industries: ["tech-and-innovation"],
    mentorYears: [9],
  },
  {
    id: "mentor-03",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่ต้น",
    fullName: "Firstname Lastname",
    department: "CIVIL",
    classYear: 61,
    position: "Senior Project Engineer",
    companyName: "XYZ Company Co., Ltd.",
    industries: ["engineering", "manufacturing"],
    mentorYears: [8, 9],
  },
  {
    id: "mentor-04",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่ฟ้า",
    fullName: "Firstname Lastname",
    department: "ISE",
    classYear: 63,
    position: "Investment Associate",
    companyLogoUrl: placeholderLogo,
    companyName: "XYZ Capital Co., Ltd.",
    industries: ["financial-and-investment"],
    mentorYears: [9],
  },
  {
    id: "mentor-05",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่กัน",
    fullName: "Firstname Lastname",
    department: "IE",
    classYear: 60,
    position: "Plant Manager",
    companyName: "XYZ Manufacturing Co., Ltd.",
    industries: ["manufacturing"],
    mentorYears: [6, 7],
  },
  {
    id: "mentor-06",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่แพร",
    fullName: "Firstname Lastname",
    department: "CHEM",
    classYear: 62,
    position: "Brand Marketing Lead",
    companyLogoUrl: placeholderLogo,
    companyName: "XYZ Consumer Co., Ltd.",
    industries: ["commercial-and-marketing", "food-and-beverage"],
    mentorYears: [9],
  },
  {
    id: "mentor-07",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่บอส",
    fullName: "Firstname Lastname",
    department: "EE",
    classYear: 59,
    position: "Co-Founder & CEO",
    companyLogoUrl: placeholderLogo,
    companyName: "XYZ Ventures Co., Ltd.",
    industries: ["entrepreneur-and-start-up", "tech-and-innovation"],
    mentorYears: [5, 8, 9],
  },
  {
    id: "mentor-08",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่นุ่น",
    fullName: "Firstname Lastname",
    department: "ME",
    classYear: 64,
    position: "Supply Chain Analyst",
    companyName: "XYZ Foods Co., Ltd.",
    industries: ["food-and-beverage", "manufacturing"],
    mentorYears: [9],
  },
  {
    id: "mentor-09",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่โอ๊ต",
    fullName: "Firstname Lastname",
    department: "NANO",
    classYear: 58,
    position: "R&D Director",
    companyLogoUrl: placeholderLogo,
    companyName: "XYZ Materials Co., Ltd.",
    industries: ["engineering", "manufacturing"],
    mentorYears: [4, 6],
  },
  {
    id: "mentor-10",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่แนน",
    fullName: "Firstname Lastname",
    department: "SURVEY",
    classYear: 66,
    position: "Strategy Consultant",
    companyName: "XYZ Advisory Co., Ltd.",
    industries: ["commercial-and-marketing", "financial-and-investment"],
    mentorYears: [9],
  },
  {
    id: "mentor-11",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่จ๋า",
    fullName: "Firstname Lastname",
    department: "ENVI",
    classYear: 57,
    position: "Sustainability Manager",
    companyLogoUrl: placeholderLogo,
    companyName: "XYZ Energy Co., Ltd.",
    industries: ["engineering"],
    mentorYears: [7],
  },
  {
    id: "mentor-12",
    mentorPictureUrl: placeholderPicture,
    nickname: "พี่ปอนด์",
    fullName: "Firstname Lastname",
    department: "PETRO",
    classYear: 61,
    position: "Data Science Lead",
    companyName: "XYZ Digital Co., Ltd.",
    industries: ["tech-and-innovation", "financial-and-investment"],
    mentorYears: [8, 9],
  },
];

export function filterMentors(
  allMentors: Mentor[],
  {
    industries,
    programYear,
  }: {
    /** Empty means "no industry filter applied". */
    industries: MentorIndustry[];
    /** `null` shows every mentor, whichever year they served. */
    programYear: number | null;
  },
): Mentor[] {
  return allMentors.filter((mentor) => {
    const matchesYear =
      programYear === null || mentor.mentorYears.includes(programYear);
    const matchesIndustry =
      industries.length === 0 ||
      industries.some((industry) => mentor.industries.includes(industry));

    return matchesYear && matchesIndustry;
  });
}
