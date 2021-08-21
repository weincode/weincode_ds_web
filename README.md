# weincode_ds_web
Sistema de diseño web

Ante el error 
```
ReferenceError: primordials is not defined
```

En el archivo npm-shrinkwrap ... borrar todo y poner ...
```json
{
    "dependencies": {
    "graceful-fs": {
        "version": "4.2.2"
        }
    }
}
```
luego borrar el package-lock  y volver a dar npm install