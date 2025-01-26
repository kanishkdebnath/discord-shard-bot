import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, SlashCommandContext } from 'necord';

@Injectable()
export class PingCommand {
  @SlashCommand({
    name: 'ping',
    description: 'Responds with Pong!',
  })
  public async onPing(@Context() [interaction]: SlashCommandContext) {
    const ping = interaction.client.ws.ping;
    return interaction.reply(`Pong! 🏓 Websocket Latency: ${ping}ms`);
  }
}
