exports["@bionikspoon/html-to-md converts demo.html to markdown 1"] = `
# Turndown Demo

This demonstrates [turndown][1] – an HTML to Markdown converter in JavaScript.

## Usage

\`\`\`js
var turndownService = new TurndownService()
console.log(
  turndownService.turndown('<h1>Hello world</h1>')
)
\`\`\`

---

It aims to be [CommonMark][2] compliant, and includes options to style the output. These options include:

*   headingStyle (setext or atx)
*   horizontalRule (\\*, -, or \\_)
*   bullet (\\*, -, or +)
*   codeBlockStyle (indented or fenced)
*   fence (\\\` or ~)
*   emDelimiter (\\_ or \\*)
*   strongDelimiter (\\*\\* or \\_\\_)
*   linkStyle (inlined or referenced)
*   linkReferenceStyle (full, collapsed, or shortcut)

[1]: https://github.com/domchristie/turndown
[2]: http://commonmark.org/

`;

exports["@bionikspoon/html-to-md converts snippet.html to markdown 1"] = `
# Turndown Demo

This demonstrates [turndown][1] – an HTML to Markdown converter in JavaScript.

## Usage

\`\`\`js
var turndownService = new TurndownService()
console.log(
  turndownService.turndown('<h1>Hello world</h1>')
)
\`\`\`

---

It aims to be [CommonMark][2] compliant, and includes options to style the output. These options include:

*   headingStyle (setext or atx)
*   horizontalRule (\\*, -, or \\_)
*   bullet (\\*, -, or +)
*   codeBlockStyle (indented or fenced)
*   fence (\\\` or ~)
*   emDelimiter (\\_ or \\*)
*   strongDelimiter (\\*\\* or \\_\\_)
*   linkStyle (inlined or referenced)
*   linkReferenceStyle (full, collapsed, or shortcut)

[1]: https://github.com/domchristie/turndown
[2]: http://commonmark.org/

`;

exports["@bionikspoon/html-to-md shows the help menu 1"] = `
A simple tool to convert HTML to markdown

USAGE
  $ html-to-md [FILE]

ARGUMENTS
  FILE  an html document to convert to markdown

OPTIONS
  -b, --bullet=*|-|+                                  [default: *] symbol for list-item bullets
  -c, --code-block-style=indented|fenced              [default: fenced] syntax for code blocks
  -e, --em=_|*                                        [default: _] em delimiter
  -f, --fence=\`\`\`|~~~                                 [default: \`\`\`] symbol for code block fences
  -h, --help                                          show CLI help
  -l, --link-style=inlined|referenced                 [default: referenced] style for urls
  -p, --heading-style=pound|underline                 [default: pound] format headings with # or underlines
  -r, --horizontal-rule=***|---|___                   [default: ---] symbol for horizontal rule
  -r, --link-reference-style=full|collapsed|shortcut  [default: full] style for link references
  -s, --strong=__|**                                  [default: **] strong delimiter
  -v, --version                                       show CLI version


`;

exports["@bionikspoon/html-to-md reads turndown configuration 1"] = `
Turndown Demo
=============

This demonstrates [turndown](https://github.com/domchristie/turndown) – an HTML to Markdown converter in JavaScript.

Usage
-----

    var turndownService = new TurndownService()
    console.log(
      turndownService.turndown('<h1>Hello world</h1>')
    )

***

It aims to be [CommonMark](http://commonmark.org/) compliant, and includes options to style the output. These options include:

+   headingStyle (setext or atx)
+   horizontalRule (\\*, -, or \\_)
+   bullet (\\*, -, or +)
+   codeBlockStyle (indented or fenced)
+   fence (\\\` or ~)
+   emDelimiter (\\_ or \\*)
+   strongDelimiter (\\*\\* or \\_\\_)
+   linkStyle (inlined or referenced)
+   linkReferenceStyle (full, collapsed, or shortcut)

`;

exports[
  "@bionikspoon/html-to-md it makes a recommendation when missing an input 1"
] = `
 ›   Error: Must include an html file to convert to markdown
 ›   Try this:
 ›     * cat index.html | html-to-md
 ›     * html-to-md index.html
 ›     * html-to-md --help

`;
