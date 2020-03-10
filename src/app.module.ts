import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './entitys/cats/cats.module';

@Module({
  imports: [

    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.DB_TYPE,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      extra: {
        socketPath: process.env.DB_HOST,
      },
      entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    GraphQLModule.forRoot({
      // Enable header on graphql
      context: ({ req }) => ({ req }),
      // @ts-ignore
      debug: process.env.DEBUG,
      // @ts-ignore
      playground: process.env.PLAYGROUND,
      typePaths: [
        './**/*.types.graphql',
      ],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
