import { ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DogEntity } from './dog.entity';
import { DogInput } from './dogs.input';
import { DogQuery } from './dogs.query';
import { DogsService } from './dogs.service';

@Resolver('Dog')
export class DogsResolvers {

    constructor(private readonly DogsService: DogsService) {
    }

    @Query('Dogs')
    async getDogs(): Promise<DogEntity[]> {
        return await this.DogsService.findAll();
    }
    @Mutation('createOrUpdateDogs')
    async createOrUpdateDogs(
        @Args('Dog', new ValidationPipe()) Dog: DogInput): Promise<DogEntity> {
        const insertDatabase = JSON.parse(JSON.stringify(Dog));
        return this.DogsService.createOrUpdateDog(insertDatabase);
    }

    @Query('filteredDogs')
    async filteredDogs(@Args() args: { Dog: DogQuery }): Promise<DogEntity[]> {
        return this.DogsService.findAllFiltered(args.Dog);
    }

    @Mutation('delDog')
    async delDog(args: { Dog: DogEntity }): Promise<DogEntity[]> {
        return this.DogsService.delDog(args.Dog);
    }

    @Query('Dog')
    async getDog(@Args('id', ParseIntPipe) id: number): Promise<DogEntity> {
        return await this.DogsService.findOne(id);
    }
}
