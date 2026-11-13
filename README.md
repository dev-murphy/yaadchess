# Yaad Chess

A chess game built using python and web tech.

## What did I use?

So, there is two part to the project: the python section (the main part) and vite project (the UI).

Backend
 - [Pywebview](https://pywebview.flowrl.com/): For rendering the chess UI from vite project
 - [UV](https://docs.astral.sh/uv/): For managing all the python dependencies
 - [Commitizen](https://commitizen-tools.github.io/commitizen/): For automated versioning via commits
 - [Ruff](https://docs.astral.sh/ruff/): For formatting the code-base

Frontend
 - [Vue](https://vuejs.org/): For creating the UI
 - [Pinia](https://pinia.vuejs.org/): For managing states for the UI
 - [Tailwind](https://tailwindcss.com/): For styling the UI

## How to run?

All scripts need to run either the `dev` and `prod` version of the application were placed in the `scripts` folder.

### Set it as the executable files
```sh
chmod +x scripts/dev.sh
chmod +x scripts/prod.sh
```

### Run the development version
```
./scripts/dev.sh
```

### Run the production version
```
./scripts/prod.sh
```

## What happened?

If you are curious, please feel free to see [CHANGELOG](./CHANGELOG.md) to see implemented features and bug fixes.

## License

[MIT](./LICENSE)