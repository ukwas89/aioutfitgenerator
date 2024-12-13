const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Style Muse</h3>
            <p className="text-gray-600">
              An AI-powered fashion assistant that helps you create perfect outfits for any occasion.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-primary hover:underline">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-primary hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-600">
              Follow us on social media for the latest fashion tips and updates.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Style Muse AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;