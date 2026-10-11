function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-400">
          My Portfolio
        </h1>
        <p className="text-gray-400 text-lg">
          React + Vite + Tailwind CSS + Express 🐬
        </p>
        <a
          href="/api/health"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition-colors"
        >
          Test API
        </a>
      </div>
    </div>
  );
}

export default App;