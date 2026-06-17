import HeroSection from "../components/HeroSection";
import SearchBar from "../components/SearchBar";
import DestinationCart from "../components/DestinationCart";

const destinations = [
  { title: "Paris", text: "The city of light awaits you with its charming streets." },
  { title: "Tokyo", text: "Experience the blend of tradition and modern technology." },
  { title: "New York", text: "The city that never sleeps has something for everyone." },
];

function HomePage() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <h2 className="mb-3">Popular Destinations</h2>
      <div className="row">
        {destinations.map((d, i) => (
          <div className="col-md-4 mb-4" key={i}>
            <DestinationCart title={d.title} text={d.text} />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
