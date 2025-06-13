# CUSKIN VIETNAM App

## Project Overview

This repository contains the initial skeleton for the **CUSKIN VIETNAM App**. The goal is to build an application that communicates with the [vqmm.id.vn](https://vqmm.id.vn) API for interacting with voucher and promotional services. The project currently only ships minimal code and documentation.

## Installation Requirements

- Python 3.8 or newer
- `requests` library for HTTP requests

Install dependencies with:

```bash
pip install -r requirements.txt
```

Currently `requirements.txt` simply lists `requests`.

## Usage Instructions

1. Run the application entry point:

```bash
python src/main.py
```

2. The app will perform sample requests to the `vqmm.id.vn` API using the `requests` library. For now this is a placeholder demonstrating how to structure API calls.

### vqmm.id.vn API Interaction

`src/main.py` includes a function demonstrating a basic GET request to the API. Replace the example endpoint with the actual service you need. Typical usage might look like:

```python
response = requests.get("https://vqmm.id.vn/api/endpoint", params={"key": "value"})
```

Handle authentication and error checking as required by the API documentation.

