
import React from 'react';
import {render} from 'frontend-js-react-web';

import AppComponent from './AppComponent';


/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main({portletNamespace, contextPath, portletElementId, configuration}) {
    
    render(
        <AppComponent 
            configuration={configuration}
            contextPath={contextPath}
            portletElementId={portletElementId}
            portletNamespace={portletNamespace} 
        />,
        {
            contextPath,
            portletNamespace,
            portletElementId
        },
        document.getElementById(portletElementId)
    );
    
}