
import json
from urllib.request import urlopen, Request
from urllib.parse import urlparse


def fetch_readme(url: str):
    result = urlparse(url)
    url_data_arr = result.path.strip("/").split("/")

    if len(url_data_arr) < 2:
        raise ValueError("Invalid GitHub repository URL")

    username = url_data_arr[0]
    repo_name = url_data_arr[1]

    # Ask GitHub API to locate the README
    api_url = f"https://api.github.com/repos/{username}/{repo_name}/readme"

    req = Request(
        api_url,
        headers={"Accept": "application/vnd.github+json"}
    )

    with urlopen(req, timeout=15) as response:
        readme_data = json.loads(response.read().decode("utf-8"))

    # Get the actual README download URL
    download_url = readme_data["download_url"]

    # Download README content
    with urlopen(download_url, timeout=15) as response:
        readme_content = response.read().decode("utf-8")

    return readme_content
