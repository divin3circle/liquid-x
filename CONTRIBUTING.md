# Contribution guidelines

## Commits

- Use the following format for commit messages: `<type>: <description>`

Examples:

`git commit -m "feat: implement feature X"`

`git commit -m "docs: update README.md"`

- Write commit messages in the imperative form, such as "add integration" instead of "adds integration" or "added integration"

For more information, check [this](https://www.conventionalcommits.org/en/v1.0.0/).

## Branches

- Use the following format for branch names: `<type>/<issue>_<description>` (description in kebab-case)

Examples:

`git branch feature/issue-13_wallet-integrations` (with issue, preferred)

`git branch bugfix/fix-sudden-refresh` (without issue, try to avoid this)

## Issues

- Create issues whenever possible
- Make sure to use the correct labels
- Mention the issue in corresponding branches like `issue-<issue-number>` (aforementioned)
