import { Injectable } from '@nestjs/common';
import { Context, SlashCommand, Options, SlashCommandContext } from 'necord';
import { TextDto } from './string.dto';

@Injectable()
export class StringCommand {
  @SlashCommand({
    name: 'string',
    description: 'Get length of text',
  })
  public async onLength(
    @Context() [interaction]: SlashCommandContext,
    @Options() { text }: TextDto,
  ) {
    return interaction.reply({ content: `Length of your text ${text.length}` });
  }
}
