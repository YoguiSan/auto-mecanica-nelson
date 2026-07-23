import services from './json/services';
import ServiceCard from './ServiceCard';
import Section from './styles';

const MainServicesSection = () => {
  const requestQuote = (serviceName: string) => {

  };

  return (
    <Section id="section-main-services">
      <eui-grid container="true">
        <eui-grid extraSmall={16} narrow="true">
          <h2>Nossos Serviços Principais</h2>
          <p className="subtitle">
            Oferecemos uma ampla gama de serviços automotivos com garantia, peças de qualidade e mão de obra especializada.
          </p>
        </eui-grid>
        <eui-grid container="true" columns={4}>
          {
            services.map((service) => (
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                price={(service.price as number)}
                estimatedTime={service.estimatedTime}
                requestQuoteAction={() => requestQuote(service.title)}
              />
            ))
          }
        </eui-grid>
      </eui-grid>
    </Section>
  );
}

export default MainServicesSection;
