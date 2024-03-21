/* tslint:disable */
/* eslint-disable */
/**
 * CPO OICP-2.3
 * ## Introduction ### The Hubject Platform  The goal of the “Hubject B2B Service Platform (HBS)” is to enable the electric mobility market by providing an information and transactional gateway for businesses such as charging infrastructure providers, mobility service providers and vehicle manufacturers.  ![Hubject Process](images/hubject_1.png)  The platform enabler functions include:   * Ensuring the interoperability of the public and semi-public infrastructure through promotion of accepted standards within the network and open business user interfaces to the platform * Simplification of authentication and authorization procedures through a trustworthy instance as well as safekeeping of sensitive data through the uncoupling of personal data and anonymous user data * Automation of contract-based business relationships between power suppliers, car manufacturers, infrastructure service providers as well as further mobility business parties * B2B information services for the realization of advanced services within the areas of energy management, traffic management, vehicle reservations, intelligent charging, car sharing and intermodal mobility  ### The Charge Point Operator (CPO) Hubject has been connecting various players in electric mobility since being founded in 2012. Hubject provides Europe-wide, customer-friendly charging for electric vehicles via eRoaming.  The two main partner groups are, on the one hand, providers of emobility services (EMP), which want to enable EV drivers to access charging infrastructure and, on the other hand, charge point operators (CPO), which want to boost the capacity utilization of their charging infrastructure.  Our solution for ChargePoint Operators:   As a CPO, you can profit from our solution, intercharge CPO. It allows customers who have a contract with an EMP to charge their vehicles using your charging infrastructure via eRoaming. For this purpose, you need to get connected to the HBS (Hubject Brokering System) eRoaming platform. The HBS functions as an open electric mobility marketplace, which creates an open synergetic network that everyone profits from in the end.  ### Scope  The information exchange between Hubject and CPO systems is entirely based on web service communication. This document describes the relevant service interfaces for CPO. The Open InterCharge Protocol (OICP) is the most widely implemented communication standard between EMP and CPO systems.  The information exchange is, in most cases, based on contractual relationships between EMPs and CPOs. In these cases, Hubject only processes service requests if there is a valid contract for the requested service. How EMPs and CPOs manage their service contracts is out of the scope of this document because the contract management aspects of the platform are used via a GUI-based system component.  ### Conventions  The key words `MUST\"`, `MUST NOT`, `REQUIRED`, `SHALL`, `SHALL NOT`, `SHOULD`, `SHOULD NOT`, `RECOMMENDED`, `MAY` and `OPTIONAL` in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).    ### Overview  The following diagram gives an overview of all service operation messages that can be exchanged between Hubject and the corresponding EMP, respectively CPO systems. [\"Services and Operations\"](02_CPO_Services_and_Operations.asciidoc) chapter introduces the supported web services and the corresponding service operations in detail and defines the messages that will be exchanged between Hubject and partner systems. Chapter [Data Types](03_CPO_Data_Types.asciidoc) specifies the data types of the messages. Furthermore, every service is described in detail by a business process diagram, which is part of the [appendix](04_Appendix.asciidoc)  ![Hubject Web Services Diagram](images/web_services.png)  ### Release management    Hubject intends to pursue a release frequency; whereby, a new update of the OICP can be done within a time frame of two years with the HBS. The frequency of releases to be expected in the future should however not result in additional implementation complexity for partners, since each new release will lead to a new version of the affected services that will run in parallel to the current service version. Consequently, partners do not need to perform an upgrade with each new release, but will rather have the flexibility to choose which of the available valid service versions they wish to use. Service validity is dependent on the OICP version with which they are released (i.e. service versions available in deprecated OICP versions are only considered invalid and will not be supported by the HBS). Only service versions available in active OICP versions shall be supported. Each OICP version `MUST` be supported for two years by the HBS.   See below for an example of the implications of the HBS release management approach  *NOTE*:  >_the dates and content in the diagram below are strictly meant for explanation purposes only. This is not to be considered as an official communication of release dates  ![OICP Versions Release](images/oicp_version_release_example.png)  * Service versions: in this example, assuming the current date is October 15th 2021, only service versions highlighted in green will be supported by the HBS; whereas services highlighted in grey will no longer be supported, since these service versions are only available in deprecated OICP versions (i.e. the OICP versions highlighted in red). Consequently, partners can choose one of 3 valid service versions to implement for “Service A”, and one of 2 valid versions for “Service B” and “Service C”.  * OICP versions: the OICP versions highlighted in red will not be supported by the HBS assuming the current date is 15th October 2021 since they are old therefore deprecated. Also, as depicted in the above example and in contrast to the HBS release management approach, more than two OICP versions can be supported simultaneously going forward.  All partners using the HBS `MUST` indicate the OICP version they are currently running in their system (i.e. OICP version being used in the communication with the HBS). On the database level however, the current specifications are to be implemented in all systems, i.e. new mandatory fields should be filled with a value. ### Further Documents  To enable a fast and efficient connection process between the Hubject Brokering System and Partner Systems, the following online webpage contains further information:  * [*support.hubject.com*](https://support.hubject.com/hc/en-us) – Contains all relevant information regarding the onboarding process and other technical information (e.g. Dynamic Pricing 1.0 - Functional Guide for Service Implementation) * [*Release notes from OICP2.2 to OICP2.3*](https://github.com/hubject/oicp/blob/master/OICP-2.3/Realease_Notes.asciidoc)  ### OICP protocol version and service versions  Beginning with OICP 2.1, service endpoints are versioned individually and independent of the OICP version. The table below therefore gives an overview of all web services and their current version within OICP version 2.3. |Service |Version     | |:---|:---:| |eRoamingAuthorization|2.1   |    |eRoamingChargeDetailRecord|2.2   | |eRoamingReservation|1.1   |  |eRoamingEVSEData|2.3   |  |eRoamingEVSEStatus|2.1  |  |eRoamingDynamicPricing|1.0   |  |eRoamingChargingNotifications|1.1  |   ### Overview of Document Reviews    The table below provides an overview of all changes made to this document after its initial publication. The changes documented below affect descriptions provided in this document and are mostly corrections or refinements of the specification details.  |Date of Update |Chapter Updated     | Comments | |:---|:---:|:---| |15th Septmeber 2020|OICP 2.3   |   Implementation description of the new OICP 2.3    ## Communication paradigms ### REST All new services to be introduced in the future, beginning with OICP 2.2, will be only available over the REST API. This means SOAP communication cannot be used for all new services introduced with OICP version 2.2 or later. Partners that wish to use these new services will therefore need to implement RESTful APIs for the respective communication with the HBS.  All web services described below are synchronous.  All service messages exchanged between Hubject and partner systems `MUST` use UTF-8 character encoding.  ### Availability  The Hubject system is set up in a highly available environment. Please check the partner contract for details.  ### Error handling  In case that a partner system cannot be addressed by Hubject, Hubject will monitor the connection error in the service session logging.  Each system must be able to cope with possible connection error scenarios as well as with different strategies to solve inconsistencies.  In case a partner system does not respond to a request by Hubject within the internally defined period, Hubject will monitor the connection timeout in the service session logging.  General HBS related system errors that `MAY` occur during service processing will be caught. The system will then respond to the service requestor with a default _eRoamingAcknowledgement_ message.  ### Status codes Each message requires a response message in return (at least an acknowledgement).  Most service response messages contain a “StatusCode” field (e.g. eRoamingAcknowledgement). The node provides a standardized code and status description that can be used to return details about certain process statuses. If, for example, an _eRoamingAuthorizeStart_ request fails, the requested provider can specify why the user cannot be authorized.  Code Type contains an overview of all relevant status codes.  The different states are standardized in order to make automated status processing possible. Backend systems only have to analyze the provided status code, regardless of the functional status description.  The StatusCode node additionally contains the optional “_AdditionalInfo_” field. This field can be used to provide individual information or process details that go beyond the standardized description. In case the optional “Description” field is used, the field should contain only defined values.  ### Session handling  Some web service operations that are defined in <<02_CPO_Services_and_Operations.adoc,Services and Operations>> together form a functional business process, respectively a functional session.  __Example:__  The operations in _eRoamingAuthorization_ cover a charging session. A charging session can be started with _eRoamingAuthorizeStart_ or _eRoamingAuthorizeRemoteStart_ operations and stopped with the corresponding operations. Energy consumption data can then be sent using the _eRoamingChargeDetailRecord_ operation.  To be able to relate individual operations to the correct session, Hubject assigns a SessionID to every session after the receipt of an initial request (e.g. _eRoamingAuthorizeStart_). The SessionID is part of the operation response and `MUST` be provided with each subsequent request that belongs to the session. If a request contains a SessionID that was not created by Hubject or one that is not valid, the request receives a negative response and no further process steps are performed.  Hubject uses globally unique identifiers (GUID) for SessionID creation. Furthermore, it is possible that partner backend systems use their own session concept. Hubject supports this by offering two (optional) request parameters CPOPartnerSessionID and EMPPartnerSessionID. CPO partner systems can use the CPOPartnerSessionID parameter to send their own session IDs. Hubject will assign the CPOPartnerSessionID to the Hubject SessionID and will add the CPOPartnerSessionID to every operation response so that the CPO partner systems can relate the operations to their own session handling.  NOTE: Regarding eRoaming services, the SessionID will be the leading process identifier.   ### ProviderIDs and OperatorIDs  Most web service operations require the provision of a ProviderID (EMP) or OperatorID (CPO), depending on whether the operation is requested by EMPs or CPOs. The exact format and examples of these ID’s can be seen in Operator/ProviderID  The IDs are assigned to a specific partner role and they are cross-market unique. There are two roles: eMobility Service Provider (EMP) and Charge Point Operator (CPO). A partner can have one or both roles. If a partner has both roles, two IDs (ProviderID and OperatorID) will be assigned to the partner. Hubject can identify the role that the partner has regarding the current service session depending on which ID is provided with a service request.  ### Security  Hubject compares the given Provider- or OperatorID to the partner’s SSL client certificate information with every web service request. This helps Hubject ensures that a partner cannot request operations in the name of another partner by simply sending another partner’s ID. If Hubject detects a mismatch between ProviderID/OperatorID and the client certificate information sent with the request, Hubject will not perform the operation and will respond with the status code 017 “Unauthorized Access”.  The following process diagram describes the partner identification process. It is performed at the beginning of every web service operation, which is described in this document. Consequently, all process diagrams in the appendix are implicitly preceded by this diagram.  ![Security](images/security.png)  ### Hub Provider and Hub Operator  Partners that are registered with Hubject have the possibility to bundle sub providers (EMP) or sub operators (CPO) and to act as “hub provider” or “hub operator”. The sub partners ID’s need to be configured with Hubject before they can be used in communicating with Hubject. The following diagram shows the relationships between Hubject, hub partners, and sub partners.  ![Hub partners](images/hubpartners.png)  Hubject may receive service requests that contain sub partner information, e.g. an EvcoID containing the ProviderID of a sub partner. In such cases - when Hubject does not find the ID within the group of registered partners – Hubject will check whether the corresponding partner is bundled by a registered hub provider or hub operator. If so, the following service process will be conducted on behalf of the hub partner.  NOTE: The web service fields ProviderID and OperatorID `MUST` always provide the ID of the partner communicating directly with Hubject. In case of a hub/sub scenario the fields always provide the ID of the hub partner. Sub partner IDs will only be provided implicitly through EVCO- or EVSEIDs.  *Example:*  The following diagram shows an example scenario. A hub EMP bundles a sub EMP with the ProviderID “DE*456”. A sub EMP customer wants to charge a vehicle at a CPO’s charging station. The customer identifies themselves via an EvcoID that contains the sub EMP’s ProviderID “DE*456”. Hubject cannot identify “DE*456” within the pool of EMPs that are registered with Hubject. Consequently, Hubject checks whether “DE*456” is bundled by a registered EMP. Hubject identifies the hub EMP and continues the process on behalf of the hub EMP. This means that e.g. an online authorization request or the forwarding of a charge detail record request will be sent to the hub EMP.  In case you are operating charging stations in different countries, please make sure each EVSE is equipped with the correct country code and the corresponding Operator ID. This Operator ID has to be either a sub-operator ID or your main ID.  ![Hub partner diagram](images/hubpartnerdiagram.png)  ### Data push operations  Hubject offers different operations that allow partners to upload (push) data, e.g. upload of EVSE data by CPOs.  In order to guarantee data consistency, data push requests that address the same operation `MUST` always be processed sequentially. They `MUST` never be executed in parallel. This means that a partner system `MUST` always wait for the Hubject system’s operation response before initiating the next request.  The reason for this is that push requests, which are sent in parallel, are also processed in parallel by Hubject. Thus, different requests may overtake each other and change their sequence before Hubject stores the data. This could lead to unintended data conditions.  *Example:*  A CPO sends an EVSE full load with several hundred EVSE records. Shortly after that, the same CPO sends an EVSE full load with only one EVSE record. From the CPO’s point of view, the second request should overwrite the first, resulting in only one valid EVSE record. But probably the second (small) request will overtake the first (big) request. This results in the big request overwriting the small one and with it several hundred valid EVSE records on the Hubject system.  ### Time zones  The time needs to be delivered in the format “complete date plus hours, minutes and seconds” referring to ISO 8601:1988 (E), with a time zone offset in hours and minutes. A time zone offset of \"+hh:mm\" indicates that the date/time uses a local time zone which is \"hh\" hours and \"mm\" minutes ahead of UTC. A time zone offset of \"-hh:mm\" indicates that the date/time uses a local time zone which is \"hh\" hours and \"mm\" minutes behind UTC.  `YYYY-MM-DDThh:mm:ssTZD` *e.g. “2014-02-01T15:45:00+02:00”*  where:  | Format | Description                                            | |--------|--------------------------------------------------------| | YYYY   | four-digit-year                                        | | MM     | two-digit month (01=January, etc.)                     | | DD     | two-digit day of month (01 through 31)T, separator     | | hh     | two digits of hour (00 through 23) (am/pm NOT allowed) | | mm     | two digits of minute (00 through 59)                   | | ss     | two digits seconds (00 through 59)                     | | TZD    | time zone designator (+hh:mm or -hh:mm)                |  Messages that are sent to Hubject and that Hubject directly forwards to another partner (e.g. _eRoamingChargeDetailRecord_ from CPO to EMP) will not be changed by Hubject (including time zone specifics).  It is mandatory for CPO’s to provide date/time values including a time zone offset which refers to the charge point location due to the need for time based charging fees.  In the OICP 2.3, the HBS will store all date/time values in their original form. Also, the original Date/Time values as received and stored by the HBS will be provided in the response to requests from partner systems.  ### Calibration Law for eMobility Market:  This topic is specifically important for Partners who are operating inside Germany. Calibration Law is applicable to both CPO and EMP.  This Calibration Law simply states that Customer of EMP should be able to verify the charging sessions with the help of encrypted data generated by hardware of charging station (basically Smart Energy Meter). There are few exceptional cases where this Calibration Law is not applicable.  There are three objectives of introducing this chapter in this revision of OICP  1. As a roaming platform we should give possibility for CPOs to transfer the Calibration Law relevant data (Separate fields for various parameter) for charging session to EMPs. 2. EMPs should be able to first know if the charging station (mainly EVSEID) can generate / store / share the Calibration Law compliant data. This data can be provided as a part of POI data. This will help EMPs to create appropriate B2C pricing and logic for creating appropriate invoices. Refer EVSE Data section (provide the link) 3. Long term solution for EMPs should be to automate the pre-checking of Calibration Law relevant data for charging session. This can be easily achieved if EMP has all the Calibration Law relevant data available in Charge Detail Record as separate fields. This will eventually provide a more transparent way of transmitting the data from CPOs to EMPs. Currently with older revision of OICP, CPOs are providing this data in the form of url in Charge Detail Record as “Metering Signature” field. Refer CDR section.  ## Appendix ### Business Process Diagram eRoamingAuthorization ![Business Process Diagram eRoamingAuthorization](images/eroamingauthorization.png)  ### Business Process Diagram eRoamingAuthorization Remote ![Business Process Diagram eRoamingAuthorization Remote](images/eroamingauthorizationremote.png)  ### Business Process Diagram eRoaming Reservation ![Business Process Diagram eRoaming Reservation](images/eroamingreservation.png)  ### Business Process Diagram eRoamingAuthorization GetCDRs ![Business Process Diagram eRoamingAuthorization GetCDRs GetCDRs](images/eroaminggetcdrs.png)  ### Business Process Diagram eRoamingEVSEData ![Business Process Diagram eRoamingEVSEData](images/eroamingevsedata.png)  ### Business Process Diagram eRoamingEVSEStatus ![Business Process Diagram eRoamingEVSEStatus](images/eroamingevsestatus.png)  ### Business Process Diagram eRoaming ChargingNotification Start ![Business Process Diagram eRoaming ChargingNotification Start](images/chargingnotificationstart.png)  ### Business Process Diagram eRoaming ChargingNotification Progress ![Business Process Diagram eRoaming ChargingNotification Progress](images/chargingnotificationprogress.png)  ### Business Process Diagram eRoaming ChargingNotification End ![Business Process Diagram eRoaming ChargingNotification End](images/chargingnotificationend.png)  ### Business Process Diagram eRoaming ChargingNotification Error ![Business Process Diagram eRoaming ChargingNotification Error](images/chargingnotificationerror.png)  ## Glossary and Abbreviations Charging Station - The unit where an electric vehicle is charged. A charging station consists of one or more charging spots (EVSE).  CPO (Operator) - Charge Point Operator: Mobility partner who operates the charging infrastructure.  EMP (Provider) - Electric Mobility (emobility) Provider: Mobility partner who provides emobility services to customers.  EVCO - Electric Vehicle Contract: Contract between an EMP and a customer.  EvcoID - Electric Vehicle Contract Identifier.  EVSE - Electric Vehicle Supply Equipment: Charging spot.  EvseID - Electric Vehicle Supply Equipment Identifier.  GUI - Graphical User Interface.  GUID - Globally Unique Identifier.  Hash / Hash Code - String with a fixed length that represents a data set. The hash code is generated by applying a hash function (e.g. SHA-1 hash function) to the original data.  Hubject Brokerage System (HBS) - The Hubject B2B system is the central software component that routes or storesservice information between mobility partners.  Marketplace - The role “Marketplace” is bound to the central the administrative function of the HBS system.  Mobility partner system - A mobility partner system is the central software component of a Mobility Service Provider (EMP or CPO) and operates e.g. the charging infrastructure or the electric vehicles of the Service Provider.  Session - Web service operations can be bundled and related to a certain session by unique IDs.  SHA-1 - Secure hash algorithm: A cryptographic hash function that is used to map data values to fixed-length key values.  SOAP - Simple Object Access Protocol: A web service standard that specifies the implementation and information exchange of web services.  SSL - Secure Socket Layer:  UTF-8 - is a variable-width encoding that can represent every character in the Unicode character set  WGS 84 - World Geodetic System (1984): A standard coordinate frame which is used to represent geo coordinates used by the GPS system as reference coordinate system.  WSDL - Web Service Definition Language: Technical description of functionality that is offered by a web service.  XML - Extensible Markup Language: A technical language that defines the format and encoding of documents for data exchange. 
 *
 * OpenAPI spec version: 2.3.0
 * Contact: support@hubject.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { EvseDataRecordAddress } from './evse-data-record-address';
import { EvseDataRecordChargingFacilities } from './evse-data-record-charging-facilities';
import { EvseDataRecordEnergySource } from './evse-data-record-energy-source';
import { EvseDataRecordEnvironmentalImpact } from './evse-data-record-environmental-impact';
import { EvseID } from './evse-id';
import { GeoCoordinates } from './geo-coordinates';
import { InfoTextType } from './info-text-type';
import { OpeningTimes } from './opening-times';
import { OperatorID } from './operator-id';
 /**
 * 
 *
 * @export
 * @interface EvseDataRecord
 */
