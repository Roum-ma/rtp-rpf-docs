# RPF Pack Developers Guide

This guide explains how to create resource packs that work with RPF's delegation system.

## How Delegation Works

When the game needs to select a model for rendering, it goes through each resource pack in order and checks whether the model meets certain conditions. If it does not, the mod "delegates" this task to the next pack, and so on until it selects the vanilla pack.

<div align="center">
  <img src="https://i.postimg.cc/GmZsTRrg/Untitled-Diagram-Page-1-drawio.png" alt="delegation scheme" style="max-width: 600px;">
</div>

## Manipulating Delegation

RPF provides several ways to control delegation behavior:

### `select` and `range_select` Models

Both models have a new parameter `delegate` (default: `true`):

```json
{
  "type": "rpf:select",
  "property": "minecraft:custom_data",
  "cases": [
    {
      "when": { "special": true },
      "model": { "type": "minecraft:model", "model": "item/special" }
    }
  ],
  "delegate": false  // Will NOT delegate if no case matches
}
```

- **`delegate: true`** (default): If no case matches, delegate to next pack
- **`delegate: false`**: If no case matches, break delegation and use this model

### `composite` Model (v1.2.0+)

The `composite` model has a new parameter `delegate_strategy`:

```json
{
  "type": "minecraft:composite",
  "models": [
    { "type": "rpf:select", "delegate": true, ... },
    { "type": "rpf:select", "delegate": false, ... }
  ],
  "delegate_strategy": "one_do_delegate"
}
```

**Strategies:**

1. **`one_do_delegate`** (default): If ANY child model delegates, the entire composite delegates
2. **`one_cancel_delegate`**: If ANY child model does NOT delegate, the entire composite does NOT delegate
3. **`not_delegate`**: The composite NEVER delegates, regardless of children

## Non-Obvious Behaviors

- **Conditional models**: If the `conditional` model is root, its `on_false` model is considered a "fallback"
- **Empty models**: `empty` model NEVER delegates
- **Model links**: The `model` item model will delegate if:
  1. Model is a "fallback"
  2. Model link namespace equals item model id namespace from `item_model` component
  3. Model link path contains item model id path from `item_model` component

## Logging and Debug

Enable debug logging to see how model selection works:

```
/rpf_toggle_debug
```

### Log Types

- **`ALLOW_UPDATE`**: Model passed test and will be rendered
- **`DELEGATE`**: Model did not pass test and will delegate to next pack
- **`NEXT_TEST`**: Model delegates testing to children model
- **`NEXT_TEST_FALLBACK`**: Model delegates testing to fallback model
- **`INFO`**: Useful information about model loading and delegation
- **`ERROR`**: Errors if model not found or parameters are wrong

::: tip
Debug info is printed only once per model (from `item_model` component). To show it again, press **F3 + T** to reload resource packs.
:::

## Best Practices

1. **Use delegation by default**: Set `delegate: true` unless you specifically need to break the chain
2. **Test your pack**: Enable debug logging and test with multiple packs enabled
3. **Document conditions**: Add comments (via external docs) explaining what conditions trigger your models
4. **Consider fallbacks**: Always provide a fallback model for cases that don't match

## Common Patterns

### Override Specific Items Only

```json
{
  "type": "rpf:select",
  "property": "minecraft:custom_data",
  "cases": [
    {
      "when": { "my_custom_item": true },
      "model": { "type": "minecraft:model", "model": "mypack:custom_item" }
    }
  ],
  "delegate": true
}
```

### Chain Multiple Conditions

Create a pack that checks for condition A, delegates to another pack that checks for condition B, etc.

### Vanilla Fallback

Always ensure delegation eventually reaches vanilla models for items you don't override.
