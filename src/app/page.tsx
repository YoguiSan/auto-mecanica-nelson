import HeroBanner from '@amn/components/HeroBanner';
import Main from './styles';

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Auto Mecânica Nelson"
        callout="30+ Anos de Mecânica de Excelência"
        subtitle="Revisões, freios, injeção eletrônica e mais. Confiança geracional."
        ctas={[]}
        image="/images/hero-banner.jpg"
        
      />
      <Main>

      </Main>
    </>
  );
}
