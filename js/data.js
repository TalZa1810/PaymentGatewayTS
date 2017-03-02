var data = {

    // -- A --
    "troubleshootingCategory": {
        "stepId": "troubleshootingCategory",
        "formTitle": "Troubleshooting Category",
        "stepTitle": "Please select the relevant category:",
        "buttonsArray": [
            {
                "buttonDescription": "Troubleshooting orders issues",
                "stepId": "ordersIssues"
            }
        ]
    },

    // -- 1 --
    "ordersIssues": {
        "stepId": "ordersIssues",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Please select the relevant category:",
        "buttonsArray": [
            {
                "buttonDescription": "Orders are missing in the store manager",
                "stepId": "missingOrders"
            }
        ]
    },

    // -- 1.1 --
    "missingOrders": {
        "stepId": "missingOrders",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Did the user receive an Email notification from the online payment provider?",
        "buttonsArray": [
            {
                "buttonDescription": "Yes",
                "stepId": "userAcceptedEmailNotification"
            },
            {
                "buttonDescription": "No",
                "stepId": "userDidntAcceptedEmailNotification"
            }
        ]
    },

    // -- 1.1.1.1 --

    "userAcceptedEmailNotification": {
        "stepId": "userAcceptedEmailNotification",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Does the order exist in the Orders tab of the Store manager?",
        "buttonsArray": [
            {
                "buttonDescription": "Yes",
                "stepId": "orderExistStoreManager"
            },
            {
                "buttonDescription": "No",
                "stepId": "orderDoesntExistStoreManager"
            }
        ]
    },

    // -- 1.1.1.1.1.1 --

    "orderExistStoreManager": {
        "stepId": "orderExistStoreManager",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Order not appearing in the store manager",
        "buttonsArray": [  ],
        "instructions": "Provide the user with the order number and a screenshot of it."
    },

    // -- 1.1.1.1.2 --
    "orderDoesntExistStoreManager": {
        "stepId": "orderDoesntExistStoreManager",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Please select the relevant payment gateway:",
        "buttonsArray": [
            {
                "buttonDescription": "PayPal",
                "stepId": "missingOrdersPayPal"
            },
            {
                "buttonDescription": "Stripe",
                "stepId": "missingOrdersStripe"
            },
            {
                "buttonDescription": "Square",
                "stepId": "missingOrdersSquare"
            },
            {
                "buttonDescription": "Leumi Card",
                "stepId": "missingOrdersLeumiCard"
            }
        ]
    },

    "missingOrdersPayPal": {
        "stepId": "missingOrdersPayPal",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Missing orders- PayPal",
        "buttonsArray": [  ],
        "faqTitle": "PayPal Orders Which Do Not Appear in the Store Manager" ,
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-paypal-orders-which-do-not-appear-in-the-store-manager"
    },

    "missingOrdersStripe": {
        "stepId": "missingOrdersStripe",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Missing orders- Stripe",
        "buttonsArray": [  ],
        "faqTitle": "Orders Which Do Not Appear in the Store Manager (other than PayPal)" ,
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-orders-which-do-not-appear-in-the-store-manager-other-than-paypal"
    },

    "missingOrdersSquare": {
        "stepId": "missingOrdersSquare",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Missing orders- Square",
        "buttonsArray": [  ],
        "faqTitle": "Orders Which Do Not Appear in the Store Manager (other than PayPal)" ,
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-orders-which-do-not-appear-in-the-store-manager-other-than-paypal"

    },

    "missingOrdersLeumiCard": {
        "stepId": "missingOrdersLeumiCard",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Missing orders- Leumi Card",
        "buttonsArray": [  ],
        "faqTitle": "Orders Which Do Not Appear in the Store Manager (other than PayPal)" ,
        "faqURL": "https://support.wix.com/en/article/internal-wix-stores-orders-which-do-not-appear-in-the-store-manager-other-than-paypal"
    },


    // NOTE + INSTRUCTIONS
    "userDidntAcceptedEmailNotification": {
        "stepId": "userDidntAcceptedEmailNotification",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Order not appearing in the store manager",
        "buttonsArray": [  ],
        "instructions": "Ask the user to contact the online payment provider.",
        "Note": "For an order to appear on the store manager, the payment has to be completed. This means that the status of the order has to be approved."

    }
}

/*

 , {
 "buttonDescription": "Stripe",
 "stepId": "missingOrdersStripe"
 },
 {
 "buttonDescription": "Square",
 "stepId": "missingOrdersSquare"
 }, {
 "buttonDescription": "Leumi Card",
 "stepId": "missingOrdersLeumiCard"
 }

*/


/*
* "paymentGateway": {
 "stepId": "paymentGateway",
 "formTitle": "Payment Gateway:",
 "stepTitle": "Please select the relevant payment gateway",
 "buttonsArray": [
 {
 "buttonDescription": "PayPal",
 "stepId": "paypalSubjectIssues"
 }
 ]
 },

 "paypalSubjectIssues": {
 "stepId": "paypalSubjectIssues",
 "formTitle": "PayPal Subject Issue:",
 "stepTitle": "To which subject the issue is related?",
 "buttonsArray": [
 {
 "buttonDescription": "Checkout",
 "stepId": "paypalCheckout"
 }, {
 "buttonDescription": "Orders",
 "stepId": "paypalOrders"
 }
 ]
 },

 "paypalCheckout": {
 "stepId": "paypalCheckout",
 "formTitle": "Checkout Issue:",
 "stepTitle": "Please choose the relevant issue:",
 "buttonsArray": []
 },

 "paypalOrders": {
 "stepId": "paypalOrders",
 "formTitle": "Guest Orders",
 "stepTitle": "Enabling Guest Checkout for PayPal in Your Store",
 "buttonsArray": [ ]
 }
*
*
* */
