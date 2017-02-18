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



/*
 "paypalCheckout": {
 "stepId": "paypalCheckout",
 "formTitle": "Checkout Issue:",
 "stepTitle": "Please choose the relevant issue:",
 "buttonsArray": [
 {
 "buttonDescription": "Enabling Guest Checkout for PayPal in Your Store",
 "stepId": "guestCheckOut"
 }, {
 "buttonDescription": "Additional shipping/tax fees appear when proceeding to the checkout page",
 "stepId": "additionalShippingOrTax"
 }, {
 "buttonDescription": "Unable to apply a 100% discount",
 "stepId": "applyingDiscount"
 }, {
 "buttonDescription": "Unable to set the language of the checkout page",
 "stepId": "settingCheckoutLanguage"
 }, {
 "buttonDescription": "Unable to checkout due to Encrypted Payments",
 "stepId": "encryptedPayments"
 }, {
 "buttonDescription": "Instant Payment Notification (IPN) Message",
 "stepId": "IPNMessage"
 }, {
 "buttonDescription": "Other",
 "stepId": "paypalCheckoutOther"
 }
 ]
 },

 "guestCheckOut": {
 "stepId": "guestCheckOut",
 "formTitle": "Guest Checkout",
 "stepTitle": "Enabling Guest Checkout for PayPal in Your Store",
 "faqTitle": "Enabling Guest Checkout for PayPal in Your Store",
 "faqURL": "https://www.wix.com/support/html5/article/enabling-guest-checkout-for-paypal-in-your-store",
 "buttonsArray": [ ]
 }






 * "paypalCheckout": {
 "stepId": "paypalCheckout",
 "formTitle": "Checkout Issue:",
 "stepTitle": "Please choose the relevant issue:",
 "buttonsArray": [
 {
 "buttonDescription": "Enabling Guest Checkout for PayPal in Your Store",
 "stepId": "guestCheckOut"
 }, {
 "buttonDescription": "Additional shipping/tax fees appear when proceeding to the checkout page",
 "stepId": "additionalShippingOrTax"
 }, {
 "buttonDescription": "Unable to apply a 100% discount",
 "stepId": "applyingDiscount"
 }, {
 "buttonDescription": "Unable to set the language of the checkout page",
 "stepId": "settingCheckoutLanguage"
 }, {
 "buttonDescription": "Unable to checkout due to Encrypted Payments",
 "stepId": "encryptedPayments"
 }, {
 "buttonDescription": "Instant Payment Notification (IPN) Message",
 "stepId": "IPNMessage"
 }, {
 "buttonDescription": "Other",
 "stepId": "paypalCheckoutOther"
 }
 ]
 },

 "guestCheckOut": {
 "stepId": "guestCheckOut",
 "formTitle": "Guest Checkout",
 "stepTitle": "Enabling Guest Checkout for PayPal in Your Store",
 "faqTitle": "Enabling Guest Checkout for PayPal in Your Store",
 "faqURL": "https://www.wix.com/support/html5/article/enabling-guest-checkout-for-paypal-in-your-store",
 "buttonsArray": [ ]
 },

 //SHOULD ADD INFO
 "additionalShippingOrTax": {
 "stepId": "additionalShippingOrTax",

 },

 "applyingDiscount": {
 "stepId": "applyingDiscount",
 "formTitle": "PayPal Discount",
 "stepTitle": "Unable to apply a 100% discount",
 "faqTitle": "Unable to apply a 100% discount",
 "faqURL": "https://www.wix.com/support/html5/article/using-wix-stores-coupons-with-paypal",
 "buttonsArray": [ ]
 },

 "settingCheckoutLanguage":{
 "stepId": "settingCheckoutLanguage",
 "formTitle": "PayPal Checkout Language",
 "stepTitle": "Setting the Language of the Wix Stores PayPal Checkout Page",
 "faqTitle": "Setting the Language of the Wix Stores PayPal Checkout Page",
 "faqURL": "https://www.wix.com/support/html5/article/request-setting-the-language-of-the-wixstores-paypal-checkout-page",
 "buttonsArray": [ ]
 },

 "encryptedPayments":{
 "stepId": "encryptedPayments",
 "formTitle": "PayPal Encrypted Payments",
 "stepTitle": "Disabling PayPal Encryption Messages",
 "faqTitle": "Disabling PayPal Encryption Messages",
 "faqURL": "https://www.wix.com/support/html5/article/disabling-paypal-encryption-messages",
 "buttonsArray": [ ]
 },

 //SHOULD ADD INFO
 "IPNMessage": {
 "stepId": "IPNMessage"

 },

 //SHOULD ADD INFO
 "paypalCheckoutOther": {
 "stepId": "paypalCheckoutOther"
 },

 "paypalOrders": {
 "stepId": "paypalOrders",
 "formTitle": "Orders Issue:",
 "stepTitle": "Please choose the relevant issue:",
 "buttonsArray": [
 {
 "buttonDescription": "Orders are not appearing in the store manager",
 "stepId": "missingOrders"
 }, {
 "buttonDescription": "Phone number missing in the Orders tab",
 "stepId": "missingPhoneNumber"
 } , {
 "buttonDescription": "Buyers are not redirected to the Thank You page",
 "stepId": "thankYouPageRedirection"
 }, {

 }
 ]
 },

 "missingOrders": {
 "stepId": "missingOrders",

 },

 "missingPhoneNumber": {
 "stepId": "missingPhoneNumber",
 "formTitle": "Missing Phone Number",
 "stepTitle": "Requiring a Customer Phone Number when Checking Out with Paypal",
 "faqTitle": "Requiring a Customer Phone Number when Checking Out with Paypal",
 "faqURL": " https://www.wix.com/support/html5/article/requiring-a-customer-phone-number-when-checking-out-with-paypal",
 "buttonsArray": [ ]
 } ,

 //SHOULD ADD INFO
 "thankYouPageRedirection":{
 "stepId": "thankYouPageRedirection",
 },

 //SHOULD ADD INFO
 "paypalOrdersOther": {
 "stepId": "paypalOrdersOther"

 }
* */



