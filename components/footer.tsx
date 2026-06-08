import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-4 border-t border-gray-200">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-nexea-blue flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <span className="font-poppins font-bold text-xl tracking-tight text-nexea-navy">
              NEXEA
            </span>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} NEXEA. All rights reserved.
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-nexea-navy">Contact</span>
            <a href="mailto:nexea550@gmail.com" className="text-sm text-gray-600 hover:text-nexea-blue transition-colors">
              nexea550@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-nexea-navy">Socials</span>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-gray-600 hover:text-nexea-blue transition-colors">LinkedIn</a>
              <a href="#" className="text-sm text-gray-600 hover:text-nexea-blue transition-colors">Twitter/X</a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-nexea-navy">Legal</span>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-gray-600 hover:text-nexea-blue transition-colors">Privacy</Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-nexea-blue transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
