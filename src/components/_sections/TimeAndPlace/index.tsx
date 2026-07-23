import { darkBlue, vibrantOrange } from '@amn/styles/Colors';
import MapPinpoint from '@icons/map-pinpoint.svg';
import Clock from '@icons/clock.svg';
import Section from './styles';
import Image from 'next/image';

const TimeAndPlaceSection = () => {
  return (
    <Section id="section-time-and-place">
      <eui-grid
        container="true"
        columns={16}
        narrow="true"
      >
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
              <div className="map-container">
                <iframe
                  width="100%"
                  height="200px"
                  style={{
                    border:0

                }}
                  loading="lazy"
                  allowfullscreen
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz-PlXglUzpQRM89MGSwDX2E&key=AIzaSyAJJKRiWNemMWX6dX2iT6KSm_9UbaxiBH8"
                />
              </div>
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
            <Image src={Clock} slot="icon" alt="" />
            <div slot="body">
              <p>Segunda a sexta: 9-18h</p>
              <p>Sábados, domingos e feriados: fechado</p>
            </div>
          </eui-card>
        </eui-grid>
      </eui-grid>
    </Section>
  );
}

export default TimeAndPlaceSection;
