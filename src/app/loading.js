import Image from "next/image";

export default function Loading() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-YekanBakh">
      <div className="absolute inset-0 z-0 p-4 sm:p-6 md:p-8 space-y-8 overflow-y-auto">
        <div className="w-full h-48 sm:h-60 md:h-72 lg:h-80 bg-gray-200 animate-pulse rounded-2xl" />
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-32 sm:w-40 bg-gray-200 animate-pulse rounded-md" />
          <div className="h-4 w-60 sm:w-72 md:w-96 bg-gray-200 animate-pulse rounded-md" />
        </div>
        <div className="w-full max-w-3xl h-14 sm:h-16 bg-gray-200 animate-pulse rounded-lg mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col bg-gray-100 shadow rounded-xl overflow-hidden"
            >
              <div className="h-32 sm:h-40 bg-gray-200 animate-pulse" />
              <div className="p-3 sm:p-4 space-y-3">
                <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded-md" />
                <div className="h-3 w-1/2 bg-gray-200 animate-pulse rounded-md" />
                <div className="h-8 w-full bg-gray-200 animate-pulse rounded-md" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-20 sm:h-24 bg-gray-200 animate-pulse rounded-lg" />
        <div className="w-full h-32 sm:h-40 bg-gray-200 animate-pulse rounded-lg" />
      </div>

      <div className="absolute inset-0 z-10000 flex items-center justify-center backdrop-blur-xs bg-[#ffffff35]">
        <Image
          src="/Images/cover.png"
          alt="Loading Cover"
          width={600}
          height={400}
          priority
          className="drop-shadow-lg w-68 h-auto sm:w-88 md:w-128 lg:w-[600px]"
        />
      </div>
    </div>
  );
}
