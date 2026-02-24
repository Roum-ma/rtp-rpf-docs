# Pack Developers Guide

First, I highly recommend studying the [Items Model Definition Wiki (English)](https://minecraft.wiki/w/Items_model_definition) to understand what's going on here.


RPT adds a variable system and tools for working with them. Below is a description of how to work with them

## `rpt` Field

Now in each *json* file you can specify an `rpt` field, which contains flags and variables in the format shown in the code block below. They can be read through specific item models. You can read about this [here](work-with-variables.md).

```json
{
  "model": {
    ...
  },
  "rpt": {
    "custom_flags": [ // Additional flags
      "foo",
      "bar"
    ],
    "variables": { // Variables
      "strings": { // Strings
        "foo": "bar"
      },
      "numbers": { // Numbers
        "foo": 42
      },
      "flags": { // flags (true/false)
        "hello_world": true
      },
      "models": { // models (from models/ folder)
        "bar": "minecraft:iron_ingot"
      }
    }
  }
}
```


## Templates

You can create template *json* files in `assets/{namespace}/rpt/templates/` with any names and use them later. Overall, their structure is similar to items from the `items` folder, but with the only exception that you cannot specify `hand_animation_on_swap` and `oversized_in_gui` in them. You can learn more about how they work [here](templates.md).

---

In the `minecraft/items` folder:
```json
{
  "model": {
    "type": "rpt:template",
    "template": "namespace:my_template"
  }
}
```
In the `namespace/rpt/templates` folder:
```json
{
  "model": {
    "type": "model",
    "model": "item/diamond"
  },
  "rpt": {
    ...
  }
}
