# MoviesDatabase API Documentation Project

This project provides comprehensive documentation and implementation examples for the MoviesDatabase API on RapidAPI, designed to help developers understand and effectively use this comprehensive movie and TV show database API.

## API Overview

The MoviesDatabase API is a powerful RESTful service hosted on RapidAPI that provides complete and updated data for over 9 million titles (movies, series, and episodes) and 11 million actors, crew, and cast members. This API offers rich metadata and comprehensive information about the entertainment industry. Key features include:

- **Extensive Database**: Over 9 million movies, TV series, and episodes with detailed metadata
- **Actor Information**: Complete database of 11 million actors, directors, writers, and crew members
- **Real-time Updates**: Recent titles updated weekly, ratings and episodes updated daily
- **YouTube Integration**: Includes YouTube trailer URLs for most titles
- **Awards Data**: Complete awards information and nominations
- **Biography Information**: Full biographies for actors and industry professionals
- **Advanced Search**: Multiple search methods including title, keyword, and IMDB ID lookup
- **Filtering Options**: Comprehensive filtering by year, genre, title type, and more
- **Rating Information**: Complete IMDB ratings and vote counts
- **Series Management**: Detailed season and episode information for TV series
- **Flexible Data Retrieval**: Customizable information levels through the `info` parameter

## API Version

The MoviesDatabase API is currently available as **Version 1 (v1)**, which is the stable and active version. The API is RESTful and provides JSON responses for all endpoints.

## Available Endpoints

### Titles
- **GET /titles** - Retrieve multiple titles with filtering and sorting options
- **GET /titles/{id}** - Get detailed information about a specific title by IMDB ID
- **GET /titles/{id}/ratings** - Get rating information and vote counts for a title
- **GET /titles/{id}/main_actors** - Retrieve main actors for a specific title
- **GET /titles/{id}/crew** - Get crew information for a title
- **GET /titles/{id}/aka** - Get alternative titles (AKA) for a title
- **GET /titles/random** - Get a random title from the database
- **GET /titles/x/titles-by-ids** - Retrieve multiple titles by providing a list of IMDB IDs
- **GET /titles/x/upcoming** - Get upcoming movie and TV show releases

### TV Series & Episodes
- **GET /titles/series/{seriesId}** - Get all episodes for a TV series
- **GET /titles/series/{seriesId}/{season}** - Get episodes for a specific season
- **GET /titles/seasons/{seriesId}** - Get the number of seasons for a TV series
- **GET /titles/episode/{id}** - Get detailed information about a specific episode

### Search
- **GET /titles/search/title/{title}** - Search for titles by title name (supports partial matches)
- **GET /titles/search/keyword/{keyword}** - Search for titles by keyword
- **GET /titles/search/akas/{aka}** - Search for titles by alternative names (exact matches only)

### Actors
- **GET /actors** - Retrieve a list of actors with pagination
- **GET /actors/{id}** - Get detailed information about a specific actor by IMDB ID
- **GET /actors/random** - Get a random actor from the database

### Utility Endpoints
- **GET /titles/utils/genres** - Get a list of all available genres
- **GET /titles/utils/titleTypes** - Get a list of all title types (movie, series, episode, etc.)
- **GET /titles/utils/lists** - Get available predefined lists for the `list` parameter

## Request and Response Format

### Request Structure
All API requests must be made through RapidAPI's infrastructure using the following format:

```
https://moviesdatabase.p.rapidapi.com/{endpoint}?{query_parameters}
```

**Required Headers:**
```
X-RapidAPI-Key: {your_rapidapi_key}
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

**Example Request:**
```bash
curl -X GET "https://moviesdatabase.p.rapidapi.com/titles/tt0111161?info=base_info" \
  -H "X-RapidAPI-Key: your_rapidapi_key_here" \
  -H "X-RapidAPI-Host: moviesdatabase.p.rapidapi.com"
