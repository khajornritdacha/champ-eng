import { FaPeopleGroup, FaRegCompass, FaRegHeart } from "react-icons/fa6";

export const menteeQualities = [
  "กำลังค้นหาตัวเอง",
  "พร้อมเรียนรู้และเปิดรับมุมมองที่หลากหลาย",
  "อยากได้รับคำแนะนำจาก Mentor",
  "อยากรู้จักตัวเองมากขึ้น",
  "ยังไม่รู้ว่าตัวเองชอบอะไร",
  "พร้อมก้าวออกจาก Comfort Zone",
  "เชื่อว่าทุกการเรียนรู้คือโอกาสในการเติบโต",
  "อยากเป็นส่วนหนึ่งของ Community ที่พร้อมเติบโตไปด้วยกัน",
];

export const menteeVisionValues = [
  { icon: FaRegCompass, label: "Self" },
  { icon: FaRegHeart, label: "Mentorship" },
  { icon: FaPeopleGroup, label: "Community" },
];

export const pastCohortMoments = [
  {
    id: "orientation",
    order: "01",
    title: "Mentor Orientation",
    primaryImage: "/moments/mentor-orientation-1.png",
    secondaryImage: "/moments/mentor-orientation-2.png",
  },
  {
    id: "workshop",
    order: "02",
    title: "Strength Finder Workshop",
    primaryImage: "/moments/strength-finder-1.png",
    secondaryImage: "/moments/strength-finder-2.png",
  },
];

export const frequentlyAskedQuestions = [
  {
    question: "สมัคร ChAMP ENG และ ChAMP Chula พร้อมกันได้ไหม?",
    answer:
      "สมัครได้ และถ้าได้รับคัดเลือกเข้าทั้ง 2 โครงการ น้องสามารถตัดสินใจเลือกเข้าร่วมโครงการที่สนใจได้ในภายหลัง",
  },
  {
    question: "คนที่สมัครเข้าโครงการต้องเป็นเด็กกิจกรรมเท่านั้นไหม?",
    answer:
      "ทุกคนสามารถเข้าโครงการได้ ขอเเค่ตั้งใจที่จะสมัครเข้าร่วมกิจกรรมเพื่อประโยชน์สูงสุดของน้อง ๆ เอง",
  },
  {
    question: "คนที่รู้แล้วว่างานที่อยากทำคืออะไร ควรเข้าโครงการไหน?",
    answer:
      "พี่ ๆ ในโครงการสามารถให้คำแนะนำเพิ่มเติมเกี่ยวกับแต่ละสายงาน หรือหากในอนาคตมีเรื่องที่อยากปรึกษา สามารถพูดคุยกับพี่ ๆ ได้เลย",
  },
  {
    question: "คนที่ยังไม่รู้ว่าตัวเองชอบอะไร ควรเข้าโครงการไหม?",
    answer:
      "กรอกใบสมัครได้เลย โครงการนี้เป็นพื้นที่ให้ได้เรียนรู้ ทดลอง และค้นหาตัวเองไปพร้อมกัน เพราะบางครั้งการลงมือทำคือจุดเริ่มต้นของการค้นพบสิ่งที่ตัวเองชอบ",
  },
];
