/* ==========================================================
   D & S WEDDING INVITATION — EASY EDIT FILE
   Change the values inside WEDDING to personalize the site.
   ========================================================== */

const WEDDING = {
  bride: {
    name: "Dr. Salivendra Deevena",
    parents: "D/o Dr. Kishore Kumar and Mrs. Emily",
    initial: "D"
  },
  groom: {
    name: "Dr. Manukonda Sasi Preetham",
    parents: "S/o Mr. M.V.V. Satyanarayana and Mrs. Santha Kumari",
    initial: "S"
  },

  verse: {
    text: "The steadfast love of the Lord never ceases.",
    reference: "Lamentations 3:22"
  },

  // Countdown uses your local time zone. The wedding is at 10:00 AM.
  dateTime: "2026-11-23T10:00:00+05:30",

  display: {
    date: "November 23, 2026",
    time: "10:00 AM"
  },

  venue: {
    name: "Adabala Gardens",
    address: "Saibaba Temple Rd, Palakollu, Andhra Pradesh 534260",
    mapsUrl: "https://maps.app.goo.gl/LtFcmX7WESMcbg2h9"
  }
};

// ---------- Put the information onto the page ----------
document.getElementById("verseText").textContent = WEDDING.verse.text;
document.getElementById("verseRef").textContent = "— " + WEDDING.verse.reference;

document.getElementById("brideName").textContent = WEDDING.bride.name;
document.getElementById("groomName").textContent = WEDDING.groom.name;
document.getElementById("brideName2").textContent = WEDDING.bride.name;
document.getElementById("groomName2").textContent = WEDDING.groom.name;
document.getElementById("brideParents").textContent = WEDDING.bride.parents;
document.getElementById("groomParents").textContent = WEDDING.groom.parents;

document.getElementById("heroDate").textContent =
  WEDDING.display.date + " · " + WEDDING.display.time;
document.getElementById("weddingDateText").textContent = WEDDING.display.date;
document.getElementById("weddingTimeText").textContent = WEDDING.display.time;
document.getElementById("venueText").textContent = WEDDING.venue.name;
document.getElementById("addressText").textContent = WEDDING.venue.address;
document.getElementById("footerDate").textContent = WEDDING.display.date;
document.getElementById("mapsButton").href = WEDDING.venue.mapsUrl;
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Countdown ----------
const target = new Date(WEDDING.dateTime).getTime();

function updateCountdown() {
  const now = Date.now();
  const difference = target - now;

  if (difference <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });
    document.querySelector(".countdown-section h2").textContent = "Today is the day!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ---------- Add to Calendar (.ics) ----------
document.getElementById("calendarButton").addEventListener("click", () => {
  const start = new Date(WEDDING.dateTime);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);

  const formatICS = (date) =>
    date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

  const title = `Wedding of ${WEDDING.bride.name} & ${WEDDING.groom.name}`;
  const location = `${WEDDING.venue.name}, ${WEDDING.venue.address}`;
  const description =
    `Wedding invitation for ${WEDDING.bride.name} & ${WEDDING.groom.name}.`;

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//D and S Wedding Invitation//EN",
    "BEGIN:VEVENT",
    `DTSTART:${formatICS(start)}`,
    `DTEND:${formatICS(end)}`,
    `SUMMARY:${title}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${description}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "D-and-S-Wedding.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
});
