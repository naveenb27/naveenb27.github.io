let customers = [
    {
        to: "AVM TEX",
        address: "Ponnamapet, Salem – 636003",
        gst_no: "33CZZPK2944P1ZE"
    },
    {
        to: "SRM TEX",
        address: "657, Gandhi Nagar, Vaikadu Salem",
        gst_no: "33CKUPR1859J1ZE"
    }
]
customers = JSON.parse(localStorage.getItem('customers')) || [];
