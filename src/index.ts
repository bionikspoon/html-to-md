import { Command, flags } from "@oclif/command";

import cli from "cli-ux";
import * as fs from "fs/promises";
import * as TurndownService from "turndown";
export default class HtmlToMd extends Command {
  static description = "A simple tool to convert HTML to markdown";

  static examples = [
    "$ html-to-md --help",
    "$ cat index.html | html-to-md",
    "$ html-to-md index.html",
  ];

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    "heading-style": flags.string({
      char: "p",
      description: "format headings with # or underlines",
      options: ["pound", "underline"],
      default: "pound",
    }),
    "horizontal-rule": flags.string({
      char: "r",
      description: "symbol for horizontal rule",
      options: ["***", "---", "___"],
      default: "---",
    }),
    bullet: flags.string({
      char: "b",
      description: "symbol for list-item bullets",
      options: ["*", "-", "+"],
      default: "*",
    }),
    "code-block-style": flags.string({
      char: "c",
      description: "syntax for code blocks",
      options: ["indented", "fenced"],
      default: "fenced",
    }),
    fence: flags.string({
      char: "f",
      description: "symbol for code block fences",
      options: ["```", "~~~"],
      default: "```",
    }),
    em: flags.string({
      char: "e",
      description: "em delimiter",
      options: ["_", "*"],
      default: "_",
    }),
    strong: flags.string({
      char: "s",
      description: "strong delimiter",
      options: ["__", "**"],
      default: "**",
    }),
    "link-style": flags.string({
      char: "l",
      description: "style for urls",
      options: ["inlined", "referenced"],
      default: "referenced",
    }),
    "link-reference-style": flags.string({
      char: "r",
      description: "style for link references",
      options: ["full", "collapsed", "shortcut"],
      default: "full",
    }),
  };

  static args = [
    {
      name: "file",
      description: "an html document to convert to markdown",
    },
  ];

  async run() {
    const html = await this.fileInput();

    const markdown = this.turndown(html);
    this.log(markdown);
  }

  private async fileInput(): Promise<string> {
    const { args } = this.parse(HtmlToMd);

    if (args.file) {
      const response = await fs.readFile(args.file);
      return response.toString();
    }

    if (process.stdin.isTTY) {
      this.error("Must include an html file to convert to markdown", {
        exit: 1,
        suggestions: [
          `$ cat index.html | ${this.config.bin}`,
          `$ ${this.config.bin} index.html`,
          `$ ${this.config.bin} --help`,
        ],
      });
    }

    return cli.prompt("", { prompt: "" });
  }

  private turndownConfig(): TurndownService.Options {
    const { flags } = this.parse(HtmlToMd);

    return {
      headingStyle: flags["heading-style"] === "underline" ? "setext" : "atx",
      hr: flags["horizontal-rule"],
      bulletListMarker: flags.bullet as "-" | "+" | "*",
      codeBlockStyle: flags["code-block-style"] as "indented" | "fenced",
      fence: flags.fence as "```" | "~~~",
      emDelimiter: flags.em as "*" | "_",
      strongDelimiter: flags.strong as "__" | "**",
      linkStyle: flags["link-style"] as "inlined" | "referenced",
      linkReferenceStyle: flags["link-reference-style"] as
        | "full"
        | "collapsed"
        | "shortcut",
    };
  }

  private turndown(html: string) {
    return new TurndownService(this.turndownConfig()).turndown(html);
  }
}
