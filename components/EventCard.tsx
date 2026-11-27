"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link
      href={"/events/" + slug}
      id="event-card"
      onClick={() => posthog.capture("event_selected", { event_slug: slug })}
    >
      <Image
        src={image ?? "/images/event-full.png"}
        alt={title}
        width={410}
        height={300}
        className="poster w-auto h-auto"
      />
      <div className="flex flex-row gap-2">
        <Image
          src="/icons/pin.svg"
          alt="Location Icon"
          width={14}
          height={14}
          className="w-auto h-auto"
        />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>
      <div className="datetime">
        <div>
          <Image
            src="/icons/calendar.svg"
            alt="Calendar Icon"
            width={14}
            height={14}
            className="w-auto h-auto"
          />
          <span>{date}</span>
        </div>
        <div>
          <Image
            src="/icons/clock.svg"
            alt="Clock Icon"
            width={14}
            height={14}
            className="w-auto h-auto"
          />
          <span>{time}</span>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
