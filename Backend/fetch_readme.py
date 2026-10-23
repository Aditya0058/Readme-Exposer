from urllib.parse import urlparse
def fetch_readme(url: str):
    result = urlparse(url)
    path = f"{result.path}"
    striped_path = f"{path.strip("/")}"
    url_data_arr = striped_path.split("/")
    userName = url_data_arr[0]
    repoName = url_data_arr[1]
    if len(url_data_arr) > 3:
        branch = url_data_arr[3]
    else:
        branch = "main"  
    
    print(f"userName: {userName} repoName: {repoName} branch: {branch}")





fetch_readme("https://github.com/Aditya0058/Candela-Agent-MVP/tree/Aditya0058-patch-1")




# actual_url = https://raw.githubusercontent.com/username/repo-name/main/README.md

# to get data -- > curl -L https://raw.githubusercontent.com/username/repo-name/main/README.md