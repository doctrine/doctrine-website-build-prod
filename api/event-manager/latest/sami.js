
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Doctrine" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine.html">Doctrine</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common.html">Common</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Common_EventArgs" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Common/EventArgs.html">EventArgs</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_EventManager" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Common/EventManager.html">EventManager</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_EventSubscriber" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Common/EventSubscriber.html">EventSubscriber</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Doctrine.html", "name": "Doctrine", "doc": "Namespace Doctrine"},{"type": "Namespace", "link": "Doctrine/Common.html", "name": "Doctrine\\Common", "doc": "Namespace Doctrine\\Common"},
            {"type": "Interface", "fromName": "Doctrine\\Common", "fromLink": "Doctrine/Common.html", "link": "Doctrine/Common/EventSubscriber.html", "name": "Doctrine\\Common\\EventSubscriber", "doc": "&quot;An EventSubscriber knows himself what events he is interested in.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\EventSubscriber", "fromLink": "Doctrine/Common/EventSubscriber.html", "link": "Doctrine/Common/EventSubscriber.html#method_getSubscribedEvents", "name": "Doctrine\\Common\\EventSubscriber::getSubscribedEvents", "doc": "&quot;Returns an array of events this subscriber wants to listen to.&quot;"},
            
            
            {"type": "Class", "fromName": "Doctrine\\Common", "fromLink": "Doctrine/Common.html", "link": "Doctrine/Common/EventArgs.html", "name": "Doctrine\\Common\\EventArgs", "doc": "&quot;EventArgs is the base class for classes containing event data.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\EventArgs", "fromLink": "Doctrine/Common/EventArgs.html", "link": "Doctrine/Common/EventArgs.html#method_getEmptyInstance", "name": "Doctrine\\Common\\EventArgs::getEmptyInstance", "doc": "&quot;Gets the single, empty and immutable EventArgs instance.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common", "fromLink": "Doctrine/Common.html", "link": "Doctrine/Common/EventManager.html", "name": "Doctrine\\Common\\EventManager", "doc": "&quot;The EventManager is the central point of Doctrine&#039;s event listener system.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\EventManager", "fromLink": "Doctrine/Common/EventManager.html", "link": "Doctrine/Common/EventManager.html#method_dispatchEvent", "name": "Doctrine\\Common\\EventManager::dispatchEvent", "doc": "&quot;Dispatches an event to all registered listeners.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\EventManager", "fromLink": "Doctrine/Common/EventManager.html", "link": "Doctrine/Common/EventManager.html#method_getListeners", "name": "Doctrine\\Common\\EventManager::getListeners", "doc": "&quot;Gets the listeners of a specific event or all listeners.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\EventManager", "fromLink": "Doctrine/Common/EventManager.html", "link": "Doctrine/Common/EventManager.html#method_hasListeners", "name": "Doctrine\\Common\\EventManager::hasListeners", "doc": "&quot;Checks whether an event has any registered listeners.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\EventManager", "fromLink": "Doctrine/Common/EventManager.html", "link": "Doctrine/Common/EventManager.html#method_addEventListener", "name": "Doctrine\\Common\\EventManager::addEventListener", "doc": "&quot;Adds an event listener that listens on the specified events.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\EventManager", "fromLink": "Doctrine/Common/EventManager.html", "link": "Doctrine/Common/EventManager.html#method_removeEventListener", "name": "Doctrine\\Common\\EventManager::removeEventListener", "doc": "&quot;Removes an event listener from the specified events.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\EventManager", "fromLink": "Doctrine/Common/EventManager.html", "link": "Doctrine/Common/EventManager.html#method_addEventSubscriber", "name": "Doctrine\\Common\\EventManager::addEventSubscriber", "doc": "&quot;Adds an EventSubscriber. The subscriber is asked for all the events it is\ninterested in and added as a listener for these events.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\EventManager", "fromLink": "Doctrine/Common/EventManager.html", "link": "Doctrine/Common/EventManager.html#method_removeEventSubscriber", "name": "Doctrine\\Common\\EventManager::removeEventSubscriber", "doc": "&quot;Removes an EventSubscriber. The subscriber is asked for all the events it is\ninterested in and removed as a listener for these events.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common", "fromLink": "Doctrine/Common.html", "link": "Doctrine/Common/EventSubscriber.html", "name": "Doctrine\\Common\\EventSubscriber", "doc": "&quot;An EventSubscriber knows himself what events he is interested in.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\EventSubscriber", "fromLink": "Doctrine/Common/EventSubscriber.html", "link": "Doctrine/Common/EventSubscriber.html#method_getSubscribedEvents", "name": "Doctrine\\Common\\EventSubscriber::getSubscribedEvents", "doc": "&quot;Returns an array of events this subscriber wants to listen to.&quot;"},
            
            
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


