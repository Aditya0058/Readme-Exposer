import requests

response = requests.get('https://raw.githubusercontent.com/Aditya0058/flow-student-quest/main/README.md')
print(response.staus_code)
print(response.txt)
print(response.json)