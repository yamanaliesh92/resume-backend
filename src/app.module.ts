import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './database/databae.module';
import { EductionModule } from './eduction/eduction.module';
import { ExperienceModule } from './experience/experience.module';
import { LanguageModule } from './languages/Language.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    EductionModule,
    DataBaseModule,
    ExperienceModule,
    LanguageModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
      },
      // autoSchemaFile: join(process.cwd(), 'src/user/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
