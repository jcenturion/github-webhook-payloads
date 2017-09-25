module.exports = (action) => {
  return {
    "action": `${action || 'changed'}`,
    "effective_date": "2017-04-06T02:01:16Z",
    "marketplace_purchase": {
      "account": {
        "type": "Organization",
        "id": 4,
        "login": "GitHub",
        "organization_billing_email": "billing@github.com"
      },
      "billing_cycle": "monthly",
      "next_billing_date": "2017-05-01T00:00:00Z",
      "unit_count": 1,
      "plan": {
        "id": 9,
        "name": "Super Pro",
        "description": "A really, super professional-grade CI solution",
        "monthly_price_in_cents": 9999,
        "yearly_price_in_cents": 11998,
        "price_model": "flat-rate",
        "unit_name": null,
        "bullets": [
          "This is the first bullet of the plan",
          "This is the second bullet of the plan"
        ]
      }
    },
    "previous_marketplace_purchase": {
      "account": {
        "type": "Organization",
        "id": 4,
        "login": "GitHub"
      },
      "billing_cycle": "monthly",
      "next_billing_date": "2017-05-01T00:00:00Z",
      "unit_count": 1,
      "plan": {
        "id": 9,
        "name": "Super Pro",
        "description": "A really, super professional-grade CI solution",
        "monthly_price_in_cents": 9999,
        "yearly_price_in_cents": 11998,
        "price_model": "flat-rate",
        "unit_name": null,
        "bullets": [
          "This is the first bullet of the plan",
          "This is the second bullet of the plan"
        ]
      }
    },
    "sender": {
      "id": 1,
      "login": "octocat",
      "email": "octocat@github.com"
    }
  };
};
