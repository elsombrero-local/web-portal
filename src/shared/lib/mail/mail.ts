import { Transporter, createTransport } from "nodemailer";
import { logger } from "../logger/logger";

export class Mail {
  private static instance: Mail | null;

  private transporter!: Transporter;
  
  constructor() {
    this.transporter = createTransport({
      auth: {
        user: process.env.ADMIN_MAIL_USER,
        pass: process.env.ADMIN_MAIL_PASSWORD,
      },
      host: 'smtp.privateemail.com',
      port: 465,
      secure: true,
    });
  }

  public static getInstance() {
    if(!Mail.instance) Mail.instance = new Mail();
    return Mail.instance;
  }

  public async send(to: string, subject: string, html: string) {
    try {
      await this.transporter.sendMail({ 
        to, subject, html,
        sender: process.env.ADMIN_MAIL_USER, 
      });
    }
    catch(e) { logger.error('Error while sending mail') }
  }
}