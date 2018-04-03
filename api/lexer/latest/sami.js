
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Doctrine" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine.html">Doctrine</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common.html">Common</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common_Lexer" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common/Lexer.html">Lexer</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Common_Lexer_AbstractLexer" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Lexer/AbstractLexer.html">AbstractLexer</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Doctrine.html", "name": "Doctrine", "doc": "Namespace Doctrine"},{"type": "Namespace", "link": "Doctrine/Common.html", "name": "Doctrine\\Common", "doc": "Namespace Doctrine\\Common"},{"type": "Namespace", "link": "Doctrine/Common/Lexer.html", "name": "Doctrine\\Common\\Lexer", "doc": "Namespace Doctrine\\Common\\Lexer"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Lexer", "fromLink": "Doctrine/Common/Lexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html", "name": "Doctrine\\Common\\Lexer\\AbstractLexer", "doc": "&quot;Base class for writing simple lexers, i.e. for creating small DSLs.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_setInput", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::setInput", "doc": "&quot;Sets the input data to be tokenized.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_reset", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::reset", "doc": "&quot;Resets the lexer.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_resetPeek", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::resetPeek", "doc": "&quot;Resets the peek pointer to 0.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_resetPosition", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::resetPosition", "doc": "&quot;Resets the lexer position on the input to the given position.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_getInputUntilPosition", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::getInputUntilPosition", "doc": "&quot;Retrieve the original lexer&#039;s input until a given position.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_isNextToken", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::isNextToken", "doc": "&quot;Checks whether a given token matches the current lookahead.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_isNextTokenAny", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::isNextTokenAny", "doc": "&quot;Checks whether any of the given tokens matches the current lookahead.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_moveNext", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::moveNext", "doc": "&quot;Moves to the next token in the input string.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_skipUntil", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::skipUntil", "doc": "&quot;Tells the lexer to skip input tokens until it sees a token with the given value.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_isA", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::isA", "doc": "&quot;Checks if given value is identical to the given token.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_peek", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::peek", "doc": "&quot;Moves the lookahead token forward.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_glimpse", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::glimpse", "doc": "&quot;Peeks at the next token, returns it and immediately resets the peek.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_scan", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::scan", "doc": "&quot;Scans the input string for tokens.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_getLiteral", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::getLiteral", "doc": "&quot;Gets the literal for a given token.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_getModifiers", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::getModifiers", "doc": "&quot;Regex modifiers&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_getCatchablePatterns", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::getCatchablePatterns", "doc": "&quot;Lexical catchable patterns.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_getNonCatchablePatterns", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::getNonCatchablePatterns", "doc": "&quot;Lexical non-catchable patterns.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Lexer\\AbstractLexer", "fromLink": "Doctrine/Common/Lexer/AbstractLexer.html", "link": "Doctrine/Common/Lexer/AbstractLexer.html#method_getType", "name": "Doctrine\\Common\\Lexer\\AbstractLexer::getType", "doc": "&quot;Retrieve token type. Also processes the token value if necessary.&quot;"},
            
            
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


