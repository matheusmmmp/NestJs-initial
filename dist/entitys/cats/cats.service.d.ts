import { Repository } from 'typeorm';
import { CatEntity } from './cats.entity';
import { CatQuery } from './cats.query';
export declare class CatsService {
    private readonly CatRepository;
    constructor(CatRepository: Repository<CatEntity>);
    createOrUpdateCat(Cat: CatEntity): Promise<CatEntity>;
    findAll(): Promise<CatEntity[]>;
    findAllFiltered(Cat: CatQuery): Promise<CatEntity[]>;
    delCat(Cat: CatEntity): Promise<CatEntity[]>;
    findOne(id: number): Promise<CatEntity>;
}
