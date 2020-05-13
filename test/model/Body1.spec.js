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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Eurosign);
  }
}(this, function(expect, Eurosign) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Eurosign.Body1();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Body1', function() {
    it('should create an instance of Body1', function() {
      // uncomment below and update the code to test Body1
      //var instane = new Eurosign.Body1();
      //expect(instance).to.be.a(Eurosign.Body1);
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instane = new Eurosign.Body1();
      //expect(instance).to.be();
    });

    it('should have the property expirationDate (base name: "expirationDate")', function() {
      // uncomment below and update the code to test the property expirationDate
      //var instane = new Eurosign.Body1();
      //expect(instance).to.be();
    });

    it('should have the property recipientsOrder (base name: "recipientsOrder")', function() {
      // uncomment below and update the code to test the property recipientsOrder
      //var instane = new Eurosign.Body1();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instane = new Eurosign.Body1();
      //expect(instance).to.be();
    });

  });

}));
