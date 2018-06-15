
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Doctrine" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine.html">Doctrine</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Inflector" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Inflector.html">Inflector</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Inflector_Rules" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Inflector/Rules.html">Rules</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Inflector_Rules_Irregular" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Irregular.html">Irregular</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Plural" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Plural.html">Plural</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Rule" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Rule.html">Rule</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Rules" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Rules.html">Rules</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Ruleset" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Ruleset.html">Ruleset</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Singular" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Singular.html">Singular</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Uninflected" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Uninflected.html">Uninflected</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Word" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Word.html">Word</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Doctrine_Inflector_CachedWordInflector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/CachedWordInflector.html">CachedWordInflector</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Inflector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/Inflector.html">Inflector</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_InflectorFactory" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/InflectorFactory.html">InflectorFactory</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_RulesetInflector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/RulesetInflector.html">RulesetInflector</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_WordInflector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/WordInflector.html">WordInflector</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Doctrine.html", "name": "Doctrine", "doc": "Namespace Doctrine"},{"type": "Namespace", "link": "Doctrine/Inflector.html", "name": "Doctrine\\Inflector", "doc": "Namespace Doctrine\\Inflector"},{"type": "Namespace", "link": "Doctrine/Inflector/Rules.html", "name": "Doctrine\\Inflector\\Rules", "doc": "Namespace Doctrine\\Inflector\\Rules"},
            {"type": "Interface", "fromName": "Doctrine\\Inflector", "fromLink": "Doctrine/Inflector.html", "link": "Doctrine/Inflector/WordInflector.html", "name": "Doctrine\\Inflector\\WordInflector", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\WordInflector", "fromLink": "Doctrine/Inflector/WordInflector.html", "link": "Doctrine/Inflector/WordInflector.html#method_inflect", "name": "Doctrine\\Inflector\\WordInflector::inflect", "doc": "&quot;&quot;"},
            
            
            {"type": "Class", "fromName": "Doctrine\\Inflector", "fromLink": "Doctrine/Inflector.html", "link": "Doctrine/Inflector/CachedWordInflector.html", "name": "Doctrine\\Inflector\\CachedWordInflector", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\CachedWordInflector", "fromLink": "Doctrine/Inflector/CachedWordInflector.html", "link": "Doctrine/Inflector/CachedWordInflector.html#method___construct", "name": "Doctrine\\Inflector\\CachedWordInflector::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\CachedWordInflector", "fromLink": "Doctrine/Inflector/CachedWordInflector.html", "link": "Doctrine/Inflector/CachedWordInflector.html#method_inflect", "name": "Doctrine\\Inflector\\CachedWordInflector::inflect", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector", "fromLink": "Doctrine/Inflector.html", "link": "Doctrine/Inflector/Inflector.html", "name": "Doctrine\\Inflector\\Inflector", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method___construct", "name": "Doctrine\\Inflector\\Inflector::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_tableize", "name": "Doctrine\\Inflector\\Inflector::tableize", "doc": "&quot;Converts a word into the format for a Doctrine table name. Converts &#039;ModelName&#039; to &#039;model_name&#039;.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_classify", "name": "Doctrine\\Inflector\\Inflector::classify", "doc": "&quot;Converts a word into the format for a Doctrine class name. Converts &#039;table_name&#039; to &#039;TableName&#039;.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_camelize", "name": "Doctrine\\Inflector\\Inflector::camelize", "doc": "&quot;Camelizes a word. This uses the classify() method and turns the first character to lowercase.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_capitalize", "name": "Doctrine\\Inflector\\Inflector::capitalize", "doc": "&quot;Uppercases words with configurable delimiters between words.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_singularize", "name": "Doctrine\\Inflector\\Inflector::singularize", "doc": "&quot;Returns a word in singular form.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_pluralize", "name": "Doctrine\\Inflector\\Inflector::pluralize", "doc": "&quot;Returns a word in plural form.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector", "fromLink": "Doctrine/Inflector.html", "link": "Doctrine/Inflector/InflectorFactory.html", "name": "Doctrine\\Inflector\\InflectorFactory", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\InflectorFactory", "fromLink": "Doctrine/Inflector/InflectorFactory.html", "link": "Doctrine/Inflector/InflectorFactory.html#method_createInflector", "name": "Doctrine\\Inflector\\InflectorFactory::createInflector", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\InflectorFactory", "fromLink": "Doctrine/Inflector/InflectorFactory.html", "link": "Doctrine/Inflector/InflectorFactory.html#method_createSingularRuleset", "name": "Doctrine\\Inflector\\InflectorFactory::createSingularRuleset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\InflectorFactory", "fromLink": "Doctrine/Inflector/InflectorFactory.html", "link": "Doctrine/Inflector/InflectorFactory.html#method_createPluralRuleset", "name": "Doctrine\\Inflector\\InflectorFactory::createPluralRuleset", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Irregular.html", "name": "Doctrine\\Inflector\\Rules\\Irregular", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Irregular", "fromLink": "Doctrine/Inflector/Rules/Irregular.html", "link": "Doctrine/Inflector/Rules/Irregular.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Irregular::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Irregular", "fromLink": "Doctrine/Inflector/Rules/Irregular.html", "link": "Doctrine/Inflector/Rules/Irregular.html#method_getFlippedRules", "name": "Doctrine\\Inflector\\Rules\\Irregular::getFlippedRules", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Irregular", "fromLink": "Doctrine/Inflector/Rules/Irregular.html", "link": "Doctrine/Inflector/Rules/Irregular.html#method_getRules", "name": "Doctrine\\Inflector\\Rules\\Irregular::getRules", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Irregular", "fromLink": "Doctrine/Inflector/Rules/Irregular.html", "link": "Doctrine/Inflector/Rules/Irregular.html#method_inflect", "name": "Doctrine\\Inflector\\Rules\\Irregular::inflect", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Plural.html", "name": "Doctrine\\Inflector\\Rules\\Plural", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Plural", "fromLink": "Doctrine/Inflector/Rules/Plural.html", "link": "Doctrine/Inflector/Rules/Plural.html#method_getDefaultRules", "name": "Doctrine\\Inflector\\Rules\\Plural::getDefaultRules", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Plural", "fromLink": "Doctrine/Inflector/Rules/Plural.html", "link": "Doctrine/Inflector/Rules/Plural.html#method_getUninflectedWords", "name": "Doctrine\\Inflector\\Rules\\Plural::getUninflectedWords", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Plural", "fromLink": "Doctrine/Inflector/Rules/Plural.html", "link": "Doctrine/Inflector/Rules/Plural.html#method_getIrregularRules", "name": "Doctrine\\Inflector\\Rules\\Plural::getIrregularRules", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Rule.html", "name": "Doctrine\\Inflector\\Rules\\Rule", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Rule", "fromLink": "Doctrine/Inflector/Rules/Rule.html", "link": "Doctrine/Inflector/Rules/Rule.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Rule::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Rule", "fromLink": "Doctrine/Inflector/Rules/Rule.html", "link": "Doctrine/Inflector/Rules/Rule.html#method_getFrom", "name": "Doctrine\\Inflector\\Rules\\Rule::getFrom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Rule", "fromLink": "Doctrine/Inflector/Rules/Rule.html", "link": "Doctrine/Inflector/Rules/Rule.html#method_getTo", "name": "Doctrine\\Inflector\\Rules\\Rule::getTo", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Rules.html", "name": "Doctrine\\Inflector\\Rules\\Rules", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Rules", "fromLink": "Doctrine/Inflector/Rules/Rules.html", "link": "Doctrine/Inflector/Rules/Rules.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Rules::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Rules", "fromLink": "Doctrine/Inflector/Rules/Rules.html", "link": "Doctrine/Inflector/Rules/Rules.html#method_inflect", "name": "Doctrine\\Inflector\\Rules\\Rules::inflect", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Ruleset.html", "name": "Doctrine\\Inflector\\Rules\\Ruleset", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Ruleset", "fromLink": "Doctrine/Inflector/Rules/Ruleset.html", "link": "Doctrine/Inflector/Rules/Ruleset.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Ruleset::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Ruleset", "fromLink": "Doctrine/Inflector/Rules/Ruleset.html", "link": "Doctrine/Inflector/Rules/Ruleset.html#method_getRegular", "name": "Doctrine\\Inflector\\Rules\\Ruleset::getRegular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Ruleset", "fromLink": "Doctrine/Inflector/Rules/Ruleset.html", "link": "Doctrine/Inflector/Rules/Ruleset.html#method_getUninflected", "name": "Doctrine\\Inflector\\Rules\\Ruleset::getUninflected", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Ruleset", "fromLink": "Doctrine/Inflector/Rules/Ruleset.html", "link": "Doctrine/Inflector/Rules/Ruleset.html#method_getIrregular", "name": "Doctrine\\Inflector\\Rules\\Ruleset::getIrregular", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Singular.html", "name": "Doctrine\\Inflector\\Rules\\Singular", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Singular", "fromLink": "Doctrine/Inflector/Rules/Singular.html", "link": "Doctrine/Inflector/Rules/Singular.html#method_getDefaultRules", "name": "Doctrine\\Inflector\\Rules\\Singular::getDefaultRules", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Singular", "fromLink": "Doctrine/Inflector/Rules/Singular.html", "link": "Doctrine/Inflector/Rules/Singular.html#method_getUninflectedWords", "name": "Doctrine\\Inflector\\Rules\\Singular::getUninflectedWords", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Singular", "fromLink": "Doctrine/Inflector/Rules/Singular.html", "link": "Doctrine/Inflector/Rules/Singular.html#method_getIrregularRules", "name": "Doctrine\\Inflector\\Rules\\Singular::getIrregularRules", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Uninflected.html", "name": "Doctrine\\Inflector\\Rules\\Uninflected", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/Uninflected.html", "link": "Doctrine/Inflector/Rules/Uninflected.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Uninflected::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/Uninflected.html", "link": "Doctrine/Inflector/Rules/Uninflected.html#method_getDefaultWords", "name": "Doctrine\\Inflector\\Rules\\Uninflected::getDefaultWords", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/Uninflected.html", "link": "Doctrine/Inflector/Rules/Uninflected.html#method_getWords", "name": "Doctrine\\Inflector\\Rules\\Uninflected::getWords", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/Uninflected.html", "link": "Doctrine/Inflector/Rules/Uninflected.html#method_isUninflected", "name": "Doctrine\\Inflector\\Rules\\Uninflected::isUninflected", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Word.html", "name": "Doctrine\\Inflector\\Rules\\Word", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Word", "fromLink": "Doctrine/Inflector/Rules/Word.html", "link": "Doctrine/Inflector/Rules/Word.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Word::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Word", "fromLink": "Doctrine/Inflector/Rules/Word.html", "link": "Doctrine/Inflector/Rules/Word.html#method_getWord", "name": "Doctrine\\Inflector\\Rules\\Word::getWord", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector", "fromLink": "Doctrine/Inflector.html", "link": "Doctrine/Inflector/RulesetInflector.html", "name": "Doctrine\\Inflector\\RulesetInflector", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\RulesetInflector", "fromLink": "Doctrine/Inflector/RulesetInflector.html", "link": "Doctrine/Inflector/RulesetInflector.html#method___construct", "name": "Doctrine\\Inflector\\RulesetInflector::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\RulesetInflector", "fromLink": "Doctrine/Inflector/RulesetInflector.html", "link": "Doctrine/Inflector/RulesetInflector.html#method_inflect", "name": "Doctrine\\Inflector\\RulesetInflector::inflect", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector", "fromLink": "Doctrine/Inflector.html", "link": "Doctrine/Inflector/WordInflector.html", "name": "Doctrine\\Inflector\\WordInflector", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\WordInflector", "fromLink": "Doctrine/Inflector/WordInflector.html", "link": "Doctrine/Inflector/WordInflector.html#method_inflect", "name": "Doctrine\\Inflector\\WordInflector::inflect", "doc": "&quot;&quot;"},
            
            
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


