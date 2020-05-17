interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

// DTO - Data Transfer Object (DDD)
interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMessageDTO): string;
}

class EmailService implements IEmailService {
  // Destructuring the parameters
  sendMail({ to, message }: IMessageDTO) {
    return `Email enviado para ${to.name}: ${message.subject}`;
  }
}

export default new EmailService();
