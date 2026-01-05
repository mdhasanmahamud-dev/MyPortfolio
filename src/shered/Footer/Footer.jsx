import SocialLinks from "../../components/socialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-linear-to-r from-slate-800 via-gray-900 to-slate-700 text-gray-300 py-12 shadow-inner">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Column 1: Brand/About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Md Hasan <span className="text-blue-400">Mahamud</span>
            </h2>
            <p className="text-sm leading-relaxed opacity-80">
              A passionate Frontend Developer & Designer showcasing creative web
              projects and personal portfolio.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Connect With Us
            </h3>
            <p className="text-sm opacity-80">
              Follow me on social media to see my latest projects and updates.
            </p>
            <div className="flex space-x-4">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Bottom Border & Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-xs opacity-60">
          <p>© {currentYear} Your Brand Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
