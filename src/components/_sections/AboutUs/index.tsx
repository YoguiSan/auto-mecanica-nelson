
import Image from 'next/image';
import CheckIcon from '@icons/check.svg';
import Us from '../../../assets/images/Nelson_1.jpg';
import Section from './styles';

const AboutUsSection = () => {
  return (
    <Section id="section-about-us">
      <eui-grid container="true" columns={16} narrow="true">
        <eui-grid
          medium={16}
          large={8}
        >
          <div className="image-container">
            <Image alt="" src={Us} />
            <eui-card>
              <p className="large">30+</p>
              <p>Anos de tradição</p>
            </eui-card>
          </div>
        </eui-grid>
        <eui-grid
          medium={16}
          large={8}
        >
          <h2>Sobre nós</h2>
          <p>
            Tradição familiar desde 1994. Nossa oficina vem servindo a comunidade de Campo Limpo há mais de três décadas, combinando expertise em serviços básicos e avançados com a confiança herdada de geração em geração.
          </p>
          <p>
            Fundada por Nelson Salles, hoje a oficina é administrada pela segunda geração da família, mantendo os valores de honestidade, qualidade e compromisso com cada cliente. Investimos constantemente em tecnologia e capacitação para oferecer o melhor serviço automotivo da região.
          </p>
          <div className="about-us-qualities">
            <eui-grid
              container
              columns={2}
              narrow
              condensed
            >
              <eui-grid extraSmall={2} medium={1} large={1} extraLarge={1}>
                <span className="icon-container">{<Image alt="" src={CheckIcon} />}</span>
                <p>Prédio próprio</p>
              </eui-grid>
              <eui-grid extraSmall={2} medium={1} large={1} extraLarge={1}>
                <span className="icon-container">{<Image alt="" src={CheckIcon} />}</span>
                <p>Atendimento personalizado</p>
              </eui-grid>
              <eui-grid extraSmall={2} medium={1} large={1} extraLarge={1}>
                <span className="icon-container">{<Image alt="" src={CheckIcon} />}</span>
                <p>Ferramentas profissionais</p>
              </eui-grid>
              <eui-grid extraSmall={2} medium={1} large={1} extraLarge={1}>
                <span className="icon-container">{<Image alt="" src={CheckIcon} />}</span>
                <p>Equipe certificada</p>
              </eui-grid>
              <eui-grid extraSmall={2}>
                <eui-card>
                  <div slot="body">
                    <p className="quote">
                      &quot;Nossa missão é manter seu veículo rodando com segurança e eficiência, como se fosse da nossa própria família.&quot;
                    </p>
                    <p className="author">
                      - Nelson Salles, proprietário
                    </p>
                  </div>
                </eui-card>
              </eui-grid>
            </eui-grid>
          </div>
        </eui-grid>
      </eui-grid>
    </Section>
  );
}

export default AboutUsSection;
