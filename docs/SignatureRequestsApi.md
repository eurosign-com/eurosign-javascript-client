# Eurosign.SignatureRequestsApi

All URIs are relative to *https://api.eurosign.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSignatureRequests**](SignatureRequestsApi.md#cancelSignatureRequests) | **POST** /signature-requests/{uuid}/cancel | Cancel a signature requests
[**createSignatureRequest**](SignatureRequestsApi.md#createSignatureRequest) | **POST** /signature-requests | Create a new signature request
[**getSignatureRequest**](SignatureRequestsApi.md#getSignatureRequest) | **GET** /signature-requests/{uuid} | Get signature requests test
[**getSignatureRequestAuditTrail**](SignatureRequestsApi.md#getSignatureRequestAuditTrail) | **GET** /signature-requests/{uuid}/audit-trail | Get the audit report of a signature requests
[**getSignatureRequestRecipient**](SignatureRequestsApi.md#getSignatureRequestRecipient) | **GET** /signature-requests/{uuid}/recipients/{recipientUuid} | Get a recipient of a signature requests
[**getSignatureRequestRecipients**](SignatureRequestsApi.md#getSignatureRequestRecipients) | **GET** /signature-requests/{uuid}/recipients | Get recipients of a signature requests
[**getSignatureRequests**](SignatureRequestsApi.md#getSignatureRequests) | **GET** /signature-requests | Get the list of signature requests
[**sendSignatureRequest**](SignatureRequestsApi.md#sendSignatureRequest) | **POST** /signature-requests/{uuid}/send | Send a signature requests
[**updateSignatureRequest**](SignatureRequestsApi.md#updateSignatureRequest) | **PATCH** /signature-requests/{uuid} | Update a signature requests

<a name="cancelSignatureRequests"></a>
# **cancelSignatureRequests**
> cancelSignatureRequests(uuid)

Cancel a signature requests

### Example
```javascript
import Eurosign from 'eurosign';
let defaultClient = Eurosign.ApiClient.instance;

// Configure OAuth2 access token for authorization: eurosign_auth
let eurosign_auth = defaultClient.authentications['eurosign_auth'];
eurosign_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Eurosign.SignatureRequestsApi();
let uuid = "uuid_example"; // String | The signature request UUID

apiInstance.cancelSignatureRequests(uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The signature request UUID | 

### Return type

null (empty response body)

### Authorization

[eurosign_auth](../README.md#eurosign_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="createSignatureRequest"></a>
# **createSignatureRequest**
> InlineResponse2001 createSignatureRequest()

Create a new signature request

### Example
```javascript
import Eurosign from 'eurosign';
let defaultClient = Eurosign.ApiClient.instance;

// Configure OAuth2 access token for authorization: eurosign_auth
let eurosign_auth = defaultClient.authentications['eurosign_auth'];
eurosign_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Eurosign.SignatureRequestsApi();

apiInstance.createSignatureRequest(, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)| Input data format | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[eurosign_auth](../README.md#eurosign_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSignatureRequest"></a>
# **getSignatureRequest**
> getSignatureRequest(uuid)

Get signature requests test

### Example
```javascript
import Eurosign from 'eurosign';
let defaultClient = Eurosign.ApiClient.instance;

// Configure OAuth2 access token for authorization: eurosign_auth
let eurosign_auth = defaultClient.authentications['eurosign_auth'];
eurosign_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Eurosign.SignatureRequestsApi();
let uuid = "uuid_example"; // String | Identifiant of a signature request

apiInstance.getSignatureRequest(uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| Identifiant of a signature request | 

### Return type

null (empty response body)

### Authorization

[eurosign_auth](../README.md#eurosign_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSignatureRequestAuditTrail"></a>
# **getSignatureRequestAuditTrail**
> getSignatureRequestAuditTrail(uuid)

Get the audit report of a signature requests

### Example
```javascript
import Eurosign from 'eurosign';
let defaultClient = Eurosign.ApiClient.instance;

// Configure OAuth2 access token for authorization: eurosign_auth
let eurosign_auth = defaultClient.authentications['eurosign_auth'];
eurosign_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Eurosign.SignatureRequestsApi();
let uuid = "uuid_example"; // String | Identifiant of a signature request

apiInstance.getSignatureRequestAuditTrail(uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| Identifiant of a signature request | 

### Return type

null (empty response body)

### Authorization

[eurosign_auth](../README.md#eurosign_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSignatureRequestRecipient"></a>
# **getSignatureRequestRecipient**
> getSignatureRequestRecipient(uuid, recipientUuid)

Get a recipient of a signature requests

### Example
```javascript
import Eurosign from 'eurosign';
let defaultClient = Eurosign.ApiClient.instance;

// Configure OAuth2 access token for authorization: eurosign_auth
let eurosign_auth = defaultClient.authentications['eurosign_auth'];
eurosign_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Eurosign.SignatureRequestsApi();
let uuid = "uuid_example"; // String | Identifiant of a signature request
let recipientUuid = "recipientUuid_example"; // String | Identifiant of a recipient

apiInstance.getSignatureRequestRecipient(uuid, recipientUuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| Identifiant of a signature request | 
 **recipientUuid** | **String**| Identifiant of a recipient | 

### Return type

null (empty response body)

### Authorization

[eurosign_auth](../README.md#eurosign_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSignatureRequestRecipients"></a>
# **getSignatureRequestRecipients**
> getSignatureRequestRecipients(uuid)

Get recipients of a signature requests

### Example
```javascript
import Eurosign from 'eurosign';
let defaultClient = Eurosign.ApiClient.instance;

// Configure OAuth2 access token for authorization: eurosign_auth
let eurosign_auth = defaultClient.authentications['eurosign_auth'];
eurosign_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Eurosign.SignatureRequestsApi();
let uuid = "uuid_example"; // String | Identifiant of a signature request

apiInstance.getSignatureRequestRecipients(uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| Identifiant of a signature request | 

### Return type

null (empty response body)

### Authorization

[eurosign_auth](../README.md#eurosign_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getSignatureRequests"></a>
# **getSignatureRequests**
> InlineResponse200 getSignatureRequests()

Get the list of signature requests

Retrieve the list of all the signature requests

### Example
```javascript
import Eurosign from 'eurosign';

let apiInstance = new Eurosign.SignatureRequestsApi();
apiInstance.getSignatureRequests((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="sendSignatureRequest"></a>
# **sendSignatureRequest**
> sendSignatureRequest(uuid, senderId)

Send a signature requests

### Example
```javascript
import Eurosign from 'eurosign';
let defaultClient = Eurosign.ApiClient.instance;

// Configure OAuth2 access token for authorization: eurosign_auth
let eurosign_auth = defaultClient.authentications['eurosign_auth'];
eurosign_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Eurosign.SignatureRequestsApi();
let uuid = "uuid_example"; // String | The signature request UUID
let senderId = "senderId_example"; // String | The ID of the account_user sending the signature request

apiInstance.sendSignatureRequest(uuid, senderId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The signature request UUID | 
 **senderId** | **String**| The ID of the account_user sending the signature request | 

### Return type

null (empty response body)

### Authorization

[eurosign_auth](../README.md#eurosign_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="updateSignatureRequest"></a>
# **updateSignatureRequest**
> updateSignatureRequest(uuid)

Update a signature requests

### Example
```javascript
import Eurosign from 'eurosign';
let defaultClient = Eurosign.ApiClient.instance;

// Configure OAuth2 access token for authorization: eurosign_auth
let eurosign_auth = defaultClient.authentications['eurosign_auth'];
eurosign_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Eurosign.SignatureRequestsApi();
let uuid = "uuid_example"; // String | The signature request UUID

apiInstance.updateSignatureRequest(uuid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | **String**| The signature request UUID | 
 **body** | [**Body1**](Body1.md)| Input data format | [optional] 

### Return type

null (empty response body)

### Authorization

[eurosign_auth](../README.md#eurosign_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

