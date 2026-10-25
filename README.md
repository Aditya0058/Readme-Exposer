# What is Readme-Exposer?
- It is a simple tool which uses JEV (Descision Model) to decide wheter your github repository's readme file is generated via AI or Human
- Not just that but it also gives you probability for 
1) How consistent is readme - Means are there technical terminology used is there consistency in readme
2) Project Specific - Means is that readme actually depicting about that project or it is talking about something else more than the project
- And gives you charaters on the basis of the score u get (your repo get)

# How can I try ?
1) Go to "https://readme-exposer-frontend.vercel.app/home"
2) Paste github public repo link there/
3) Click 'Go'
4) You will be redirected to 'results' page 
5) Look at the result 
6) If u want to try another one, press 'Go Home' on top right side


# Features 
- Provides clear message - AI or Not AI 
- gives characters on the basis of score
- free to use for u

# How this works
- it is quite simple 
    - It takes your repo URL
    - breaks it down and extracts username, repo name, branch name
    - uses github raw content to get readme content
    - sends that readme content to backend
    - Backend sends that readme content to jev with 2 quesitons 
        1) choice - of ai generated or not
        2) noul - of consistency and project specific
    - Then it sends data to frontend
    - Frontend on basis of score decides which character to show, progressbar
    

# For developers 
- If u want to edit it like adding more data from jev these are the following things that you need to know
1) there are just 3 python files in backend
    - app.py - it is flask server recieving github url and calling other 2 python files and returning the results
    - fetch_readme.py - it extracts username, reponame, branchname from URL and fetches readme accordingly
    - check_ai_or_not_ai.py - this one sends that readme and questions to jev and recieves 
- You can add more quesions in check_ai_or_not_ai.py by editing payload
- check Jev's docs to get format for payload here -- https://huggingface.co/blog/paidaxccc/jev-model-typesafe-a-practical-guide-to-typed-ai-d#choice-score-and-noul

## more info
- chracters included in website - 80% of them are made by me and  20% are from excalidraw library 
- backend currently is deployed on vercel
- frontend is also deployed on vercel