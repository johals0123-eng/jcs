export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10">
          <div className="h-7 w-7 animate-spin rounded-full border-2 border-zinc-700 border-t-yellow-400" />
        </div>

        <p className="mt-6 text-sm font-semibold text-zinc-300">
          Loading Johal Crane Services
        </p>

        <div className="mx-auto mt-3 h-1 w-16 overflow-hidden rounded-full bg-zinc-800">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-yellow-400" />
        </div>
      </div>
    </main>
  );
}