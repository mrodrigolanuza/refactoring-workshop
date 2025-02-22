/*
Refactoring to pipelines by Martin Fowler:

https://martinfowler.com/articles/refactoring-pipelines.html
 */

export class Author {
  constructor(
    readonly company: string,
    readonly twitterHandle: string
  ) {}
}

export function collectTwitterHandlesBy(authors: Author[], company: string): string[] {
  return authors
      .filter(author => author.company === company)
      .map(author => author.twitterHandle)
      .filter(handle => handle !== null);
}