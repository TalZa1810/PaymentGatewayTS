//LOCAL VAR. SHOULD BE TRANSFERRED TO A DIFFERENT JSON FILE
var gFormsData = {
    "forms": [
        {
            "stepNumber": 0,
            "stepTitle": "Please select the relevant payment gateway",
            "buttonsTitle": "payment-gateway",
            "buttonsArray": [
                {
                    "buttonDescription": "PayPal",
                    "stepNumber": "1"
                }, {
                    "buttonDescription": "Stripe",
                    "stepNumber": "2"
                }, {
                    "buttonDescription": "WireCard",
                    "stepNumber": "3"
                }, {
                    "buttonDescription": "Leumi Card",
                    "stepNumber": "4"
                }, {
                    "buttonDescription": "Offline Payments",
                    "stepNumber": "5"
                }
            ]

        }, {
            "stepNumber": 1,
            "stepTitle": "Please select the relevant issue",
            "buttonsTitle": "paypal-subject-issues",
            "buttonsArray": [
                {
                    "buttonDescription": "Orders",
                    "stepNumber": "6"
                }, {
                    "buttonDescription": "Checkout",
                    "stepNumber": "7"
                }, {
                    "buttonDescription": "Discount",
                    "stepNumber": "8"
                }, {
                    "buttonDescription": "Paypal Instant Payment Notification Message",
                    "stepNumber": "9"
                }, {
                    "buttonDescription": "Error Message",
                    "stepNumber": "10"
                }
            ]
        }
    ]
}