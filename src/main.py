import requests

API_BASE = "https://vqmm.id.vn"


def sample_request():
    """Perform a sample GET request to the vqmm.id.vn API."""
    url = f"{API_BASE}/api/placeholder"
    try:
        response = requests.get(url)
        response.raise_for_status()
        print("Response from API:", response.text)
    except requests.RequestException as exc:
        print("API request failed:", exc)


if __name__ == "__main__":
    sample_request()
