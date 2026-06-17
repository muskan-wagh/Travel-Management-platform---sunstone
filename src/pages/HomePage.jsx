import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import DestinationCart from "../components/DestinationCart";

const destinations = [
  {
    title: "Paris",
    text: "The city of light awaits you with its charming streets and world-class cuisine.",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
  },
  {
    title: "Tokyo",
    text: "Experience the perfect blend of ancient tradition and cutting-edge technology.",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
  },
  {
    title: "New York",
    text: "The city that never sleeps has something for everyone, from Broadway to Central Park.",
    img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
  },
];

function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <h2 className="mb-4 fw-semibold">Popular Destinations</h2>
      <div className="row g-4">
        {destinations.map((d, i) => (
          <div className="col-md-4" key={i}>
            <DestinationCart title={d.title} text={d.text} img={d.img} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
