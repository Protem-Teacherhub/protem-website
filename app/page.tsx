// PROTEM WEBSITE
// Modern landing page inspired by your branding and logo colors.
// Recommended fonts: Poppins or Inter
const COLORS = {
  navy: "#142459",
  teal: "#16C4C4",
  body: "#475569",
  light: "#F8FBFB",
};
export default function ProTemLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Navbar */}
      <nav className="w-full border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-5">

  <img
    src="/logo.png"
    alt="ProTem Logo"
    className="w-32 h-32 object-contain"
    
  />
  <div>
  <h1 className="text-6xl font-black leading-none text-[#142459]">
    Pro<span className="text-[#16C4C4]">Tem</span>
  </h1>

  <p className="text-base font-medium mt-1 text-slate-500 tracking-wide">
    Temporary Professionals for Schools
  </p>
</div>

            </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
            <a href="#schools" className="hover:text-teal-500 transition">For Schools</a>
            <a href="#professionals" className="hover:text-teal-500 transition">For Professionals</a>
            <a href="#educators" className="hover:text-teal-600 transition">Available Educators</a>
            <a href="#about" className="hover:text-teal-500 transition">About</a>
            <a href="#contact" className="hover:text-teal-500 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-100">
            Empowering Educators • Supporting Schools
          </div>

          <h2 className="mt-8 text-3xl md:text-4xl font-black leading-[1.05] tracking-tight text-[#142459]">
            Flexible Teaching.
            <span className="block text-[#16C4C4]">Meaningful Impact.</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#475569] max-w-xl">
            ProTem connects schools with trusted temporary teaching professionals,
            ensuring uninterrupted learning and flexible opportunities for educators.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
  href="https://forms.gle/P5ySj7avRMURsLNp7"
  target="_blank"
  rel="noopener noreferrer"
  className="px-7 py-4 rounded-2xl bg-[#142459] text-white font-semibold shadow-lg hover:scale-105 transition inline-block"
>
  Join as a Professional
</a>

            <a
  href="https://forms.gle/WUuKWnedKusQMPKv8"
  target="_blank"
  rel="noopener noreferrer"
  className="px-7 py-4 rounded-2xl border-2 border-teal-500 text-teal-700 font-semibold hover:bg-teal-50 transition inline-block"
>
  Partner with ProTem
