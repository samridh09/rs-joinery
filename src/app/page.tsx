import Header from '@/components/core/header';
import Hero from '@/components/landing/hero';
import Categories from '@/components/landing/categories';
import Recommended from '@/components/landing/recommended';
import Innovation from '@/components/landing/innovation';
import Gallery from '@/components/landing/gallery';
import CTA from '@/components/landing/cta';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background pb-20">
      <Header />
      <Hero />
      <Categories />
      <Recommended />
      <Innovation />
      <Gallery />
      <CTA />
    </main>
  );
}
