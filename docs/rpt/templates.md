# Template System

As mentioned in the [Pack Developers Guide](pack-developers.md), templates are similar to item models, and templates also have an `rpt` field!

```json
// in items/
{
    "model": {
        "type": "rpt:template",
        "template": "variable_merge_test"
    }
}

// in rpt/templates
{
    "model": {
        "type": "rpt:variable",
        "variable": "bell_model"
    }, 
    "rpt": {
        "variables" : {
            "models": {
                "bell_model": "item/totem_of_undying"
            }
        }
    }
}
```

Template files themselves can be named anything and can even be nested within each other! So you won't have to create [11 thousand(!)](https://modrinth.com/resourcepack/more-clocks) lines of confusing objects anymore!
