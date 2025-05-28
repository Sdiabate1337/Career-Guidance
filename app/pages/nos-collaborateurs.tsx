import { NextPage } from 'next';
import Head from 'next/head';
import Collaborateurs from '../components/Collaborateurs';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const NosCollaborateursPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Nos Collaborateurs | African Youth Leadership Foundation</title>
        <meta name="description" content="Découvrez les personnes exceptionnelles qui partagent leurs expériences et connaissances avec la jeunesse africaine." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HeroSection />
      
      <main className="flex-grow">
        <Collaborateurs />
      </main>
      
      <Footer />
    </div>
  );
};

export default NosCollaborateursPage;