export interface EvseDataRecord {

    /**
     * In case that the operation “PullEvseData” is performed with the parameter “LastCall”, Hubject assigns this attribute to every response EVSE record in order to return the changes compared to the last call.
     *
     * @type {string}
     * @memberof EvseDataRecord
     */
    deltaType?: EvseDataRecordDeltaTypeEnum;

    /**
     * The attribute indicates the date and time of the last update of the record. Hubject assigns this attribute to every response EVSE record.
     *
     * @type {Date}
     * @memberof EvseDataRecord
     */
    lastUpdate?: Date;

    /**
     * @type {EvseID}
     * @memberof EvseDataRecord
     */
    evseID: EvseID;

    /**
     * VSEs may be grouped by using a charging pool id according to emi³ standard definition. The Evse Pool ID MUST match the following structure (the notation corresponds to the augmented Backus-Naur Form (ABNF) as defined in RFC5234): <Evse Pool ID> = <Country Code> <S> <Spot Operator ID> <S> <ID Type> <Pool ID>  with:  <Country Code> = 2 ALPHA ; two character country code according to ISO-3166-1 (Alpha-2-Code).  <Spot Operator ID> = 3 (ALPHA / DIGIT); three alphanumeric characters.  <ID Type> = “P”; one character “P” indicating that this ID represents a “Pool”.  <Pool Instance> = (ALPHA / DIGIT) 1 * 30 ( 1*(ALPHA / DIGIT) [/ <S>] ); between 1 and 31sequence of alphanumeric characters, including additional optional separators. Starts with alphanumeric character referring to a specific Pool in EVSE Operator data system.  ALPHA = %x41-5A / %x61-7A; according to RFC 5234 (7-Bit ASCII).  DIGIT = %x30-39; according to RFC 5234 (7-Bit ASCII).  <S> = *1 ( “*” ); optional separator  An example for a valid Evse Pool ID is “IT*123*P456*AB789” with :  “IT” indicating Italy,  “123” representing a particular Spot Operator,  “P” indicating the Pool, and  “456*AB789” representing one of its POOL.  Note  In contrast to the eMA ID, no check digit is specified for the Evse Pool ID in this document. Alpha characters SHALL be interpreted case insensitively. emi³ strongly recommends that implementations SHOULD - use the separator between Country Code and Spot Operator ID - use the separator between Spot Operator ID and ID type This leads to the following regular expression:  `([A-Za-z]{2}\\*?[A-Za-z0-9]{3}\\*?P[A-Za-z0-9\\*]{1,30})`  This regular expression is similar to that of the ISO EvseIDType but E is replaced with P to indicate a pool. 
     *
     * @type {string}
     * @memberof EvseDataRecord
     * @example IT*123*P456*AB789
     */
    chargingPoolID?: string;

