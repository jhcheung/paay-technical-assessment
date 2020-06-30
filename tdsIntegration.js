var apiKey = config.PAAY_API

var tds = new ThreeDS(
    "billing-form",
    apiKey,
    null,
    {
      endpoint:"https://api-sandbox.3dsintegrator.com/v2",
      verbose:true
});