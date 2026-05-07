import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-zinc-800 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-[0.2em] text-[var(--color-luxury-dark)] dark:text-white block mb-6">
              KTFASHION
            </Link>
            <p className="text-[var(--color-luxury-gray)] dark:text-gray-400 text-xs leading-relaxed max-w-xs">
              A legacy of tailoring excellence. Elevating uniform standards through unmatched craftsmanship and avant-garde design since 1994.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://wa.me/917033686328" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all cursor-pointer text-xs font-bold" aria-label="WhatsApp">WA</a>
              <a href="mailto:kanchan05011989@gmail.com" className="w-8 h-8 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-400 hover:text-[var(--color-luxury-dark)] dark:hover:text-white hover:border-[var(--color-luxury-dark)] dark:hover:border-white transition-all cursor-pointer text-xs font-bold" aria-label="Email">@</a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-[var(--color-luxury-dark)] dark:text-white mb-6 font-semibold">Collections</h4>
            <ul className="space-y-4">
              <li><Link href="/corporate" className="text-xs text-[var(--color-luxury-gray)] dark:text-gray-400 hover:text-[var(--color-luxury-amber)] dark:hover:text-[var(--color-luxury-amber)] transition-colors">Corporate Elite</Link></li>
              <li><Link href="#" className="text-xs text-[var(--color-luxury-gray)] dark:text-gray-400 hover:text-[var(--color-luxury-amber)] transition-colors">Hospitality Pro</Link></li>
              <li><Link href="#" className="text-xs text-[var(--color-luxury-gray)] dark:text-gray-400 hover:text-[var(--color-luxury-amber)] transition-colors">Healthcare Performance</Link></li>
              <li><Link href="#" className="text-xs text-[var(--color-luxury-gray)] dark:text-gray-400 hover:text-[var(--color-luxury-amber)] transition-colors">Academic Heritage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-[var(--color-luxury-dark)] dark:text-white mb-6 font-semibold">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-xs text-[var(--color-luxury-gray)] dark:text-gray-400 hover:text-[var(--color-luxury-amber)] transition-colors">Our Heritage</Link></li>
              <li><Link href="#" className="text-xs text-[var(--color-luxury-gray)] dark:text-gray-400 hover:text-[var(--color-luxury-amber)] transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="text-xs text-[var(--color-luxury-gray)] dark:text-gray-400 hover:text-[var(--color-luxury-amber)] transition-colors">Press & Media</Link></li>
              <li><Link href="/contact" className="text-xs text-[var(--color-luxury-gray)] dark:text-gray-400 hover:text-[var(--color-luxury-amber)] transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-widest uppercase text-[var(--color-luxury-dark)] dark:text-white mb-6 font-semibold">Newsletter</h4>
            <p className="text-xs text-[var(--color-luxury-gray)] dark:text-gray-400 mb-4">
              Receive insights on professional aesthetics and new releases.
            </p>
            <div className="flex border-b border-gray-300 dark:border-zinc-700 pb-2 relative group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent text-xs text-[var(--color-luxury-dark)] dark:text-white focus:outline-none placeholder:text-gray-400 dark:placeholder:text-zinc-600"
              />
              <button className="text-[10px] uppercase font-bold text-[var(--color-luxury-dark)] dark:text-white hover:text-[var(--color-luxury-amber)] dark:hover:text-[var(--color-luxury-amber)] transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-gray-400 dark:text-zinc-500">
            © 2026 KTFashion. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[10px] text-gray-400 dark:text-zinc-500 hover:text-[var(--color-luxury-dark)] dark:hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-[10px] text-gray-400 dark:text-zinc-500 hover:text-[var(--color-luxury-dark)] dark:hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/contact" className="text-[10px] text-gray-400 dark:text-zinc-500 hover:text-[var(--color-luxury-dark)] dark:hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
