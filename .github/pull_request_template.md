## What and why

<!-- One paragraph. The title becomes the changelog entry (we squash-merge). -->

## Checks

- [ ] Touches more than one repo? List the sibling PRs here, and bump
      `release.toml` the same day — a half-landed cross-repo change is how the
      admin Listen button ended up calling an endpoint that does not exist.
- [ ] Changes an event payload, enum, or API response shape? Bump `contract`
      in `release.toml` and say below what breaks, for whom, and the rollback.
- [ ] Touches money (spend processor, deposits, balances, ledger, auth)?
      Second reviewer required.
- [ ] Adds a schema change? It is a file in `migrations/`, forward-only, with
      `IF NOT EXISTS` — not SQL pasted into a console.
- [ ] Renders a number to a customer? Say whether it is measured or derived.

## Compatibility note

<!-- Required if you ticked the contract box. Otherwise "none". -->
