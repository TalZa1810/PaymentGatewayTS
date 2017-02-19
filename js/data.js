var data = {
    "paymentGateway": {
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
}
