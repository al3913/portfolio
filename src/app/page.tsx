import ParticleNetwork from '@/components/ParticleNetwork';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative">
      <ParticleNetwork />
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold text-white mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-300">
          Move your cursor around to interact with the particle network
        </p>
      </div>
    </main>
  );
}
