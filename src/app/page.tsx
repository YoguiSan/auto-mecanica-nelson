import HeroBanner from '@amn/components/HeroBanner';
import { darkBlue, vibrantOrange } from '@amn/styles/Colors';
import MapPinpoint from '@icons/map-pinpoint.svg';
import Clock from '@icons/clock.svg';
import Main from './styles';

export default function Home() {
  return (
    <>
      <HeroBanner
        title="Auto Mecânica Nelson"
        callout="30+ Anos de Mecânica de Excelência"
        subtitle="Revisões, freios, injeção eletrônica e mais. Confiança geracional."
        ctas={[]}
        // image="/images/hero-banner.jpg"
      />
      <Main>
        <section className="time-and-place">
          <eui-button ></eui-button>
          <eui-card
            title="Localização"
            icon={MapPinpoint}
            iconBgColor={darkBlue}
          >
            <h1>Ovo</h1>
          </eui-card>
          <eui-card
            title="Horário de Funcionamento"
            icon={Clock}
            iconBgColor={vibrantOrange}
          >
          </eui-card>
        </section>
        <section className="about-us"></section>
      </Main>
    </>
  );
}
