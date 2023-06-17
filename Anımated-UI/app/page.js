import { Footer, Navbar } from '../components';
import { Hakkimda, Eserler, Sergiler, Sanat, Hero} from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <Hakkimda />
      <div className="gradient-03 z-0" />
      <Eserler />
    </div>
    <div className="relative">
      <Sanat />
      <div className="gradient-04 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      <Sergiler />
    </div>
    <Footer />
  </div>
);

export default Page;
