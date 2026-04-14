import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor completa todos los campos.");
      return;
    }
    console.log("Form data:", formData);
    setFormData({ name: "", email: "", message: "" });
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-neutral-900 rounded-2xl p-8 md:p-12">

          {/* Left column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug mb-4">
              ¿Tienes una idea en mente?
            </h2>
            <p className="text-neutral-400 text-base leading-relaxed mb-8">
              Coméntanos y hagámosla realidad. Estamos listos para escucharte
              y ayudarte a construir lo que imaginas.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-neutral-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 stroke-neutral-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span>info@acrilarte.com</span>
              </div>

              <div className="flex items-center gap-3 text-neutral-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 stroke-neutral-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <span>Respuesta en menos de 24h</span>
              </div>

              <div className="flex items-center gap-3 text-neutral-400 text-sm">
                <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 stroke-neutral-400" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <span>Lun – Vie, 9:00 – 18:00</span>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
                  Tu idea
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe tu proyecto o idea..."
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-xl text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors text-sm resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-neutral-200 hover:bg-white text-neutral-900 font-medium rounded-xl transition-colors duration-200 text-sm"
              >
                Enviar mensaje
              </button>

              {sent && (
                <p className="text-center text-sm text-emerald-400">
                  ¡Mensaje enviado! Te contactamos pronto.
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}