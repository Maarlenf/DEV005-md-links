# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Diagrama de flujo](#3-diagrama-de-flujo)
* [4. Guía de instalación](#4-guía-de-instalación)
* [5. Manual de uso](#5-manual-de-uso)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

*** 

## 2. Resumen del proyecto

md-Links es una librería que facilita la lectura y análisis de los archivos con formato Markdown, esta ha sido desarrollada en Node.js. Esta librería permite verificar los enlaces que se encuentran dentro de los archivos con extensión .md y genera informes sobre ellos para su posterior necesidad.

***

## 3. Diagrama de flujo

Este proyecto se trabajo mediante método SCRUM, previo un diagrama de flujo, apoyado de planificación semanal
[Diagrama de flujo](https://github.com/Maarlenf/DEV005-md-links/files/11604449/Flujo-iterado.pdf)

***

## 4. Guía de instalación

Lleva esta librería a tu proyecto, mediante el siguiente comando de instalación

```sh
npm i Maarlenf/DEV005-md-links
```

***

## 5. Manual de uso

A través de tu terminal de Git, podras acceder a los resultados con las siguientes instrucciones de **CLI**:

#### Con  `mdLinks <path-to-file>` :

```sh
$ md-links ./some/example.md
  [{
    href: 'https://someExample.com/some',
    text: 'some links',
    file: 'C:\\Users\\Some\\OneDrive\\Escritorio\\some-path'
   }]
```

#### Con `mdLinks <path-to-file> --validate`:

```sh
$ md-links ./some/example.md --validate
  [{
    href: 'https://someExample.com/some',
    text: 'some links',
    file: 'C:\\Users\\Some\\OneDrive\\Escritorio\\some-path'
    status: 200,
    message: 'ok'
  }]
```

#### Con `mdLinks <path-to-file> --stats`:

```sh
$ md-links ./some/example.md --stats
{ Total: 3, Unique: 3 }
```

####  Con `mdLinks <path-to-file> --stats -validate`:

```sh
$ mdLinks ./some/example.md --stats --validate
{ Total: 3, Unique: 3, Broken: 2 }
```

**Recuerda que esta librería esta diseñada para leer archivos unicos o directorios completos.*