    /**
     * The ID that identifies the charging station.
     *
     * @type {string}
     * @memberof EvseDataRecord
     */
    chargingStationId?: string;

    /**
     * Name of the charging station
     *
     * @type {Array<InfoTextType>}
     * @memberof EvseDataRecord
     */
    chargingStationNames: Array<InfoTextType>;

    /**
     * Name of the charging point manufacturer
     *
     * @type {string}
     * @memberof EvseDataRecord
     */
    hardwareManufacturer?: string;

    /**
     * URL that redirect to an online image of the related EVSEID
     *
     * @type {string}
     * @memberof EvseDataRecord
     */
    chargingStationImage?: string;

    /**
     * Name of the Sub Operator owning the Charging Station
     *
     * @type {string}
     * @memberof EvseDataRecord
     */
    subOperatorName?: string;

    /**
     * @type {EvseDataRecordAddress}
     * @memberof EvseDataRecord
     */
    address: EvseDataRecordAddress;

    /**
     * @type {GeoCoordinates}
     * @memberof EvseDataRecord
     */
    geoCoordinates: GeoCoordinates;

    /**
     * List of plugs that are supported.
     *
     * @type {Array<string>}
     * @memberof EvseDataRecord
     */
    plugs: Array<EvseDataRecordPlugsEnum>;

