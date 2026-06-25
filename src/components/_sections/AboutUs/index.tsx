import Section from './styles';

const AboutUsSection = () => {
  return (
    <Section id="section-about-us">
      <eui-grid container="true" columns={16} narrow="true">
        <eui-grid
          extraSmall={16}
          medium={8}
        >
          **TODO: imagem da equipe ou oficina**
        </eui-grid>
        <eui-grid
          extraSmall={16}
          medium={8}
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
              container="true"
              columns={2}
              narrow="true"
              condensed="true"
            >
              <eui-grid extraSmall={2} medium={1}>
                <p>Prédio próprio</p>
              </eui-grid>
              <eui-grid extraSmall={2} medium={1}>
                <p>Atendimento personalizado</p>
              </eui-grid>
              <eui-grid extraSmall={2} medium={1}>
                <p>Ferramentas profissionais</p>
              </eui-grid>
              <eui-grid extraSmall={2} medium={1}>
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
