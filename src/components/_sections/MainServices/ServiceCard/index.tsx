import Image from "next/image";
import { darkBlue } from "@amn/styles/Colors";
import { formatMoney } from "@amn/utils/formatters";

export type IServiceCard = {
  title: string,
  description: string,
  price: number,
  estimatedTime: string,
  icon: string,
  iconBgColor?: string,
  requestQuoteButtonColor?: string,
  requestQuoteAction: (value?: unknown) => unknown | string,
};

const ServiceCard = ({
  title,
  description,
  price,
  estimatedTime,
  icon,
  iconBgColor = darkBlue,
  requestQuoteButtonColor = darkBlue,
  requestQuoteAction,
}: IServiceCard) => {
  return (
    <eui-grid small={4} large={2} extraLarge={1} narrow="true">
      <eui-card title={title} iconBgColor={iconBgColor}>
        <Image src={icon} slot="icon" alt="" />
        <div slot="body">
          <p className="description">
            {description}
          </p>
          <div className="price-container">
            <p className="price">
              {
                price && typeof (price) === 'number'
                  ? formatMoney(price)
                  : 'Valor a consultar'
              }
            </p>
            <p className="time">
              {estimatedTime || 'Tempo estimado a consultar'}
            </p>
            <eui-button
              text="Solicitar Orçamento"
              color={requestQuoteButtonColor}
              onClick={requestQuoteAction}
            />
          </div>
        </div>
      </eui-card>
    </eui-grid>
  );
}

export default ServiceCard;
