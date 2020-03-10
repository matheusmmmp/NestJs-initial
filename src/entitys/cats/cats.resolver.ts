import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatEntity } from './cats.entity';
import { CatInput } from './cats.input';
import { CatQuery } from './cats.query';
import { CatsService } from './cats.service';

@Resolver('Cat')
export class CatsResolvers {

    constructor(private readonly CatsService: CatsService) {
    }

    @Query('Cats')
    async getCats(): Promise<CatEntity[]> {
        return await this.CatsService.findAll();
    }
    @Mutation('createOrUpdateCats')
    async createOrUpdateCats(
        @Args('Cat', new ValidationPipe()) Cat: CatInput): Promise<CatEntity> {
        const insertDatabase = JSON.parse(JSON.stringify(Cat));
        return this.CatsService.createOrUpdateCat(insertDatabase);
    }

    @Query('filteredCats')
    async filteredCats(@Args() args: { Cat: CatQuery }): Promise<CatEntity[]> {
        return this.CatsService.findAllFiltered(args.Cat);
    }

    @Mutation('delCat')
    async delCat(args: { Cat: CatEntity }): Promise<CatEntity[]> {
        return this.CatsService.delCat(args.Cat);
    }

    @Query('Cat')
    async getCat(@Args('id', ParseIntPipe) id: number): Promise<CatEntity> {
        return await this.CatsService.findOne(id);
    }
}
