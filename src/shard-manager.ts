import { ShardingManager } from 'discord.js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config();

// Create the Shard Manager
const manager = new ShardingManager(path.join(__dirname, 'main.js'), {
  token: process.env.DISCORD_TOKEN,
  totalShards: 'auto', // Automatically determine optimal shard count
  respawn: true, // Automatically restart crashed shards
});

// Log shard events
manager.on('shardCreate', (shard) => {
  shard.on('reconnecting', () => {
    console.log(`Reconnecting shard: [${shard.id}]`);
  });

  shard.on('spawn', () => {
    console.log(`Spawned shard: [${shard.id}]`);
  });

  shard.on('ready', () => {
    console.log(` Shard [${shard.id}] is ready`);
  });

  shard.on('death', () => {
    console.log(`Died shard: [${shard.id}]`);
  });

  shard.on('error', (err) => {
    console.log(`Error in  [${shard.id}] with : ${err} `);
    shard.respawn();
  });
});

// Spawn shards
manager.spawn();
