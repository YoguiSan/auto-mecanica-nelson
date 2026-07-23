import { render, screen } from '@testing-library/react';
import ChatbotDialog from '@amn/components/ChatbotDialog';

describe('ChatbotDialog component', () => {
  xtest('renders the dialog header and input', () => {
    render(<ChatbotDialog />);

    expect(screen.getByText(/Faça uma pergunta/i)).toBeInTheDocument();
    expect(screen.getByRole('input')).toBeInTheDocument();
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  });
});
