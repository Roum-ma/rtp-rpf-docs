# Examples

Practical examples showing how to use RPF and RPT together.

## Basic Examples

<div class="examples-grid">

### Conditional Model Based on NBT

**Goal**: Show different models based on item NBT data

```json
{
  "model": {
    "type": "rpf:select",
    "property": "minecraft:custom_data",
    "cases": [
      {
        "when": { "tier": "legendary" },
        "model": { "type": "minecraft:model", "model": "item/legendary_sword" }
      },
      {
        "when": { "tier": "epic" },
        "model": { "type": "minecraft:model", "model": "item/epic_sword" }
      }
    ],
    "delegate": true
  }
}
```

---

### Dynamic Model by Custom Name

**Goal**: Change model based on item's display name

```json
{
  "model": {
    "type": "rpt:regex",
    "cases": [
      {
        "when": "^Flaming ",
        "model": { "type": "minecraft:model", "model": "item/fire_sword" }
      },
      {
        "when": "^Frozen ",
        "model": { "type": "minecraft:model", "model": "item/ice_sword" }
      }
    ]
  }
}
```

---

### Reusable Template

**Goal**: Share common configuration across multiple items

**Template** (`assets/mypack/rpt/templates/weapon.json`):
```json
{
  "model": {
    "type": "minecraft:composite",
    "models": [
      { "type": "minecraft:model", "model": "item/base" },
      {
        "type": "rpt:variable",
        "variable": "overlay"
      }
    ]
  },
  "rpt": {
    "variables": {
      "models": {
        "overlay": "item/effects/none"
      }
    }
  }
}
```

**Usage** (`assets/minecraft/items/diamond_sword.json`):
```json
{
  "model": {
    "type": "rpt:template",
    "template": "mypack:weapon"
  },
  "rpt": {
    "variables": {
      "models": {
        "overlay": "item/effects/legendary"
      }
    }
  }
}
```

</div>

## Advanced Examples

### Multi-Pack Compatibility

**Pack 1** (High priority - adds legendary variants):
```json
{
  "model": {
    "type": "rpf:select",
    "property": "minecraft:custom_data",
    "cases": [
      {
        "when": { "legendary": true },
        "model": { "type": "minecraft:model", "model": "pack1:legendary" }
      }
    ],
    "delegate": true
  }
}
```

**Pack 2** (Lower priority - adds damaged variants):
```json
{
  "model": {
    "type": "rpf:select",
    "property": "minecraft:damage",
    "cases": [
      {
        "when": { "min": 100 },
        "model": { "type": "minecraft:model", "model": "pack2:damaged" }
      }
    ],
    "delegate": true
  }
}
```

**Result**: Items can be both legendary AND damaged!

### Complex Conditional Chain

```json
{
  "model": {
    "type": "minecraft:select",
    "property": {
      "type": "rpt:has_flag",
      "flag": "enchanted"
    },
    "cases": [
      {
        "when": true,
        "model": {
          "type": "rpt:regex",
          "cases": [
            {
              "when": "^Fire ",
              "model": { "type": "minecraft:model", "model": "item/fire_enchanted" }
            },
            {
              "when": "^Ice ",
              "model": { "type": "minecraft:model", "model": "item/ice_enchanted" }
            }
          ],
          "fallback": { "type": "minecraft:model", "model": "item/enchanted" }
        }
      }
    ],
    "fallback": { "type": "minecraft:model", "model": "item/diamond_sword" }
  }
}
```

This checks:
1. Is the item enchanted (custom flag)?
2. If yes, check the name for Fire/Ice prefix
3. Use appropriate enchanted variant
4. Fallback to generic enchanted or base model

### Dynamic Weapon System

Create a complete weapon system with RPT:

**Template** (`assets/mypack/rpt/templates/dynamic_weapon.json`):
```json
{
  "model": {
    "type": "minecraft:composite",
    "models": [
      {
        "type": "rpt:variable",
        "variable": "base_model"
      },
      {
        "type": "minecraft:select",
        "property": {
          "type": "rpt:has_flag",
          "flag": "show_enchant_glow"
        },
        "cases": [
          {
            "when": true,
            "model": {
              "type": "rpt:variable",
              "variable": "enchant_overlay"
            }
          }
        ]
      },
      {
        "type": "minecraft:select",
        "property": "minecraft:damage",
        "cases": [
          {
            "when": { "min": 50 },
            "model": {
              "type": "rpt:variable",
              "variable": "damaged_overlay"
            }
          }
        ]
      }
    ]
  },
  "rpt": {
    "variables": {
      "flags": {
        "show_enchant_glow": false
      },
      "models": {
        "base_model": "item/diamond_sword",
        "enchant_overlay": "item/effects/enchant_glow",
        "damaged_overlay": "item/effects/cracks"
      }
    }
  }
}
```

**Usage**:
```json
{
  "model": {
    "type": "rpt:template",
    "template": "mypack:dynamic_weapon"
  },
  "rpt": {
    "variables": {
      "flags": {
        "show_enchant_glow": true
      },
      "models": {
        "base_model": "item/netherite_sword"
      }
    }
  }
}
```

## Real-World Use Cases

### Custom RPG Weapons

Use NBT data from plugins to show different weapon tiers:

```json
{
  "model": {
    "type": "rpf:select",
    "property": "minecraft:custom_data",
    "cases": [
      { "when": { "rpg_tier": 1 }, "model": { ... } },
      { "when": { "rpg_tier": 2 }, "model": { ... } },
      { "when": { "rpg_tier": 3 }, "model": { ... } }
    ],
    "delegate": true
  }
}
```

### Named Item Variants

Create special models for named items (from anvils):

```json
{
  "model": {
    "type": "rpt:regex",
    "cases": [
      {
        "when": "Excalibur",
        "model": { "type": "minecraft:model", "model": "item/excalibur" }
      },
      {
        "when": "Mjolnir",
        "model": { "type": "minecraft:model", "model": "item/mjolnir" }
      }
    ]
  }
}
```

### Quest Items

Show different models for quest items at different stages:

```json
{
  "model": {
    "type": "rpf:select",
    "property": "minecraft:custom_data",
    "cases": [
      {
        "when": { "quest_id": "main_quest", "stage": 1 },
        "model": { "type": "minecraft:model", "model": "item/quest/stage1" }
      },
      {
        "when": { "quest_id": "main_quest", "stage": 2 },
        "model": { "type": "minecraft:model", "model": "item/quest/stage2" }
      }
    ],
    "delegate": true
  }
}
```

## Performance Tips

1. **Cache regex patterns** - RPT automatically compiles and caches patterns
2. **Use delegation** - Don't override every item if you only need specific ones
3. **Keep conditions simple** - Complex nested conditions can impact performance
4. **Test with many items** - Ensure your pack performs well with inventory full of items

## Need More Help?

- Check the [RPF Pack Developers Guide](/rpf/pack-developers)
- Read the [RPT Pack Developers Guide](/rpt/pack-developers)
- Join our Discord for support
