import { model, Model, Document, models } from 'mongoose';
import * as express from 'express';
import { recipeModel } from '../db/models/favoriteRecipeModel';

type MoodelDB = Model<Document>;

class Service {
  constructor(private model: MoodelDB) {
    this.findAll = this.findAll.bind(this);
    this.createOne = this.createOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
  }
  public async findAll(): Promise<any[]> {
    return this.model.find();
  }

  public async createOne(payload: any): Promise<any> {
    return this.model.create(payload);
  }

  public async deleteOne(id: any): Promise<any> {
    return this.model.deleteOne({ _id: id });
  }
}

class Controller {
  constructor(private service: Service) {
    this.findAll = this.findAll.bind(this);
    this.createOne = this.createOne.bind(this);
    this.deleteOne = this.deleteOne.bind(this);
  }
  public findAll(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    (async () => {
      const docs = await this.service.findAll();
      return res.send(docs);
    })().catch(next);
  }

  public createOne(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    (async () => {
      const docs = await this.service.createOne(req.body);
      return res.send(docs);
    })().catch(next);
  }

  public deleteOne(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    (async () => {
      const docs = await this.service.deleteOne(req.params['id']);
      return res.send(docs);
    })().catch(next);
  }
}

const service = new Service(recipeModel);
export const favoriteRecipeController = new Controller(service);
