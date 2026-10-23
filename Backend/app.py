from fetch_readme import fetch_readme 
from check_ai_or_not_ai import check_ai_or_not_ai


url = "https://github.com/Aditya0058/aditya0058.github.io"

readme_content = fetch_readme(url)
result = check_ai_or_not_ai(readme_content)

print(result) # {'Authorship': 'human', 'Project Specific': 0.96, 'Consistency': 0.55}