```

### Response Structure
All API responses return JSON-formatted data with a consistent structure. Every endpoint returns an object with a `results` key, and endpoints with pagination include additional keys: `page`, `next`, and `entries`.

**Successful Response:**
```json
{
  "results": [
    {
      "id": "tt0111161",
      "titleText": {
        "text": "The Shawshank Redemption"
      },
      "primaryImage": {
        "url": "https://m.media-amazon.com/images/M/...",
        "width": 1000,
        "height": 1426
      },
      "titleType": {
        "text": "Movie",
        "id": "movie"
      },
      "releaseDate": {
        "day": 23,
        "month": 9,
        "year": 1994
      },
      "ratingsSummary": {
        "aggregateRating": 9.3,
        "voteCount": 2500000
      }
    }
  ],
  "page": 1,
  "next": "/titles?page=2&limit=10",
  "entries": 50000000
}
```

**Error Response:**
```json
{
  "message": "Invalid API key provided.",
  "info": "Your API key is not valid for this endpoint. Please check your subscription."
}
```

### Data Models

#### Title Object
```json
{
  "id": "tt0111161",
  "titleText": {"text": "Movie Title"},
  "originalTitleText": {"text": "Original Title"},
  "primaryImage": {
    "url": "image_url",
    "width": 1000,
    "height": 1426
  },
  "titleType": {"text": "Movie", "id": "movie"},
  "releaseDate": {"day": 23, "month": 9, "year": 1994},
  "releaseYear": {"year": 1994},
  "runtime": {"seconds": 8520},
  "genres": {"genres": [{"text": "Drama", "id": "drama"}]},
  "ratingsSummary": {
    "aggregateRating": 9.3,
    "voteCount": 2500000
  },
  "plot": {"plotText": {"plainText": "Plot description"}},
  "cast": {"edges": [...]},
  "directors": [{"name": {"nameText": {"text": "Director Name"}}}]
}
```

#### Actor Object  
```json
{
  "nconst": "nm0000001",
  "primaryName": "Actor Name",
  "birthYear": 1950,
  "deathYear": null,
  "primaryProfession": "actor,producer,director",
  "knownForTitles": "tt0111161,tt0108052,tt0137523"
}
```

#### Rating Object
```json
{
  "tconst": "tt0111161",
  "averageRating": 9.3,
  "numVotes": 2500000
}
```

## Authentication Requirements

### RapidAPI Authentication
The MoviesDatabase API is hosted on RapidAPI and requires RapidAPI-specific authentication headers for all requests.

### Required Headers
All API requests must include these authentication headers:

```http
X-RapidAPI-Key: {your_rapidapi_key}
X-RapidAPI-Host: moviesdatabase.p.rapidapi.com
```

### Getting Your API Key

1. **Sign up for RapidAPI:**
   - Visit [RapidAPI.com](https://rapidapi.com) and create a free account
   - Verify your email address

2. **Subscribe to MoviesDatabase API:**
   - Navigate to the [MoviesDatabase API page](https://rapidapi.com/SAdrian/api/moviesdatabase)
   - Choose a pricing plan (free tier available with limited requests)
   - Click "Subscribe" to access the API

3. **Get Your API Key:**
   - After subscribing, your RapidAPI key will be available in the API dashboard
   - Copy the key from the code snippets provided on the API page

### Authentication Example

**cURL Request:**
```bash
curl -X GET "https://moviesdatabase.p.rapidapi.com/titles" \
  -H "X-RapidAPI-Key: your_rapidapi_key_here" \
  -H "X-RapidAPI-Host: moviesdatabase.p.rapidapi.com"
