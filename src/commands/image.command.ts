import { Injectable } from '@nestjs/common';
import { ButtonBuilder, EmbedBuilder } from 'discord.js';
import { Context, SlashCommand, SlashCommandContext } from 'necord';

@Injectable()
export class ImageCommand {
  @SlashCommand({
    name: 'image',
    description: 'Responds with Sample Image embed!',
  })
  public async onImage(@Context() [interaction]: SlashCommandContext) {
    const embed = new EmbedBuilder()
      .setTitle('Sample Image')
      .setDescription('Test Description')
      .setImage(
        'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=3548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      );

    return interaction.reply({ embeds: [embed] });
  }
}
