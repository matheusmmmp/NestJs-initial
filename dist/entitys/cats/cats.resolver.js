"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const cats_input_1 = require("./cats.input");
const cats_service_1 = require("./cats.service");
let CatsResolvers = class CatsResolvers {
    constructor(CatsService) {
        this.CatsService = CatsService;
    }
    async getCats() {
        return await this.CatsService.findAll();
    }
    async createOrUpdateCats(Cat) {
        const insertDatabase = JSON.parse(JSON.stringify(Cat));
        return this.CatsService.createOrUpdateCat(insertDatabase);
    }
    async filteredCats(args) {
        return this.CatsService.findAllFiltered(args.Cat);
    }
    async delCat(args) {
        return this.CatsService.delCat(args.Cat);
    }
    async getCat(id) {
        return await this.CatsService.findOne(id);
    }
};
__decorate([
    graphql_1.Query('Cats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CatsResolvers.prototype, "getCats", null);
__decorate([
    graphql_1.Mutation('createOrUpdateCats'),
    __param(0, graphql_1.Args('Cat', new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cats_input_1.CatInput]),
    __metadata("design:returntype", Promise)
], CatsResolvers.prototype, "createOrUpdateCats", null);
__decorate([
    graphql_1.Query('filteredCats'),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatsResolvers.prototype, "filteredCats", null);
__decorate([
    graphql_1.Mutation('delCat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CatsResolvers.prototype, "delCat", null);
__decorate([
    graphql_1.Query('Cat'),
    __param(0, graphql_1.Args('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CatsResolvers.prototype, "getCat", null);
CatsResolvers = __decorate([
    graphql_1.Resolver('Cat'),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsResolvers);
exports.CatsResolvers = CatsResolvers;
//# sourceMappingURL=cats.resolver.js.map