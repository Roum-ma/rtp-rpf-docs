# Getting Started with RPT

Resource Packs Tools (RPT) adds powerful features to Minecraft resource packs:

- **Templates**: Reusable model configurations
- **Variables**: Dynamic values for models
- **Regex Models**: Match custom names with patterns
- **Conditional Properties**: Custom conditions for model selection

## Installation

1. Download RPT from [Modrinth](https://modrinth.com) or [CurseForge](https://curseforge.com)
2. Place the mod file in your `mods` folder
3. Requires Fabric API and **RPF** (Resource Packs Fusion)

::: warning Dependency
RPT requires RPF to function. Make sure both mods are installed.
:::

## Supported Versions

- Minecraft 1.21.8
- Minecraft 1.21.10
- Minecraft 1.21.11+

## Quick Example

### Using a Template

Create a template at `assets/mypack/rpt/templates/weapon.json`:

```json
{
  "model": {
    "type": "minecraft:model",
    "model": "item/diamond_sword"
  },
  "rpt": {
    "variables": {
      "strings": {
        "rarity": "common"
      },
      "numbers": {
        "damage_bonus": 0
      }
    }
  }
}
```

Then use it in an item model:

```json
{
  "model": {
    "type": "rpt:template",
    "template": "mypack:weapon"
  }
}
```

### Using Variables

```json
{
  "model": {
    "type": "rpt:variable",
    "variable": "custom_model"
  },
  "rpt": {
    "variables": {
      "models": {
        "custom_model": "item/diamond"
      }
    }
  }
}
```

### Regex Matching

```json
{
  "model": {
    "type": "rpt:regex",
    "cases": [
      {
        "when": ["^Epic ", "^Legendary "],
        "model": { "type": "minecraft:model", "model": "item/epic_version" }
      },
      {
        "when": "^Broken ",
        "model": { "type": "minecraft:model", "model": "item/broken_version" }
      }
    ]
  }
}
```

## Next Steps

- Learn about [Templates](/rpt/templates)
- Understand [Variables](/rpt/variables)
- Explore [Regex Models](/rpt/regex)
- Check the [Pack Developers Guide](/rpt/pack-developers)
