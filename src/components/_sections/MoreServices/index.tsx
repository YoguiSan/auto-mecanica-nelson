import Section from './style';
import { vibrantOrange } from "@amn/styles/Colors";

const MoreServicesSection = () => {
  return (
    <Section id="section-more-services">
      <eui-card title="Não encontrou o que precisa?">
        <div slot="body">
          <p>Entre em contato conosco! Realizamos diversos outros serviços automotivos personalizados.</p>
          <eui-button
            color={vibrantOrange}
            text="Fale com Especialista" onClick="wa.me/5511999999999"
          />
        </div>
      </eui-card>
    </Section>
  )
};

export default MoreServicesSection;
