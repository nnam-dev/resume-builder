// src/adapters/mongoDB.ts
import { MongoClient, Db } from "mongodb";

export class MongoDB {
  private static readonly url = "mongodb://localhost:27017";
  private static readonly dbName = "resumeBuilder";
  private static dbInstance: Db | null = null;

  static async connect(): Promise<Db> {
    if (!this.dbInstance) {
      const client = await MongoClient.connect(this.url);
      this.dbInstance = client.db(this.dbName);
    }
    return this.dbInstance;
  }
}