    /**
     * Informs is able to deliver different power outputs.
     *
     * @type {boolean}
     * @memberof EvseDataRecord
     */
    dynamicPowerLevel?: boolean;

    /**
     * List of facilities that are supported.
     *
     * @type {Array<EvseDataRecordChargingFacilities>}
     * @memberof EvseDataRecord
     */
    chargingFacilities: Array<EvseDataRecordChargingFacilities>;

    /**
     * If the Charging Station provides only renewable energy then the value `MUST` be ”true”, if it use grey energy then value `MUST` be “false”. 
     *
     * @type {boolean}
     * @memberof EvseDataRecord
     */
    renewableEnergy: boolean;

    /**
     * List of energy source that the charging station uses to supply electric energy.
     *
     * @type {Array<EvseDataRecordEnergySource>}
     * @memberof EvseDataRecord
     */
    energySource?: Array<EvseDataRecordEnergySource>;

    /**
     * @type {EvseDataRecordEnvironmentalImpact}
     * @memberof EvseDataRecord
     */
    environmentalImpact?: EvseDataRecordEnvironmentalImpact;

    /**
     * | Option | Description | | Local | Calibration law data is shown at the charging station. | | External | Calibration law data is provided externaly. | | Not Available | Calibration law data is not provided. | 
     *
     * @type {string}
     * @memberof EvseDataRecord
     */
    calibrationLawDataAvailability: EvseDataRecordCalibrationLawDataAvailabilityEnum;

