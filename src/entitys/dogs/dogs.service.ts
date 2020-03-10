import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DogEntity } from './dog.entity';
import { DogQuery } from './dogs.query';

@Injectable()
export class DogsService {

    constructor(
        @InjectRepository(DogEntity)
        private readonly DogRepository: Repository<DogEntity>,
    ) { }

    createOrUpdateDog(Dog: DogEntity): Promise<DogEntity> {
        const entity = Object.assign(new DogEntity(), Dog);
        return this.DogRepository.save(entity);
    }

    findAll(): Promise<DogEntity[]> {
        return this.DogRepository.find();
    }

    findAllFiltered(Dog: DogQuery): Promise<DogEntity[]> {
        const filter = JSON.parse(JSON.stringify(Dog));
        return this.DogRepository.find({ where: filter });
    }

    delDog(Dog: DogEntity): Promise<DogEntity[]> {
        const entity = JSON.parse(JSON.stringify(Dog));
        return this.DogRepository.remove(entity);
    }

    findOne(id: number): Promise<DogEntity> {
        return this.DogRepository.findOne(id);
    }
}
