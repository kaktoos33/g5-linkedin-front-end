
# FrontEnd

# G5 Git Branching Rules

## There are two main branches:
1. master: contains stable system versions (tagged with the version number)
2. develop (default branch): contains the last tested developed code
+ All other branches are temporarily

## When a team wants to start working on a feature, it should follow these steps:
1. Create a feature branch. The naming pattern is "feature/[name of feature]". For example: "feature/search", "feature/api"
>>>
$ git checkout -b feature/api develop
- Switched to a new branch "feature/api" (branch off from the develop branch)
>>>
2. After finishing the feature, it should be fully tested (unit test)
3. Then, a merge request (through the gitlab website) should follow with an assigned reviewer (assignee)
4. The reviewer checks the code, if OK, accepts the merge request, 
   if NOT, starts a thread and reports the problems to be fixed by the developer
5. After finishing a sprint, the code will be requested to merge to the master branch by the team HEAD, 
   and will be reviewed by the project manager

## For the following items, we must have a new temporarily branch
- A feature (feature/[name of feature])
- A set of hot bug fixes (bug/[bugs topic])

## Any push into the master branch, must have a version tag
- Suppose you want to push to develop

1. $ git checkout develop
2. $ git add .
3. $ git commit -m
>>>
"First line: the headline"

"Next lines: main changes one by one"

for example:

  "Add searchbar to the top of page"
  
  "- user now can search by text, image, and voice"
  
  "- user now can save his search histories"
  
  "- user now can access his previous searches easily and fast"
>>>
4. $ git tag -a "v1.0" -m "version 1.0"
5. $ git push origin develop