    /**
     * List of authentication modes that are supported.
     *
     * @type {Array<string>}
     * @memberof EvseDataRecord
     */
    authenticationModes: Array<EvseDataRecordAuthenticationModesEnum>;

    /**
     * This field is used if the EVSE has a limited capacity (e.g. built-in battery). Values must be given in kWh.
     *
     * @type {number}
     * @memberof EvseDataRecord
     */
    maxCapacity?: number;

    /**
     * List of payment options that are supported.
     *
     * @type {Array<string>}
     * @memberof EvseDataRecord
     */
    paymentOptions: Array<EvseDataRecordPaymentOptionsEnum>;

    /**
     * List of value added services that are supported.
     *
     * @type {Array<string>}
     * @memberof EvseDataRecord
     */
    valueAddedServices: Array<EvseDataRecordValueAddedServicesEnum>;

    /**
     * Specifies how the charging station can be accessed.  | Option | Description | | ------ | ----------- | | Free publicly accessible | EV Driver can reach the charging point without paying a fee, e.g. street, free public place, free parking lot, etc. | | Restricted access | EV Driver needs permission to reach the charging point, e.g. Campus, building complex, etc. | | Paying publicly accessible | EV Driver needs to pay a fee in order to reach the charging point, e.g. payable parking garage, etc. | | Test Station | Station is just for testing purposes. Access may be restricted. | 
     *
     * @type {string}
     * @memberof EvseDataRecord
     * @example Free publicly accessible
     */
    accessibility: EvseDataRecordAccessibilityEnum;

