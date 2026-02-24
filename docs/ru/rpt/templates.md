# Система Шаблонов

Как и говорилось в [Руководство для создателей наборов](pack-developers.md), шаблоны похожи на модели предметов, и у шаблонов тоже есть поле `rpt`!

```json
// в items/
{
    "model": {
        "type": "rpt:template",
        "template": "variable_merge_test"
    }
}

// в rpt/templates
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

Сами файлы шаблонов могут называться как угодно, и даже быть вложенны дург в друга! Так что не придётся больше городить [11 тыс(!)](https://modrinth.com/resourcepack/more-clocks) строк запутанных объектов!
