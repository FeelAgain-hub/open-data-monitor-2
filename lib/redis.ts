import Redis from 'ioredis';

let redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

// Sanitize URL: Remove leading/trailing spaces and potential '-u' flag from copy-paste
// Handling both literal spaces and URL-encoded spaces (%20)
redisUrl = redisUrl.trim();

// Remove optional '-u ' prefix if the user copied from command line examples
// Also handle cases where it might be prefixed with space or %20
redisUrl = redisUrl.replace(/^([\s%20]*-u[\s%20]+)/, '');
redisUrl = redisUrl.replace(/^[\s%20]+/, '').trim();

// Extraction logic: try to find the actual redis URL if there is junk around it
const redisMatch = redisUrl.match(/(rediss?:\/\/[^\s]+)/);
if (redisMatch) {
  redisUrl = redisMatch[1];
}

// Log sanitized URL (obscuring password for security)
const logUrl = redisUrl.replace(/:[^:@]+@/, ':****@');
console.log(`[Redis] Initializing with: ${logUrl}`);

export const redis = new Redis(redisUrl, {
  maxRetriesPerRequest: 3,
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  lazyConnect: true,
  connectTimeout: 5000,
});

redis.on('error', (err) => {
  console.error('Redis Connection Error:', err);
});
