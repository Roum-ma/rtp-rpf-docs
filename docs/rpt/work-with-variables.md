# Working with Variables

## `rpt:variable` Model

This model renders a block model (located in *models/*) from variables by the key specified in its `variable` field

```json
{
    "model": {
        "type": "rpt:variable",
        "variable": "foo"
    },
    "rpt": {
        "variables" : {
            "models": {
                "foo": "item/apple"
            }
        }
    }
}

```

## `rpt:has_flag` Property for the `minecraft:condition` Model

Checks if an Additional Flag exists in `rpt`

```json
{
    "model": {
        "type": "condition",
        "property": "rpt:has_flag",
        "flag": "test",
        "on_false": {
            "type": "model",
            "model": "item/diamond_sword"
        },
        "on_true": { // This model will trigger!
            "type": "model",
            "model": "item/diamond"
        }
    },
    "rpt": {
        "custom_flags": [
            "test"
        ]
    }
}
```

## `rpt:variable` Property for the `minecraft:select` Model

Renders only the model where the `when` field equals the variable of type from `var_type` and by key `var_name`

```json
{
    "model": {
        "type": "select",
        "property": "rpt:variable",
        "var_type": "string",
        "var_name": "egg_type",
        "cases": [
            {
                "when": "chicken",
                "model": {
                    "type": "model",
                    "model": "item/egg"
                }
            }, 
            {
                "when": "turtle",
                "model": {
                    "type": "model",
                    "model": "item/turtle_egg"
                }
            }
        ]
    },
    "rpt": {
        "variables": {
            "strings": {
                "egg_type": "chicken"
            } 
        }
    }
        
}
