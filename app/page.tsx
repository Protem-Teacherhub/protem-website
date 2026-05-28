import Image from "next/image";

const COLORS = {
  navy: "#142459",
  teal: "#16C4C4",
  body: "#475569",
  light: "#F8FBFB",
};

export default function ProTemLandingPage() {
  return (
    <main className="bg-white min-h-screen">

      {/* NAVBAR */}

      <header className="border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}

          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="ProTem Logo"
              width={70}
              height={70}
              className="w-auto h-16"
            />

            <div>
              <h1
                className="text-4xl font-black leading-none"
                style={{ color: COLORS.navy }}
              >
                Pro<span style={{ color: COLORS.teal }}>Tem</span>
              </h1>

              <p
                className="text-sm mt-1 tracking-wide"
                style={{ color: COLORS.body }}
              >
                Temporary Professionals for Schools
              </p>
            </div>
          </div>

          {/* NAVIGATION */}

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            {[
              "For Schools",
              "For Professionals",
              "Available Educators",
              "About",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="transition hover:opacity-70"
                style={{ color: COLORS.navy }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <div>

            {/* BADGE */}

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

            {/* MAIN HEADING */}

            <h2
              className="mt-10 text-5xl leading-tight font-black"
              style={{ color: COLORS.navy }}
            >
              Flexible Teaching.
              <br />
              <span style={{ color: COLORS.teal }}>
                Meaningful Impact.
              </span>
            </h2>

            {/* SUBTEXT */}

            <p
              className="mt-8 text-xl leading-9 max-w-xl"
              style={{ color: COLORS.body }}
            >
              ProTem connects schools with trusted temporary teaching
              professionals, ensuring uninterrupted learning and flexible
              opportunities for educators.
            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="https://forms.gle/P5ySj7avRMURsLNp7"
                target="_blank"
                className="px-8 py-4 rounded-2xl text-white font-semibold transition"
                style={{
                  backgroundColor: COLORS.navy,
                }}
              >
                Join as a Professional
              </a>

              <a
                href="https://forms.gle/WUuKWnedKusQMPKv8"
                target="_blank"
                className="px-8 py-4 rounded-2xl border font-semibold transition"
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

              <div>
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

            {/* BOTTOM CARD */}

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

    </main>
  );
}