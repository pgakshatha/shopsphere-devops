function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-24">

      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

      <h3 className="mt-6 text-2xl font-semibold text-gray-700">
        Loading Products...
      </h3>

      <p className="text-gray-500 mt-2">
        Please wait while we fetch the latest products.
      </p>

    </div>
  );
}

export default LoadingSpinner;