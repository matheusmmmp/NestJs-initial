import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogEntity } from './dog.entity';
import { DogsResolvers } from './dogs.resolver';
import { DogsService } from './dogs.service';

@Module({
    imports: [TypeOrmModule.forFeature([DogEntity])],
    providers: [DogsService, DogsResolvers],
    exports: [DogsService],
})
export class DogsModule { }
