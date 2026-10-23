def check_ai_or_not_ai(readme_content: str):
    import requests
    import os
    from dotenv import load_dotenv

    load_dotenv()

    api_key = os.getenv("YOUR_JEV_API_KEY")
    proxy_url = os.getenv("JEV_PROXY_URL")

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": "jev-latest",
        "state": "Help! My payouts have been failing for 3 days.",
        "questions": {
            "is_urgent": {"type": "noul", "instructions": "Does this convey urgency?"},
            "category": {
                "type": "choice",
                "instructions": "What is this message about?",
                "criteria": {
            "billing": "Payments, invoices, or subscriptions",
            "bug": "Something is broken",
            "feature": "A request for new functionality",
            "other": "Nothing above fits"
            },
            },
        },
    }

    response = requests.post(
        f"{proxy_url}",
        headers=headers,
        json=payload,
    )

    answers = response.json()["answers"]
    print(answers["is_urgent"]["noul"])   
    print(answers["category"]["choice"])  
