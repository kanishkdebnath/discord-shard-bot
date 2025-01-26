import { Module } from '@nestjs/common';
import { PingCommand } from './ping.command';
import { ImageCommand } from './image.command';
import { StringCommand } from './string/string.command';
import { UtilsCommands } from './util/util-commands.service';
import { ButtonCommand } from './button.command';

@Module({
  providers: [
    PingCommand,
    ImageCommand,
    StringCommand,
    UtilsCommands,
    ButtonCommand,
  ],
})
export class CommandsModule {}
