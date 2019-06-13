# Appolo Crypto Utils
useful crypto utils for node v12+
## Installation

```typescript
npm i @appolo-crypto
```


```typescript
import {RateLimiterModule} from '@appolo/rate-limiter';

export = async function (app: App) {
    await app.module(new RateLimiterModule({connection:process.env.REDIS}));
    
}
```
