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
                "buttonDescription": "Orders are not missing in the store manager",
                "stepId": "missingOrders"
            }
        ]
    },

    // -- 1.1 --
    "missingOrders": {
        "stepId": "missingOrders",
        "formTitle": "Troubleshooting Orders Issues",
        "stepTitle": "Did the user receive a notification Email from the online payment provider?",
        "buttonsArray": [
            {
                "buttonDescription": "No",
                "stepId": "userNotReceiveNotification"
            }
        ]
    },

    // -- 1.1.1.1.2 --
    "userNotReceiveNotification": {
        "stepId": "userNotReceiveNotification",
        "formTitle": "Missing orders in the store manager",
        "stepTitle": "Please select the relevant payment gateway:",
        "buttonsArray": [
            {
                "buttonDescription": "PayPal",
                "stepId": "missingOrdersPayPal"
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
