export default function Loading() {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}
