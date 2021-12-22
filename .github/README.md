# Template Web

A template repo with NextJS, Typescript, Redux, Eslint, Github Actions, and Github Pages.

https://ethanneff.github.io/template-next/

users|posts|comments
---|---|---
<img width="839" alt="Screen Shot 2021-12-22 at 2 15 34 PM" src="https://user-images.githubusercontent.com/2933593/147156927-5f6c7267-9432-4555-8b18-1ef61894337d.png">|<img width="835" alt="Screen Shot 2021-12-22 at 2 15 41 PM" src="https://user-images.githubusercontent.com/2933593/147156924-1fb25144-9150-40a8-859e-2fb341c870b3.png">|<img width="836" alt="Screen Shot 2021-12-22 at 2 25 41 PM" src="https://user-images.githubusercontent.com/2933593/147157011-4e662f46-2630-495d-9a34-22cc469a8a3e.png">


## Install

```sh
git clone https://ethanneff.github.io/template-next/
cd template-next
yarn install
```

## Development Local

```sh
yarn dev
```

```sh
yarn lint
```

```sh
yarn test
```

- Local development is done at [localhost:3333](http://localhost:3333)

## Development Local Prod

```sh
yarn build
```

```sh
yarn start
```

- Local development production is done at [localhost:3333/template-next](http://localhost:3333/template-next)

## Contributing

- Code validation happens automatically through Git hooks an CI.
- Validate your commit with [commitlint guidelines](https://github.com/semantic-release/semantic-release#commit-message-format) as this determines the semver of the release.

## Deploying

- Deploying happens automatically after merging your code to the `main` branch.
- View the production website at [github pages](https://ethanneff.github.io/template-next)
- View the bundled package at [github packages](https://github.com/ethanneff/template-next/packages/840620)

## File Structure

```ts
.
├── .github
│   ├── workflow      // remote ci scripts
│   ├── CHANGELOG.md  // change log
│   ├── *.config.json // development configs
├── .husky            // local ci scripts
├── .vscode           // IDE configs
├── out               // production build
├── public            // public assets
│   └── images        // optimized images
└── src               // javascript code
    ├── components    // ui components
    ├── modules       // screens
    ├── pages         // routing (each file is a new route)
    ├── redux         // clint-side event cache
    ├── styles        // css
    ├── testing       // testing functions for mocks, factories, setup
    └── utils         // global utility/helper functions
├── README.md         //
├── *.config.json     // development configs
```

## Tooling

| tool               | usage                                           | example                                                |
| ------------------ | ----------------------------------------------- | ------------------------------------------------------ |
| `next`             | react framework for client and server rendering | `yarn dev` `yarn start` `yarn build`                   |
| `jest`             | react testing framework                         | `yarn test` `yarn watch`                               |
| `eslint`           | code linting                                    | `yarn lint`                                            |
| `prettier`         | code formatter                                  | `yarn prettify`                                        |
| `typescript`       | code type safety                                | `yarn lint`                                            |
| `commitlint`       | commit prefix validator                         |                                                        |
| `normalize.css`    | standardize css across browsers                 |                                                        |
| `semantic release` | automatic deploys and version control           | `yarn semantic-release`                                |
| `github actions`   | pull request ci                                 |                                                        |
| `redux-toolkit`    | cache client state                              | `const globalState = { themeMode, sidebarStatus }`     |
| `swr`              | query and cache server state                    | `const { data, error } = useSWR('/api/user', fetcher)` |

## Routing

- http://localhost:3333/
- http://localhost:3333/users
- http://localhost:3333/users/1
- http://localhost:3333/users/1/posts
- http://localhost:3333/users/1/posts/1
- http://localhost:3333/users/1/comments
- http://localhost:3333/users/1/comments/1
- http://localhost:3333/posts
- http://localhost:3333/posts/1
- http://localhost:3333/comments
- http://localhost:3333/comments/1

# TODO

- [x] fav icon
- [x] users
- [x] posts
- [x] comments

- [x] lint
- [x] jest
- [x] semantic release
- [x] github package
- [x] github actions
- [x] github pages
- [x] type isPost better

- [x] directory guide
- [x] image hosting
- [x] codecov

- [x] header
- [x] footer
- [x] styling
- [x] fix loading issue
- [ ] redux
- [ ] 80% jest
- [x] sample PR
- [ ] lighthouse

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
