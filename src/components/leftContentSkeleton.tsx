export const LeftContentSkeleton = () => (
  <div className="space-y-12 animate-pulse max-w-4xl mx-auto">
    {/* Mimic Title */}
    <div className="space-y-4">
      <div className="h-[75px] w-96 bg-gray-700 rounded-md" />
      <div className="h-10 w-80 bg-red-600 rounded-md" />
    </div>

    {/* Mimic Description */}
    <div className="space-y-3 max-w-3xl">
      <div className="h-5 w-full bg-gray-700 rounded-md" />
      <div className="h-5 w-full bg-gray-700 rounded-md" />
      <div className="h-5 w-full bg-gray-700 rounded-md" />
      <div className="h-5 w-5/6 bg-gray-700 rounded-md" />
    </div>

    {/* Mimic Stats Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-gray-700/60 to-gray-700/40 rounded-2xl p-7 border border-gray-600"
        >
          <div className="h-9 w-10 bg-gray-600 rounded mb-3 mx-auto" />
          <div className="h-9 bg-gray-600 rounded mb-2 w-3/5 mx-auto" />
          <div className="h-5 bg-gray-600 rounded w-3/4 mx-auto" />
        </div>
      ))}
    </div>

    {/* Mimic Call to Action */}
    <div className="bg-gradient-to-r from-gray-700/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600 text-center space-y-4">
      <div className="h-6 w-4/5 bg-gray-600 rounded mx-auto" />
      <div className="flex justify-center items-center gap-4 text-sm text-gray-400">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-600 rounded-full" />
            <div className="h-4 w-20 bg-gray-600 rounded" />
          </div>
        ))}
      </div>
    </div>
  </div>
);