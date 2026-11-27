export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string; // e.g., "2023-09-15"
  time: string; // e.g., "10:00 AM - 6:00 PM"
};

export const EVENTS: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "Hackathon 2023",
    slug: "hackathon-2023",
    location: "New York, NY",
    date: "2023-09-15",
    time: "10:00 AM - 6:00 PM",
  },
  {
    title: "Tech Meetup",
    image: "/images/event2.png",
    slug: "tech-meetup",
    location: "San Francisco, CA",
    date: "2023-10-20",
    time: "6:00 PM - 9:00 PM",
  },
  {
    title: "Developer Conference",
    image: "/images/event3.png",
    slug: "developer-conference",
    location: "Los Angeles, CA",
    date: "2023-11-05",
    time: "9:00 AM - 5:00 PM",
  },
  {
    title: "Default Event",
    image: "/images/event4.png",
    slug: "default-event",
    location: "Chicago, IL",
    date: "2023-11-20",
    time: "2:00 PM - 8:00 PM",
  },
  {
    title: "Another Event",
    image: "/images/event5.png",
    slug: "another-event",
    location: "Boston, MA",
    date: "2023-12-01",
    time: "1:00 PM - 5:00 PM",
  },
  {
    title: "Yet Another Event",
    image: "/images/event6.png",
    slug: "yet-another-event",
    location: "Seattle, WA",
    date: "2023-12-15",
    time: "10:00 AM - 4:00 PM",
  },
];
