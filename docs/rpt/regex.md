# Other Models

## Working with Regular Expressions

Now you have 2 tools for working with regular expressions:

1) `rpt:match` property for the `minecraft:condition` model

calls `on_true` when the `custom_name` component matches the regular expression specified in `regex`:

```json
{
  "model": {
        "type": "condition",
        "property": "rpt:match",
        "regex": "^Hello", // All strings starting with "Hello"
        "on_true": {
            ...
        },
        "on_false": {
            ...
        }
    }
}
```

2) `rpt:regex` model

Checks if there are matches with the regular expression in the `when` list with the `custom_name` component. The syntax here is very similar to `minecraft:select`:

```json
{
  "model": {
        "type": "rpt:regex",
        "cases": [
            {
                "when": ["^Hello", "^Привет"],
                "model": {
                    "type": "model",
                    "model": "item/diamond"
                }
            },
            {
                "when": ["123"],
                "model": {
                    "type": "model",
                    "model": "item/raw_iron"
                }
            }
        ]
    }
}
```
