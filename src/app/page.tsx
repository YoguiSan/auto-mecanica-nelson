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
        <section id="section-time-and-place">
          <eui-grid container="true" columns={16}>
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
        <section id="section-about-us">
          <eui-grid container="true" columns={16}>
            <eui-grid
              small={16}
              medium={8}
            ></eui-grid>
            <eui-grid
              small={16}
              medium={8}
            >
              <h2>Sobre nós</h2>
              <p>
                Tradição familiar desde 1994. Nossa oficina vem servindo a comunidade de Campo Limpo há mais de três décadas, combinando expertise em serviços básicos e avançados com a confiança herdada de geração em geração.
              </p>
              <p>
                Fundada por João Silva, hoje a oficina é administrada pela segunda geração da família, mantendo os valores de honestidade, qualidade e compromisso com cada cliente. Investimos constantemente em tecnologia e capacitação para oferecer o melhor serviço automotivo da região.
              </p>
            </eui-grid>
          </eui-grid>
        </section>
        <section id="section-main-services">

        </section>
      </Main>
    </Styles>
  );
}
