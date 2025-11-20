import { BlurFade } from './ui/blur-fade';

const images = [
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2656&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=2528&auto=format&fit=crop",



];

const Gallery = () => {
  return (
    <div id="gallery" className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
          Recent Works
        </h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((imageUrl, idx) => (
            <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
              <img
                className="mb-4 size-full rounded-lg object-contain"
                src={imageUrl}
                alt={`Work ${idx + 1}`}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery; 
