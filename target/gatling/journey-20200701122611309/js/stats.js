var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "240",
        "ok": "240",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1556",
        "ok": "1556",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "514",
        "ok": "514",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "317",
        "ok": "317",
        "ko": "-"
    },
    "percentiles1": {
        "total": "674",
        "ok": "674",
        "ko": "-"
    },
    "percentiles2": {
        "total": "805",
        "ok": "805",
        "ko": "-"
    },
    "percentiles3": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1070",
        "ok": "1070",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 168,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 70,
    "percentage": 29
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.934",
        "ok": "3.934",
        "ko": "-"
    }
},
contents: {
"req_add-a-new-pet-t-3ce19": {
        type: "REQUEST",
        name: "Add a new pet to the storehttps://petstore.swagger.io",
path: "Add a new pet to the storehttps://petstore.swagger.io",
pathFormatted: "req_add-a-new-pet-t-3ce19",
stats: {
    "name": "Add a new pet to the storehttps://petstore.swagger.io",
    "numberOfRequests": {
        "total": "120",
        "ok": "120",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "772",
        "ok": "772",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1556",
        "ok": "1556",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "822",
        "ok": "822",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles1": {
        "total": "805",
        "ok": "805",
        "ko": "-"
    },
    "percentiles2": {
        "total": "815",
        "ok": "815",
        "ko": "-"
    },
    "percentiles3": {
        "total": "885",
        "ok": "885",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1351",
        "ok": "1351",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 48,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 70,
    "percentage": 58
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.967",
        "ok": "1.967",
        "ko": "-"
    }
}
    },"req_verify-pet-to-t-bdf4a": {
        type: "REQUEST",
        name: "Verify pet to the store as per statushttps://petstore.swagger.io",
path: "Verify pet to the store as per statushttps://petstore.swagger.io",
pathFormatted: "req_verify-pet-to-t-bdf4a",
stats: {
    "name": "Verify pet to the store as per statushttps://petstore.swagger.io",
    "numberOfRequests": {
        "total": "120",
        "ok": "120",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "190",
        "ok": "190",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "42",
        "ok": "42",
        "ko": "-"
    },
    "percentiles1": {
        "total": "199",
        "ok": "199",
        "ko": "-"
    },
    "percentiles2": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles3": {
        "total": "209",
        "ok": "209",
        "ko": "-"
    },
    "percentiles4": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 120,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.967",
        "ok": "1.967",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
