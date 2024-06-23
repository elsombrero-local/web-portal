import { AuthSession } from "../../models/session.model";
import { Database } from "../database/database";
import { logger } from "../logger/logger";
import { Mail } from "../mail/mail";

const CODE_LIFE_TIME = 60000

class _Auth {
  constructor() {}

  public async initialize() {
    try {
      await Database.initialize()
    } catch(e) { logger.error("An error occured in connecting database") }
  }

  public async isLogged(session_id?: string): Promise<boolean> {
    try {
      const session = await AuthSession.findById(session_id);
      return !!session;
    }catch(e) { return false; }
  }

  public async login(send: boolean = true) {
    try{
      const email = `${process.env.SUBSCRIBED_MAIL_ADDRESS}`, code = this.generate();
      await AuthSession.deleteOne({email});
      const session = new AuthSession({email, code});
      await session.save();
      if(send) await this.sendCode(email, code);
    }catch(e) { throw new Error('An error occured please try again!'); }
  }

  public async verify(code: string): Promise<string | null> {
    try {
      const session = await AuthSession.findOne({email: process.env.SUBSCRIBED_MAIL_ADDRESS});
      const duration = Date.now() - new Date(session.createdAt).getTime();
      if(session?.code === code && duration <= CODE_LIFE_TIME) return session._id.toString();
    } catch(e) { logger.error('An user tries to connect with a wrong code!')  }
    return null;
  }

  public async sendCode(email:string, code: string) {
    const mail = Mail.getInstance();
    await mail.send(email, 'Auth Code', code);
  }

  private generate(length: number = 4): string {
    const min = 0, max = 9;
    let code = ''
    for(let i = 0; i < length; i++) 
      code = `${code}${Math.floor(min + Math.random() * max)}`;
    return code
  }

}

export const Auth = async () => {
  try{
    const auth = new _Auth();
    await auth.initialize();
    return auth;
  }catch(e) { throw e; }
}