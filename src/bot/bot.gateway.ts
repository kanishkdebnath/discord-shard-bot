import { Injectable, Logger } from '@nestjs/common';
import { Context, On } from 'necord';
import { Client } from 'discord.js';

@Injectable()
export class BotGateway {
  private readonly logger = new Logger(BotGateway.name);

  @On('ready')
  async onReady(@Context() [client]: [Client]) {
    this.logger.log(`Bot logged in as ${client.user?.tag}`);

    // Log shard information
    const shardId = client.shard?.ids[0] ?? 'N/A';
    const totalShards = client.shard?.count ?? 1;
    this.logger.log(`Shard ID: ${shardId}, Total Shards: ${totalShards}`);
  }
}