    /**
     * | Option | Description | | ------ | ----------- | | OnStreet | The charging station is located on the street| | ParkingLot | The Charging Point is located inside a Parking Lot| | ParkingGarage | The Charging Point is located inside a Parking Garage| | UndergroundParkingGarage | The Charging Point is located inside an Underground Parking Garage | 
     *
     * @type {string}
     * @memberof EvseDataRecord
     */
    accessibilityLocation?: EvseDataRecordAccessibilityLocationEnum;

    /**
     * `^\\+[0-9]{5,15}$` The expression validates the string as a telephone number starting with “+” and containing only numbers.  Example: “+0305132787” 
     *
     * @type {string}
     * @memberof EvseDataRecord
     */
    hotlinePhoneNumber: string;

    /**
     * Optional information.
     *
     * @type {Array<InfoTextType>}
     * @memberof EvseDataRecord
     */
    additionalInfo?: Array<InfoTextType>;

    /**
     * Inform the EV driver where the ChargingPoint could be accessed.
     *
     * @type {Array<InfoTextType>}
     * @memberof EvseDataRecord
     */
    chargingStationLocationReference?: Array<InfoTextType>;

    /**
     * @type {GeoCoordinates}
     * @memberof EvseDataRecord
     */
    geoChargingPointEntrance?: GeoCoordinates;

