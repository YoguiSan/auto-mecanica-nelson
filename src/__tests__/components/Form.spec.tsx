import { render, screen } from '@testing-library/react';
import Form from '@amn/components/Form';

describe('Form component', () => {
  it('renders the configured questions and action buttons', () => {
    const handleChange = jest.fn();
    const handleClick = jest.fn();

    const { container } = render(
      <Form
        questions={[
          {
            label: 'Nome',
            key: 'name',
            placeholder: 'Digite seu nome',
            onChange: handleChange,
            required: true,
          },
          {
            label: 'Email',
            key: 'email',
            placeholder: 'Digite seu email',
            onChange: handleChange,
          },
        ]}
        buttons={[
          {
            text: 'Enviar',
            variant: 'primary',
            onClick: handleClick,
            id: 'submit-button',
          },
          {
            text: 'Limpar',
            onClick: handleClick,
            id: 'clear-button',
          },
        ]}
        handleSend={handleClick}
      />,
    );

    expect(screen.getByText('Nome *')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();

    const inputs = container.querySelectorAll('eui-input');
    expect(inputs).toHaveLength(2);

    const buttons = container.querySelectorAll('eui-button');
    expect(buttons).toHaveLength(2);
    expect(buttons[0]?.getAttribute('text')).toBe('Enviar');
    expect(buttons[1]?.getAttribute('text')).toBe('Limpar');
  });
});
