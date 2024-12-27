---
title: Pretty Proto
pubDate: 2024-03-12T04:00:00Z
lastUpdate: 2024-12-27T19:00:00Z
description: pretty-proto is a neat little script designed to simplify and standardize the creation of pretty protocols
heroImage: /images/posts/pretty-proto/hero.png
---
Once again a project that heralds from my deep desire to make things pretty that are currently ugly. And once again a project that started (surprise surprise) in the student council of the computer science department.
Initially it was only meant to be a neat little script that converts a Markdown file into a pretty little PDF file via [pandoc](https://pandoc.org) that roughly matches some sort of corporate design of the student council and the University of Konstanz.

## Pretty Please
Pandoc **does** allow a lot of customization along its pipeline as showcased in ["Customizing pandoc to generate beautiful pdf and epub from markdown"](https://learnbyexample.github.io/customizing-pandoc/) by [learnbyexample](https://learnbyexample.github.io/).

So the core command of pretty proto looks like this:
```shell
pandoc "$tmpdir/sed-pad-top-numbers" \
    -f markdown \
    --template="$scriptpath/tex/template.tex" \
    --include-in-header="$scriptpath/tex/style.tex" \
    -V logo:"$logo" \
    -V header:"$(echo $name | sed -E 's/[_]/\\_/g')" \
    -V mainfont="$font" \
    -V colorlinks:true \
    -V linkcolor:darkbluk \
    -V urlcolor:darkbluk \
    -V toccolor:black \
    -V toc-title:"$tocTitle" \
    -V toc-subtitle:"$tocSubtitle" \
    -V toc-depth:1 \
    -V lang:de \
    -V csquotes:true \
    -t pdf \
    --pdf-engine=xelatex \
    -o "$pdf"
```

Let's walk through that:
- `-f markdown` tells pandoc to convert from markdown
- `--template` specifies the LaTeX template to use for the compilation of the markdown file; in this case a custom template (`template.tex`) that comes with pretty proto
- `--include-in-header` allows to include some additional content at the end of the header; in this case for some styling specifications given by `style.tex`
- `-V KEY[=VAL]` sets a template variable `KEY` to the string value `VAL`
  - `logo` will be the logo that is rendered in the top-right corner of each page
  - `header` will be some text that is rendered in the top-left corner of each page
  - `maintfont` sets the font for the PDF document
  - `colorlinks` controls whether hrefs are colored
  - `linkcolor` sets the color of internal links
  - `urlcolor` sets the color of linked URLs
  - `toccolor` sets the color of links in the table of contents 
  - `toc-title` sets the title of the table of contents
  - `toc-subtitle` sets the subtitle of the table of contents
  - `toc-depth` sets the depth to which the table of contents should list headings
  - `lang` sets the language of the document
  - `csquotes` controls whether the [csquotes tex package](https://ctan.org/pkg/csquotes) will be used for typography
- `-t pdf` tells pandoc to convert to a PDF document
- `--pdf-engine=xelatex` specifies that the [XeLaTeX](https://www.overleaf.com/learn/latex/XeLaTeX) typesetting engine should be used, which allows for different fonts and colors in the PDF document
- `-o` specifies where the output should be piped into

As I got more serious about aligning the script with its predecessor in the student council (which really only was a fancy downloader for a self-hosted instance of [Sharelatex](https://www.sharelatex.com/)), the script grew in complexity.

The wish to make the usage of the script as easy as possible increased that complexity -- pretty-proto has a lot of default assumptions baked into it, to ease the use.

## Basics
Before diving into the intricacies of pretty-proto let's look at two basic use cases of the tool.

### Markdown File
So you have a markdown file in your folder and now you want to compile it to a pretty little PDF document -- easy:

```shell
pretty file.md
```

That's all you need to compile a simple transcript of a student council meeting.

### stdin
If you ate a clown for breakfast and for some reason decide to try to pipe some markdown into pretty-proto, that's fine too:

```shell
cat file.md | pretty
``` 

## Downloader
Over time two kinds of remote sources for markdown files have emerged in the student council, which led to two downloaders as part of pretty-proto.

In both cases the `-k, --keep` flag can be used to keep the downloaded markdown file, otherwise only a compiled PDF document will be saved to the current working directory.

### Sharelatex
Initially all transcripts of the student council were written on a self-hosted instance of 
[Sharelatex](https://www.sharelatex.com/) -- seemingly because it was the only collaborative online editor available to the student council at the time, or atleast the easiest to establish as the standard in the student council. Ofcourse the transcripts were mostly written in markdown, with some LaTeX macros sprinkled here and there for the table of contents or some fancy typesetting.

Therefore pretty-proto had to accommodate the ability to automagically download the current transcript and compile it to a PDF document. So the following flags were added:

- `-S, --sharelatex` signals pretty-proto to download the markdown file from a Sharelatex instance
- `-D, --domain` sets the domain of the Sharelatex instance
- `-e, --email` sets the email of the user to access the Sharelatex instance
- `-p, --password` sets the password of the user to access the Sharelatex instance
- `-P, --project` sets the project id of the Sharelatex project
- `-f, --filename` sets the name of the markdown file within the Sharelatex project

### HedgeDoc
After some time, and after taking over the chairmanship of the student council meetings, I switched to a [HedgeDoc](https://hedgedoc.org/) instance for the transcripts. Which ofcourse lead to me having to accommodate the ability to automagically download and compile the current transcript from HedgeDoc as well.

- `-H, --hedgedoc` signals pretty-proto to download the markdown file from a HedgeDoc instance
- `-D, --domain` now sets the domain of the HedgeDoc instance
- `-I, --id` sets the id of the HedgeDoc document, which should be downloaded

In all respects so much easier than Sharelatex, if I do say so myself.

## Pretty Config
To allow for different sets of default values depending on the kind of PDF document one might want to generate via pretty-proto, the conecpt of a `pretty.conf` emerged.

Pretty-proto will look for a `pretty.conf` file in the current working directory and source it, if possible, which overrides the default values of pretty-proto.

This is very rudimentary and I hope to expand that idea as I go, but for now it suffices to achieve good looking PDF documents for almost any situation. 

## Frontmatter
This is more of an experiment -- more so than the `pretty.conf` idea -- but it works for some things that might appear in the frontmatter of a markdown document.

Pretty-proto will look for frontmatter in a given markdown document and change it's output accordingly.