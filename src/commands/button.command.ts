import { Injectable } from '@nestjs/common';
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ComponentType,
} from 'discord.js';
import {
  Ctx,
  SlashCommand,
  SlashCommandContext,
  Button,
  ButtonContext,
  Context,
} from 'necord';

@Injectable()
export class ButtonCommand {
  i = 0;
  @SlashCommand({
    name: 'vote',
    description: 'Create a voting poll',
  })
  async onVote(@Context() [ctx]: SlashCommandContext) {
    // Create buttons
    const agreeButton = new ButtonBuilder()
      .setCustomId('vote_agree')
      .setLabel('Agree')
      .setStyle(ButtonStyle.Success);

    const disagreeButton = new ButtonBuilder()
      .setCustomId('vote_disagree')
      .setLabel('Disagree')
      .setStyle(ButtonStyle.Danger);

    // Create action row with buttons
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      agreeButton,
      disagreeButton,
    );

    // Send message with buttons
    return ctx.reply({
      content: 'Do you agree with this proposal?',
      components: [row],
    });
  }

  @Button('vote_agree')
  async onAgree(@Ctx() [ctx]: ButtonContext) {
    // Handle agree button click
    return ctx.reply({
      content: `${ctx.user.username} voted Agree! ✅ ${++this.i}`,
      ephemeral: true, // Only visible to the user who clicked
    });
  }

  @Button('vote_disagree')
  async onDisagree(@Ctx() [ctx]: ButtonContext) {
    // Handle disagree button click
    return ctx.reply({
      content: `${ctx.user.username} voted Disagree! ❌ ${--this.i}`,
      ephemeral: true,
    });
  }
}
