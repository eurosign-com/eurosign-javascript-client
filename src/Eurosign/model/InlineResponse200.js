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

import ApiClient from '../ApiClient';
import ModelObject from './ModelObject';

/**
* The InlineResponse200 model module.
* @module Eurosign/model/InlineResponse200
* @version 1.0.0
*/
export default class InlineResponse200 {
    /**
    * Constructs a new <code>InlineResponse200</code>.
    * @alias module:Eurosign/model/InlineResponse200
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Eurosign/model/InlineResponse200} obj Optional instance to populate.
    * @return {module:Eurosign/model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse200();
                        
            
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('senderId')) {
                obj['senderId'] = ApiClient.convertToType(data['senderId'], [ModelObject]);
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], [ModelObject]);
            }
            if (data.hasOwnProperty('sendDate')) {
                obj['sendDate'] = ApiClient.convertToType(data['sendDate'], [ModelObject]);
            }
            if (data.hasOwnProperty('expirationDate')) {
                obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], [ModelObject]);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], [ModelObject]);
            }
        }
        return obj;
    }

    /**
    * UUID of the signature request UUID
    * @member {String} uuid
    */
    uuid = undefined;
    /**
    * Name of the signature request
    * @member {String} name
    */
    name = undefined;
    /**
    * ID of the sender
    * @member {Array.<module:Eurosign/model/ModelObject>} senderId
    */
    senderId = undefined;
    /**
    * Creation date of the signature request
    * @member {Array.<module:Eurosign/model/ModelObject>} creationDate
    */
    creationDate = undefined;
    /**
    * Sending date of the signature request
    * @member {Array.<module:Eurosign/model/ModelObject>} sendDate
    */
    sendDate = undefined;
    /**
    * Expiration date of the signature request
    * @member {Array.<module:Eurosign/model/ModelObject>} expirationDate
    */
    expirationDate = undefined;
    /**
    * Status date of the signature request
    * @member {Array.<module:Eurosign/model/ModelObject>} status
    */
    status = undefined;




}