import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
