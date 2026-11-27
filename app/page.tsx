import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { EVENTS } from "@/lib/constants";
import { logHomepageRendered } from "@/lib/posthog-logs";
import { connection } from "next/server";
import { Suspense } from "react";

async function DynamicContent() {
  await connection();

  return "";
}

export default async function Home() {
  await connection();
  logHomepageRendered();

  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups, Conferences, and more. All in one place.
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {EVENTS.map((event) => (
            <li key={event.slug} className="event-card">
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>

      <Suspense fallback={<p>Loading...</p>}>
        <DynamicContent />
      </Suspense>
    </section>
  );
}
