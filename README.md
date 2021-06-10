# Template Web

## Install

```sh
yarn install
```

## Development

Run locally

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Code validation happens automatically through Git hooks an CI.

Make sure your commit messages follow [commitlint guidelines](https://github.com/semantic-release/semantic-release#commit-message-format) as this determines the semver of the release.

# Deploying

Deploying happens automatically after merging your code to master.

# Tooling

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

# Routing

http://localhost:3333/
http://localhost:3333/users
http://localhost:3333/users/1
http://localhost:3333/users/1/posts
http://localhost:3333/users/1/posts/1
http://localhost:3333/posts
http://localhost:3333/posts/1
http://localhost:3333/comments
http://localhost:3333/comments/1

# TODO

- [x] fav icon
- [x] users
- [x] posts
- [x] comments
- [ ] header
- [ ] footer
- [ ] fix loading issue
- [ ] styling
- [ ] lint
- [ ] jest
- [ ] semantic release
- [ ] github package
- [ ] github actions
- [ ] image hosting
- [ ] directory guide

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
