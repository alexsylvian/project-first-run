# New Committing Methods
- git status will tell you what's been changed and what you can do

- you can use the echo ' ' >> readme.md command to add things to readme.md without opening it!

- Q exits git diff HEAD (HEAD is the most recent commit)

- adding a ' - ' sign makes lines in the readme.md

- you can open previews in vs editor

- git commit (without -m) opens the multiline commit

- you can look at the difference between two commits by using the SHAs, for example: git diff 246ed2f 9ac3ccb (commit 1 vs 5)

- git log shows all commits
    - git log -3 will show only the last three commits

- git restore (filename (ex. readme.md)) reverts all unstaged (with git add .) changes since the last commit
    - git restore --staged (filename (ex. readme.md)) reverts all STAGED (with git add .) changes since the last commit and reverts them to unstaged