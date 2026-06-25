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
import AboutUsSection from '@amn/components/_sections/AboutUs';

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
        <AboutUsSection />
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
