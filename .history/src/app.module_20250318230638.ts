import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ClientModule } from './modules/client/client.module';
import { DatabaseModule } from './config/database/database.module';


@Module({
  imports: [
    DatabaseModule.forRoot
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
    playground: false
  }),ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
