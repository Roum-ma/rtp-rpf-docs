# How It Works

## A Bit of History
For a very long time (even before **1.14**), **Forge** was the popular mod loader. ***sp614x*** created **OptiFine** for it, which, in addition to optimization features, added the **CIT (Custom Item Textures)** system that was ported from **MCPatcher**. But when players started switching to **Fabric**, they couldn't use **OptiFine** due to technical reasons, and thus **Fabric** players temporarily lost access to **CIT**. However, in 2021-22, user ***shsupercm*** released the **CIT Resewn** mod for **Fabric**, which fully restored this functionality.

Later, after the release of **1.21.2**, Mojang began actively changing their **Minecraft** rendering code, and in **1.21.4** they changed the item rendering system. In **1.21.5**, vanilla was able to (almost) completely replace the main feature of **CIT** that people used it for - items by custom names. By this time, **shsupercm** had already given up and stopped supporting **CIT Resewn**.

Then some people noticed a problem: in vanilla's resource pack system, if you try to add 2 (or more) packs with the same model, there's an issue. The problem was that Mojang implemented model loading so that only the topmost model is loaded, while others aren't loaded into the game's memory at all.

RPF solves this problem: it rewrites the loading code so that all items from all resource packs are loaded into the game, and adapts the model selection process accordingly.

## How the Resolver Works

First, let's define some terms:

 - **Fallback model** - this is a child model of an item, which is specified in the `fallback` fields in `minecraft:select` and `minecraft:range_dispatch`. Typically, unless these are some exceptional cases described [here](pack-developers.md#some-non-obvious-behaviors)
 - **Resolver** - this is an **RPF** module that decides which item model to send for rendering based on its own rules

 Now to the essence. The **standard resolver** system (yes, there's more than one! read about this in the [Delegation System](delegation.md) section) goes through models and their children in order, and if a model does NOT delegate rendering - then we render it!

![scheme](https://camo.githubusercontent.com/708523c1d282ea30f7c486ae5a0c9e82d35d74e1e5e4da5941376dafa831fb7b/68747470733a2f2f692e706f7374696d672e63632f476d5a73545272672f556e7469746c65642d4469616772616d2d506167652d312d64726177696f2e706e67)
<center>Diagram of the standard resolver in RPF v1.x</center>
