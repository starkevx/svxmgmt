export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <img
          src="/hero-collage.png" 
          alt="SVXMGMT Background"
          className="h-full w-full object-cover opacity-60 grayscale"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Optional subtle grain overlay */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/noise.png')]" />

      {/* Center Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-[0.3em]">
          SVX<span className="text-orange-500">MGMT</span>
        </h1>
      </div>

    </section>
  );
}