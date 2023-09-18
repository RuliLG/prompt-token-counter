import Cta from './components/cta';
import Fathom from './components/fathom';
import Footer from './components/footer';
import MainContent from './components/mainContent';
import WordCounter from './components/wordCounter';

export default function Home() {
  return (
    <div>
      <Fathom />
      <WordCounter />
      <Cta />
      <MainContent />
      <Footer />
    </div>
  );
}
