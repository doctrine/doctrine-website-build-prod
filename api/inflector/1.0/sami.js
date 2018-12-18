
window.projectVersion = '1.0.x';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Doctrine" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine.html">Doctrine</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common.html">Common</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common_Inflector" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common/Inflector.html">Inflector</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Common_Inflector_Inflector" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Inflector/Inflector.html">Inflector</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Doctrine.html", "name": "Doctrine", "doc": "Namespace Doctrine"},{"type": "Namespace", "link": "Doctrine/Common.html", "name": "Doctrine\\Common", "doc": "Namespace Doctrine\\Common"},{"type": "Namespace", "link": "Doctrine/Common/Inflector.html", "name": "Doctrine\\Common\\Inflector", "doc": "Namespace Doctrine\\Common\\Inflector"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Inflector", "fromLink": "Doctrine/Common/Inflector.html", "link": "Doctrine/Common/Inflector/Inflector.html", "name": "Doctrine\\Common\\Inflector\\Inflector", "doc": "&quot;Doctrine inflector has static methods for inflecting text.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Inflector\\Inflector", "fromLink": "Doctrine/Common/Inflector/Inflector.html", "link": "Doctrine/Common/Inflector/Inflector.html#method_tableize", "name": "Doctrine\\Common\\Inflector\\Inflector::tableize", "doc": "&quot;Converts a word into the format for a Doctrine table name. Converts &#039;ModelName&#039; to &#039;model_name&#039;.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Inflector\\Inflector", "fromLink": "Doctrine/Common/Inflector/Inflector.html", "link": "Doctrine/Common/Inflector/Inflector.html#method_classify", "name": "Doctrine\\Common\\Inflector\\Inflector::classify", "doc": "&quot;Converts a word into the format for a Doctrine class name. Converts &#039;table_name&#039; to &#039;TableName&#039;.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Inflector\\Inflector", "fromLink": "Doctrine/Common/Inflector/Inflector.html", "link": "Doctrine/Common/Inflector/Inflector.html#method_camelize", "name": "Doctrine\\Common\\Inflector\\Inflector::camelize", "doc": "&quot;Camelizes a word. This uses the classify() method and turns the first character to lowercase.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Inflector\\Inflector", "fromLink": "Doctrine/Common/Inflector/Inflector.html", "link": "Doctrine/Common/Inflector/Inflector.html#method_reset", "name": "Doctrine\\Common\\Inflector\\Inflector::reset", "doc": "&quot;Clears Inflectors inflected value caches, and resets the inflection\nrules to the initial values.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Inflector\\Inflector", "fromLink": "Doctrine/Common/Inflector/Inflector.html", "link": "Doctrine/Common/Inflector/Inflector.html#method_rules", "name": "Doctrine\\Common\\Inflector\\Inflector::rules", "doc": "&quot;Adds custom inflection $rules, of either &#039;plural&#039; or &#039;singular&#039; $type.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Inflector\\Inflector", "fromLink": "Doctrine/Common/Inflector/Inflector.html", "link": "Doctrine/Common/Inflector/Inflector.html#method_pluralize", "name": "Doctrine\\Common\\Inflector\\Inflector::pluralize", "doc": "&quot;Returns a word in plural form.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Inflector\\Inflector", "fromLink": "Doctrine/Common/Inflector/Inflector.html", "link": "Doctrine/Common/Inflector/Inflector.html#method_singularize", "name": "Doctrine\\Common\\Inflector\\Inflector::singularize", "doc": "&quot;Returns a word in singular form.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


