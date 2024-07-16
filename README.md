# How to test


` cd cjs_esm_lib`
`npm link`


Then load it with commun JS :

```
node __test__/load.cjs
```
It should print :

```
Hello from shared code!
Hello from CommonJS!
```

Or load it with ESM JS :

```
node __test__/load.mjs
```
It should print :

```
Hello from shared code!
Hello from ES Modules!
```
