# @bionikspoon/html-to-md

A simple CLI for converting html to markdown

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@bionikspoon/html-to-md.svg)](https://npmjs.org/package/@bionikspoon/html-to-md)
[![CircleCI](https://circleci.com/gh/bionikspoon/html-to-md/tree/master.svg?style=shield)](https://circleci.com/gh/bionikspoon/html-to-md/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/@bionikspoon/html-to-md.svg)](https://npmjs.org/package/@bionikspoon/html-to-md)
[![License](https://img.shields.io/npm/l/@bionikspoon/html-to-md.svg)](https://github.com/bionikspoon/html-to-md/blob/master/package.json)
[![Coverage Status](https://coveralls.io/repos/github/bionikspoon/html-to-md/badge.svg?branch=main)](https://coveralls.io/github/bionikspoon/html-to-md?branch=main)

<!-- toc -->

- [@bionikspoon/html-to-md](#bionikspoonhtml-to-md)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @bionikspoon/html-to-md
$ html-to-md COMMAND
running command...
$ html-to-md (-v|--version|version)
@bionikspoon/html-to-md/0.0.1-0 darwin-x64 node-v14.15.0
$ html-to-md --help [COMMAND]
USAGE
  $ html-to-md COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`html-to-md autocomplete [SHELL]`](#html-to-md-autocomplete-shell)
- [`html-to-md help [COMMAND]`](#html-to-md-help-command)
- [`html-to-md run [FILE]`](#html-to-md-run-file)

## `html-to-md autocomplete [SHELL]`

```
USAGE
  $ html-to-md autocomplete [SHELL]

ARGUMENTS
  SHELL  shell type

OPTIONS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

EXAMPLES
  $ html-to-md autocomplete
  $ html-to-md autocomplete bash
  $ html-to-md autocomplete zsh
  $ html-to-md autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v0.2.0/src/commands/autocomplete/index.ts)_

## `html-to-md help [COMMAND]`

```
USAGE
  $ html-to-md help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `html-to-md run [FILE]`

````
USAGE
  $ html-to-md run [FILE]

ARGUMENTS
  FILE  an html document to convert to markdown

OPTIONS
  -b, --bullet=*|-|+                                  [default: *] symbol for list-item bullets
  -c, --code-block-style=indented|fenced              [default: fenced] syntax for code blocks
  -e, --em=_|*                                        [default: _] em delimiter
  -f, --fence=```|~~~                                 [default: ```] symbol for code block fences
  -h, --help                                          show CLI help
  -l, --link-style=inlined|referenced                 [default: referenced] style for urls
  -p, --heading-style=pound|underline                 [default: pound] format headings with # or underlines
  -r, --horizontal-rule=***|---|___                   [default: ---] symbol for horizontal rule
  -r, --link-reference-style=full|collapsed|shortcut  [default: full] style for link references
  -s, --strong=__|**                                  [default: **] strong delimiter
  -v, --version                                       show CLI version

EXAMPLES
  $ html-to-md --help
  $ cat index.html | html-to-md run
  $ html-to-md run index.html
````

_See code: [src/commands/run.ts](https://github.com/bionikspoon/html-to-md/blob/v0.0.1-0/src/commands/run.ts)_

<!-- commandsstop -->
