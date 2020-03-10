import { CatEntity } from './cats.entity';
import { CatInput } from './cats.input';
import { CatQuery } from './cats.query';
import { CatsService } from './cats.service';
export declare class CatsResolvers {
    private readonly CatsService;
    constructor(CatsService: CatsService);
    getCats(): Promise<CatEntity[]>;
    createOrUpdateCats(Cat: CatInput): Promise<CatEntity>;
    filteredCats(args: {
        Cat: CatQuery;
    }): Promise<CatEntity[]>;
    delCat(args: {
        Cat: CatEntity;
    }): Promise<CatEntity[]>;
    getCat(id: number): Promise<CatEntity>;
}
