# Debug and Logging

RPF includes powerful debugging tools to help you understand and troubleshoot model delegation.

## Enabling Debug Mode

Use the in-game command:

```
/rpf_toggle_debug
```

This enables detailed logging of model resolution.

## Log Types

When debug mode is enabled, RPF logs detailed information about model selection:

### `ALLOW_UPDATE`
The model passed all tests and will be rendered.

```
[RPF] ALLOW_UPDATE: diamond_sword -> mypack:legendary_sword (conditions matched)
```

### `DELEGATE`
The model did not pass tests and will delegate to the next pack.

```
[RPF] DELEGATE: diamond_sword -> next pack (no matching conditions)
```

### `NEXT_TEST`
The model delegates testing to a child model.

```
[RPF] NEXT_TEST: composite -> child model #2
```

### `NEXT_TEST_FALLBACK`
The model delegates to its fallback.

```
[RPF] NEXT_TEST_FALLBACK: select -> fallback model
```

### `INFO`
General information about model loading and delegation.

```
[RPF] INFO: Loaded 45 models from mypack
```

### `ERROR`
Errors if models are not found or parameters are incorrect.

```
[RPF] ERROR: Model not found: mypack:missing_model
```

## Debug Output Example

Here's what you might see when holding a diamond sword:

```
[RPF] === Resolving model: minecraft:diamond_sword ===
[RPF] Pack: mypack (priority 1)
[RPF] Testing conditions: custom_data.legendary = true
[RPF] DELEGATE: No match, trying next pack
[RPF] 
[RPF] Pack: anotherpack (priority 2)
[RPF] Testing conditions: custom_data.damaged = true
[RPF] ALLOW_UPDATE: Match found! Using anotherpack:damaged_sword
```

## Refreshing Debug Output

Debug information is logged **once per model** per resource reload. To see it again:

1. Press **F3 + T** to reload resource packs
2. Or restart the game

::: tip
Debug logs are only shown for items you're holding or looking at. This prevents spam in the logs.
:::

## Performance Monitoring

With debug enabled, RPF also logs performance metrics:

```
[RPF] Model resolution took 0.03ms (3 packs checked)
```

This helps identify performance issues with complex delegation chains.

## Troubleshooting

### Model Not Showing

1. **Enable debug mode**
2. **Hold the item** you're testing
3. **Check logs** for:
   - Is your pack being loaded?
   - Are conditions being tested?
   - Is delegation working correctly?

### Multiple Packs Conflicting

Debug logs show the **exact order** packs are checked:

```
[RPF] Pack order:
[RPF]   1. mypack
[RPF]   2. anotherpack
[RPF]   3. vanilla
```

### Conditions Not Matching

Logs show what conditions are being tested:

```
[RPF] Testing: custom_data.legendary = true
[RPF] Item data: { "custom_data": { "legendary": false } }
[RPF] Result: NO MATCH
```

## Advanced Debugging

### Resolver Information

Check which resolver is active:

```
/rpf resolver
```

Output:
```
Current resolver: rpf:v1
Available resolvers: rpf:v1, rpf:vanilla, rpf:experimental
```

### Pack Priority

Check pack loading order:

```
/rpf packs
```

Output:
```
Loaded packs (priority order):
  1. mypack (45 models)
  2. anotherpack (128 models)
  3. vanilla (1523 models)
```

### Model Inspection

Inspect a specific item's model:

```
/rpf inspect
```

While holding an item, this shows:
- Current model being used
- Which pack it came from
- What conditions were checked
- Full delegation chain

## Best Practices

1. **Always test with debug enabled** when developing packs
2. **Check logs regularly** to verify delegation is working
3. **Use F3 + T** frequently during development
4. **Document conditions** that trigger your models
5. **Test with multiple pack combinations** to ensure compatibility

## Next Steps

- Learn about [model types](/rpf/model-types)
- Read the [Pack Developers Guide](/rpf/pack-developers)
