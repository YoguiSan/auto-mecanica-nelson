'use client';

import { useState } from 'react';
import Image from 'next/image';
import HeroBanner from '@amn/components/HeroBanner';
import Form, { IQuestion } from '@amn/components/Form';
import MainServicesSection from '@amn/components/_sections/MainServices';
import { darkBlue, vibrantOrange, whatsAppGreen } from '@amn/styles/Colors';
import SendMessage from '@icons/send-message.svg';
import PhoneIcon from '@icons/phone.svg';
import Main from './styles';
import TimeAndPlaceSection from '@amn/components/_sections/TimeAndPlace';

export default function Home() {
  const [quotationForm, setQuotationForm] = useState([]);

  const quotationFormQuestions: IQuestion[] = [{
    key: 'fullName',
    label: 'Nome Completo',
    placeholder: 'Seu Nome',
    required: true,
    onChange: (key, value) => setQuotationForm({
      ...quotationForm,
      [key]: value,
    }),
    columns: 12

  }];

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
        <TimeAndPlaceSection />
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
        <MainServicesSection />
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
                <Form
                  questions={quotationFormQuestions}
                  buttons={[{
                    text: 'Enviar via Whatsapp',
                    onClick: () => console.log(),
                    id: "quotation-form-submit",
                  }]}
                  columns={1}
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
