import {
  Context,
  createCommandGroupDecorator,
  Options,
  SlashCommandContext,
  Subcommand,
} from 'necord';
import { TextDto } from '../string/string.dto';

export const UtilsCommandDecorator = createCommandGroupDecorator({
  name: 'utils',
  description: 'Utils group',
});

@UtilsCommandDecorator()
export class UtilsCommands {
  @Subcommand({
    name: 'ping',
    description: 'Ping-pong command',
  })
  public async onPing(@Context() [interaction]: SlashCommandContext) {
    const ping = interaction.client.ws.ping;
    return interaction.reply(`Pong! 🏓 Websocket Latency: ${ping}ms`);
  }

  @Subcommand({
    name: 'pang',
    description: 'Ping-pang command',
  })
  public async onPang(@Context() [interaction]: SlashCommandContext) {
    const ping = interaction.client.ws.ping;
    return interaction.reply(`Pang! 🫠 Websocket Latency: ${ping}ms`);
  }

  @Subcommand({
    name: 'length',
    description: 'String length command',
  })
  public async onLength(
    @Context() [interaction]: SlashCommandContext,
    @Options() { text }: TextDto,
  ) {
    return interaction.reply({ content: `Length of your text ${text.length}` });
  }
}
