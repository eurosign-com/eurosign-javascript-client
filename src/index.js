/**
 * Eurosign
 * This is the documentation of the eurosign API, you can download all of our SDK in this page.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@eurosign.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from './ApiClient';
import Body from './model/Body';
import Body1 from './model/Body1';
import InlineResponse200 from './model/InlineResponse200';
import InlineResponse2001 from './model/InlineResponse2001';
import SignatureRequestsApi from './api/SignatureRequestsApi';

/**
* This_is_the_documentation_of_the_eurosign_API_you_can_download_all_of_our_SDK_in_this_page_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Eurosign = require('Eurosign/index'); // See note below*.
* var xxxSvc = new Eurosign.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Eurosign.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['Eurosign/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Eurosign.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Eurosign.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module Eurosign/index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:Eurosign/ApiClient}
     */
    ApiClient,

    /**
     * The Body model constructor.
     * @property {module:Eurosign/model/Body}
     */
    Body,

    /**
     * The Body1 model constructor.
     * @property {module:Eurosign/model/Body1}
     */
    Body1,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:Eurosign/model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:Eurosign/model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
    * The SignatureRequestsApi service constructor.
    * @property {module:Eurosign/api/SignatureRequestsApi}
    */
    SignatureRequestsApi
};