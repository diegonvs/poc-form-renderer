import React from 'react';

import {EVENT_TYPES, FormProvider, FormRenderer} from 'dynamic-data-mapping-form-renderer';

const filteredSettingsContext = {
	"submitLabel": "Submit",
	"templateNamespace": "ddm.tabbed_form",
	"redirectURL": null,
	"cancelLabel": "Cancel",
	"groupId": "0",
	"readOnly": false,
	"rules": [
	  {
		"condition": "not(equals(getValue('ddmDataProviderInstanceId'), ''))",
		"enable": true,
		"actions": [
		  "call('getDataProviderInstanceOutputParameters', 'dataProviderInstanceId=ddmDataProviderInstanceId', 'ddmDataProviderInstanceOutput=outputParameterNames')"
		]
	  },
	  {
		"condition": "not(equals(getValue('displayStyle'), 'singleline'))",
		"enable": true,
		"actions": [
		  "setValue('autocomplete', FALSE)",
		  "setVisible('autocomplete', FALSE)"
		]
	  },
	  {
		"condition": "TRUE",
		"enable": true,
		"actions": [
		  "setRequired('ddmDataProviderInstanceId', equals(getValue('dataSourceType'), \"data-provider\"))",
		  "setRequired('ddmDataProviderInstanceOutput', equals(getValue('dataSourceType'), \"data-provider\"))",
		  "setValidationDataType('validation', getValue('dataType'))",
		  "setValidationFieldName('validation', getValue('name'))",
		  "setVisible('dataSourceType', getValue('autocomplete'))",
		  "setVisible('ddmDataProviderInstanceId', equals(getValue('dataSourceType'), \"data-provider\") and getValue('autocomplete'))",
		  "setVisible('ddmDataProviderInstanceOutput', equals(getValue('dataSourceType'), \"data-provider\") and getValue('autocomplete'))",
		  "setVisible('options', contains(getValue('dataSourceType'), \"manual\") and getValue('autocomplete'))"
		]
	  }
	],
	"editingLanguageId": "en_US",
	"viewMode": false,
	"showCancelButton": false,
	"showRequiredFieldsWarning": true,
	"pages": [
	  {
		"showRequiredFieldsWarning": false,
		"description": null,
		"localizedDescription": {},
		"rows": [
		  {
			"columns": [
			  {
				"size": 12,
				"fields": [
				  {
					"fieldName": "label",
					"tooltip": "Enter a descriptive field label that guides users to enter the information you want.",
					"type": "text",
					"dir": "ltr",
					"locale": "en_US",
					"localizedValue": {
					  "en_US": "Text"
					},
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"displayStyle": "singleline",
					"instanceId": "TNsAdhM0",
					"repeatable": false,
					"options": [],
					"tip": "",
					"placeholder": "Enter a field label.",
					"value": "Text",
					"visible": true,
					"dataType": "string",
					"errorMessage": "",
					"readOnly": false,
					"label": "Label",
					"visibilityExpression": "TRUE",
					"autocompleteEnabled": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$label$TNsAdhM0$0$$en_US",
					"localizable": true,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US"
				  },
				  {
					"fieldName": "placeholder",
					"tooltip": "Enter text that assists the user, but is not submitted as a field value.",
					"type": "text",
					"dir": "ltr",
					"locale": "en_US",
					"localizedValue": {
					  "en_US": ""
					},
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"displayStyle": "singleline",
					"instanceId": "8w4NtXeq",
					"repeatable": false,
					"options": [],
					"tip": "",
					"placeholder": "",
					"value": "",
					"visible": true,
					"dataType": "string",
					"errorMessage": "",
					"readOnly": false,
					"label": "Placeholder Text",
					"visibilityExpression": "TRUE",
					"autocompleteEnabled": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$placeholder$8w4NtXeq$0$$en_US",
					"localizable": true,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US"
				  },
				  {
					"fieldName": "tip",
					"tooltip": "Add a comment to help users understand the field label.",
					"type": "text",
					"dir": "ltr",
					"locale": "en_US",
					"localizedValue": {
					  "en_US": ""
					},
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"displayStyle": "singleline",
					"instanceId": "288eVwlB",
					"repeatable": false,
					"options": [],
					"tip": "",
					"placeholder": "",
					"value": "",
					"visible": true,
					"dataType": "string",
					"errorMessage": "",
					"readOnly": false,
					"label": "Help Text",
					"visibilityExpression": "TRUE",
					"autocompleteEnabled": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$tip$288eVwlB$0$$en_US",
					"localizable": true,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US"
				  },
				  {
					"fieldName": "displayStyle",
					"evaluable": true,
					"visible": true,
					"dataType": "string",
					"predefinedValue": "singleline",
					"errorMessage": "",
					"readOnly": false,
					"label": "Field Type",
					"type": "radio",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "TRUE",
					"instanceId": "3Nb5QXC3",
					"inline": false,
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$displayStyle$3Nb5QXC3$0$$en_US",
					"options": [
					  {
						"label": "Single Line",
						"value": "singleline"
					  },
					  {
						"label": "Multiple Lines",
						"value": "multiline"
					  }
					],
					"localizable": false,
					"tip": "",
					"value": "singleline",
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": "singleline"
					}
				  },
				  {
					"fieldName": "required",
					"visible": true,
					"dataType": "boolean",
					"predefinedValue": false,
					"errorMessage": "",
					"readOnly": false,
					"showAsSwitcher": true,
					"label": "Required Field",
					"type": "checkbox",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "TRUE",
					"instanceId": "GY0FlskR",
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$required$GY0FlskR$0$$en_US",
					"options": [],
					"localizable": false,
					"tip": "",
					"value": false,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": false
					}
				  }
				]
			  }
			]
		  }
		],
		"title": "Basic",
		"enabled": true,
		"localizedTitle": {
		  "en_US": "Basic"
		}
	  },
	  {
		"showRequiredFieldsWarning": true,
		"description": null,
		"localizedDescription": {},
		"rows": [
		  {
			"columns": [
			  {
				"size": 12,
				"fields": [
				  {
					"fieldName": "name",
					"evaluable": true,
					"tooltip": "",
					"type": "text",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": true,
					"valid": false,
					"displayStyle": "singleline",
					"instanceId": "5QmxBzE0",
					"repeatable": false,
					"options": [],
					"tip": "",
					"placeholder": "",
					"value": "Text",
					"visible": true,
					"dataType": "string",
					"errorMessage": "This field is required.",
					"readOnly": false,
					"label": "Field Name",
					"visibilityExpression": "TRUE",
					"autocompleteEnabled": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$name$5QmxBzE0$0$$en_US",
					"localizable": false,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": "Text"
					}
				  },
				  {
					"fieldName": "predefinedValue",
					"tooltip": "Enter a default value that is submitted if no other value is entered.",
					"type": "text",
					"dir": "ltr",
					"locale": "en_US",
					"localizedValue": {
					  "en_US": ""
					},
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"displayStyle": "singleline",
					"instanceId": "Wrxwjwxp",
					"repeatable": false,
					"options": [],
					"tip": "",
					"placeholder": "Enter a default value.",
					"value": "",
					"visible": true,
					"dataType": "string",
					"errorMessage": "",
					"readOnly": false,
					"label": "Predefined Value",
					"visibilityExpression": "TRUE",
					"autocompleteEnabled": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$predefinedValue$Wrxwjwxp$0$$en_US",
					"localizable": true,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US"
				  },
				  {
					"fieldName": "visibilityExpression",
					"tooltip": "Write a condition expression to control whether this field is displayed.",
					"type": "text",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"displayStyle": "singleline",
					"instanceId": "p4Nk2R7m",
					"repeatable": false,
					"options": [],
					"tip": "",
					"placeholder": "equals(Country, \"US\")",
					"value": "",
					"visible": false,
					"dataType": "string",
					"errorMessage": "",
					"readOnly": false,
					"label": "Field Visibility Expression",
					"visibilityExpression": "FALSE",
					"autocompleteEnabled": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$visibilityExpression$p4Nk2R7m$0$$en_US",
					"localizable": false,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": ""
					}
				  },
				  {
					"fieldName": "fieldNamespace",
					"tooltip": "",
					"type": "text",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"displayStyle": "singleline",
					"instanceId": "5ISHilm3",
					"repeatable": false,
					"options": [],
					"tip": "",
					"placeholder": "",
					"value": "",
					"visible": false,
					"dataType": "string",
					"errorMessage": "",
					"readOnly": false,
					"label": "",
					"visibilityExpression": "FALSE",
					"autocompleteEnabled": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$fieldNamespace$5ISHilm3$0$$en_US",
					"localizable": false,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": ""
					}
				  },
				  {
					"fieldName": "indexType",
					"visible": false,
					"dataType": "string",
					"predefinedValue": "keyword",
					"errorMessage": "",
					"readOnly": false,
					"label": "Searchable",
					"type": "radio",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "FALSE",
					"instanceId": "h7xE7is8",
					"inline": false,
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$indexType$h7xE7is8$0$$en_US",
					"options": [
					  {
						"label": "Disable",
						"value": "none"
					  },
					  {
						"label": "Keyword",
						"value": "keyword"
					  },
					  {
						"label": "Text",
						"value": "text"
					  }
					],
					"localizable": false,
					"tip": "",
					"value": "keyword",
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": "keyword"
					}
				  },
				  {
					"fieldName": "localizable",
					"visible": false,
					"dataType": "boolean",
					"predefinedValue": true,
					"errorMessage": "",
					"readOnly": false,
					"showAsSwitcher": false,
					"label": "Localizable",
					"type": "checkbox",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "FALSE",
					"instanceId": "tgWYlSO0",
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$localizable$tgWYlSO0$0$$en_US",
					"options": [],
					"localizable": false,
					"tip": "",
					"value": true,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": true
					}
				  },
				  {
					"fieldName": "readOnly",
					"visible": false,
					"dataType": "boolean",
					"predefinedValue": false,
					"errorMessage": "",
					"readOnly": false,
					"showAsSwitcher": false,
					"label": "Read Only",
					"type": "checkbox",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "FALSE",
					"instanceId": "QCt8Epli",
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$readOnly$QCt8Epli$0$$en_US",
					"options": [],
					"localizable": false,
					"tip": "",
					"value": false,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": false
					}
				  },
				  {
					"fieldName": "dataType",
					"evaluable": true,
					"predefinedValue": "string",
					"tooltip": "",
					"type": "text",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": true,
					"valid": true,
					"displayStyle": "singleline",
					"instanceId": "7tnnFzDp",
					"repeatable": false,
					"options": [],
					"tip": "",
					"placeholder": "",
					"value": "string",
					"visible": false,
					"dataType": "string",
					"errorMessage": "",
					"readOnly": false,
					"label": "",
					"visibilityExpression": "FALSE",
					"autocompleteEnabled": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$dataType$7tnnFzDp$0$$en_US",
					"localizable": false,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": "string"
					}
				  },
				  {
					"fieldName": "type",
					"evaluable": true,
					"tooltip": "",
					"type": "text",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": true,
					"valid": true,
					"displayStyle": "singleline",
					"instanceId": "kwLcwx41",
					"repeatable": false,
					"options": [],
					"tip": "",
					"placeholder": "",
					"value": "text",
					"visible": false,
					"dataType": "string",
					"errorMessage": "",
					"readOnly": false,
					"label": "",
					"visibilityExpression": "FALSE",
					"autocompleteEnabled": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$type$kwLcwx41$0$$en_US",
					"localizable": false,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": "text"
					}
				  },
				  {
					"fieldName": "showLabel",
					"visible": true,
					"dataType": "boolean",
					"predefinedValue": true,
					"errorMessage": "",
					"readOnly": false,
					"showAsSwitcher": true,
					"label": "Show Label",
					"type": "checkbox",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "TRUE",
					"instanceId": "tKh7XiV5",
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$showLabel$tKh7XiV5$0$$en_US",
					"options": [],
					"localizable": false,
					"tip": "",
					"value": true,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": true
					}
				  },
				  {
					"fieldName": "repeatable",
					"visible": true,
					"dataType": "boolean",
					"predefinedValue": false,
					"errorMessage": "",
					"readOnly": false,
					"showAsSwitcher": true,
					"label": "Repeatable",
					"type": "checkbox",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "TRUE",
					"instanceId": "7vPbYbvu",
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$repeatable$7vPbYbvu$0$$en_US",
					"options": [],
					"localizable": false,
					"tip": "",
					"value": false,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": false
					}
				  },
				  {
					"fieldName": "validation",
					"evaluable": true,
					"visible": false,
					"dataType": "string",
					"errorMessage": "",
					"readOnly": false,
					"label": "Validation",
					"type": "validation",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "FALSE",
					"instanceId": "Jm1cYFRk",
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$validation$Jm1cYFRk$0$$en_US",
					"options": [],
					"localizable": false,
					"tip": "",
					"value": {
					  "expression": {},
					  "parameter": {},
					  "errorMessage": {}
					},
					"validation": {
					  "fieldName": "Text"
					},
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": {
						"expression": {},
						"parameter": {},
						"errorMessage": {}
					  }
					}
				  },
				  {
					"fieldName": "tooltip",
					"tooltip": "",
					"type": "text",
					"dir": "ltr",
					"locale": "en_US",
					"localizedValue": {
					  "en_US": ""
					},
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"displayStyle": "singleline",
					"instanceId": "qpfuosvP",
					"repeatable": false,
					"options": [],
					"tip": "",
					"placeholder": "",
					"value": "",
					"visible": false,
					"dataType": "string",
					"errorMessage": "",
					"readOnly": false,
					"label": "",
					"visibilityExpression": "FALSE",
					"autocompleteEnabled": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$tooltip$qpfuosvP$0$$en_US",
					"localizable": true,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US"
				  }
				]
			  }
			]
		  }
		],
		"title": "Advanced",
		"enabled": true,
		"localizedTitle": {
		  "en_US": "Advanced"
		}
	  },
	  {
		"showRequiredFieldsWarning": false,
		"description": null,
		"localizedDescription": {},
		"rows": [
		  {
			"columns": [
			  {
				"size": 12,
				"fields": [
				  {
					"fieldName": "autocomplete",
					"evaluable": true,
					"visible": true,
					"dataType": "boolean",
					"predefinedValue": false,
					"errorMessage": "",
					"readOnly": false,
					"showAsSwitcher": true,
					"label": "Autocomplete",
					"type": "checkbox",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "TRUE",
					"instanceId": "it3VtWy7",
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$autocomplete$it3VtWy7$0$$en_US",
					"options": [],
					"localizable": false,
					"tip": "",
					"value": false,
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": false
					}
				  },
				  {
					"fieldName": "dataSourceType",
					"evaluable": true,
					"visible": false,
					"dataType": "string",
					"predefinedValue": "[\"manual\"]",
					"errorMessage": "",
					"readOnly": true,
					"label": "Create List",
					"type": "radio",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": false,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "TRUE",
					"instanceId": "0YQ9AGJn",
					"inline": false,
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$dataSourceType$0YQ9AGJn$0$$en_US",
					"options": [
					  {
						"label": "Manually",
						"value": "manual"
					  },
					  {
						"label": "From Data Provider",
						"value": "data-provider"
					  }
					],
					"localizable": false,
					"tip": "",
					"value": "manual",
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": "manual"
					}
				  },
				  {
					"fieldName": "ddmDataProviderInstanceId",
					"evaluable": true,
					"predefinedValue": [],
					"type": "select",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"instanceId": "BsgWn4tM",
					"strings": {
					  "emptyList": "No results were found.",
					  "search": "Search",
					  "dynamicallyLoadedData": "Dynamically Loaded Data",
					  "chooseOptions": "Choose Options",
					  "chooseAnOption": "Choose an Option"
					},
					"repeatable": false,
					"options": [],
					"tip": "",
					"value": [],
					"visible": false,
					"dataType": "long",
					"errorMessage": "",
					"multiple": false,
					"readOnly": false,
					"label": "Choose a Data Provider",
					"visibilityExpression": "TRUE",
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$ddmDataProviderInstanceId$BsgWn4tM$0$$en_US",
					"localizable": false,
					"dataSourceType": "data-provider",
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": []
					}
				  },
				  {
					"fieldName": "ddmDataProviderInstanceOutput",
					"evaluable": true,
					"predefinedValue": [],
					"type": "select",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": true,
					"enabled": true,
					"required": false,
					"valid": true,
					"instanceId": "v1lOMChK",
					"strings": {
					  "emptyList": "No results were found.",
					  "search": "Search",
					  "dynamicallyLoadedData": "Dynamically Loaded Data",
					  "chooseOptions": "Choose Options",
					  "chooseAnOption": "Choose an Option"
					},
					"repeatable": false,
					"options": [],
					"tip": "",
					"value": [],
					"visible": false,
					"dataType": "string",
					"errorMessage": "",
					"multiple": false,
					"readOnly": false,
					"label": "Choose an Output Parameter",
					"visibilityExpression": "TRUE",
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$ddmDataProviderInstanceOutput$v1lOMChK$0$$en_US",
					"localizable": false,
					"dataSourceType": "manual",
					"defaultLanguageId": "en_US",
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": []
					}
				  },
				  {
					"fieldName": "options",
					"evaluable": true,
					"visible": false,
					"allowEmptyOptions": true,
					"dataType": "ddm-options",
					"errorMessage": "",
					"readOnly": false,
					"defaultLanguageId": "en_US",
					"label": "Options",
					"type": "options",
					"dir": "ltr",
					"locale": "en_US",
					"showLabel": false,
					"enabled": true,
					"required": false,
					"valid": true,
					"visibilityExpression": "TRUE",
					"instanceId": "tLjWAWQh",
					"repeatable": false,
					"name": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_ddm$$options$tLjWAWQh$0$$en_US",
					"options": [],
					"localizable": false,
					"tip": "",
					"value": {
					  "en_US": [
						{
						  "label": "Option",
						  "value": "Option"
						}
					  ]
					},
					"editingLanguageId": "en_US",
					"localizedValue": {
					  "en_US": {
						"en_US": [
						  {
							"label": "Option",
							"value": "Option"
						  }
						]
					  }
					}
				  }
				]
			  }
			]
		  }
		],
		"title": "Autocomplete",
		"enabled": true,
		"localizedTitle": {
		  "en_US": "Autocomplete"
		}
	  }
	],
	"strings": {
	  "next": "Next",
	  "previous": "Previous"
	},
	"showSubmitButton": true,
	"paginationMode": "tabbed",
	"containerId": "settings",
	"currentPage": 0,
	"evaluatorURL": "/o/dynamic-data-mapping-form-context-provider/",
	"portletNamespace": "_com_liferay_app_builder_web_internal_portlet_ObjectsPortlet_",
	"type": "text"
  };

export default class extends React.Component {
	render() {
		return (
			<form onSubmit={(event) => event.preventDefault()}>
				<FormProvider
					onEvent={(type, payload) => {
						switch (type) {
							case EVENT_TYPES.FIELD_BLUR:
							case EVENT_TYPES.FIELD_CHANGE:
								console.log(EVENT_TYPES.FIELD_CHANGE, payload);
								break;
							case EVENT_TYPES.FIELD_EVALUATED:
								console.log(EVENT_TYPES.FIELD_EVALUATED, payload);
								break;
							default:
								break;
						}
					}}
					value={{
						...filteredSettingsContext,
						activePage: 0,
						editable: true,
						spritemap: Liferay.ThemeDisplay.getPathThemeImages() + '/lexicon/icons.svg',
					}}
				>
					{(props) => <FormRenderer {...props} />}
				</FormProvider>
			</form>
		);
	}	
}