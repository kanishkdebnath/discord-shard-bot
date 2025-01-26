import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommandsModule } from './commands/commands.module';
import { ConfigModule } from '@nestjs/config';
import { NecordModule } from 'necord';
import { IntentsBitField } from 'discord.js';
import { BotGateway } from './bot/bot.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    NecordModule.forRoot({
      token: process.env.DISCORD_TOKEN as string,
      intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
      ],
      shards: 'auto', // Enable automatic sharding
      development: ['1229424343948197951'],
    }),
    CommandsModule,
  ],
  controllers: [AppController],
  providers: [AppService, BotGateway],
})
export class AppModule {}
