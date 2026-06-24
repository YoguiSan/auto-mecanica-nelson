import HeroBanner from '@amn/components/HeroBanner';
import { darkBlue, vibrantOrange, whatsAppGreen } from '@amn/styles/Colors';
import Image from 'next/image';
import Clock from '@icons/clock.svg';
import SendMessage from '@icons/send-message.svg';
import MapPinpoint from '@icons/map-pinpoint.svg';
import PhoneIcon from '@icons/phone.svg';
import WrenchIcon from '@icons/wrench.svg';
import Main from './styles';
// import { EuiGrid, EuiCard } from 'ethyl-ui/react/components';

export default function Home() {
  return (
    <Main>
      <HeroBanner
        title="Auto Mecânica Nelson"
        callout="30+ Anos de Mecânica de Excelência"
        subtitle="Revisões, freios, injeção eletrônica e mais. Confiança geracional."
        ctas={[{
          text: 'Agende pelo Whatsapp',
          action: 'https://wa.me/5511912175547',
          variant: "primary",
          color: whatsAppGreen,
          icon: SendMessage,
        }, {
          text: 'Ligue Agora',
          action: 'tel:+5511912175547',
          variant: "primary",
          color: vibrantOrange,
          icon: PhoneIcon,
        }]}
      />
      <section id="section-time-and-place">
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
                  <iframe width="100%" height="320px" style={{ border:0 }} loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJz-PlXglUzpQRM89MGSwDX2E&key=AIzaSyAJJKRiWNemMWX6dX2iT6KSm_9UbaxiBH8"></iframe> 
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
                <p>Segunda a sexta: 8-18h</p>
                <p>Sábados, domingos e feriados: fechado</p>
              </div>
            </eui-card>
          </eui-grid>
        </eui-grid>
        </section>
        <section id="section-about-us">
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
        </section>
        <section id="section-main-services">
          <eui-grid container="true">
            <eui-grid extraSmall={16} narrow="true">
              <h2>Nossos Serviços Principais</h2>
              <p className="subtitle">
                Oferecemos uma ampla gama de serviços automotivos com garantia, peças de qualidade e mão de obra especializada.
              </p>
            </eui-grid>
            <eui-grid container="true" columns={4}>
              <eui-grid extraSmall={16} large={2} extraLarge={1} narrow="true">
                <eui-card title="Revisão básica" iconBgColor={darkBlue}>
                  <Image src={WrenchIcon} slot="icon" alt="" />
                  <div slot="body">
                    <p className="description">Troca de óleo, filtros, verificação completa de fluidos e sistema</p>
                    <div className="price-container">
                      <p className="price">R$ 120,00</p>
                      <p className="time">1-2h</p>
                      <eui-button text="Solicitar Orçamento" onClick="console.log('bolas')" />
                    </div>
                  </div>
                </eui-card>
              </eui-grid>
              <eui-grid small={4} medium={2} large={1} narrow="true">
                <eui-card title="Freios" iconBgColor={darkBlue}>
                  <Image src={WrenchIcon} slot="icon" alt="" />
                  <div slot="body">
                    <p className="description">Manutenção e troca de pastilhas, discos, fluido de freio</p>
                    <div className="price-container">
                      <p className="price">R$ 300 - 800</p>
                      <p className="time">1-2h</p>
                      <eui-button text="Solicitar Orçamento" onClick="console.log('bolas')" />
                    </div>
                  </div>
                </eui-card>
              </eui-grid>
              <eui-grid small={4} medium={2} large={1} narrow="true">
                <eui-card title="Injeção Eletrônica" iconBgColor={darkBlue}>
                  <Image src={WrenchIcon} slot="icon" alt="" />
                  <div slot="body">
                    <p className="description">Diagnóstico EFI, scanner, limpeza de bicos e regulagem</p>
                    <div className="price-container">
                      <p className="price">R$ 120,00</p>
                      <p className="time">1-2h</p>
                      <eui-button text="Solicitar Orçamento" onClick="console.log('bolas')" />
                    </div>
                  </div>
                </eui-card>
              </eui-grid>
              <eui-grid small={4} medium={2} large={1} narrow="true">
                <eui-card title="Motor" iconBgColor={darkBlue}>
                  <Image src={WrenchIcon} slot="icon" />
                  <div slot="body">
                    <p className="description">Troca de correia dentada, válvulas e componentes</p>
                    <div className="price-container">
                      <p className="price">R$ 120,00</p>
                      <p className="time">1-2h</p>
                      <eui-button text="Solicitar Orçamento" onClick="console.log('bolas')" />
                    </div>
                  </div>
                </eui-card>
              </eui-grid>
              <eui-grid small={4} medium={2} large={1} narrow="true">
                <eui-card title="Suspensão" iconBgColor={darkBlue}>
                  <Image src={WrenchIcon} slot="icon" alt="" />
                  <div slot="body">
                    <p className="description">Troca de amortecedores, molas, buchas</p>
                    <div className="price-container">
                      <p className="price">R$ 120,00</p>
                      <p className="time">1-2h</p>
                      <eui-button text="Solicitar Orçamento" onClick="console.log('bolas')" />
                    </div>
                  </div>
                </eui-card>
              </eui-grid>
              <eui-grid small={4} medium={2} large={1} narrow="true">
                <eui-card title="Elétrica" iconBgColor={darkBlue}>
                  <Image src={WrenchIcon} slot="icon" alt="" />
                  <div slot="body">
                    <p className="description">Bateria, alternador, motor de partida e sistema elétrico</p>
                    <div className="price-container">
                      <p className="price">R$ 120,00</p>
                      <p className="time">1-2h</p>
                      <eui-button text="Solicitar Orçamento" onClick="console.log('bolas')" />
                    </div>
                  </div>
                </eui-card>
              </eui-grid>
              <eui-grid small={4} medium={2} large={1} narrow="true">
                <eui-card title="Diagnóstico Completo" iconBgColor={darkBlue}>
                  <Image src={WrenchIcon} slot="icon" alt="" />
                  <div slot="body">
                    <p className="description">Scanner automotivo, teste de compressão e sistemas</p>
                    <div className="price-container">
                      <p className="price">R$ 120,00</p>
                      <p className="time">1-2h</p>
                      <eui-button text="Solicitar Orçamento" onClick="console.log('bolas')" />
                    </div>
                  </div>
                </eui-card>
              </eui-grid>
              <eui-grid small={4} medium={2} large={1} narrow="true">
                <eui-card title="Ar Condicionado" iconBgColor={darkBlue}>
                  <Image src={WrenchIcon} slot="icon" alt="" />
                  <div slot="body">
                    <p className="description">Recarga de gás, limpeza de sistema e troca de compressor</p>
                    <div className="price-container">
                      <p className="price">R$ 120,00</p>
                      <p className="time">1-2h</p>
                      <eui-button text="Solicitar Orçamento" onClick="console.log('bolas')" />
                    </div>
                  </div>
                </eui-card>
              </eui-grid>
            </eui-grid>
          </eui-grid>
        </section>
        <section id="section-more-services">
          <eui-card title="Não encontrou o que precisa?">
            <div slot="body">
              <p>Entre em contato conosco! Realizamos diversos outros serviços automotivos personalizados.</p>
              <eui-button
                color={vibrantOrange}
                text="Fale com Especialista" onClick="wa.me/5511999999999"
              />
            </div>
          </eui-card>
        </section>
        <section id="section-testimonials" style={{ display: 'none' }}>
          <eui-grid container="true" narrow="true">
            <eui-grid extraSmall={16}>
              <h2>O que nossos clientes dizem</h2>
              <p className="subtitle">Satisfação do cliente é nossa prioridade. Veja o que dizem sobre nossos serviços.</p>
              { /* TODO: carousel */ }
              <eui-card>
                { /* TODO: card */ }
              </eui-card>
              <div className="social-links">
                <p>Siga-nos nas redes sociais</p>
              </div>
            </eui-grid>
          </eui-grid>
        </section>
        <section id="section-get-in-touch">
          <eui-grid container="true" narrow="true" columns={2}>
            <eui-grid extraSmall={2} medium={1}>
              <eui-card
                title="Solicite um Orçamento"
              >
                { /* TODO: form a*/ }
                <eui-button
                  variant="primary"
                  color={whatsAppGreen}
                  text="Enviar via WhatsApp"
                  action="https://wa.me/5511912175547"
                />
              </eui-card>
            </eui-grid>
            <eui-grid extraSmall={2} medium={1} className="contact-cards-container">
              <eui-card
                title="E-mail"
              >
                <Image src={PhoneIcon} slot="icon" alt="" />
                <div slot="body">
                  <p className="highlight">
                    contato@automecanicanelson.com
                  </p>
                  <p>
                    Respondemos em até 24h
                  </p>
                </div>
              </eui-card>
            </eui-grid>
          </eui-grid>
        </section>
    </Main>
  );
}
