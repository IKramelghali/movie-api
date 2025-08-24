/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Footer() {
  return (
    <footer className="bg-[#c71f1f] text-white py-8 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo / Title */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">🎥 Movies</h1>
          <p className="text-sm text-white/80">
            Discover and track your favorite movies
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          <a href="#" className="hover:text-yellow-300 transition">🌐</a>
          <a href="#" className="hover:text-yellow-300 transition">🐦</a>
          <a href="#" className="hover:text-yellow-300 transition">📸</a>
          <a href="#" className="hover:text-yellow-300 transition">▶️</a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} CinemaApp. All rights reserved.
      </div>
    </footer>
  );
}
