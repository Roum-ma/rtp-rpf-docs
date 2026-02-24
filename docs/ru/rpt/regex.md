# Регулярные выражения

## Работа с регулярными выражениями

Теперь у вас есть 2 инструмента для работы с регулярными выражениями:

1) Cвойство `rpt:match` для модели `minecraft:condition`

вызывает `on_true`, когда компонент `custom_name` сходится с регулярным выражением, указанным в `regex`:

```json
{
  "model": {
        "type": "condition",
        "property": "rpt:match",
        "regex": "^Hello", // Все строки, начинающияся с "Hello"
        "on_true": {
            ...
        },
        "on_false": {
            ...
        }
    }
}
```

2) модель `rpt:regex`

Проверяет, есть ли совпадения с регляным вырадением в списке `when` c компонентом `custom_name`. Тут синтакиси очень похож на `minecraft:select`:

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