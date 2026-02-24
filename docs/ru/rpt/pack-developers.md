# Руководство для создателей наборов

Для начала я вам настоятельно рекомендую изучить [Вики по Определениям моделей предметов (англ.)](https://minecraft.wiki/w/Items_model_definition) чтобы понимать, что тут происходит. 


RPT добавляет систему переменных и инструменты работы с ними. Ниже описано то как с ними работать

## Поле `rpt`

Теперь в каждом *json* файле вы можете указать поле `rpt`, в котором указываются флаги и переменные в формате, указанном в блоке кода ниже. Их можно читать через определённые модели предметов. Об этом вы можете прочитать [здесь](work-with-variables.md).

```json
{
  "model": {
    ...
  },
  "rpt": {
    "custom_flags": [ // Доп. флаги
      "foo",
      "bar"
    ],
    "variables": { // Переменные
      "strings": { // Строки
        "foo": "bar"
      },
      "numbers": { // Числа
        "foo": 42
      },
      "flags": { // флаги (true/false)
        "hello_world": true
      },
      "models": { // модели (из папки models/)
        "bar": "minecraft:iron_ingot"
      }
    }
  }
}
```


## Шаблоны

Вы можете создавать *json* файлы шалбонов в `asstest/{namespace}/rpt/templates/` с любыми названиям и в дальнешем использовать их. В целом, их структура похожа на предметы из папки `items`, но за единственным исключением, что в них нельзя указать `hand_animation_on_swap` и `oversized_in_gui`. Подробнее о том как они работают вы можете узнать [здесь](templates.md).

---

В папке `minecraft/items`:
```json
{
  "model": {
    "type": "rpt:template",
    "template": "namespace:my_template"
  }
}
```
В папке `namespace/rpt/templates`:
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