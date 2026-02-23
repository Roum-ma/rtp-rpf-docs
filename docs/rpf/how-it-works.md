# How RPF Works

Understanding the delegation system is key to creating effective RPF resource packs.

## The Problem

In vanilla Minecraft, resource pack priority is simple but inflexible:

```
Pack Priority (high to low):
1. Player's Custom Pack
2. Another Pack
3. Vanilla Resources
```

If both Pack 1 and Pack 2 modify the same item, **only Pack 1's model is used**. Pack 2's model is completely ignored.

## The Solution: Delegation

RPF introduces a **delegation system** that allows packs to:

1. Check if an item meets certain conditions
2. If **yes**: Use this pack's custom model
3. If **no**: Delegate to the next pack in the chain

```
┌─────────────────┐
│   Pack 1        │
│ Check: legendary│  ✗ Not legendary
│     tag?        │  → Delegate to Pack 2
└─────────────────┘
        ↓
┌─────────────────┐
│   Pack 2        │
│ Check: damaged? │  ✓ Is damaged
│                 │  → Use damaged model
└─────────────────┘
```

## Delegation Chain

When rendering an item, RPF processes packs in order:

```
Item needs model
    ↓
Pack 1: Check conditions
    ├─ Match → Use Pack 1 model ✓
    └─ No match → Delegate
            ↓
        Pack 2: Check conditions
            ├─ Match → Use Pack 2 model ✓
            └─ No match → Delegate
                    ↓
                Pack 3: Check conditions
                    ├─ Match → Use Pack 3 model ✓
                    └─ No match → Delegate
                            ↓
                        Vanilla model ✓
```

## Breaking the Chain

You can stop delegation with `delegate: false`:

```json
{
  "type": "rpf:select",
  "property": "minecraft:custom_data",
  "cases": [
    {
      "when": { "custom": true },
      "model": { "type": "minecraft:model", "model": "item/custom" }
    }
  ],
  "delegate": false  // ← Stops delegation
}
```

Now if no case matches, this model is used anyway instead of delegating to the next pack.

## Resolvers

RPF uses different **resolvers** to determine how models are selected:

### V1 Resolver (Default)

The standard delegation system described above. Processes packs sequentially.

### Vanilla Resolver

Disables delegation - works like vanilla Minecraft (top pack wins).

### Experimental Resolver

Uses a scoring system to select the best model based on how many conditions match.

You can switch resolvers with:
```
/rpf resolver set <resolver_id>
```

## Performance

RPF is optimized for performance:

- ✅ **Sub-millisecond overhead** per item
- ✅ **Efficient caching** of model lookups
- ✅ **No impact** on FPS even with many packs

## Next Steps

- Learn about [model types](/rpf/model-types)
- Read the [Pack Developers Guide](/rpf/pack-developers)
- Enable [debug logging](/rpf/debug) to see delegation in action
