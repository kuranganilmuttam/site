# Kuranganilmuttam Valeeswarar Koil Website


To develop

```
gatsby develop
```

To build the static content into `public/`

```
gatsby build
```

The static site using github pages uses gh-pages branch to which the public subtree is pushed as the content. To do that,

```
git push origin `git subtree split --prefix public main`:gh-pages --force
```

