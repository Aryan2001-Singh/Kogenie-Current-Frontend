// app/pricing/page.tsx

export default function PricingPage() {
    return (
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h1>
          <p className="text-lg text-gray-600 mb-12">
            Start free. Pay only when your ads perform.
          </p>
          {/* Pricing Cards Go Here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Plan Card */}
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Free Plan</h2>
              <p className="text-sm text-gray-600 mb-4">Generate up to 5 ads per month</p>
              <p className="text-2xl font-bold text-gray-900 mb-6">₹0</p>
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Get Started
              </button>
            </div>
            {/* Repeat similar blocks for Paid Plans */}
          </div>
        </div>
      </div>
    );
  }
  