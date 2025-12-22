import HeroBanner from '@amn/components/HeroBanner';
import { darkBlue, vibrantOrange, whatsAppGreen } from '@amn/styles/Colors';
import Image from 'next/image';
import Clock from '@icons/clock.svg';
import MapPinpoint from '@icons/map-pinpoint.svg';
import Main from './styles';
import Styles from './styles';

export default function Home() {
  return (
    <Styles>
      <HeroBanner
        title="Auto Mecânica Nelson"
        callout="30+ Anos de Mecânica de Excelência"
        subtitle="Revisões, freios, injeção eletrônica e mais. Confiança geracional."
        ctas={[{
          text: 'Agende pelo Whatsapp',
          action: 'https://wa.me/5511999999999',
          color: whatsAppGreen,
          // icon: WhatsappIcon,
        }, {
          text: 'Ligue Agora',
          action: 'tel:+5511999999999',
          // icon: PhoneIcon,
        }]}
        // image="/images/hero-banner.jpg"
      />
      <Main>
        <section className="time-and-place">
          <eui-grid container="true" columns="16">
            <eui-grid
              medium={16}
              large={8}
            >
              <eui-card
                title="Localização"
                id="card-localizacao"
                iconBgColor={darkBlue}
              >
                <Image src={MapPinpoint} alt="" slot="icon" />
                <div className="address-container" slot="body">
                  <p>Rua Lourenço Saporito, 332</p>
                  <p>Jardim Ana Maria, São Paulo - SP</p>
                  <p>CEP: 05757-200</p>
                  <div className="map-container"></div>
                </div>
              </eui-card>
            </eui-grid>
            <eui-grid
              medium={16}
              large={8}
              >
              <eui-card
                id="card-horario-funcionamento"
                title="Horário de Funcionamento"
                iconBgColor={vibrantOrange}
              >
                <Image src={Clock} slot="icon"  />
                <div slot="body"></div>
              </eui-card>
            </eui-grid>
          </eui-grid>
        </section>
        <section className="about-us"></section>
      </Main>
    </Styles>
  );
}
