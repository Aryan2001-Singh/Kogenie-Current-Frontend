const UserInsights = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-slate-100 to-slate-200 px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            📊 Insights Coming Soon
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We’re building a powerful dashboard to help you track ad performance,
            user engagement, and ROI — all in one place.
          </p>
          <div className="inline-flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h6l6 6v10a2 2 0 01-2 2z"
              />
            </svg>
            <span className="text-gray-700 font-medium">
              You’ll be notified when this feature goes live.
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserInsights;
  