# Nextjs practice

**create app**

```bash
npx create-next-app@latest .
```

**init prisma**

```bash
npx prisma init --datasource-provider sqlite
```

Write your model in "/prisma/schema.prisma" file.

## Before start:

_migrate database_

```bash
npx prisma migrate dev --name [name]
```
