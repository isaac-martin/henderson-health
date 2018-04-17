! function() {
    "use strict";

    function scriptLoadHandler() {
        jQuery = window.jQuery.noConflict(!0), main()
    }

    function main() {
        jQuery(document).ready(function($) {
            function init(a) {
                if (queryStringParams = {
                        jobID: getParameterByName("ja-job"),
                        classificationIDs: getParameterByName("ja-classifications"),
                        keywords: getParameterByName("ja-keywords"),
                        applyID: getParameterByName("ja-apply"),
                        submitted: getParameterByName("ja-submitted"),
                        jobUnavailable: getParameterByName("ja-job-unavailable")
                    }, queryStringParams.jobUnavailable) loadHtml("Jobs/RenderUnavailable", null, render);
                else if (queryStringParams.submitted) loadHtml("Jobs/RenderSubmitted", renderSubmittedRequest, render);
                else if (queryStringParams.applyID && !isNaN(queryStringParams.applyID)) renderApplicationForm(queryStringParams.applyID);
                else if (queryStringParams.jobID && !isNaN(queryStringParams.jobID)) renderJobDetailsRequest.jobID = queryStringParams.jobID, loadHtml("Jobs/RenderJobDetails", renderJobDetailsRequest, render);
                else if (queryStringParams.classificationIDs || queryStringParams.keywords) {
                    for (var b = [], c = queryStringParams.classificationIDs.split(","), d = 0; d < c.length; d++) isNaN(c[d]) || b.push(c[d]);
                    searchParams.classificationIDs = b, searchParams.keywords = queryStringParams.keywords, renderJobListRequest.classificationIDs = searchParams.classificationIDs.join(","), renderJobListRequest.keywords = queryStringParams.keywords, renderJobListRequest.pageNumber = 1, widgetSettings.jobSearchSettings.showSearchForm ? loadHtml("Jobs/RenderSearchForm", renderSearchFormRequest, function(a) {
                        $widgetContainer.html(a), loadHtml("Jobs/RenderJobList", renderJobListRequest, function(a) {
                            $widgetContainer.append(a), refreshSearchForm()
                        })
                    }) : loadHtml("Jobs/RenderJobList", renderJobListRequest, function(a) {
                        $widgetContainer.append(a)
                    }), pushJobListState(a)
                } else renderDefaultWidget(a)
            }

            function searchJobs() {
                var classificationIDs = [];
                var a = $(".ja-job-search select", $widgetContainer);
                $.each(a, function(a, b) {
                    var c = b.value;
                    "0" === c || isNaN(c) || classificationIDs.push(c)
                }), searchParams.classificationIDs = classificationIDs;
                var b = $("#ja-keywords");
                b.length && "" !== b.val() && (searchParams.keywords = b.val()), renderJobListRequest.classificationIDs = classificationIDs.join(","), renderJobListRequest.keywords = searchParams.keywords, renderJobListRequest.renderPoweredByJobAdder = !1, renderJobListRequest.pageNumber = 1, loadHtml("Jobs/RenderJobList", renderJobListRequest, function(a) {
                    $widgetContainer.find(".ja-job-list-container").replaceWith(a)
                })
            }

            function renderJobDetailsPage(a, b) {
                return saveJobSearchState(), renderJobDetailsRequest.jobID = a, loadHtml("Jobs/RenderJobDetails", renderJobDetailsRequest, function(c) {
                    $widgetContainer.html(c), window.scrollTo(0, $widgetContainer.offset().top - 190), widgetSettings.enablePushState && history.pushState && !b && history.pushState({
                        jobID: a,
                        url: "Jobs/RenderJobDetails"
                    }, "Jobs/RenderJobDetails", "?ja-job=" + a)
                }), !1
            }

            function renderApplicationForm(a, b) {
                window.scrollTo(0, $widgetContainer.offset().top - 190), renderApplicationFormRequest.jobID = a, $.support.cors ? loadHtml("Jobs/RenderApplicationForm", renderApplicationFormRequest, function(a) {
                    $widgetContainer.html(a), $widgetContainer.find(".ja-job-apply .ja-submit .ja-button").removeAttr("disabled")
                }) : (renderApplicationFormRequest.ajaxSubmit = !1, renderApplicationFormRequest.errorMessage = getParameterByName("error"), renderApplicationFormRequest.errorRequired = getParameterByName("error-required"), renderApplicationFormRequest.errorEmail = getParameterByName("error-email"), loadHtml("Jobs/RenderApplicationForm", renderApplicationFormRequest, function(a) {
                    $widgetContainer.html(a), $.each(location.search.substr(1).split("&"), function(a, b) {
                        var c = b.split("=");
                        2 == c.length && 0 === c[0].indexOf("Candidate") && $("#" + c[0]).val(decodeURIComponent(c[1]))
                    }), $widgetContainer.find(".ja-job-apply .ja-submit .ja-button").removeAttr("disabled")
                })), widgetSettings.enablePushState && history.pushState && !b && history.pushState({
                    jobID: a,
                    url: "Jobs/RenderApplicationForm"
                }, "Jobs/RenderApplicationForm", "?ja-apply=" + a)
            }

            function submitApplicationForm() {
                var a = $widgetContainer.find(".ja-job-apply form"),
                    b = a.find(".ja-submit .ja-button"),
                    c = a.find(".ja-submit .back-link"),
                    d = a.find(".ja-error-container"),
                    e = d.find(".ja-error-message");
                return b.attr("disabled", "disabled"), c.hide(), widgetSettings.applicationFormSettings.showLoadingImage && ($loadingImage.show(), a.find(".ja-submit").append($loadingImage)), $.support.cors ? a.ajaxSubmit({
                    type: "POST",
                    dataType: "json",
                    iframe: !1,
                    success: function(b, c, f) {
                        var g = a.find("input.error, select.error, textarea.error");
                        g.removeClass("error").parents("form").find(".validation-error").remove(), b.Success ? (e.text(""), d.hide(), widgetSettings.applicationFormSettings.submittedRedirectUrl ? window.location.href = widgetSettings.applicationFormSettings.submittedRedirectUrl : loadHtml("Jobs/RenderSubmitted", renderSubmittedRequest, function(a) {
                            $widgetContainer.html(a)
                        })) : (e.text(b.ErrorMessage), d.show(), b.ValidationErrors && $.each(b.ValidationErrors, function(a, b) {
                            var c = $("#" + b.FieldName),
                                d = $("<span></span>", {
                                    class: "validation-error",
                                    text: b.ErrorMessage
                                });
                            c.addClass("error").parent(".ja-field").append(d), c.parent(".checkbox").append(d)
                        }), b.Unavailable && loadHtml("Jobs/RenderUnavailable", null, function(a) {
                            $widgetContainer.html(a)
                        }))
                    },
                    error: function(a, b, c) {
                        e.text("Failed to submit your application. Please try again."), d.show()
                    },
                    complete: function(a, d) {
                        $loadingImage.remove(), c.show(), b.one("click", function() {
                            return submitApplicationForm(), !1
                        }).removeAttr("disabled")
                    }
                }) : a.submit(), !1
            }

            function loadHtml(a, b, c, d, e) {
                a && $.ajax({
                    type: "GET",
                    url: baseUrl + "/V" + widgetVersion + "/" + a,
                    data: b,
                    dataType: "jsonp",
                    contentType: "application/json; charset=utf-8",
                    beforeSend: function() {
                        widgetSettings.showLoadingImage && $widgetContainer.append($loadingImage)
                    },
                    success: function(a, b, d) {
                        c && "function" == typeof c && c(a, b, d)
                    },
                    error: function(a, b, c) {
                        d && "function" == typeof d ? d(a, b, c) : logError("loadHtml error: " + c + ". Board reference: " + widgetSettings.key)
                    },
                    complete: function(a, b) {
                        widgetSettings.showLoadingImage && $loadingImage.remove(), e && "function" == typeof e && e(a, b)
                    }
                })
            }

            function saveJobSearchState() {
                $jobSearchState = $widgetContainer.html()
            }

            function restoreJobSearchState(a) {
                return window.scrollTo(0, $widgetContainer.offset().top - 190), 0 === $jobSearchState.length ? void renderDefaultWidget(a) : ($widgetContainer.html($jobSearchState), refreshSearchForm(), void(widgetSettings.enablePushState && history.pushState && !a && history.back()))
            }

            function renderDefaultWidget(a) {
                widgetSettings.jobSearchSettings.showSearchForm ? loadHtml("Jobs/RenderSearchForm", renderSearchFormRequest, function(a) {
                    $widgetContainer.html(a), loadHtml("Jobs/RenderJobList", renderJobListRequest, function(a) {
                        $widgetContainer.append(a)
                    })
                }) : loadHtml("Jobs/RenderJobList", renderJobListRequest, render), pushJobListState(a)
            }

            function render(a) {
                $widgetContainer.html(a)
            }

            function pushJobListState(a) {
                widgetSettings.enablePushState && history.pushState && !a && history.pushState({
                    url: "Jobs/RenderJobList"
                }, "Jobs/RenderJobList", "")
            }

            function refreshSearchForm() {
                var a = $(".ja-job-search select[data-child]", $widgetContainer);
                $.each(a, function(a, b) {
                    var c = $(b);
                    $.each(searchParams.classificationIDs, function(a, b) {
                        if (c.find('option[value="' + b + '"]').length > 0) return void c.val(b)
                    }), c.val() && getChildClassifications(c, function(a) {
                        $.each(searchParams.classificationIDs, function(b, c) {
                            return a.find('option[value="' + c + '"]').length > 0 ? void a.val(c) : void a.val("0")
                        })
                    })
                }), $("#ja-keywords", $widgetContainer).val(searchParams.keywords)
            }

            function getChildClassifications(a, b) {
                var c = a.data("child");
                if ("undefined" !== c) {
                    var d = $("#" + c);
                    if (0 !== d.length) {
                        var e = d.find("option").first().text();
                        d.find("option").remove(), d.append($("<option></option>").attr("value", "0").text("Loading.."));
                        var f = {
                            key: widgetSettings.key,
                            parentID: a.val()
                        };
                        loadHtml("Jobs/GetClassifications", f, function(c) {
                            d.find("option").remove(), c.Success !== !0 ? d.append($("<option></option>").attr("value", "0").text("" !== c.ErrorMessage ? c.ErrorMessage : "Failed to load classifications")) : (a.val() > 0 && $.each(c.Items, function(a, b) {
                                d.append($("<option></option>").attr("value", b.Value).text(b.Text))
                            }), d.prepend($("<option></option>").attr("value", "0").text(e))), b && "function" == typeof b && b(d)
                        }, function(a, b, c) {
                            d.find("option").remove(), d.append($("<option></option>").attr("value", "0").text("Error - " + c))
                        })
                    }
                }
            }

            function logError(a) {
                if (a) {
                    var b = {
                        errorMessage: a
                    };
                    $.ajax({
                        type: "GET",
                        url: baseUrl + "/V" + widgetVersion + "/Error/LogError",
                        data: b,
                        dataType: "json",
                        contentType: "application/json; charset=utf-8"
                    })
                }
            }

            function getParameterByName(a) {
                a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var b = new RegExp("[\\?&]" + a + "=([^&#]*)"),
                    c = b.exec(location.search);
                return null === c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
            }
            $.extend(!0, widgetSettings, window._jaJobsSettings), widgetSettings.loadingImageUrl = widgetSettings.loadingImageUrl || baseUrl + "/V" + widgetVersion + "/loading.gif";
            var renderSearchFormRequest = {
                    key: widgetSettings.key,
                    classificationsToExclude: widgetSettings.jobSearchSettings.classificationsToExclude ? widgetSettings.jobSearchSettings.classificationsToExclude.join(",") : "",
                    showLabels: widgetSettings.jobSearchSettings.showLabels,
                    optionText: widgetSettings.jobSearchSettings.optionText,
                    showKeywordSearch: widgetSettings.jobSearchSettings.showKeywordSearch,
                    autoSearch: widgetSettings.jobSearchSettings.autoSearch,
                    showSearchButton: widgetSettings.jobSearchSettings.showSearchButton,
                    searchButtonText: widgetSettings.jobSearchSettings.searchButtonText
                },
                renderJobListRequest = {
                    key: widgetSettings.key,
                    jobsPerPage: widgetSettings.jobListSettings.jobsPerPage,
                    showHotJobsOnly: widgetSettings.jobListSettings.showHotJobsOnly,
                    titleIsLink: widgetSettings.jobListSettings.titleIsLink,
                    showDatePosted: widgetSettings.jobListSettings.showDatePosted,
                    datePostedFormat: widgetSettings.jobListSettings.datePostedFormat,
                    dateFormat: widgetSettings.jobListSettings.dateFormat,
                    showClassifications: widgetSettings.jobListSettings.showClassifications,
                    classificationsToExclude: widgetSettings.jobListSettings.classificationsToExclude ? widgetSettings.jobListSettings.classificationsToExclude.join(",") : "",
                    showSalary: widgetSettings.jobListSettings.showSalary,
                    salaryFormat: widgetSettings.jobListSettings.salaryFormat,
                    includeSalaryText: widgetSettings.jobListSettings.includeSalaryText,
                    showJobReference: widgetSettings.jobListSettings.showJobReference,
                    jobReferenceFormat: widgetSettings.jobListSettings.jobReferenceFormat,
                    alwaysShowPager: widgetSettings.jobListSettings.alwaysShowPager,
                    showPagerSummary: widgetSettings.jobListSettings.showPagerSummary,
                    pagerGroupSize: widgetSettings.jobListSettings.pagerGroupSize,
                    scrollOnPageChange: widgetSettings.jobListSettings.scrollOnPageChange,
                    animateScrollOnPageChange: widgetSettings.jobListSettings.animateScrollOnPageChange,
                    readMoreText: widgetSettings.jobListSettings.readMoreText,
                    noJobsContent: widgetSettings.jobListSettings.noJobsContent,
                    renderPoweredByJobAdder: !0
                },
                renderJobDetailsRequest = {
                    key: widgetSettings.key,
                    showDatePosted: widgetSettings.jobDetailsSettings.showDatePosted,
                    datePostedFormat: widgetSettings.jobDetailsSettings.datePostedFormat,
                    dateFormat: widgetSettings.jobDetailsSettings.dateFormat,
                    showClassifications: widgetSettings.jobDetailsSettings.showClassifications,
                    classificationsToExclude: widgetSettings.jobDetailsSettings.classificationsToExclude ? widgetSettings.jobDetailsSettings.classificationsToExclude.join(",") : "",
                    showSalary: widgetSettings.jobDetailsSettings.showSalary,
                    salaryFormat: widgetSettings.jobDetailsSettings.salaryFormat,
                    includeSalaryText: widgetSettings.jobDetailsSettings.includeSalaryText,
                    showJobReference: widgetSettings.jobDetailsSettings.showJobReference,
                    jobReferenceFormat: widgetSettings.jobDetailsSettings.jobReferenceFormat,
                    showBulletPoints: widgetSettings.jobDetailsSettings.showBulletPoints,
                    applyButtonText: widgetSettings.jobDetailsSettings.applyButtonText,
                    backLinkText: widgetSettings.jobDetailsSettings.backLinkText,
                    useExternalApplicationForm: widgetSettings.applicationFormSettings.useExternalApplicationForm,
                    showExternalApplicationFormInNewWindow: widgetSettings.applicationFormSettings.showExternalApplicationFormInNewWindow
                },
                renderApplicationFormRequest = {
                    key: widgetSettings.key,
                    ajaxSubmit: !0,
                    formUrl: [location.protocol, "//", location.host, location.pathname].join(""),
                    useExternalApplicationForm: widgetSettings.applicationFormSettings.useExternalApplicationForm,
                    showExternalApplicationFormInNewWindow: widgetSettings.applicationFormSettings.showExternalApplicationFormInNewWindow,
                    pageTitle: widgetSettings.applicationFormSettings.pageTitle,
                    showJobTitle: widgetSettings.applicationFormSettings.showJobTitle,
                    showJobSummary: widgetSettings.applicationFormSettings.showJobSummary,
                    formFields: widgetSettings.applicationFormSettings.formFields,
                    formFieldLabels: widgetSettings.applicationFormSettings.formFieldLabels,
                    showLabels: widgetSettings.applicationFormSettings.showLabels,
                    applyButtonText: widgetSettings.applicationFormSettings.applyButtonText,
                    backLinkText: widgetSettings.applicationFormSettings.backLinkText,
                    submittedRedirectUrl: widgetSettings.applicationFormSettings.submittedRedirectUrl
                };
            "" === renderApplicationFormRequest.formFields && (renderApplicationFormRequest.formFields = "firstName,lastName,email,resume", renderApplicationFormRequest.formFieldLabels = "First name,Last name,Email address,Resume");
            var renderSubmittedRequest = {
                content: widgetSettings.applicationFormSettings.submittedContent
            };
            if ("" === widgetSettings.key) return void alert("Error: invalid/missing key");
            var $widgetContainer = $("#ja-jobs-widget"),
                $loadingImage = $(loadingImage).hide().removeClass("left"),
                $jobSearchState = "",
                searchParams = {
                    classificationIDs: [],
                    keywords: "",
                    pageNumber: 1
                },
                queryStringParams = {
                    jobID: getParameterByName("ja-job"),
                    classificationIDs: getParameterByName("ja-classifications"),
                    keywords: getParameterByName("ja-keywords"),
                    applyID: getParameterByName("ja-apply"),
                    submitted: getParameterByName("ja-submitted"),
                    jobUnavailable: getParameterByName("ja-job-unavailable")
                };
            widgetSettings.jobDetailsSettings.jobID && !isNaN(widgetSettings.jobDetailsSettings.jobID) && (queryStringParams.jobID = widgetSettings.jobDetailsSettings.jobID), widgetSettings.applicationFormSettings.jobID && !isNaN(widgetSettings.applicationFormSettings.jobID) && (queryStringParams.applyID = widgetSettings.applicationFormSettings.jobID), init(), widgetSettings.enablePushState && history.pushState && (window.onpopstate = function(a) {
                var b = a.state;
                b && b.url && (b.url.indexOf("Jobs/RenderJobList") > -1 ? init(!0) : b.url.indexOf("Jobs/RenderJobDetails") > -1 && b.jobID ? renderJobDetailsPage(b.jobID, !0) : b.url.indexOf("Jobs/RenderApplicationForm") > -1 && b.jobID && renderApplicationForm(b.jobID, !0))
            }), $widgetContainer.on("change", ".ja-job-search select", function() {
                getChildClassifications($(this), function(a) {
                    a.val("0")
                }), widgetSettings.jobSearchSettings.autoSearch && searchJobs()
            }), $widgetContainer.on("click", ".ja-job-search .ja-button", function() {
                return searchJobs(), !1
            }), $widgetContainer.on("click", ".ja-pager a", function() {
                var a = $(this).data("page");
                return "undefined" !== a && null !== a && !isNaN(a) && (searchParams.pageNumber = a, renderJobListRequest.classificationIDs = searchParams.classificationIDs.join(","), renderJobListRequest.keywords = searchParams.keywords, renderJobListRequest.pageNumber = searchParams.pageNumber, renderJobListRequest.renderPoweredByJobAdder = !1, loadHtml("Jobs/RenderJobList", renderJobListRequest, function(a) {
                    $widgetContainer.find(".ja-job-list-container").replaceWith(a), widgetSettings.jobListSettings.scrollOnPageChange && (widgetSettings.jobListSettings.animateScrollOnPageChange ? $("html, body").animate({
                        scrollTop: $(".ja-job-list-container", $widgetContainer).offset().top - 190
                    }, 1e3) : window.scrollTo(0, $widgetContainer.offset().top - 190))
                }), !1)
            }), $widgetContainer.on("click", ".ja-job-list .title a, .ja-job-list .view-details", function(a) {
                a.preventDefault();
                var b = $(this).data("job-id");
                return !(!b || isNaN(b)) && void renderJobDetailsPage(b)
            }), $widgetContainer.on("click", ".ja-job-details .apply input", function() {
                var a = $(this),
                    b = a.data("apply-url");
                if (b && b.length) return a.data("new-window") ? window.open(b) : loadHtml("Jobs/RenderApplicationFormIframe", {
                    Url: b
                }, function(a) {
                    $widgetContainer.html(a), $(".ja-apply-iframe").find("iframe").iFrameResize({
                        checkOrigin: !1,
                        heightCalculationMethod: "bodyScroll"
                    }), window.scrollTo(0, $widgetContainer.offset().top - 190)
                }), !1;
                var c = $(this).data("job-id");
                return !(!c || isNaN(c)) && (renderApplicationForm(c), !1)
            }), $widgetContainer.on("click", ".ja-job-details .back-link", function(a) {
                return a.preventDefault(), restoreJobSearchState(), !1
            }), $widgetContainer.on("click", ".ja-job-unavailable .back-link", function() {
                return restoreJobSearchState(), !1
            }), $widgetContainer.one("click", ".ja-job-apply .ja-submit .ja-button", function() {
                return submitApplicationForm(), !1
            }), $widgetContainer.on("click", ".ja-job-apply .back-link", function() {
                return confirm("Are you sure you want to cancel?") && restoreJobSearchState(), !1
            }), $widgetContainer.on("click", ".ja-apply-iframe .back-link", function() {
                var a = $widgetContainer.find("iframe").attr("src");
                return a && a.toLowerCase().indexOf("submitted") !== -1 || a.toLowerCase().indexOf("closed") !== -1 ? restoreJobSearchState() : confirm("Are you sure you want to cancel?") && restoreJobSearchState(), !1
            }), $widgetContainer.on("click", ".ja-application-submitted .back-link", function() {
                return restoreJobSearchState(), !1
            });
            var JSON;
            JSON || (JSON = {}),
                function() {
                    function f(a) {
                        return a < 10 ? "0" + a : a
                    }

                    function quote(a) {
                        return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                            var b = meta[a];
                            return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + a + '"'
                    }

                    function str(a, b) {
                        var c, d, e, f, h, g = gap,
                            i = b[a];
                        switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                            case "string":
                                return quote(i);
                            case "number":
                                return isFinite(i) ? String(i) : "null";
                            case "boolean":
                            case "null":
                                return String(i);
                            case "object":
                                if (!i) return "null";
                                if (gap += indent, h = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                                    for (f = i.length, c = 0; c < f; c += 1) h[c] = str(c, i) || "null";
                                    return e = 0 === h.length ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
                                }
                                if (rep && "object" == typeof rep)
                                    for (f = rep.length, c = 0; c < f; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                                else
                                    for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                                return e = 0 === h.length ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
                        }
                    }
                    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
                        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
                        return this.valueOf()
                    });
                    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        gap, indent, meta = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        },
                        rep;
                    "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
                        var d;
                        if (gap = "", indent = "", "number" == typeof c)
                            for (d = 0; d < c; d += 1) indent += " ";
                        else "string" == typeof c && (indent = c);
                        if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
                        return str("", {
                            "": a
                        })
                    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                        function walk(a, b) {
                            var c, d, e = a[b];
                            if (e && "object" == typeof e)
                                for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                            return reviver.call(a, b, e)
                        }
                        var j;
                        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
                            "": j
                        }, "") : j;
                        throw new SyntaxError("JSON.parse")
                    })
                }(),
                function(a) {
                    function d(b) {
                        var c = b.data;
                        b.isDefaultPrevented() || (b.preventDefault(), a(this).ajaxSubmit(c))
                    }

                    function e(b) {
                        var c = b.target,
                            d = a(c);
                        if (!d.is("[type=submit],[type=image]")) {
                            var e = d.closest("[type=submit]");
                            if (0 === e.length) return;
                            c = e[0]
                        }
                        var f = this;
                        if (f.clk = c, "image" == c.type)
                            if (void 0 !== b.offsetX) f.clk_x = b.offsetX, f.clk_y = b.offsetY;
                            else if ("function" == typeof a.fn.offset) {
                            var g = d.offset();
                            f.clk_x = b.pageX - g.left, f.clk_y = b.pageY - g.top
                        } else f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop;
                        setTimeout(function() {
                            f.clk = f.clk_x = f.clk_y = null
                        }, 100)
                    }

                    function f() {
                        if (a.fn.ajaxSubmit.debug) {
                            var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                            window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b)
                        }
                    }
                    var b = {};
                    b.fileapi = void 0 !== a("<input type='file'/>").get(0).files, b.formdata = void 0 !== window.FormData;
                    var c = !!a.fn.prop;
                    a.fn.attr2 = function() {
                        if (!c) return this.attr.apply(this, arguments);
                        var a = this.prop.apply(this, arguments);
                        return a && a.jquery || "string" == typeof a ? a : this.attr.apply(this, arguments)
                    }, a.fn.ajaxSubmit = function(d) {
                        function B(b) {
                            var f, g, c = a.param(b).split("&"),
                                d = c.length,
                                e = [];
                            for (f = 0; f < d; f++) c[f] = c[f].replace(/\+/g, " "), g = c[f].split("="), e.push([decodeURIComponent(g[0]), decodeURIComponent(g[1])]);
                            return e
                        }

                        function C(b) {
                            for (var c = new FormData, f = 0; f < b.length; f++) c.append(b[f].name, b[f].value);
                            if (d.extraData) {
                                var g = B(d.extraData);
                                for (f = 0; f < g.length; f++) g[f] && c.append(g[f][0], g[f][1])
                            }
                            d.data = null;
                            var h = a.extend(!0, {}, a.ajaxSettings, d, {
                                contentType: !1,
                                processData: !1,
                                cache: !1,
                                type: e || "POST"
                            });
                            d.uploadProgress && (h.xhr = function() {
                                var a = jQuery.ajaxSettings.xhr();
                                return a.upload && a.upload.addEventListener("progress", function(a) {
                                    var b = 0,
                                        c = a.loaded || a.position,
                                        e = a.total;
                                    a.lengthComputable && (b = Math.ceil(c / e * 100)), d.uploadProgress(a, c, e, b)
                                }, !1), a
                            }), h.data = null;
                            var i = h.beforeSend;
                            return h.beforeSend = function(a, b) {
                                b.data = c, i && i.call(this, a, b)
                            }, a.ajax(h)
                        }

                        function D(b) {
                            function y(a) {
                                var b = null;
                                try {
                                    a.contentWindow && (b = a.contentWindow.document)
                                } catch (a) {
                                    f("cannot get iframe.contentWindow document: " + a)
                                }
                                if (b) return b;
                                try {
                                    b = a.contentDocument ? a.contentDocument : a.document
                                } catch (c) {
                                    f("cannot get iframe.contentDocument: " + c), b = a.document
                                }
                                return b
                            }

                            function B() {
                                function d() {
                                    try {
                                        var a = y(p).readyState;
                                        f("state = " + a), a && "uninitialized" == a.toLowerCase() && setTimeout(d, 50)
                                    } catch (a) {
                                        f("Server abort: ", a, " (", a.name, ")"), G(x), u && clearTimeout(u), u = void 0
                                    }
                                }
                                var b = i.attr2("target"),
                                    c = i.attr2("action");
                                g.setAttribute("target", n), e || g.setAttribute("method", "POST"), c != k.url && g.setAttribute("action", k.url), k.skipEncodingOverride || e && !/post/i.test(e) || i.attr({
                                    encoding: "multipart/form-data",
                                    enctype: "multipart/form-data"
                                }), k.timeout && (u = setTimeout(function() {
                                    t = !0, G(w)
                                }, k.timeout));
                                var h = [];
                                try {
                                    if (k.extraData)
                                        for (var j in k.extraData) k.extraData.hasOwnProperty(j) && (a.isPlainObject(k.extraData[j]) && k.extraData[j].hasOwnProperty("name") && k.extraData[j].hasOwnProperty("value") ? h.push(a('<input type="hidden" name="' + k.extraData[j].name + '">').val(k.extraData[j].value).appendTo(g)[0]) : h.push(a('<input type="hidden" name="' + j + '">').val(k.extraData[j]).appendTo(g)[0]));
                                    k.iframeTarget || (o.appendTo("body"), p.attachEvent ? p.attachEvent("onload", G) : p.addEventListener("load", G, !1)), setTimeout(d, 15);
                                    try {
                                        g.submit()
                                    } catch (a) {
                                        var l = document.createElement("form").submit;
                                        l.apply(g)
                                    }
                                } finally {
                                    g.setAttribute("action", c), b ? g.setAttribute("target", b) : i.removeAttr("target"), a(h).remove()
                                }
                            }

                            function G(b) {
                                if (!q.aborted && !F) {
                                    if (D = y(p), D || (f("cannot access response document"), b = x), b === w && q) return q.abort("timeout"), void v.reject(q, "timeout");
                                    if (b == x && q) return q.abort("server abort"), void v.reject(q, "error", "server abort");
                                    if (D && D.location.href != k.iframeSrc || t) {
                                        p.detachEvent ? p.detachEvent("onload", G) : p.removeEventListener("load", G, !1);
                                        var d, c = "success";
                                        try {
                                            if (t) throw "timeout";
                                            var e = "xml" == k.dataType || D.XMLDocument || a.isXMLDoc(D);
                                            if (f("isXml=" + e), !e && window.opera && (null === D.body || !D.body.innerHTML) && --E) return f("requeing onLoad callback, DOM not available"), void setTimeout(G, 250);
                                            var g = D.body ? D.body : D.documentElement;
                                            q.responseText = g ? g.innerHTML : null, q.responseXML = D.XMLDocument ? D.XMLDocument : D, e && (k.dataType = "xml"), q.getResponseHeader = function(a) {
                                                var b = {
                                                    "content-type": k.dataType
                                                };
                                                return b[a]
                                            }, g && (q.status = Number(g.getAttribute("status")) || q.status, q.statusText = g.getAttribute("statusText") || q.statusText);
                                            var h = (k.dataType || "").toLowerCase(),
                                                i = /(json|script|text)/.test(h);
                                            if (i || k.textarea) {
                                                var j = D.getElementsByTagName("textarea")[0];
                                                if (j) q.responseText = j.value, q.status = Number(j.getAttribute("status")) || q.status, q.statusText = j.getAttribute("statusText") || q.statusText;
                                                else if (i) {
                                                    var l = D.getElementsByTagName("pre")[0],
                                                        n = D.getElementsByTagName("body")[0];
                                                    l ? q.responseText = l.textContent ? l.textContent : l.innerText : n && (q.responseText = n.textContent ? n.textContent : n.innerText)
                                                }
                                            } else "xml" == h && !q.responseXML && q.responseText && (q.responseXML = H(q.responseText));
                                            try {
                                                C = J(q, h, k)
                                            } catch (a) {
                                                c = "parsererror", q.error = d = a || c
                                            }
                                        } catch (a) {
                                            f("error caught: ", a), c = "error", q.error = d = a || c
                                        }
                                        q.aborted && (f("upload aborted"), c = null), q.status && (c = q.status >= 200 && q.status < 300 || 304 === q.status ? "success" : "error"), "success" === c ? (k.success && k.success.call(k.context, C, "success", q), v.resolve(q.responseText, "success", q), m && a.event.trigger("ajaxSuccess", [q, k])) : c && (void 0 === d && (d = q.statusText), k.error && k.error.call(k.context, q, c, d), v.reject(q, "error", d), m && a.event.trigger("ajaxError", [q, k, d])), m && a.event.trigger("ajaxComplete", [q, k]), m && !--a.active && a.event.trigger("ajaxStop"), k.complete && k.complete.call(k.context, q, c), F = !0, k.timeout && clearTimeout(u), setTimeout(function() {
                                            k.iframeTarget || o.remove(), q.responseXML = null
                                        }, 100)
                                    }
                                }
                            }
                            var h, j, k, m, n, o, p, q, r, s, t, u, g = i[0],
                                v = a.Deferred();
                            if (b)
                                for (j = 0; j < l.length; j++) h = a(l[j]), c ? h.prop("disabled", !1) : h.removeAttr("disabled");
                            if (k = a.extend(!0, {}, a.ajaxSettings, d), k.context = k.context || k, n = "jqFormIO" + (new Date).getTime(), k.iframeTarget ? (o = a(k.iframeTarget), s = o.attr2("name"), s ? n = s : o.attr2("name", n)) : (o = a('<iframe name="' + n + '" src="' + k.iframeSrc + '" />'), o.css({
                                    position: "absolute",
                                    top: "-1000px",
                                    left: "-1000px"
                                })), p = o[0], q = {
                                    aborted: 0,
                                    responseText: null,
                                    responseXML: null,
                                    status: 0,
                                    statusText: "n/a",
                                    getAllResponseHeaders: function() {},
                                    getResponseHeader: function() {},
                                    setRequestHeader: function() {},
                                    abort: function(b) {
                                        var c = "timeout" === b ? "timeout" : "aborted";
                                        f("aborting upload... " + c), this.aborted = 1;
                                        try {
                                            p.contentWindow.document.execCommand && p.contentWindow.document.execCommand("Stop")
                                        } catch (a) {}
                                        o.attr("src", k.iframeSrc), q.error = c, k.error && k.error.call(k.context, q, c, b), m && a.event.trigger("ajaxError", [q, k, c]), k.complete && k.complete.call(k.context, q, c)
                                    }
                                }, m = k.global, m && 0 === a.active++ && a.event.trigger("ajaxStart"), m && a.event.trigger("ajaxSend", [q, k]), k.beforeSend && k.beforeSend.call(k.context, q, k) === !1) return k.global && a.active--, v.reject(), v;
                            if (q.aborted) return v.reject(), v;
                            r = g.clk, r && (s = r.name, s && !r.disabled && (k.extraData = k.extraData || {}, k.extraData[s] = r.value, "image" == r.type && (k.extraData[s + ".x"] = g.clk_x, k.extraData[s + ".y"] = g.clk_y)));
                            var w = 1,
                                x = 2,
                                z = a("meta[name=csrf-token]").attr("content"),
                                A = a("meta[name=csrf-param]").attr("content");
                            A && z && (k.extraData = k.extraData || {}, k.extraData[A] = z), k.forceSync ? B() : setTimeout(B, 10);
                            var C, D, F, E = 50,
                                H = a.parseXML || function(a, b) {
                                    return window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"), b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null
                                },
                                I = a.parseJSON || function(a) {
                                    return window.eval("(" + a + ")")
                                },
                                J = function(b, c, d) {
                                    var e = b.getResponseHeader("content-type") || "",
                                        f = "xml" === c || !c && e.indexOf("xml") >= 0,
                                        g = f ? b.responseXML : b.responseText;
                                    return f && "parsererror" === g.documentElement.nodeName && a.error && a.error("parsererror"), d && d.dataFilter && (g = d.dataFilter(g, c)), "string" == typeof g && ("json" === c || !c && e.indexOf("json") >= 0 ? g = I(g) : ("script" === c || !c && e.indexOf("javascript") >= 0) && a.globalEval(g)), g
                                };
                            return v
                        }
                        if (!this.length) return f("ajaxSubmit: skipping submit process - no element selected"), this;
                        var e, g, h, i = this;
                        "function" == typeof d && (d = {
                            success: d
                        }), e = this.attr2("method"), g = this.attr2("action"), h = "string" == typeof g ? a.trim(g) : "", h = h || window.location.href || "", h && (h = (h.match(/^([^#]+)/) || [])[1]), d = a.extend(!0, {
                            url: h,
                            success: a.ajaxSettings.success,
                            type: e || "GET",
                            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
                        }, d);
                        var j = {};
                        if (this.trigger("form-pre-serialize", [this, d, j]), j.veto) return f("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
                        if (d.beforeSerialize && d.beforeSerialize(this, d) === !1) return f("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
                        var k = d.traditional;
                        void 0 === k && (k = a.ajaxSettings.traditional);
                        var m, l = [],
                            n = this.formToArray(d.semantic, l);
                        if (d.data && (d.extraData = d.data, m = a.param(d.data, k)), d.beforeSubmit && d.beforeSubmit(n, this, d) === !1) return f("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
                        if (this.trigger("form-submit-validate", [n, this, d, j]), j.veto) return f("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
                        var o = a.param(n, k);
                        m && (o = o ? o + "&" + m : m), "GET" == d.type.toUpperCase() ? (d.url += (d.url.indexOf("?") >= 0 ? "&" : "?") + o, d.data = null) : d.data = o;
                        var p = [];
                        if (d.resetForm && p.push(function() {
                                i.resetForm()
                            }), d.clearForm && p.push(function() {
                                i.clearForm(d.includeHidden)
                            }), !d.dataType && d.target) {
                            var q = d.success || function() {};
                            p.push(function(b) {
                                var c = d.replaceTarget ? "replaceWith" : "html";
                                a(d.target)[c](b).each(q, arguments)
                            })
                        } else d.success && p.push(d.success);
                        if (d.success = function(a, b, c) {
                                for (var e = d.context || this, f = 0, g = p.length; f < g; f++) p[f].apply(e, [a, b, c || i, i])
                            }, d.error) {
                            var r = d.error;
                            d.error = function(a, b, c) {
                                var e = d.context || this;
                                r.apply(e, [a, b, c, i])
                            }
                        }
                        if (d.complete) {
                            var s = d.complete;
                            d.complete = function(a, b) {
                                var c = d.context || this;
                                s.apply(c, [a, b, i])
                            }
                        }
                        var t = a('input[type=file]:enabled[value!=""]', this),
                            u = t.length > 0,
                            v = "multipart/form-data",
                            w = i.attr("enctype") == v || i.attr("encoding") == v,
                            x = b.fileapi && b.formdata;
                        f("fileAPI :" + x);
                        var z, y = (u || w) && !x;
                        d.iframe !== !1 && (d.iframe || y) ? d.closeKeepAlive ? a.get(d.closeKeepAlive, function() {
                            z = D(n)
                        }) : z = D(n) : z = (u || w) && x ? C(n) : a.ajax(d), i.removeData("jqxhr").data("jqxhr", z);
                        for (var A = 0; A < l.length; A++) l[A] = null;
                        return this.trigger("form-submit-notify", [this, d]), this
                    }, a.fn.ajaxForm = function(b) {
                        if (b = b || {}, b.delegation = b.delegation && a.isFunction(a.fn.on), !b.delegation && 0 === this.length) {
                            var c = {
                                s: this.selector,
                                c: this.context
                            };
                            return !a.isReady && c.s ? (f("DOM not ready, queuing ajaxForm"), a(function() {
                                a(c.s, c.c).ajaxForm(b)
                            }), this) : (f("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")), this)
                        }
                        return b.delegation ? (a(document).off("submit.form-plugin", this.selector, d).off("click.form-plugin", this.selector, e).on("submit.form-plugin", this.selector, b, d).on("click.form-plugin", this.selector, b, e), this) : this.ajaxFormUnbind().bind("submit.form-plugin", b, d).bind("click.form-plugin", b, e)
                    }, a.fn.ajaxFormUnbind = function() {
                        return this.unbind("submit.form-plugin click.form-plugin")
                    }, a.fn.formToArray = function(c, d) {
                        var e = [];
                        if (0 === this.length) return e;
                        var f = this[0],
                            g = c ? f.getElementsByTagName("*") : f.elements;
                        if (!g) return e;
                        var h, i, j, k, l, m, n;
                        for (h = 0, m = g.length; h < m; h++)
                            if (l = g[h], j = l.name, j && !l.disabled)
                                if (c && f.clk && "image" == l.type) f.clk == l && (e.push({
                                    name: j,
                                    value: a(l).val(),
                                    type: l.type
                                }), e.push({
                                    name: j + ".x",
                                    value: f.clk_x
                                }, {
                                    name: j + ".y",
                                    value: f.clk_y
                                }));
                                else if (k = a.fieldValue(l, !0), k && k.constructor == Array)
                            for (d && d.push(l), i = 0, n = k.length; i < n; i++) e.push({
                                name: j,
                                value: k[i]
                            });
                        else if (b.fileapi && "file" == l.type) {
                            d && d.push(l);
                            var o = l.files;
                            if (o.length)
                                for (i = 0; i < o.length; i++) e.push({
                                    name: j,
                                    value: o[i],
                                    type: l.type
                                });
                            else e.push({
                                name: j,
                                value: "",
                                type: l.type
                            })
                        } else null !== k && "undefined" != typeof k && (d && d.push(l), e.push({
                            name: j,
                            value: k,
                            type: l.type,
                            required: l.required
                        }));
                        if (!c && f.clk) {
                            var p = a(f.clk),
                                q = p[0];
                            j = q.name, j && !q.disabled && "image" == q.type && (e.push({
                                name: j,
                                value: p.val()
                            }), e.push({
                                name: j + ".x",
                                value: f.clk_x
                            }, {
                                name: j + ".y",
                                value: f.clk_y
                            }))
                        }
                        return e
                    }, a.fn.formSerialize = function(b) {
                        return a.param(this.formToArray(b))
                    }, a.fn.fieldSerialize = function(b) {
                        var c = [];
                        return this.each(function() {
                            var d = this.name;
                            if (d) {
                                var e = a.fieldValue(this, b);
                                if (e && e.constructor == Array)
                                    for (var f = 0, g = e.length; f < g; f++) c.push({
                                        name: d,
                                        value: e[f]
                                    });
                                else null !== e && "undefined" != typeof e && c.push({
                                    name: this.name,
                                    value: e
                                })
                            }
                        }), a.param(c)
                    }, a.fn.fieldValue = function(b) {
                        for (var c = [], d = 0, e = this.length; d < e; d++) {
                            var f = this[d],
                                g = a.fieldValue(f, b);
                            null === g || "undefined" == typeof g || g.constructor == Array && !g.length || (g.constructor == Array ? a.merge(c, g) : c.push(g))
                        }
                        return c
                    }, a.fieldValue = function(b, c) {
                        var d = b.name,
                            e = b.type,
                            f = b.tagName.toLowerCase();
                        if (void 0 === c && (c = !0), c && (!d || b.disabled || "reset" == e || "button" == e || ("checkbox" == e || "radio" == e) && !b.checked || ("submit" == e || "image" == e) && b.form && b.form.clk != b || "select" == f && b.selectedIndex == -1)) return null;
                        if ("select" == f) {
                            var g = b.selectedIndex;
                            if (g < 0) return null;
                            for (var h = [], i = b.options, j = "select-one" == e, k = j ? g + 1 : i.length, l = j ? g : 0; l < k; l++) {
                                var m = i[l];
                                if (m.selected) {
                                    var n = m.value;
                                    if (n || (n = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), j) return n;
                                    h.push(n)
                                }
                            }
                            return h
                        }
                        return a(b).val()
                    }, a.fn.clearForm = function(b) {
                        return this.each(function() {
                            a("input,select,textarea", this).clearFields(b)
                        })
                    }, a.fn.clearFields = a.fn.clearInputs = function(b) {
                        var c = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
                        return this.each(function() {
                            var d = this.type,
                                e = this.tagName.toLowerCase();
                            c.test(d) || "textarea" == e ? this.value = "" : "checkbox" == d || "radio" == d ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == d ? /MSIE/.test(navigator.userAgent) ? a(this).replaceWith(a(this).clone(!0)) : a(this).val("") : b && (b === !0 && /hidden/.test(d) || "string" == typeof b && a(this).is(b)) && (this.value = "")
                        })
                    }, a.fn.resetForm = function() {
                        return this.each(function() {
                            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
                        })
                    }, a.fn.enable = function(a) {
                        return void 0 === a && (a = !0), this.each(function() {
                            this.disabled = !a
                        })
                    }, a.fn.selected = function(b) {
                        return void 0 === b && (b = !0), this.each(function() {
                            var c = this.type;
                            if ("checkbox" == c || "radio" == c) this.checked = b;
                            else if ("option" == this.tagName.toLowerCase()) {
                                var d = a(this).parent("select");
                                b && d[0] && "select-one" == d[0].type && d.find("option").selected(!1), this.selected = b
                            }
                        })
                    }, a.fn.ajaxSubmit.debug = !1
                }($), ! function() {
                    function a(a, b, c) {
                        "addEventListener" in window ? a.addEventListener(b, c, !1) : "attachEvent" in window && a.attachEvent("on" + b, c)
                    }

                    function b() {
                        var a, b = ["moz", "webkit", "o", "ms"];
                        for (a = 0; a < b.length && !w; a += 1) w = window[b[a] + "RequestAnimationFrame"];
                        w || c(" RequestAnimationFrame not supported")
                    }

                    function c(a) {
                        y.log && "object" == typeof console && console.log(s + "[Host page" + u + "]" + a)
                    }

                    function d(a) {
                        function b() {
                            function a() {
                                h(z), f(), y.resizedCallback(z)
                            }
                            i(a, z, "resetPage")
                        }

                        function d(a) {
                            var b = a.id;
                            c(" Removing iFrame: " + b), a.parentNode.removeChild(a), y.closedCallback(b), c(" --")
                        }

                        function e() {
                            var a = x.substr(t).split(":");
                            return {
                                iframe: document.getElementById(a[0]),
                                id: a[0],
                                height: a[1],
                                width: a[2],
                                type: a[3]
                            }
                        }

                        function j(a) {
                            var b = Number(y["max" + a]),
                                d = Number(y["min" + a]),
                                e = a.toLowerCase(),
                                f = Number(z[e]);
                            if (d > b) throw new Error("Value for min" + a + " can not be greater than max" + a);
                            c(" Checking " + e + " is in range " + d + "-" + b), d > f && (f = d, c(" Set " + e + " to min value")), f > b && (f = b, c(" Set " + e + " to max value")), z[e] = "" + f
                        }

                        function k() {
                            var b = a.origin,
                                d = z.iframe.src.split("/").slice(0, 3).join("/");
                            if (y.checkOrigin && (c(" Checking connection is from: " + d), "" + b != "null" && b !== d)) throw new Error("Unexpected message received from: " + b + " for " + z.iframe.id + ". Message was: " + a.data + ". This error can be disabled by adding the checkOrigin: false option.");
                            return !0
                        }

                        function l() {
                            return s === ("" + x).substr(0, t)
                        }

                        function m() {
                            var a = z.type in {
                                true: 1,
                                false: 1
                            };
                            return a && c(" Ignoring init message from meta parent page"), a
                        }

                        function n() {
                            var a = x.substr(x.indexOf(":") + r + 6);
                            c(" MessageCallback passed: {iframe: " + z.iframe.id + ", message: " + a + "}"), y.messageCallback({
                                iframe: z.iframe,
                                message: a
                            }), c(" --")
                        }

                        function o() {
                            if (null === z.iframe) throw new Error("iFrame (" + z.id + ") does not exist on " + u);
                            return !0
                        }

                        function q() {
                            c(" Reposition requested from iFrame"), v = {
                                x: z.width,
                                y: z.height
                            }, f()
                        }

                        function w() {
                            switch (z.type) {
                                case "close":
                                    d(z.iframe), y.resizedCallback(z);
                                    break;
                                case "message":
                                    n();
                                    break;
                                case "scrollTo":
                                    q();
                                    break;
                                case "reset":
                                    g(z);
                                    break;
                                case "init":
                                    b(), y.initCallback(z.iframe);
                                    break;
                                default:
                                    b()
                            }
                        }
                        var x = a.data,
                            z = {};
                        l() && (c(" Received: " + x), z = e(), j("Height"), j("Width"), !m() && o() && k() && (w(), p = !1))
                    }

                    function e() {
                        null === v && (v = {
                            x: void 0 !== window.pageXOffset ? window.pageXOffset : document.documentElement.scrollLeft,
                            y: void 0 !== window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop
                        }, c(" Get position: " + v.x + "," + v.y))
                    }

                    function f() {
                        null !== v && (window.scrollTo(v.x, v.y), c(" Set position: " + v.x + "," + v.y), v = null)
                    }

                    function g(a) {
                        function b() {
                            h(a), j("reset", "reset", a.iframe)
                        }
                        c(" Size reset requested by " + ("init" === a.type ? "host page" : "iFrame")), e(), i(b, a, "init")
                    }

                    function h(a) {
                        function b(b) {
                            a.iframe.style[b] = a[b] + "px", c(" IFrame (" + a.iframe.id + ") " + b + " set to " + a[b] + "px")
                        }
                        y.sizeHeight && b("height"), y.sizeWidth && b("width")
                    }

                    function i(a, b, d) {
                        d !== b.type && w ? (c(" Requesting animation frame"), w(a)) : a()
                    }

                    function j(a, b, d) {
                        c("[" + a + "] Sending msg to iframe (" + b + ")"), d.contentWindow.postMessage(s + b, "*")
                    }

                    function k() {
                        function b() {
                            function a(a) {
                                1 / 0 !== y[a] && 0 !== y[a] && (k.style[a] = y[a] + "px", c(" Set " + a + " = " + y[a] + "px"))
                            }
                            a("maxHeight"), a("minHeight"), a("maxWidth"), a("minWidth")
                        }

                        function d(a) {
                            return "" === a && (k.id = a = "iFrameResizer" + o++, c(" Added missing iframe ID: " + a + " (" + k.src + ")")), a
                        }

                        function e() {
                            c(" IFrame scrolling " + (y.scrolling ? "enabled" : "disabled") + " for " + l), k.style.overflow = !1 === y.scrolling ? "hidden" : "auto", k.scrolling = !1 === y.scrolling ? "no" : "yes"
                        }

                        function f() {
                            ("number" == typeof y.bodyMargin || "0" === y.bodyMargin) && (y.bodyMarginV1 = y.bodyMargin, y.bodyMargin = "" + y.bodyMargin + "px")
                        }

                        function h() {
                            return l + ":" + y.bodyMarginV1 + ":" + y.sizeWidth + ":" + y.log + ":" + y.interval + ":" + y.enablePublicMethods + ":" + y.autoResize + ":" + y.bodyMargin + ":" + y.heightCalculationMethod + ":" + y.bodyBackground + ":" + y.bodyPadding + ":" + y.tolerance
                        }

                        function i(b) {
                            a(k, "load", function() {
                                var a = p;
                                j("iFrame.onload", b, k), !a && y.heightCalculationMethod in x && g({
                                    iframe: k,
                                    height: 0,
                                    width: 0,
                                    type: "init"
                                })
                            }), j("init", b, k)
                        }
                        var k = this,
                            l = d(k.id);
                        e(), b(), f(), i(h())
                    }

                    function l(a) {
                        if ("object" != typeof a) throw new TypeError("Options is not an object.")
                    }

                    function m() {
                        function a(a) {
                            if ("IFRAME" !== a.tagName.toUpperCase()) throw new TypeError("Expected <IFRAME> tag, found <" + a.tagName + ">.");
                            k.call(a)
                        }

                        function b(a) {
                            a = a || {}, l(a);
                            for (var b in z) z.hasOwnProperty(b) && (y[b] = a.hasOwnProperty(b) ? a[b] : z[b])
                        }
                        return function(c, d) {
                            b(c), Array.prototype.forEach.call(document.querySelectorAll(d || "iframe"), a)
                        }
                    }

                    function n(a) {
                        a.fn.iFrameResize = function(b) {
                            return l(b), y = a.extend({}, z, b), this.filter("iframe").each(k).end()
                        }
                    }
                    var o = 0,
                        p = !0,
                        q = "message",
                        r = q.length,
                        s = "[iFrameSizer]",
                        t = s.length,
                        u = "",
                        v = null,
                        w = window.requestAnimationFrame,
                        x = {
                            max: 1,
                            scroll: 1,
                            bodyScroll: 1,
                            documentElementScroll: 1
                        },
                        y = {},
                        z = {
                            autoResize: !0,
                            bodyBackground: null,
                            bodyMargin: null,
                            bodyMarginV1: 8,
                            bodyPadding: null,
                            checkOrigin: !0,
                            enablePublicMethods: !1,
                            heightCalculationMethod: "offset",
                            interval: 32,
                            log: !1,
                            maxHeight: 1 / 0,
                            maxWidth: 1 / 0,
                            minHeight: 0,
                            minWidth: 0,
                            scrolling: !1,
                            sizeHeight: !0,
                            sizeWidth: !1,
                            tolerance: 0,
                            closedCallback: function() {},
                            initCallback: function() {},
                            messageCallback: function() {},
                            resizedCallback: function() {}
                        };
                    b(), a(window, "message", d), "jQuery" in window && n(jQuery), "function" == typeof define && define.amd ? define(function() {
                        return m()
                    }) : window.iFrameResize = m()
                }()
        })
    }
    var widgetVersion = "1",
        baseUrl = "//apps.jobadder.com/widgets",
        minjQueryVersion = "1.9.1",
        widgetSettings = {
            key: "",
            showLoadingImage: !0,
            enablePushState: !0,
            jobSearchSettings: {
                showSearchForm: !1,
                classificationsToExclude: [],
                showLabels: !0,
                optionText: "",
                showKeywordSearch: !0,
                autoSearch: !1,
                showSearchButton: !0,
                searchButtonText: "Search"
            },
            jobListSettings: {
                jobsPerPage: 5,
                showHotJobsOnly: !1,
                titleIsLink: !0,
                showDatePosted: !0,
                datePostedFormat: "{0}",
                dateFormat: "d/M/yyyy",
                showClassifications: !0,
                classificationsToExclude: [],
                showSalary: !1,
                salaryFormat: "{0}",
                includeSalaryText: !1,
                showJobReference: !1,
                jobReferenceFormat: "{0}",
                alwaysShowPager: !1,
                showPagerSummary: !0,
                pagerGroupSize: 4,
                scrollOnPageChange: !0,
                animateScrollOnPageChange: !1,
                readMoreText: "More..",
                noJobsContent: "There are no jobs matching your criteria. Please try a broader search."
            },
            jobDetailsSettings: {
                jobID: null,
                showDatePosted: !0,
                datePostedFormat: "{0}",
                dateFormat: "d/M/yyyy",
                showClassifications: !0,
                classificationsToExclude: [],
                showSalary: !1,
                salaryFormat: "{0}",
                includeSalaryText: !1,
                showJobReference: !1,
                jobReferenceFormat: "{0}",
                showBulletPoints: !0,
                applyButtonText: "Apply Now",
                backLinkText: "Back to search results"
            },
            applicationFormSettings: {
                jobID: null,
                useExternalApplicationForm: !1,
                showExternalApplicationFormInNewWindow: !0,
                pageTitle: "Apply Now",
                showJobTitle: !0,
                showJobSummary: !1,
                formFields: "firstName,lastName,email,phone,mobile,resume,coverLetter,coverNote",
                formFieldLabels: "First name,Last name,Email address,Phone,Mobile,Resume,Cover letter,Cover note",
                showLabels: !0,
                applyButtonText: "Apply Now",
                backLinkText: "Cancel",
                showLoadingImage: !0,
                submittedContent: "Thank you - your application has been successfully submitted.",
                submittedRedirectUrl: ""
            }
        },
        loadingImage = document.createElement("img");
    loadingImage.className = "ja-loading left", loadingImage.setAttribute("src", window._jaJobsSettings.loadingImageUrl || baseUrl + "/V" + widgetVersion + "/loading.gif"), loadingImage.setAttribute("alt", "Loading.."), window._jaJobsSettings.showLoadingImage !== !1 && document.getElementById("ja-jobs-widget").appendChild(loadingImage);
    var jQuery;
    if (void 0 === window.jQuery || window.jQuery.fn.jquery < minjQueryVersion) {
        var scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "text/javascript"), scriptTag.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/" + minjQueryVersion + "/jquery.min.js"), scriptTag.readyState ? scriptTag.onreadystatechange = function() {
            "complete" !== this.readyState && "loaded" !== this.readyState || scriptLoadHandler()
        } : scriptTag.onload = scriptLoadHandler, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(scriptTag)
    } else jQuery = window.jQuery, main()

    // jQuery("#ja-keywords").attr("placeholder", "Keywords").val("").focus().blur();
}();

// setTimeout(function(){
//     document.getElementById('ja-keywords')[0].placeholder='Type here to search';
// } , 3000);