var gFormsData = {
    "forms": [
        // ------------ 0 ----------------
        {         
            "stepNumber": "0",
            "formTitle": "Payment Gateway:",
            "stepTitle": "Please select the relevant payment gateway",            
            "buttonsTitle": "payment-gateway",
            "isYesNo": "false",
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
        },
        // ------------ 1 ----------------
        {
            "stepNumber": "1",
            "formTitle": "PayPal Subject Issue:",
            "stepTitle": "To which subject the issue is related?",            
            "buttonsTitle": "paypal-subject-issues",
            "isYesNo": "false",
            "buttonsArray": [
                {
                    "buttonDescription": "Checkout",
                    "stepNumber": "2"
                 } , {
                    "buttonDescription": "Orders",
                    "stepNumber": "3"
                }
            ]
        },
        // ------------ 2 ----------------
        {
            "stepNumber": "2",
            "formTitle": "Checkout Issue:",
            "stepTitle": "Please choose the relevant issue:",            
            "buttonsTitle": "paypal-checkout-issues",
            "isYesNo": "false",
            "buttonsArray": [
                {
                    "buttonDescription": "Enabling Guest Checkout for PayPal in Your Store",
                    "stepNumber": "4"
                }, {
                    "buttonDescription": "Additional shipping/tax fees appear when proceeding to the checkout page",
                    "stepNumber": "5"
                }, {
                    "buttonDescription": "Unable to apply a 100% discount",
                    "stepNumber": "6"
                }, {
                    "buttonDescription": "Unable to set the language of the checkout page",
                    "stepNumber": "7"
                }, {
                    "buttonDescription": "Unable to checkout due to Encrypted Payments",
                    "stepNumber": "8"
                }, {
                    "buttonDescription": "Instant Payment Notification (IPN) Message",
                    "stepNumber": "9"
                }, {
                    "buttonDescription": "Other",
                    "stepNumber": "10"
                }
            ]
        } , 
        // ------------ 3 ----------------
        {
            "stepNumber": "3",            
            "formTitle": "Orders Issue:",
            "stepTitle": "Please choose the relevant issue:",
            "buttonsTitle": "paypal-orders-issues",
            "isYesNo": "false",
            "buttonsArray": [
                {
                    "buttonDescription": "Orders are not appearing in the store manager",
                    "stepNumber": "11"
                },
                {
                    "buttonDescription": "Phone number missing in the Orders tab",
                    "stepNumber": "12"
                }, {
                    "buttonDescription": "Buyers are not redirected to the Thank You page",
                    "stepNumber": "13"
                }, {
                    "buttonDescription": "Orders are not appearing in the store manager",
                    "stepNumber": "14"
                }, {
                    "buttonDescription": "Other",
                    "stepNumber": "15"
                }
            ]
        },
        // ------------ 4 ----------------
        {
            "stepNumber": "4",
            "formTitle": "Guest Checkout",
            "stepTitle": "Enabling Guest Checkout for PayPal in Your Store",
            "faqTitle": "Enabling Guest Checkout for PayPal in Your Store",
            "buttonsTitle": " ",
            "isYesNo": "false",
            "ticketOrFAQ": "FAQ",       
            "faqURL": "https://www.wix.com/support/html5/article/enabling-guest-checkout-for-paypal-in-your-store", 
            "buttonsArray": [ ]   
        },
        // ------------ 5 ----------------
        {
            "stepNumber": "5",
            "formTitle":"Submit a ticket",
            "stepTitle": "Submit a ticket with the following information:",            
            "buttonsTitle": " ",
            "isYesNo": "false",
            "buttonsArray": [  ]
        },
        // ------------ 6 ----------------
        {
            "stepNumber": "6",
            "formTitle": "PayPal Discount",
            "stepTitle": "Unable to apply a 100% discount",
            "faqTitle": "Unable to apply a 100% discount",
            "buttonsTitle": " ",
            "isYesNo": "false",
            "ticketOrFAQ": "FAQ",       
            "faqURL": "https://www.wix.com/support/html5/article/using-wix-stores-coupons-with-paypal", 
            "buttonsArray": [ ]   
        } ,     
        // ------------ 7 ----------------
        {
            "stepNumber": "7",
            "formTitle": "PayPal Checkout Language",
            "stepTitle": "Setting the Language of the Wix Stores PayPal Checkout Page",
            "faqTitle": "Setting the Language of the Wix Stores PayPal Checkout Page",
            "buttonsTitle": " ",
            "isYesNo": "false",
            "ticketOrFAQ": "FAQ",       
            "faqURL": "https://www.wix.com/support/html5/article/request-setting-the-language-of-the-wixstores-paypal-checkout-page", 
            "buttonsArray": [ ]   
        } , 
         // ------------ 8 ----------------
         {
            "stepNumber": "8",
            "formTitle": "PayPal Encrypted Payments",
            "stepTitle": "Disabling PayPal Encryption Messages",
            "faqTitle": "Disabling PayPal Encryption Messages",
            "buttonsTitle": " ",
            "isYesNo": "false",
            "ticketOrFAQ": "FAQ",       
            "faqURL": "https://www.wix.com/support/html5/article/disabling-paypal-encryption-messages", 
            "buttonsArray": [ ]   
        } , 
        // ------------ 9 ----------------
         {
            "stepNumber": "9",
            "formTitle": "PayPal Encrypted Payments",
            "stepTitle": "Disabling PayPal Encryption Messages",
            "faqTitle": "Disabling PayPal Encryption Messages",
            "buttonsTitle": " ",
            "isYesNo": "false",
            "ticketOrFAQ": "FAQ",       
            "faqURL": "https://www.wix.com/support/html5/article/disabling-paypal-encryption-messages", 
            "buttonsArray": [ ]   
        } , 
        // ------------ 10 ----------------
         {
            "stepNumber": "10",
            "formTitle": "Checkout Other",
            "stepTitle": "Submit a ticket with the following information:",
            "buttonsTitle": " ",
            "isYesNo": "false",
            "ticketOrFAQ": "ticket",          
            "buttonsArray": [ ]   
        } , 
        // ------------ 11 ----------------
         {
            "stepNumber": "11",
            "formTitle": "Checkout Other",
            "stepTitle": "Submit a ticket with the following information:",
            "buttonsTitle": " ",
            "isYesNo": "false",
            "ticketOrFAQ": "ticket",          
            "buttonsArray": [ ]   
 
        } , 
        // ------------ 12 ----------------
         {
            "stepNumber": "12",
            "formTitle": "Missing Phone Number",
            "stepTitle": "Requiring a Customer Phone Number when Checking Out with Paypal",
            "faqTitle": "Requiring a Customer Phone Number when Checking Out with Paypal",
            "buttonsTitle": " ",
            "isYesNo": "false",
            "ticketOrFAQ": "FAQ",       
            "faqURL": " https://www.wix.com/support/html5/article/requiring-a-customer-phone-number-when-checking-out-with-paypal", 
            "buttonsArray": [ ]   
        } 
    ]
}
