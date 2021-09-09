## Introduction

Reproduction for https://github.com/prisma/prisma/issues/8858


## Steps

1. Clone the repo
2. Install deps preferably using `yarn`
3. Change creds in `.env`
4. Initialise database using `npx prisma db push`
5. Run `yarn start` to reproduce


### Version Information

```
Environment variables loaded from prisma\.env
prisma                  : 3.1.0-dev.5
@prisma/client          : 3.1.0-dev.5
Current platform        : windows
Query Engine (Node-API) : libquery-engine eb8eb4c97238c32c9e71756e76d59ed5e502185a (at node_modules\@prisma\engines\query_engine-windows.dll.node)
Migration Engine        : migration-engine-cli eb8eb4c97238c32c9e71756e76d59ed5e502185a (at node_modules\@prisma\engines\migration-engine-windows.exe)
Introspection Engine    : introspection-core eb8eb4c97238c32c9e71756e76d59ed5e502185a (at node_modules\@prisma\engines\introspection-engine-windows.exe)
Format Binary           : prisma-fmt eb8eb4c97238c32c9e71756e76d59ed5e502185a (at node_modules\@prisma\engines\prisma-fmt-windows.exe)
Default Engines Hash    : eb8eb4c97238c32c9e71756e76d59ed5e502185a
Studio                  : 0.423.0
```
