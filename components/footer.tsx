export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-wider">
          NEXEA
        </div>
        
        <div className="text-sm text-white/50">
          © {new Date().getFullYear()} NEXEA. All rights reserved.
        </div>
        
        <div className="flex gap-6">
          <a href="mailto:nexea550@gmail.com" className="text-white/60 hover:text-white transition-colors">
            nexea550@gmail.com
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">Twitter/X</a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">Telegram</a>
        </div>
      </div>
    </footer>
  );
}
