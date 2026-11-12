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

You need to ensure the `dev.sh` file is executable. Run the command below to do that.

```sh
chmod +x dev.sh
```

Then run the dev server using this command.

```
./dev.sh
```

## What happened?

If you are curious, please feel free to see [CHANGELOG](./CHANGELOG.md) to see implemented features and bug fixes.