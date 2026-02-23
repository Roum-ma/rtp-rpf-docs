# RPT Pack Developers Guide

This guide covers all RPT features for resource pack creators.

## The `rpt` Field

RPT adds a special `rpt` field to item models for custom data:

```json
{
  "model": {
    "type": "minecraft:model",
    "model": "item/diamond"
  },
  "rpt": {
    "custom_flags": ["foo", "bar"],
    "variables": {
      "strings": {
        "rarity": "legendary"
      },
      "numbers": {
        "level": 42
      },
      "flags": {
        "is_enchanted": true
      },
      "models": {
        "fallback": "minecraft:iron_ingot"
      }
    }
  }
}
```

## Item Models

### `rpt:template` Model

Templates allow you to reuse model configurations across multiple items.

**In item model** (`assets/minecraft/items/diamond_sword.json`):
```json
{
  "model": {
    "type": "rpt:template",
    "template": "mypack:weapon_template"
  }
}
```

**Template file** (`assets/mypack/rpt/templates/weapon_template.json`):
```json
{
  "model": {
    "type": "minecraft:model",
    "model": "item/diamond"
  },
  "rpt": {
    "variables": {
      "numbers": {
        "damage": 10
      }
    }
  }
}
```

### `rpt:variable` Model

Use variables to select models dynamically:

```json
{
  "model": {
    "type": "rpt:variable",
    "variable": "weapon_model"
  },
  "rpt": {
    "variables": {
      "models": {
        "weapon_model": "item/diamond_sword"
      }
    }
  }
}
```

### `rpt:regex` Model

Match item names with regex patterns:

```json
{
  "model": {
    "type": "rpt:regex",
    "cases": [
      {
        "when": ["^Hello ", "^Привет"],
        "model": { "type": "minecraft:model", "model": "item/greeting" }
      },
      {
        "when": "123",
        "model": { "type": "minecraft:model", "model": "item/numbers" }
      }
    ]
  }
}
```

The regex patterns are matched against the item's **custom name** (if present).

## Conditional Properties

RPT adds custom conditional properties for use with `minecraft:select` models:

### `rpt:has_flag`

Check if a custom flag is set:

```json
{
  "type": "minecraft:select",
  "property": {
    "type": "rpt:has_flag",
    "flag": "legendary"
  },
  "cases": [
    {
      "when": true,
      "model": { "type": "minecraft:model", "model": "item/legendary" }
    }
  ]
}
```

### `rpt:match`

Match custom name with regex:

```json
{
  "type": "minecraft:select",
  "property": {
    "type": "rpt:match",
    "regex": "^Epic .+"
  },
  "cases": [
    {
      "when": true,
      "model": { "type": "minecraft:model", "model": "item/epic" }
    }
  ]
}
```

## Variable Types

RPT supports four types of variables:

### Strings
```json
"variables": {
  "strings": {
    "owner_name": "Steve",
    "description": "A legendary weapon"
  }
}
```

### Numbers
```json
"variables": {
  "numbers": {
    "damage_bonus": 15.5,
    "level": 50
  }
}
```

### Flags (Booleans)
```json
"variables": {
  "flags": {
    "is_legendary": true,
    "can_break": false
  }
}
```

### Models
```json
"variables": {
  "models": {
    "base_model": "minecraft:diamond_sword",
    "overlay": "mypack:effects/glow"
  }
}
```

## Best Practices

1. **Use templates** for repeated configurations
2. **Name variables clearly** - use descriptive names
3. **Test regex patterns** at [regex101.com](https://regex101.com) before using them
4. **Document your variables** in external documentation
5. **Keep patterns simple** - complex regex can impact performance

## Common Patterns

### Dynamic Weapons by Name

```json
{
  "model": {
    "type": "rpt:regex",
    "cases": [
      {
        "when": "^Fire ",
        "model": { "type": "minecraft:model", "model": "item/fire_sword" }
      },
      {
        "when": "^Ice ",
        "model": { "type": "minecraft:model", "model": "item/ice_sword" }
      }
    ],
    "fallback": { "type": "minecraft:model", "model": "item/diamond_sword" }
  }
}
```

### Template with Overrides

Base template for all weapons, then override specific items:

```json
{
  "model": {
    "type": "rpt:template",
    "template": "mypack:base_weapon"
  },
  "rpt": {
    "variables": {
      "numbers": {
        "damage": 20
      }
    }
  }
}
```

### Conditional Loading

Use flags to enable/disable features:

```json
{
  "type": "minecraft:select",
  "property": {
    "type": "rpt:has_flag",
    "flag": "premium"
  },
  "cases": [
    {
      "when": true,
      "model": { "type": "rpt:template", "template": "mypack:premium" }
    }
  ],
  "fallback": { "type": "rpt:template", "template": "mypack:basic" }
}
```
