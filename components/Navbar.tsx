import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10">
          <div className="h-14 px-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <Link href="/" aria-label="Inicio" className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-white/20 border border-white/30" />
                <span className="hidden sm:inline font-semibold tracking-wide">Acrilarte</span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-white/90">
              <Link href="/productos" className="hover:text-white transition-colors">Productos</Link>
              <Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link>
              <Link href="/contacto" className="hover:text-white transition-colors">Contáctanos</Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href="/carrito"
                aria-label="Carrito"
                className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4m10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3 2h1.2c.46 0 .86.31.97.75L6.3 7H20a1 1 0 0 1 .96 1.27l-1.8 6A2 2 0 0 1 17.24 16H9a2 2 0 0 1-1.93-1.48L5.1 8.52 4.3 5H3a1 1 0 1 1 0-2m5.22 6 .96 4H17.2l1.2-4z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

