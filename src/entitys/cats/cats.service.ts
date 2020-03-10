import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatEntity } from './cats.entity';
import { CatQuery } from './cats.query';

@Injectable()
export class CatsService {

    constructor(
        @InjectRepository(CatEntity)
        private readonly CatRepository: Repository<CatEntity>,
    ) { }

    createOrUpdateCat(Cat: CatEntity): Promise<CatEntity> {
        const entity = Object.assign(new CatEntity(), Cat);
        return this.CatRepository.save(entity);
    }

    findAll(): Promise<CatEntity[]> {
        return this.CatRepository.find();
    }

    findAllFiltered(Cat: CatQuery): Promise<CatEntity[]> {
        const filter = JSON.parse(JSON.stringify(Cat));
        return this.CatRepository.find({ where: filter });
    }

    delCat(Cat: CatEntity): Promise<CatEntity[]> {
        const entity = JSON.parse(JSON.stringify(Cat));
        return this.CatRepository.remove(entity);
    }

    findOne(id: number): Promise<CatEntity> {
        return this.CatRepository.findOne(id);
    }
}
