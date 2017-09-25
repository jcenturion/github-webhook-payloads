# GitHub webhook payloads

The goal of this library is to help you when testing your GitHub webhooks by providing a sample per event type/payload.

### Accesing samples

```javascript
const webhook = require('github-webhook-payloads');
const issueUnassigned = webhook.events.issues.unassigned.payload;

// code here
```

or you can access directly by event type

```javascript
const webhook = require('github-webhook-payloads');
const fork = webhook('fork');

// code here
```
