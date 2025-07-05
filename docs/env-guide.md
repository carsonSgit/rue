# Environment Variables Guide 🔐

## Overview

This guide explains the environment variables needed to run the Rue app. These variables are used for various services and configurations.

## Setup Instructions

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Fill in the required values (see below)

## Required Variables

### Authentication
```
AUTH_API_URL=https://api.example.com/auth
AUTH_CLIENT_ID=your_client_id
AUTH_CLIENT_SECRET=your_client_secret
```

### Maps & Location
```
GOOGLE_MAPS_API_KEY=your_google_maps_key
LOCATION_SERVICES_API_KEY=your_location_api_key
```

### Storage & Media
```
CLOUD_STORAGE_URL=https://storage.example.com
CLOUD_STORAGE_KEY=your_storage_key
MEDIA_CDN_URL=https://cdn.example.com
```

### Analytics & Monitoring
```
ANALYTICS_API_KEY=your_analytics_key
ERROR_REPORTING_DSN=your_error_reporting_dsn
```

## Optional Variables

### Feature Flags
```
ENABLE_SOCIAL_FEATURES=true
ENABLE_PREMIUM_FEATURES=false
ENABLE_BETA_FEATURES=false
```

### Development
```
DEBUG_MODE=true
API_MOCK_ENABLED=true
MOCK_USER_TOKEN=dev_token_123
```

## Getting API Keys

### Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Enable Maps JavaScript API
4. Create credentials (API key)
5. Restrict the key to your app's bundle ID

### Auth Service
1. Contact the auth service provider
2. Register your application
3. Get client ID and secret
4. Add authorized redirect URIs

### Cloud Storage
1. Set up a cloud storage account
2. Create a new bucket
3. Generate access keys
4. Set up CORS if needed

### Analytics
1. Set up an analytics account
2. Create a new property
3. Get the tracking ID/API key

## Security Notes

⚠️ NEVER commit `.env` file to version control
⚠️ NEVER share API keys publicly
⚠️ Use appropriate key restrictions
⚠️ Rotate keys periodically

## Troubleshooting

### Common Issues

1. "API key not valid"
   - Check if the key is correctly copied
   - Verify key restrictions
   - Ensure the service is enabled

2. "Authentication failed"
   - Verify client ID and secret
   - Check if the auth service is accessible
   - Validate redirect URIs

3. "Storage access denied"
   - Check storage permissions
   - Verify the storage key
   - Ensure CORS is configured

### Getting Help

If you're stuck:
1. Check the error message
2. Review service documentation
3. Contact the service provider
4. Ask team members

## Development vs Production

### Development
- Use development API keys
- Enable debug mode
- Use mock data when possible
- Less restricted key settings

### Production
- Use production API keys
- Disable debug features
- Use real services
- Strict key restrictions

## Adding New Variables

When adding new environment variables:

1. Add to `.env.example`
2. Document in this guide
3. Update CI/CD configuration
4. Notify team members 