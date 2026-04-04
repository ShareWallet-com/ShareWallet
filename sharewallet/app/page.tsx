import Footer from "./components/ui/footer";
import Herosection from "./components/ui/herosection";
import Howitswork from "./components/ui/howitswork";
import Review from "./components/ui/review";
import Startsaving from "./components/ui/startsaving";

export default function Home() {
  return (
    <div>
      <Herosection/>
      <Howitswork/>
      <Review/>
      <Startsaving/>
      <Footer/>
    </div>
  );
}
