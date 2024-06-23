import mongoose, { Mongoose } from "mongoose";

type Repositories = 'main'

type DataRepository = {
  uri: string,
  instance: Repositories,
}

export const Repository: {[key: string]: DataRepository} = {
  MAIN: {
    uri: process.env.DATABASE_URI || '',
    instance: 'main',
  },
}

export class Database {
  private static main: Mongoose | null   = null;

  private static getRepository(repository: Repositories): Mongoose | null {
    return Database[repository]
  }

  public static async initialize(repository: DataRepository = Repository['MAIN']): Promise<Mongoose> {
    try{
      let instance = Database.getRepository(repository.instance);
      if(!instance) {
        instance = await this.connect(repository.uri);
        Database[repository.instance] = instance;
      }
      return instance;
    }catch(e) { throw e }
  }

  private static async connect(uri: string) {
    try{ return await mongoose.connect(uri, {}) } 
    catch(e) { throw e }
  }

}