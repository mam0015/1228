# Shopify Project Estimator

A lightweight static Shopify project checklist and estimator that can be hosted directly on GitHub Pages.

## Features

- Tick tasks to include them in a project
- Edit quantity and hours-per-unit for every task
- Time + Price mode
- Time Only mode that hides all pricing
- Adjustable hourly rate (AUD)
- Complexity multiplier
- Contingency/buffer percentage
- Working-hours-per-day setting
- Quick presets:
  - Existing store + add information
  - Set up store + content
  - Update existing store
  - Build from scratch
- Estimated time range and project price range
- Copyable final summary
- Saves your selections in the browser using localStorage
- Mobile-friendly
- No frameworks or external dependencies

## GitHub Pages setup

1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, and `app.js` to the root of the repository.
3. In GitHub open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save.

GitHub will provide the public Pages URL.

## How pricing works

Each selected task is calculated as:

`quantity × hours per unit × complexity × (1 + buffer)`

Then:

`estimated price = total hours × hourly rate`

The displayed range is intentionally wider than the single estimate to avoid pretending project work is a laboratory measurement.

## Customising tasks

Open `app.js` and edit the `TASKS` array near the top. Each task has:

- `id`
- `name`
- `desc`
- `qty`
- `hours`

You can also change the default hourly rate in `index.html` and the `state` object in `app.js`.

## Important

This is an estimating tool, not accounting or legal software. Shopify subscription fees, paid themes, paid apps, domains, photography, copywriting, custom coding and other third-party costs should be quoted separately unless you deliberately include them.