```

**JavaScript (Axios):**
```javascript
const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles',
  headers: {
    'X-RapidAPI-Key': 'your_rapidapi_key_here',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

const response = await axios.request(options);
```

**Python (Requests):**
```python
import requests

url = "https://moviesdatabase.p.rapidapi.com/titles"

headers = {
    "X-RapidAPI-Key": "your_rapidapi_key_here",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com"
}

response = requests.get(url, headers=headers)
```

### Security Best Practices

1. **Protect Your API Key:**
   - Never commit API keys to public repositories
   - Use environment variables to store your API key
   - Rotate your API key periodically

2. **Environment Variables:**
   ```bash
   export RAPIDAPI_KEY="your_rapidapi_key_here"
   ```

3. **Production Usage:**
   - Store API keys in secure configuration management systems
   - Use different keys for development and production environments
   - Monitor API key usage through RapidAPI dashboard

## Error Handling

### Common HTTP Status Codes

| Status Code | Description | Action Required |
|------------|-------------|-----------------|
| 200 | Success | Request completed successfully |
| 400 | Bad Request | Check request parameters and format |
| 401 | Unauthorized | Verify RapidAPI key is valid |
| 403 | Forbidden | Check API subscription and limits |
| 404 | Not Found | Resource doesn't exist with given ID |
| 429 | Too Many Requests | Rate limit exceeded, wait before retry |
| 500 | Internal Server Error | Retry request after delay |

### RapidAPI Error Response Structure
```json
{
  "message": "Invalid API key provided.",
  "info": "Your API key is not valid for this endpoint. Please check your subscription."
}
```

### MoviesDatabase Specific Errors
```json
{
  "error": "Title not found",
  "details": "No title found with the provided ID: tt9999999"
}
```

### Error Handling Best Practices

**JavaScript Example:**
```javascript
async function handleAPIRequest(url, headers) {
  try {
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API Error ${response.status}: ${errorData.message || errorData.error}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error.name === 'TypeError') {
      throw new Error('Network error: Please check your internet connection');
    }
    throw error;
  }
}
```

**Python Example:**
```python
import requests
from requests.exceptions import RequestException, Timeout
import time

def handle_api_request(url, headers, max_retries=3):
    for attempt in range(max_retries):
        try:
            response = requests.get(url, headers=headers, timeout=10)
            
            if response.status_code == 429:
                # Rate limit exceeded, wait and retry
                wait_time = 2 ** attempt  # Exponential backoff
                time.sleep(wait_time)
                continue
                
            response.raise_for_status()
            return response.json()
            
        except requests.exceptions.HTTPError as e:
            if response.status_code >= 400:
                error_data = response.json() if response.content else {}
                raise Exception(f"API Error {response.status_code}: {error_data.get('message', str(e))}")
        except Timeout:
            if attempt == max_retries - 1:
                raise Exception("Request timeout: API is not responding")
        except RequestException as e:
            raise Exception(f"Network error: {str(e)}")
    
    raise Exception("Max retries exceeded")
```

### Common Error Scenarios

1. **Invalid API Key (401 Unauthorized)**
   - Check your RapidAPI subscription status
   - Verify X-RapidAPI-Key header is correctly set
   - Ensure API key hasn't expired

2. **Rate Limit Exceeded (429)**
   - Implement exponential backoff retry logic
   - Check your current subscription limits
   - Consider upgrading to a higher tier plan

3. **Resource Not Found (404)**
   - Verify IMDB ID format (e.g., tt0111161)
   - Check if the title/actor exists in the database
   - Try alternative search methods

4. **Bad Request (400)**
   - Validate query parameters
   - Check required parameters are included
   - Ensure proper URL encoding for special characters

## Usage Limits and Best Practices

### RapidAPI Rate Limits

#### Free Tier Limitations
- **Requests per Month**: 1,000 requests
- **Requests per Second**: 1-2 requests
- **Daily Limit**: ~33 requests per day
- **Features**: Access to all endpoints with basic rate limiting

#### Pro Plan Features
- **Requests per Month**: 10,000+ requests (depending on plan)
- **Higher Rate Limits**: Up to 10 requests per second
- **Priority Support**: Faster response times
- **No Daily Caps**: Distribute monthly quota as needed

### Best Practices

#### 1. Efficient Request Management
```javascript
// Implement request queuing to avoid rate limits
class APIQueue {
  constructor(requestsPerSecond = 1) {
    this.queue = [];
    this.processing = false;
    this.interval = 1000 / requestsPerSecond;
  }
  
  async add(request) {
    return new Promise((resolve, reject) => {
      this.queue.push({ request, resolve, reject });
      this.process();
    });
  }
  
  async process() {
    if (this.processing || this.queue.length === 0) return;
    
    this.processing = true;
    while (this.queue.length > 0) {
      const { request, resolve, reject } = this.queue.shift();
      
      try {
        const result = await request();
        resolve(result);
      } catch (error) {
        reject(error);
      }
      
      await new Promise(resolve => setTimeout(resolve, this.interval));
    }
    this.processing = false;
  }
}
```

#### 2. Caching Strategies
```python
import time
from functools import wraps

