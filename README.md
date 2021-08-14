# super-octo-telegram

Based off the blog post of [Chris Siebenmann](https://utcc.utoronto.ca/~cks/space/blog/programming/YAMLAndConfigurationFiles) on why YAML is not a good configuration format, and my own personal struggles/annoyance of using docker-compose, I decided to build a simple JavaScript/TypeScript DSL/API for composing docker-compose files.

The end goal of this would be to easily build, edit and maintain docker deployments without weird and tedious errors related to the YAML format. With the added benefit of type-hinting and error checking.

I decided to use Deno for this because I've grown to really dislike NodeJS (despite the fact its given me _everything_).