# New Committing Methods
- git status will tell you what's been changed, staged, committed and what you can do

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

- git reset SHA (the number representing a commit (you can check them with git log)) undoes a commit (but not a push!) and unstages everything you committed. The SHA is the commit you want to GO BACK TO, so you can remove multiple commits
    - git reset --hard SHA undoes a commit AND DELETES all the stuff you added; NUCLEAR OPTION

- git revert SHA lets you remove a certain commit (the one from the SHA), but leaves everything after, so the stuff you put in afterward is safe

- 'git branch' creates a parallel universe where you can make changes to the code without affecting the main branch
    - you do this with 'git branch (name of branch)', and then you can switch to it with 'git switch (name of branch)'
    - 'git switch -c (name of NEW branch)' both adds AND switches to a new branch
    - you can even check the differences between branches with 'git diff (name of branch)(name of other branch)'
    - You can't switch branches without committing new (unsaved) information
    - If you need to switch branches before committing you can use 'git stash' which will store your unsaved information and then when you come back you can use 'git stash pop' to retrieve it

- 'git merge' combines the parallel universes of 'git branch' (as long as they don't contradict each other, for example if you never edited the same file.