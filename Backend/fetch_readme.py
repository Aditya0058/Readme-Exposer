from urllib.parse import urlparse
from urllib.request import urlopen
def fetch_readme(url: str):
    result = urlparse(url)
    path = f"{result.path}"
    striped_path = f"{path.strip("/")}"
    url_data_arr = striped_path.split("/")
    userName = url_data_arr[0]
    repoName = url_data_arr[1]
    if(len(url_data_arr) < 5):
        if len(url_data_arr) > 3:
            branch = url_data_arr[3]
        else:
            branch = "main"  
    else:
        return "wrong url"
    
    # making real url to fetch readme
    actual_url = f"https://raw.githubusercontent.com/{userName}/{repoName}/{branch}/README.md"

    response = urlopen(actual_url)
    readme_content = response.read().decode("utf-8")
    
    return readme_content




# fetch_readme("https://github.com/Aditya0058/Candela-Agent-MVP")




# actual_url = https://raw.githubusercontent.com/username/repo-name/main/README.md

# to get data -- > curl -L https://raw.githubusercontent.com/username/repo-name/main/README.md