import { useRef } from "react";
import { Printer, Download, Phone, MessageCircle, Star } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_9d1df51c-b9c0-4f50-81ff-e54a305e2b3d/artifacts/d30u96zf_FullLogo.jpg";

const PrintPage = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Controls - Hidden when printing */}
      <div className="print:hidden bg-[#0A4F60] text-white p-4 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <h1 className="font-bold text-lg">Jireh Flyer Generator</h1>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-[#F5A623] hover:bg-[#e09620] px-6 py-2 rounded-lg font-bold transition-colors"
          >
            <Printer className="w-5 h-5" />
            Print Flyer
          </button>
        </div>
      </div>

      {/* Flyer Content */}
      <div className="max-w-4xl mx-auto p-8 print:p-0">
        <div
          ref={printRef}
          className="bg-white shadow-2xl print:shadow-none"
          style={{ aspectRatio: "8.5/11" }}
        >
          {/* Flyer Design */}
          <div className="h-full flex flex-col p-8 print:p-12">
            {/* Header */}
            <div className="text-center mb-6">
              <img 
                src={LOGO_URL} 
                alt="Jireh Remodeling & Construction" 
                className="h-32 w-auto mx-auto mb-4"
              />
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">San Antonio's Trusted Contractor</p>
            </div>

            {/* Main Message */}
            <div className="text-center mb-8">
              <h1 className="font-['Playfair_Display'] text-4xl font-bold text-[#0A4F60] mb-4">
                Your Home.<br />
                <span className="text-[#F5A623]">Transformed.</span>
              </h1>
              <p className="text-xl text-gray-700">
                Quality work. Fair prices. <span className="text-[#F5A623] font-semibold">Done right.</span>
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0A4F60]/5 p-4 rounded-lg text-center">
                <p className="text-[#0A4F60] font-bold">Kitchen Remodels</p>
                <p className="text-[#F5A623] font-bold text-xl">from $9,500</p>
              </div>
              <div className="bg-[#0A4F60]/5 p-4 rounded-lg text-center">
                <p className="text-[#0A4F60] font-bold">Bathroom Remodels</p>
                <p className="text-[#F5A623] font-bold text-xl">from $4,500</p>
              </div>
              <div className="bg-[#0A4F60]/5 p-4 rounded-lg text-center">
                <p className="text-[#0A4F60] font-bold">Full Renovations</p>
                <p className="text-[#F5A623] font-bold text-xl">from $25,000</p>
              </div>
              <div className="bg-[#0A4F60]/5 p-4 rounded-lg text-center">
                <p className="text-[#0A4F60] font-bold">Custom Projects</p>
                <p className="text-[#F5A623] font-bold text-xl">Free Quote</p>
              </div>
            </div>

            {/* Services List */}
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <p className="text-center text-sm text-gray-600 mb-2">We do it all:</p>
              <p className="text-center text-[#0A4F60] font-medium text-sm">
                Flooring • Drywall • Painting • Decks • Patios • Pergolas • Carpentry • 
                Siding • Windows • Churches • Commercial
              </p>
            </div>

            {/* CTA */}
            <div className="mt-auto">
              <div className="bg-[#F5A623] text-white p-6 rounded-xl text-center">
                <p className="text-2xl font-bold mb-2">FREE QUOTES!</p>
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-bold">Text Today!</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-6 h-6" />
                    <span className="font-bold text-xl">(210) 980-9174</span>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="text-center mt-4">
                <p className="text-gray-500 text-xs">
                  Licensed & Insured • 10+ Years Experience • San Antonio, TX
                </p>
                <p className="text-gray-400 text-xs italic mt-1">
                  "Building with purpose — all for God's glory"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions - Hidden when printing */}
      <div className="print:hidden max-w-4xl mx-auto p-8 pt-0">
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="font-bold text-[#0A4F60] text-lg mb-4">Printing Instructions</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Click "Print Flyer" button above</li>
            <li>• Select your printer or "Save as PDF"</li>
            <li>• Use Letter size paper (8.5" x 11")</li>
            <li>• Print on cardstock for best results</li>
            <li>• Tip: Print multiple copies for distribution</li>
          </ul>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintPage;
