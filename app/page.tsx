import Image from "next/image";

const COLORS = {
  navy: "#142459",
  teal: "#16C4C4",
  body: "#475569",
  light: "#F8FBFB",
};

const teachers = [
  {
    name: "Sucherita Kommaraju",
    city: "Hyderabad",
    subjects: "Science, Chemistry, Biology",
    experience: "10+ years",
  },
  {
    name: "Rituparna Sarkar",
    city: "Hyderabad",
    subjects: "Biology",
    experience: "2 - 5 years",
  },
  {
    name: "Mytreyi Sadhu",
    city: "Bangalore",
    subjects: "Mathematics, Physics",
    experience: "0 - 1 years",
  },
  {
    name: "Bhavna Bhavnani",
    city: "Dehradun",
    subjects: "Senior Secondary",
    experience: "10+ years",
  },
  {
    name: "Shuchi Nagar",
    city: "Vadodara",
    subjects: "English",
    experience: "10+ years",
  },
  {
    name: "Nidhi",
    city: "Bangalore",
    subjects: "Kindergarten",
    experience: "0 - 1 years",
  },
];

export default function ProTemLandingPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* NAVBAR */}

      <header className="border-b border-slate-100 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}

          <div className="flex items-center gap-5">

            <Image
              src="/logo.png"
              alt="ProTem Logo"
              width={110}
              height={110}
              className="w-auto h-24"
            />

            <div>
              <h1
                className="text-5xl font-black leading-none"
                style={{ color: COLORS.navy }}
              >
                Pro<span style={{ color: COLORS.teal }}>Tem</span>
              </h1>

              <p
                className="text-base mt-1 tracking-wide"
                style={{ color: COLORS.body }}
              >
                Temporary Professionals for Schools
              </p>
            </div>
          </div>

          {/* NAVIGATION */}

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">

            <a href="#schools" style={{ color: COLORS.navy }}>
              For Schools
            </a>

            <a href="#professionals" style={{ color: COLORS.navy }}>
              For Professionals
            </a>

            <a href="#educators" style={{ color: COLORS.navy }}>
              Available Educators
            </a>

            <a href="#about" style={{ color: COLORS.navy }}>
              About
            </a>

            <a href="#contact" style={{ color: COLORS.navy }}>
              Contact
            </a>

          </nav>
        </div>
      </header>

      {/* HERO */}

      <section
        id="schools"
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <div
              className="inline-flex items-center rounded-full px-6 py-3 border text-sm font-semibold"
              style={{
                borderColor: "#C7F3F3",
                backgroundColor: "#F4FEFE",
                color: COLORS.teal,
              }}
            >
              Empowering Educators • Supporting Schools
            </div>

            <h2
              className="mt-10 text-4xl md:text-5xl leading-[1.15] font-black"
              style={{ color: COLORS.navy }}
            >
              Flexible Teaching.
              <br />
              <span style={{ color: COLORS.teal }}>
                Meaningful Impact.
              </span>
            </h2>

            <p
              className="mt-8 text-xl leading-9 max-w-xl"
              style={{ color: COLORS.body }}
            >
              ProTem connects schools with trusted temporary teaching professionals, ensuring uninterrupted learning and flexible opportunities for educators.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="https://forms.gle/P5ySj7avRMURsLNp7"
                target="_blank"
                className="px-8 py-4 rounded-2xl text-white font-semibold"
                style={{
                  backgroundColor: COLORS.navy,
                }}
              >
                Join as a Professional
              </a>

              <a
                href="https://forms.gle/WUuKWnedKusQMPKv8"
                target="_blank"
                className="px-8 py-4 rounded-2xl border font-semibold"
                style={{
                  borderColor: COLORS.teal,
                  color: COLORS.teal,
                }}
              >
                Partner with ProTem
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}

          <div className="bg-white rounded-[40px] shadow-xl p-10 border border-slate-100">

            <div className="grid grid-cols-2 gap-10">

              <div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    backgroundColor: "#EAFDFC",
                  }}
                >
                  🏫
                </div>

                <h3
                  className="mt-6 text-3xl font-bold"
                  style={{ color: COLORS.navy }}
                >
                  For Schools
                </h3>

                <p
                  className="mt-4 leading-8"
                  style={{ color: COLORS.body }}
                >
                  Find reliable substitute teachers quickly and maintain seamless learning continuity.
                </p>
              </div>

              <div id="professionals">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                  style={{
                    backgroundColor: "#EAFDFC",
                  }}
                >
                  👩‍🏫
                </div>

                <h3
                  className="mt-6 text-3xl font-bold"
                  style={{ color: COLORS.navy }}
                >
                  For Professionals
                </h3>

                <p
                  className="mt-4 leading-8"
                  style={{ color: COLORS.body }}
                >
                  Choose flexible teaching opportunities and grow your experience.
                </p>
              </div>
            </div>

            <div
              className="mt-12 rounded-[32px] p-10 text-white"
              style={{
                background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.teal})`,
              }}
            >
              <h3 className="text-4xl font-bold leading-tight">
                A Win-Win for Better Education
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-100">
                Connecting schools with passionate professionals for stronger classrooms every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATORS */}

      <section
        id="educators"
        className="py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h2
              className="text-5xl font-black"
              style={{ color: COLORS.navy }}
            >
              Available{" "}
              <span style={{ color: COLORS.teal }}>
                Educators
              </span>
            </h2>

            <p
              className="mt-6 text-xl"
              style={{ color: COLORS.body }}
            >
              Browse qualified teaching professionals currently registered with ProTem.
            </p>
          </div>

          {/* GRID */}

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {teachers.map((teacher, index) => (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
              >

                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
                  style={{
                    backgroundColor: "#EAFDFC",
                  }}
                >
                  👩‍🏫
                </div>

                <h3
                  className="mt-6 text-2xl font-bold"
                  style={{ color: COLORS.navy }}
                >
                  {teacher.name}
                </h3>

                <p
                  className="mt-3"
                  style={{ color: COLORS.body }}
                >
                  📍 {teacher.city}
                </p>

                <p
                  className="mt-3 leading-7"
                  style={{ color: COLORS.body }}
                >
                  {teacher.subjects}
                </p>

                <p
                  className="mt-3 font-medium"
                  style={{ color: COLORS.teal }}
                >
                  {teacher.experience}
                </p>

                <a
                  href="https://forms.gle/NM7FGaVj4ZwL2yZY6"
                  target="_blank"
                  className="mt-8 inline-block w-full text-center px-6 py-4 rounded-2xl text-white font-semibold"
                  style={{
                    backgroundColor: COLORS.navy,
                  }}
                >
                  Request Substitute
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="py-24"
        style={{ backgroundColor: COLORS.light }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2
            className="text-5xl font-black"
            style={{ color: COLORS.navy }}
          >
            About{" "}
            <span style={{ color: COLORS.teal }}>
              ProTem
            </span>
          </h2>

          <p
            className="mt-10 text-xl leading-10"
            style={{ color: COLORS.body }}
          >
            ProTem connects passionate educators with schools looking for trusted teaching professionals. Whether you’re a full-time teacher, returning after a break, a subject expert or someone exploring flexible teaching opportunities, ProTem helps educators continue their journey with flexibility and purpose.
          </p>
        </div>
      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="py-24"
        style={{
          background: `linear-gradient(135deg, ${COLORS.navy}, #08173F)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-white">

          <div>
            <h3 className="text-3xl font-bold">
              Get in Touch
            </h3>

            <div className="mt-8 space-y-5 text-lg">

              <p>📞 +91 9949775100</p>

              <p>✉️ contact@protem.co.in</p>

              <p>🌐 protem.co.in</p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold">
              Connect With Us
            </h3>

            <div className="mt-8 space-y-5 text-lg">

              <p>Facebook: ProTem - Substitute Teacher Platform</p>

              <p>Instagram: ProTem - Substitute Teacher Platform</p>
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-black leading-tight">
              Inspiring Students.
              <br />
              Empowering Educators.
              <br />
              Building Better Schools.
            </h3>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="py-8 text-center text-sm">
        <p style={{ color: COLORS.body }}>
          © 2026 ProTem. All rights reserved.
        </p>
      </footer>

    </main>
  );
}