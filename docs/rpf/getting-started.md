# Getting Started with RPF

Resource Packs Fusion (RPF) is a Minecraft mod that enables multiple resource packs to work together seamlessly through a smart delegation system.

## What is RPF?

In vanilla Minecraft, when multiple resource packs modify the same item, only the top-priority pack's model is used. RPF changes this by allowing packs to:

- **Selectively override** specific models based on conditions
- **Delegate** to lower-priority packs for other cases
- **Chain multiple packs** together for complex behaviors

## Installation

1. Download RPF from [Modrinth](https://modrinth.com) or [CurseForge](https://curseforge.com)
2. Place the mod file in your `mods` folder
3. Requires Fabric API

## Supported Versions

- Minecraft 1.21.8
- Minecraft 1.21.10
- Minecraft 1.21.11+

## Quick Example

Here's a simple example of an RPF model that overrides diamond swords with a "legendary" tag:

```json
{
  "model": {
    "type": "rpf:select",
    "property": "minecraft:custom_data",
    "cases": [
      {
        "when": { "legendary": true },
        "model": {
          "type": "minecraft:model",
          "model": "item/legendary_sword"
        }
      }
    ],
    "delegate": true
  }
}
```

This will:
1. Check if the item has `legendary: true` in custom data
2. If yes, show the `legendary_sword` model
3. If no, delegate to the next pack (or vanilla)

## Next Steps

- Learn [how delegation works](/rpf/how-it-works)
- Read the [Pack Developers Guide](/rpf/pack-developers)
- Explore [model types](/rpf/model-types)
