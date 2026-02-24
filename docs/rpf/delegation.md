# Delegation System

## About Resolvers

**RPF** has 3 resolvers: `rpf:v1`, `minecraft:vanilla`, and `rpf:experimental`. You can switch between them by typing `/rpf resolver set {id}` in chat, and check the current one with `/rpf resolver`

### rpf:v1

Checks models from all packs top to bottom, breaking the loop when a model doesn't delegate, rendering it

### rpf:experimental

First tests all models, then based on the score each model earned (points are added and subtracted depending on model depth and type), selects the model with the highest score and renders it

::: warning Note
This resolver is named "Experimental" because it is **NOT** stable! It may also be renamed in future updates
:::

### minecraft:vanilla

The default resolver written by Mojang
