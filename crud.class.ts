import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { ObjectID } from 'typeorm/driver/mongodb/typings';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class SimpleCrud<TEntity> {
  constructor(private readonly repo: Repository<TEntity>) {}

  findOne(opts: FindOneOptions<TEntity>) {
    return this.repo.findOne(opts);
  }

  findOneOrFail(opts: FindOneOptions<TEntity>) {
    return this.repo.findOneOrFail(opts);
  }

  find(opts?: FindManyOptions<TEntity>) {
    return this.repo.find(opts);
  }

  update(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectID
      | ObjectID[]
      | FindOptionsWhere<TEntity>,
    partialEntity: QueryDeepPartialEntity<TEntity>,
  ) {
    return this.repo.update(criteria, partialEntity);
  }

  delete(
    criteria:
      | string
      | string[]
      | number
      | number[]
      | Date
      | Date[]
      | ObjectID
      | ObjectID[]
      | FindOptionsWhere<TEntity>,
  ) {
    return this.repo.delete(criteria);
  }

  create(entity: DeepPartial<TEntity>) {
    return this.repo.save(entity);
  }

  createMany(entity: DeepPartial<TEntity>[]) {
    return this.repo.save(entity);
  }
}
