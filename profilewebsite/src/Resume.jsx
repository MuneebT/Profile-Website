import React from "react";

const projects = [
  {
    title: "Blood Bank Application",
    desc:
      "ASP.NET application for registering donors and linking recipients; Bootstrap + database integration.",
    tech: ["ASP.NET", "Bootstrap", "SQL"]
  },
  {
    title: "Cyber Security Website",
    desc:
      "MERN stack site demonstrating SQL injection, XSS, and DDoS examples; uses Redux and Puppeteer.",
    tech: ["MongoDB", "Express", "React", "Node", "Redux"]
  },
  {
    title: "Seige-of-Nations — The Last Defender",
    desc:
      "3D Unity game with scripting, animations, raycasting, and input systems.",
    tech: ["Unity", "C#", "3D"]
  },
  {
    title: "Smart Life Organizer",
    desc:
      "Flutter mobile app with Express backend, MongoDB, and Firebase authentication.",
    tech: ["Flutter", "Express", "MongoDB", "Firebase"]
  },
  {
    title: "Pet Scan",
    desc:
      "React Native app using TensorFlow Lite for on-device image-based pet health checks; Firebase used for auth/storage.",
    tech: ["React Native", "TensorFlow Lite", "Firebase"]
  }
];

const skills = [
  { name: "Flutter", level: 0.85 },
  { name: "MERN", level: 0.75 },
  { name: "C++", level: 0.7 },
  { name: "Java", level: 0.7 },
  { name: "Unity", level: 0.7 },
  { name: "Figma", level: 0.6 }
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 border-b">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">Muneeb Tariq</h1>
            <p className="text-gray-600 mt-1">Software Engineer • Full-Stack & Mobile Developer</p>
            <div className="mt-3 text-sm text-gray-700">
              <span className="mr-3">📍 Fast Nuces, Lahore, Pakistan</span>
              <span className="mr-3">📧 l227915@lhr.nu.edu.pk</span>
              <span>📞 +92 333 8189990</span>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <a
              href="/muneeb_tariq.pdf"
              download
              className="inline-flex items-center px-4 py-2 border rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
          <section className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-2">About</h2>
              <p className="text-gray-700">
                Fast Nuces student and software engineering enthusiast building web and mobile apps.
                Experienced with Flutter, MERN stack, Unity game development, and on-device ML for
                mobile. Comfortable with full project life-cycles from requirements to deployment.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Education</h2>
              <div className="bg-gray-50 p-4 rounded-md border">
                <h3 className="font-bold">Bachelor of Science — Software Engineering</h3>
                <p className="text-sm text-gray-600">Fast Nuces, Lahore • Aug 2022 — Jun 2026</p>
                <p className="mt-2 text-gray-700 text-sm">
                  Relevant courses: Software Requirement Engineering, Software Construction & Development,
                  Programming Fundamentals, OOP, Data Structures, Algorithms, Computer Networks, Operating Systems, Web Engineering
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((p) => (
                  <article key={p.title} className="bg-white border rounded-md p-4 shadow-sm">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 border rounded-full text-gray-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-md border">
              <h3 className="font-semibold mb-3">Skills</h3>
              <div className="space-y-3">
                {skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>{s.name}</span>
                      <span className="text-gray-500">{Math.round(s.level * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full"
                        style={{ width: `${s.level * 100}%`, backgroundColor: "#111827" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-md border">
              <h3 className="font-semibold mb-2">Languages</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                <li>English — Bilingual proficiency</li>
                <li>Urdu — Native proficiency</li>
                <li>Punjabi — Bilingual proficiency</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-md border">
              <h3 className="font-semibold mb-2">Tools & Technologies</h3>
              <ul className="text-sm text-gray-700 list-disc list-inside">
                <li>IntelliJ, VSCode, Android Studio, Visual Studio</li>
                <li>Unity, Eclipse OCL, Ubuntu, Kali Linux</li>
                <li>Wireshark, NS3 simulator, Unit Testing</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-md border">
              <h3 className="font-semibold mb-2">Extracurricular</h3>
              <p className="text-sm text-gray-700">Badminton, Jogging, Cricket — Hobbies: Reading & Social Networking</p>
            </div>
          </aside>
        </main>

        <footer className="p-6 border-t text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Muneeb Tariq — Built with React & TailwindCSS
        </footer>
      </div>
    </div>
  );
}