    /**
     * Set in case the charging spot is open 24 hours.
     *
     * @type {boolean}
     * @memberof EvseDataRecord
     */
    isOpen24Hours: boolean;

    /**
     * Opening time in case that the charging station cannot be accessed around the clock.
     *
     * @type {Array<OpeningTimes>}
     * @memberof EvseDataRecord
     */
    openingTimes?: Array<OpeningTimes>;

    /**
     * @type {OperatorID}
     * @memberof EvseDataRecord
     */
    hubOperatorID?: OperatorID;

    /**
     * Identification of the corresponding clearing house in the event that roaming between different clearing houses `MUST` be processed in the future. 
     *
     * @type {string}
     * @memberof EvseDataRecord
     */
    clearinghouseID?: string;

    /**
     * Is eRoaming via intercharge at this charging station possible? If set to \"false\" the charge spot will not be started/stopped remotely via Hubject.
     *
     * @type {boolean}
     * @memberof EvseDataRecord
     */
    isHubjectCompatible: boolean;

    /**
     * Values: true / false / auto This attribute indicates whether a CPO provides (dynamic) EVSE Status info in addition to the (static) EVSE Data for this EVSERecord. Value auto is set to true by Hubject if the operator offers Hubject EVSEStatus data.
     *
     * @type {string}
     * @memberof EvseDataRecord
     */
    dynamicInfoAvailable: EvseDataRecordDynamicInfoAvailableEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum EvseDataRecordDeltaTypeEnum {
    Update = 'update',
    Insert = 'insert',
    Delete = 'delete'
}
/**
 * @export
 * @enum {string}
 */
export enum EvseDataRecordPlugsEnum {
    SmallPaddleInductive = 'Small Paddle Inductive',
    LargePaddleInductive = 'Large Paddle Inductive',
    AVCONConnector = 'AVCON Connector',
    TeslaConnector = 'Tesla Connector',
    NEMA520 = 'NEMA 5-20',
    TypeEFrenchStandard = 'Type E French Standard',
    TypeFSchuko = 'Type F Schuko',
    TypeGBritishStandard = 'Type G British Standard',
    TypeJSwissStandard = 'Type J Swiss Standard',
    Type1ConnectorCableAttached = 'Type 1 Connector (Cable Attached)',
    Type2Outlet = 'Type 2 Outlet',
    Type2ConnectorCableAttached = 'Type 2 Connector (Cable Attached)',
    Type3Outlet = 'Type 3 Outlet',
    IEC60309SinglePhase = 'IEC 60309 Single Phase',
    IEC60309ThreePhase = 'IEC 60309 Three Phase',
    CCSCombo2PlugCableAttached = 'CCS Combo 2 Plug (Cable Attached)',
    CCSCombo1PlugCableAttached = 'CCS Combo 1 Plug (Cable Attached)',
    CHAdeMO = 'CHAdeMO'
}
/**
 * @export
 * @enum {string}
 */
export enum EvseDataRecordCalibrationLawDataAvailabilityEnum {
    Local = 'Local',
    External = 'External',
    NotAvailable = 'Not Available'
}
/**
 * @export
 * @enum {string}
 */
export enum EvseDataRecordAuthenticationModesEnum {
    NFCRFIDClassic = 'NFC RFID Classic',
    NFCRFIDDESFire = 'NFC RFID DESFire',
    PnC = 'PnC',
    REMOTE = 'REMOTE',
    DirectPayment = 'Direct Payment',
    NoAuthenticationRequired = 'No Authentication Required'
}
/**
 * @export
 * @enum {string}
 */
export enum EvseDataRecordPaymentOptionsEnum {
    NoPayment = 'No Payment',
    Direct = 'Direct',
    Contract = 'Contract'
}
/**
 * @export
 * @enum {string}
 */
export enum EvseDataRecordValueAddedServicesEnum {
    Reservation = 'Reservation',
    DynamicPricing = 'DynamicPricing',
    ParkingSensors = 'ParkingSensors',
    MaximumPowerCharging = 'MaximumPowerCharging',
    PredictiveChargePointUsage = 'PredictiveChargePointUsage',
    ChargingPlans = 'ChargingPlans',
    RoofProvided = 'RoofProvided',
    None = 'None'
}
/**
 * @export
 * @enum {string}
 */
export enum EvseDataRecordAccessibilityEnum {
    FreePubliclyAccessible = 'Free publicly accessible',
    RestrictedAccess = 'Restricted access',
    PayingPubliclyAccessible = 'Paying publicly accessible',
    TestStation = 'Test Station'
}
/**
 * @export
 * @enum {string}
 */
export enum EvseDataRecordAccessibilityLocationEnum {
    OnStreet = 'OnStreet',
    ParkingLot = 'ParkingLot',
    ParkingGarage = 'ParkingGarage',
    UndergroundParkingGarage = 'UndergroundParkingGarage'
}
/**
 * @export
 * @enum {string}
 */
export enum EvseDataRecordDynamicInfoAvailableEnum {
    True = 'true',
    False = 'false',
    Auto = 'auto'
}

