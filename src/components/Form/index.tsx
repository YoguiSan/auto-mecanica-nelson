'use client'

import Styles from './styles';

export type IQuestion = {
  label: string,
  key: string,
  placeholder?: string,
  columns?: number,
  onChange: (key: string, value: unknown) => void,
  errorMessage?: string,
  error?: boolean,
};

type IButton = {
  text: string,
  // FIXME: get variants
  variant?: string,
  onClick: (value?: unknown) => void | string,
  id?: string,
};

type Props = {
  questions: IQuestion[],
  buttons: IButton[],
  handleSend: (value?: unknown) => void,
};

const Form: React.FC<Props> = ({
  questions,
  handleSend,
  buttons,
}: Props) => {
  return (
    <Styles>
      <eui-grid
        container
      >
        {
          questions.map(({
            label,
            key,
            placeholder,
            columns,
            onChange,
            errorMessage,
            error,
            type,
            disabled,
            required,
            variant,
            fullWidth,
          }) => (
            <eui-grid columns={columns}>
              <eui-input
                label={label}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                variant={variant}
                fullwidth={fullWidth}
                onChange={({ target }) => onChange(key, target.value)}
                errorMessage={errorMessage}
                error={error}
              />
            </eui-grid>
          ))
        }
      </eui-grid>
      <eui-grid className="buttons-container">
        {buttons.map(({
          text,
          variant,
          onClick,
          id,
        }) => (
          <eui-grid
            extraSmall={6}
            large={4}
          >
            <eui-button
              id={id}
              variant={variant}
              text={text}
              onClick={onClick}
            />
          </eui-grid>
        ))}
      </eui-grid>
    </Styles>
  );
};

export default Form;
