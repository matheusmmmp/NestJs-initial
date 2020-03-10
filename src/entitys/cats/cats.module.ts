import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatEntity } from './cats.entity';
import { CatsResolvers } from './cats.resolver';
import { CatsService } from './cats.service';

@Module({
    imports: [TypeOrmModule.forFeature([CatEntity])],
    providers: [CatsService, CatsResolvers],
    exports: [CatsService],
})
export class CatsModule { }
