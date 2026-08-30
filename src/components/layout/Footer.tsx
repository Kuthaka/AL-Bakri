import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const FOOTER_LINKS = {
  Menu: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Quality", href: "/quality" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ],
  Categories: [
    { name: "Fresh Fruits", href: "/products/fruits" },
    { name: "Fresh Vegetables", href: "/products/vegetables" },
    { name: "Seasonal", href: "/products/seasonal" },
    { name: "Specialty", href: "/products/specialty" },
  ],
  Social: [
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Facebook", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-dark-green text-ivory pt-24 pb-8 px-6 md:px-12 rounded-t-[2.5rem] mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight uppercase mb-6">Al Bakri</h2>
            <p className="text-ivory/70 text-pretty max-w-sm">
              Premium fruit and vegetable supplier delivering freshness with purpose to businesses worldwide.
            </p>
          </div>

          {/* Links Col 1 */}
          <div>
            <h3 className="font-semibold mb-6 tracking-wide text-sm text-ivory/50 uppercase">Menu</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.Menu.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-leaf transition-colors inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h3 className="font-semibold mb-6 tracking-wide text-sm text-ivory/50 uppercase">Categories</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.Categories.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-leaf transition-colors inline-block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold mb-6 tracking-wide text-sm text-ivory/50 uppercase">Connect</h3>
            <ul className="space-y-4 mb-8">
              {FOOTER_LINKS.Social.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="group flex items-center gap-1 hover:text-leaf transition-colors">
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="space-y-2 text-ivory/70">
              <p>contact@albakrifresh.com</p>
              <p>+971 50 000 0000</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ivory/50">
          <p>© {new Date().getFullYear()} Al Bakri Trading. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-ivory transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ivory transition-colors">Terms of Service</Link>
          </div>
          <p className="italic">Freshness, from source to supply.</p>
        </div>
      </div>
    </footer>
  );
}