# Simple in-memory cache with TTL
cache = {}

def cached_api_call(ttl_seconds=300):  # 5 minutes default
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            # Create cache key from function arguments
            cache_key = f"{func.__name__}:{hash(str(args) + str(kwargs))}"
            
            if cache_key in cache:
                cached_data, timestamp = cache[cache_key]
                if time.time() - timestamp < ttl_seconds:
                    return cached_data
            
            # Make API call if not cached or expired
            result = func(*args, **kwargs)
            cache[cache_key] = (result, time.time())
            return result
        return wrapper
    return decorator

@cached_api_call(ttl_seconds=600)  # Cache for 10 minutes
def get_title_details(title_id):
    # Your API call here
    return api_request(f"/titles/{title_id}")
```

#### 3. Batch Processing
```python
# Process multiple items with proper delays
import asyncio
import aiohttp

async def batch_process_titles(title_ids, batch_size=10):
    results = []
    
    for i in range(0, len(title_ids), batch_size):
        batch = title_ids[i:i + batch_size]
        batch_results = await process_batch(batch)
        results.extend(batch_results)
        
        # Add delay between batches to respect rate limits
        if i + batch_size < len(title_ids):
            await asyncio.sleep(1)  # 1 second delay
    
    return results

async def process_batch(title_ids):
    async with aiohttp.ClientSession() as session:
        tasks = [get_title_info(session, title_id) for title_id in title_ids]
        return await asyncio.gather(*tasks)
```

#### 4. Error Recovery and Retry Logic
```javascript
async function robustAPICall(url, headers, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, { headers });
      
      if (response.status === 429) {
        // Rate limited - implement exponential backoff
        const delay = Math.min(1000 * Math.pow(2, attempt - 1), 30000);
        console.log(`Rate limited. Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
      
    } catch (error) {
      lastError = error;
      if (attempt === maxRetries) break;
      
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
  
  throw lastError;
}
```

#### 5. Data Optimization
- **Use Selective Fields**: Only request the data you need using info parameters
- **Implement Pagination**: Process large datasets in chunks
- **Filter Client-Side**: Reduce API calls by filtering results locally when possible
- **Cache Frequently Accessed Data**: Store popular movie/actor information locally

#### 6. Monitoring and Analytics
```python
import logging
from datetime import datetime, timedelta

class APIUsageTracker:
    def __init__(self):
        self.usage_log = []
        
    def log_request(self, endpoint, status_code, response_time):
        self.usage_log.append({
            'endpoint': endpoint,
            'status_code': status_code,
            'response_time': response_time,
            'timestamp': datetime.now()
        })
    
    def get_usage_stats(self, hours=24):
        cutoff = datetime.now() - timedelta(hours=hours)
        recent_requests = [
            req for req in self.usage_log 
            if req['timestamp'] > cutoff
        ]
        
        return {
            'total_requests': len(recent_requests),
            'success_rate': len([r for r in recent_requests if r['status_code'] == 200]) / len(recent_requests) * 100,
            'avg_response_time': sum(r['response_time'] for r in recent_requests) / len(recent_requests),
            'rate_limit_hits': len([r for r in recent_requests if r['status_code'] == 429])
        }
```

### Performance Recommendations

1. **Connection Pooling**: Reuse HTTP connections when making multiple requests
2. **Compression**: Enable gzip compression for responses
3. **Timeout Settings**: Set appropriate timeouts for your use case (10-30 seconds)
4. **Concurrent Requests**: Use async/await patterns but respect rate limits
5. **Database Integration**: Store frequently accessed data in your local database

### Monitoring Your Usage

- **RapidAPI Dashboard**: Track your API usage, remaining quota, and performance metrics
- **Set Up Alerts**: Configure notifications when approaching rate limits
- **Usage Analytics**: Monitor which endpoints are most used to optimize your application
- **Cost Tracking**: Keep track of API costs if using paid tiers

This comprehensive documentation provides everything needed to successfully implement and use the MoviesDatabase API in your applications.