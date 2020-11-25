import { test } from "@oclif/test";
import * as snapshot from "snap-shot-it";
import cmd from "../src";

const oclifHandler = require("@oclif/errors/handle");
describe("@bionikspoon/html-to-md", () => {
  test
    .stdout()
    .do(() => cmd.run(["./test/fixtures/demo.html"]))
    .it("converts demo.html to markdown", (ctx) => {
      snapshot(ctx.stdout);
    });

  test
    .stdout()
    .do(() =>
      cmd.run([
        "./test/fixtures/demo.html",
        "--heading-style=underline",
        "--horizontal-rule=***",
        "--bullet=+",
        "--code-block-style=indented",
        "--em=*",
        "--link-style=inlined",
        "--strong=__",
      ])
    )
    .it("reads turndown configuration", (ctx) => {
      snapshot(ctx.stdout);
    });

  test
    .stdout()
    .do(() => cmd.run(["./test/fixtures/demo.html"]))
    .it("converts snippet.html to markdown", (ctx) => {
      snapshot(ctx.stdout);
    });

  test
    .stdout()
    .do(() => cmd.run(["./test/fixtures/demo.html", "--help"]))
    .exit(0)
    .it("shows the help menu", (ctx) => {
      snapshot(ctx.stdout);
    });

  test
    .stderr()
    .do(() => cmd.run([]))
    .catch(oclifHandler)
    .it("it makes a recommendation when missing an input", (ctx) => {
      snapshot(ctx.stderr);
    });
});
