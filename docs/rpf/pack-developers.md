# Pack Developers Guide

RPF adds some additional parameters to item models so that pack creators can manipulate the delegation process

::: info Note
These parameters will work as described below only with the `rpf:v1` resolver! (as of version **1.x.x**)
:::

## `minecraft:select` and `minecraft:range_dispatch`

Both models have a `delegate` parameter. Its default value is `true`. If set to `false`, the checking chain will break BEFORE checking child models, and this model will be rendered

```json
{
    "model": {
        "type": "select",
        "property": "component",
        "components": "custom_name",
        "delegate": false, // [!code focus]
        "cases" : [
            {
                "when": [...], 
                "model": {
                    "type" : ...
                }
            }, 
            {...}
        ]
    }
}
```

## `minecraft:composite`

The composite model checks all its models for delegation. How the composite model itself handles information about whether its children delegate or not can be configured with the `delegate_strategy` parameter. There are 3 delegation strategies in total:
 - `one_do_delegate` (default) - if **one** of the child models **delegates** - then the **entire composite model delegates**
 - `one_cancle_delegate` - if **one** of the child models **delegates** - then the **entire composite model does NOT delegate**
 - `not_delegate` - the **entire model will NOT delegate** under any circumstances


## Some Non-obvious Behaviors
 - If the `conditional` model is root, then its `on_false` model will be considered a `fallback`
 - The `empty` model never delegates
 - The `model` model will delegate if:
    1. the model is a `fallback`
    2. the namespace of the model reference and the namespace of the item model identifier from the `item_model` component are equal (This means that in vanilla game you shouldn't store models in `minecraft:` namespace in your packs)
    3. the path of the model reference contains the path of the item model identifier from the `item_model` component
