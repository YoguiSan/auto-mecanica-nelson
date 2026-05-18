import { render, screen } from '@testing-library/react';
import ChatbotDialog from '@amn/components/ChatbotDialog';

describe('ChatbotDialog component', () => {
  it('renders the dialog header and input', () => {
    render(<ChatbotDialog />);

    expect(screen.getByText(/Faça uma pergunta/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  });
});