</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-900/10 blur-3xl rounded-full"></div>

          <div className="relative bg-white rounded-[32px] shadow-2xl border border-slate-100 p-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-2xl mb-4">
                  🏫
                </div>
                <h3 className="text-xl font-bold text-[#142459] mb-2">For Schools</h3>
                <p className="text-[#475569] text-sm leading-6">
                  Find reliable substitute teachers quickly and maintain seamless learning continuity.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-2xl mb-4">
                  👩‍🏫
                </div>
                <h3 className="text-xl font-bold text-[#142459] mb-2">For Professionals</h3>
                <p className="text-[#475569] text-sm leading-6">
                  Choose flexible teaching opportunities and grow your experience.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-950 to-cyan-600 rounded-3xl p-8 text-white">
              <h3 className="text-3xl font-bold leading-tight">
                A Win-Win for Better Education
              </h3>

              <p className="mt-4 text-cyan-50 leading-7">
                Connecting schools with passionate professionals for stronger classrooms every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section id="schools" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#142459]">
              For <span className="text-[#16C4C4]">Schools</span>
            </h2>
            <p className="mt-5 text-lg text-[#475569] max-w-3xl mx-auto">
              Reliable temporary professionals when you need them most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Fill Teacher Gaps Instantly',
                text: 'Get qualified professionals whenever required.',
                icon: '⚡',
              },
              {
                title: 'Ensure Learning Continuity',
                text: 'Avoid classroom disruptions and maintain consistency.',
                icon: '📘',
              },
              {
                title: 'Flexible & On-Demand',
                text: 'Book teachers for short or long durations.',
                icon: '🗓️',
              },
              {
                title: 'Trusted Professionals',
                text: 'Verified educators with strong communication skills.',
                icon: '✅',
              },
              {
                title: 'Save Time & Resources',
                text: 'We simplify sourcing and coordination for schools.',
                icon: '📈',
              },
              {
                title: 'Dedicated Support',
                text: 'Continuous assistance whenever you need help.',
                icon: '🤝',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#142459] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#475569] leading-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professionals Section */}
      <section id="professionals" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-[#142459] leading-tight">
              Why Professionals Love
              <span className="block text-[#16C4C4]">ProTem</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#475569]">
              Flexible opportunities, meaningful impact, and a growing network of schools.
            </p>

            <div className="mt-10 space-y-5">
              {[
                'Choose when and where you want to teach',
                'Gain experience across schools and grade levels',
                'Earn fairly with transparent opportunities',
                'Become part of a supportive educator community',
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5"
                >
                  <div className="w-8 h-8 rounded-full bg-[#16C4C4] text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <p className="text-slate-700 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-950 to-cyan-600 rounded-[40px] p-12 text-white shadow-2xl">
            <h3 className="text-4xl font-black leading-tight">
              Your skills can open doors.
            </h3>

            <p className="mt-6 text-cyan-50 text-lg leading-8">
              Inspire students, support schools, and grow your teaching journey with ProTem.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              {[
                'Quick Registration',
                'Easy Profile Setup',
                'Flexible Schedule',
                'Meaningful Work',
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur rounded-2xl p-5 border border-white/10"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* Available Educators */}
<section id="educators" className="py-20 bg-white border-y border-slate-200">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-[#142459]">
        Available <span className="text-teal-500">Educators</span>
      </h2>

      <p className="mt-5 text-lg text-[#475569] max-w-3xl mx-auto">
        Browse qualified teaching professionals currently registered with ProTem.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          name: "Sucherita K.",
          subjects: "Science, Chemistry, Biology",
          city: "Hyderabad",
          curriculum: "CBSE, IGCSE, State Board",
          grades: "Grades 6–10",
          experience: "10+ Years",
        },
        {
          name: "Rituparna S.",
          subjects: "Biology",
          city: "Hyderabad",
          curriculum: "CBSE, IGCSE, IB",
          grades: "Grades 6–10",
          experience: "2–5 Years",
        },
        {
          name: "Mytreyi S.",
          subjects: "Mathematics, Physics",
          city: "Bangalore",
          curriculum: "CBSE",
          grades: "Grades 6–10",
          experience: "0–1 Years",
        },
        {
          name: "Bhavna B.",
          subjects: "Senior Secondary",
          city: "Dehradun",
          curriculum: "ICSE, IGCSE, IB",
          grades: "Grades 11–12",
          experience: "10+ Years",
        },
        {
          name: "Shuchi N.",
          subjects: "English",
          city: "Vadodara",
          curriculum: "CBSE",
          grades: "Grades 11–12",
          experience: "10+ Years",
        },
        {
          name: "Nidhi",
          subjects: "Kindergarten",
          city: "Bangalore",
          curriculum: "CBSE",
          grades: "Pre-primary",
          experience: "0–1 Years",
        },
      ].map((teacher, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
        >
          <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center text-4xl mx-auto mb-6">
            👩‍🏫
          </div>

          <h3 className="text-2xl font-bold text-center text-[#142459]">
            {teacher.name}
          </h3>

          <div className="mt-6 space-y-3 text-[#475569] text-sm leading-6">
            <p><span className="font-semibold text-slate-800">Subjects:</span> {teacher.subjects}</p>

            <p><span className="font-semibold text-slate-800">City:</span> {teacher.city}</p>

            <p><span className="font-semibold text-slate-800">Curriculum:</span> {teacher.curriculum}</p>

            <p><span className="font-semibold text-slate-800">Grades:</span> {teacher.grades}</p>

            <p><span className="font-semibold text-slate-800">Experience:</span> {teacher.experience}</p>
          </div>

          <a
            href="https://forms.gle/NM7FGaVj4ZwL2yZY6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block text-center bg-[#142459] text-white font-semibold py-3 rounded-2xl hover:bg-[#16C4C4] transition"
          >
            Request Substitute
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* About */}
      <section id="about" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[#142459]">
            Better Together.
            <span className="block text-[#16C4C4]">Stronger Every Day.</span>
          </h2>

          <p className="mt-8 text-lg text-[#475569] leading-8 max-w-3xl mx-auto">
            ProTem is building a trusted ecosystem where schools and passionate teaching professionals connect seamlessly for better educational outcomes.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[#142459] text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black">Let's Connect</h2>

          <p className="mt-6 text-cyan-100 text-lg">
            We'd love to hear from schools and educators across India.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur border border-white/10">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-cyan-100">+91 9949775100</p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur border border-white/10">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-cyan-100">contact@protem.co.in</p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur border border-white/10">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-2">Website</h3>
              <p className="text-cyan-100">www.protem.co.in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Pro<span className="text-cyan-400">Tem</span>
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Temporary Professionals for Schools
            </p>
          </div>

          <div className="text-sm text-slate-400 text-center md:text-right">
            <p>contact@protem.co.in</p>
            <p>www.protem.co.in</p>
            <p>© 2026 ProTem. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/*
=====================================================
STEP-BY-STEP GUIDE TO LAUNCH YOUR PROTEM WEBSITE
=====================================================

STEP 1 — INSTALL NODE.JS
1. Go to https://nodejs.org
2. Download the LTS version
3. Install it normally

-----------------------------------------------------
STEP 2 — CREATE A NEXT.JS PROJECT
-----------------------------------------------------
Open Terminal or Command Prompt and run:

npx create-next-app@latest protem-website

Select:
✔ TypeScript → No
✔ ESLint → Yes
✔ Tailwind CSS → Yes
✔ App Router → Yes
✔ src folder → No

Then enter the project:

cd protem-website

-----------------------------------------------------
STEP 3 — ADD THE WEBSITE CODE
-----------------------------------------------------
1. Open the project in VS Code
2. Go to:
   app/page.js
3. Delete everything
4. Paste this full code

-----------------------------------------------------
STEP 4 — ADD YOUR LOGO
-----------------------------------------------------
1. Create a folder named:
   public

2. Save your uploaded ProTem logo inside it as:
   logo.png

Path should look like:
public/logo.png

-----------------------------------------------------
STEP 5 — RUN THE WEBSITE LOCALLY
-----------------------------------------------------
In terminal run:

npm run dev

Open:
http://localhost:3000

-----------------------------------------------------
STEP 6 — CREATE GITHUB REPOSITORY
-----------------------------------------------------
1. Go to GitHub
2. Click New Repository
3. Name it:
   protem-website
4. Click Create Repository

-----------------------------------------------------
STEP 7 — UPLOAD CODE TO GITHUB
-----------------------------------------------------
In terminal run:

git init
git add .
git commit -m "Initial ProTem website"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_LINK
git push -u origin main

-----------------------------------------------------
STEP 8 — DEPLOY USING VERCEL
-----------------------------------------------------
1. Go to https://vercel.com
2. Login using GitHub
3. Click Add New Project
4. Import your GitHub repository
5. Click Deploy

Done — your website will go live in 1–2 minutes.

-----------------------------------------------------
STEP 9 — CONNECT YOUR DOMAIN
-----------------------------------------------------
1. Open Vercel Project
2. Go to Settings → Domains
3. Add:
   protem.co.in

4. Vercel will give DNS records
5. Open GoDaddy
6. Go to DNS Settings
7. Add the records provided by Vercel

After propagation your site will open on:
https://protem.co.in

=====================================================
FUTURE FEATURES YOU CAN ADD
=====================================================
• Teacher registration form
• School hiring form
• Admin dashboard
• WhatsApp integration
• Email notifications
• Teacher profiles
• Payment system
• Search/filter system
• Mobile app later

*/
