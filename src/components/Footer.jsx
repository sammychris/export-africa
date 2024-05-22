// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
        {/* Column 1 - Company Info */}
        <div>
          <h4 className="text-blue-600 font-medium mb-4">ExportAfrica</h4>
          <p className="text-gray-700 text-sm"> 
            A platform connecting African exporters with global buyers.
          </p>
        </div>
  
        {/* Column 2 - Navigation Links */}
        <div>
          <h4 className="text-blue-600 font-medium mb-4">Quick Links</h4>
          <ul className="text-gray-700 text-sm">
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
  
        {/* Column 3 - Social & More */}
        <div>
          <h4 className="text-blue-600 font-medium mb-4">Connect with Us</h4>
          <div className="flex space-x-4">
            {/* Add links to your social media profiles */}
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <svg /* Your LinkedIn Icon SVG */ fill="currentColor" viewBox="0 0 20 20"></svg>
            </a>
            {/* ... Other social icons */}
          </div>
        </div>
  
      </div>
  
      {/* Copyright & Optional Links */}
      <div className="text-center mt-8 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm">© 2024 ExportAfrica. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-500 hover:underline text-sm">Terms of Service</a>
          <a href="#" className="text-gray-500 hover:underline text-sm">Privacy Policy</a>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
