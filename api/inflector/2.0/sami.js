
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Doctrine" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine.html">Doctrine</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Inflector" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Inflector.html">Inflector</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Inflector_Rules" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Inflector/Rules.html">Rules</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Inflector_Rules_English" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Inflector/Rules/English.html">English</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Inflector_Rules_English_Inflectible" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/English/Inflectible.html">Inflectible</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_English_InflectorFactory" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/English/InflectorFactory.html">InflectorFactory</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_English_Rules" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/English/Rules.html">Rules</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_English_Uninflected" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/English/Uninflected.html">Uninflected</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Doctrine_Inflector_Rules_French" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Inflector/Rules/French.html">French</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Inflector_Rules_French_Inflectible" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/French/Inflectible.html">Inflectible</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_French_InflectorFactory" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/French/InflectorFactory.html">InflectorFactory</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_French_Rules" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/French/Rules.html">Rules</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_French_Uninflected" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/French/Uninflected.html">Uninflected</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Doctrine_Inflector_Rules_NorwegianBokmal" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Inflector/Rules/NorwegianBokmal.html">NorwegianBokmal</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Inflector_Rules_NorwegianBokmal_Inflectible" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/NorwegianBokmal/Inflectible.html">Inflectible</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_NorwegianBokmal_InflectorFactory" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/NorwegianBokmal/InflectorFactory.html">InflectorFactory</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_NorwegianBokmal_Rules" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/NorwegianBokmal/Rules.html">Rules</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_NorwegianBokmal_Uninflected" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/NorwegianBokmal/Uninflected.html">Uninflected</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Doctrine_Inflector_Rules_Portuguese" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Inflector/Rules/Portuguese.html">Portuguese</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Inflector_Rules_Portuguese_Inflectible" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Portuguese/Inflectible.html">Inflectible</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Portuguese_InflectorFactory" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Portuguese/InflectorFactory.html">InflectorFactory</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Portuguese_Rules" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Portuguese/Rules.html">Rules</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Portuguese_Uninflected" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Portuguese/Uninflected.html">Uninflected</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Doctrine_Inflector_Rules_Spanish" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Inflector/Rules/Spanish.html">Spanish</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Inflector_Rules_Spanish_Inflectible" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Spanish/Inflectible.html">Inflectible</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Spanish_InflectorFactory" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Spanish/InflectorFactory.html">InflectorFactory</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Spanish_Rules" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Spanish/Rules.html">Rules</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Spanish_Uninflected" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Spanish/Uninflected.html">Uninflected</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Doctrine_Inflector_Rules_Turkish" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Inflector/Rules/Turkish.html">Turkish</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Inflector_Rules_Turkish_Inflectible" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Turkish/Inflectible.html">Inflectible</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Turkish_InflectorFactory" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Turkish/InflectorFactory.html">InflectorFactory</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Turkish_Rules" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Turkish/Rules.html">Rules</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Turkish_Uninflected" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Turkish/Uninflected.html">Uninflected</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Pattern" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Pattern.html">Pattern</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Patterns" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Patterns.html">Patterns</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Ruleset" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Ruleset.html">Ruleset</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Substitution" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Substitution.html">Substitution</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Substitutions" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Substitutions.html">Substitutions</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Transformation" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Transformation.html">Transformation</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Transformations" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Transformations.html">Transformations</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Rules_Word" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Inflector/Rules/Word.html">Word</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Doctrine_Inflector_CachedWordInflector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/CachedWordInflector.html">CachedWordInflector</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Inflector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/Inflector.html">Inflector</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_InflectorFactory" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/InflectorFactory.html">InflectorFactory</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_Language" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/Language.html">Language</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_NoopWordInflector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/NoopWordInflector.html">NoopWordInflector</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_RulesetInflector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/RulesetInflector.html">RulesetInflector</a>                    </div>                </li>                            <li data-name="class:Doctrine_Inflector_WordInflector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Inflector/WordInflector.html">WordInflector</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Doctrine.html", "name": "Doctrine", "doc": "Namespace Doctrine"},{"type": "Namespace", "link": "Doctrine/Inflector.html", "name": "Doctrine\\Inflector", "doc": "Namespace Doctrine\\Inflector"},{"type": "Namespace", "link": "Doctrine/Inflector/Rules.html", "name": "Doctrine\\Inflector\\Rules", "doc": "Namespace Doctrine\\Inflector\\Rules"},{"type": "Namespace", "link": "Doctrine/Inflector/Rules/English.html", "name": "Doctrine\\Inflector\\Rules\\English", "doc": "Namespace Doctrine\\Inflector\\Rules\\English"},{"type": "Namespace", "link": "Doctrine/Inflector/Rules/French.html", "name": "Doctrine\\Inflector\\Rules\\French", "doc": "Namespace Doctrine\\Inflector\\Rules\\French"},{"type": "Namespace", "link": "Doctrine/Inflector/Rules/NorwegianBokmal.html", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal", "doc": "Namespace Doctrine\\Inflector\\Rules\\NorwegianBokmal"},{"type": "Namespace", "link": "Doctrine/Inflector/Rules/Portuguese.html", "name": "Doctrine\\Inflector\\Rules\\Portuguese", "doc": "Namespace Doctrine\\Inflector\\Rules\\Portuguese"},{"type": "Namespace", "link": "Doctrine/Inflector/Rules/Spanish.html", "name": "Doctrine\\Inflector\\Rules\\Spanish", "doc": "Namespace Doctrine\\Inflector\\Rules\\Spanish"},{"type": "Namespace", "link": "Doctrine/Inflector/Rules/Turkish.html", "name": "Doctrine\\Inflector\\Rules\\Turkish", "doc": "Namespace Doctrine\\Inflector\\Rules\\Turkish"},
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
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_seemsUtf8", "name": "Doctrine\\Inflector\\Inflector::seemsUtf8", "doc": "&quot;Checks if the given string seems like it has utf8 characters in it.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_unaccent", "name": "Doctrine\\Inflector\\Inflector::unaccent", "doc": "&quot;Remove any illegal characters, accents, etc.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_urlize", "name": "Doctrine\\Inflector\\Inflector::urlize", "doc": "&quot;Convert any passed string to a url friendly string.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_singularize", "name": "Doctrine\\Inflector\\Inflector::singularize", "doc": "&quot;Returns a word in singular form.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Inflector", "fromLink": "Doctrine/Inflector/Inflector.html", "link": "Doctrine/Inflector/Inflector.html#method_pluralize", "name": "Doctrine\\Inflector\\Inflector::pluralize", "doc": "&quot;Returns a word in plural form.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector", "fromLink": "Doctrine/Inflector.html", "link": "Doctrine/Inflector/InflectorFactory.html", "name": "Doctrine\\Inflector\\InflectorFactory", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\InflectorFactory", "fromLink": "Doctrine/Inflector/InflectorFactory.html", "link": "Doctrine/Inflector/InflectorFactory.html#method___invoke", "name": "Doctrine\\Inflector\\InflectorFactory::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector", "fromLink": "Doctrine/Inflector.html", "link": "Doctrine/Inflector/Language.html", "name": "Doctrine\\Inflector\\Language", "doc": "&quot;&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Inflector", "fromLink": "Doctrine/Inflector.html", "link": "Doctrine/Inflector/NoopWordInflector.html", "name": "Doctrine\\Inflector\\NoopWordInflector", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\NoopWordInflector", "fromLink": "Doctrine/Inflector/NoopWordInflector.html", "link": "Doctrine/Inflector/NoopWordInflector.html#method_inflect", "name": "Doctrine\\Inflector\\NoopWordInflector::inflect", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\English", "fromLink": "Doctrine/Inflector/Rules/English.html", "link": "Doctrine/Inflector/Rules/English/Inflectible.html", "name": "Doctrine\\Inflector\\Rules\\English\\Inflectible", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\English\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/English/Inflectible.html", "link": "Doctrine/Inflector/Rules/English/Inflectible.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\English\\Inflectible::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\English\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/English/Inflectible.html", "link": "Doctrine/Inflector/Rules/English/Inflectible.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\English\\Inflectible::getPlural", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\English\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/English/Inflectible.html", "link": "Doctrine/Inflector/Rules/English/Inflectible.html#method_getIrregular", "name": "Doctrine\\Inflector\\Rules\\English\\Inflectible::getIrregular", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\English", "fromLink": "Doctrine/Inflector/Rules/English.html", "link": "Doctrine/Inflector/Rules/English/InflectorFactory.html", "name": "Doctrine\\Inflector\\Rules\\English\\InflectorFactory", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\English\\InflectorFactory", "fromLink": "Doctrine/Inflector/Rules/English/InflectorFactory.html", "link": "Doctrine/Inflector/Rules/English/InflectorFactory.html#method___invoke", "name": "Doctrine\\Inflector\\Rules\\English\\InflectorFactory::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\English", "fromLink": "Doctrine/Inflector/Rules/English.html", "link": "Doctrine/Inflector/Rules/English/Rules.html", "name": "Doctrine\\Inflector\\Rules\\English\\Rules", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\English\\Rules", "fromLink": "Doctrine/Inflector/Rules/English/Rules.html", "link": "Doctrine/Inflector/Rules/English/Rules.html#method_getSingularRuleset", "name": "Doctrine\\Inflector\\Rules\\English\\Rules::getSingularRuleset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\English\\Rules", "fromLink": "Doctrine/Inflector/Rules/English/Rules.html", "link": "Doctrine/Inflector/Rules/English/Rules.html#method_getPluralRuleset", "name": "Doctrine\\Inflector\\Rules\\English\\Rules::getPluralRuleset", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\English", "fromLink": "Doctrine/Inflector/Rules/English.html", "link": "Doctrine/Inflector/Rules/English/Uninflected.html", "name": "Doctrine\\Inflector\\Rules\\English\\Uninflected", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\English\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/English/Uninflected.html", "link": "Doctrine/Inflector/Rules/English/Uninflected.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\English\\Uninflected::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\English\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/English/Uninflected.html", "link": "Doctrine/Inflector/Rules/English/Uninflected.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\English\\Uninflected::getPlural", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\French", "fromLink": "Doctrine/Inflector/Rules/French.html", "link": "Doctrine/Inflector/Rules/French/Inflectible.html", "name": "Doctrine\\Inflector\\Rules\\French\\Inflectible", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\French\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/French/Inflectible.html", "link": "Doctrine/Inflector/Rules/French/Inflectible.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\French\\Inflectible::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\French\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/French/Inflectible.html", "link": "Doctrine/Inflector/Rules/French/Inflectible.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\French\\Inflectible::getPlural", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\French\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/French/Inflectible.html", "link": "Doctrine/Inflector/Rules/French/Inflectible.html#method_getIrregular", "name": "Doctrine\\Inflector\\Rules\\French\\Inflectible::getIrregular", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\French", "fromLink": "Doctrine/Inflector/Rules/French.html", "link": "Doctrine/Inflector/Rules/French/InflectorFactory.html", "name": "Doctrine\\Inflector\\Rules\\French\\InflectorFactory", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\French\\InflectorFactory", "fromLink": "Doctrine/Inflector/Rules/French/InflectorFactory.html", "link": "Doctrine/Inflector/Rules/French/InflectorFactory.html#method___invoke", "name": "Doctrine\\Inflector\\Rules\\French\\InflectorFactory::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\French", "fromLink": "Doctrine/Inflector/Rules/French.html", "link": "Doctrine/Inflector/Rules/French/Rules.html", "name": "Doctrine\\Inflector\\Rules\\French\\Rules", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\French\\Rules", "fromLink": "Doctrine/Inflector/Rules/French/Rules.html", "link": "Doctrine/Inflector/Rules/French/Rules.html#method_getSingularRuleset", "name": "Doctrine\\Inflector\\Rules\\French\\Rules::getSingularRuleset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\French\\Rules", "fromLink": "Doctrine/Inflector/Rules/French/Rules.html", "link": "Doctrine/Inflector/Rules/French/Rules.html#method_getPluralRuleset", "name": "Doctrine\\Inflector\\Rules\\French\\Rules::getPluralRuleset", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\French", "fromLink": "Doctrine/Inflector/Rules/French.html", "link": "Doctrine/Inflector/Rules/French/Uninflected.html", "name": "Doctrine\\Inflector\\Rules\\French\\Uninflected", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\French\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/French/Uninflected.html", "link": "Doctrine/Inflector/Rules/French/Uninflected.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\French\\Uninflected::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\French\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/French/Uninflected.html", "link": "Doctrine/Inflector/Rules/French/Uninflected.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\French\\Uninflected::getPlural", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/Inflectible.html", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Inflectible", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal/Inflectible.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/Inflectible.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Inflectible::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal/Inflectible.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/Inflectible.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Inflectible::getPlural", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal/Inflectible.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/Inflectible.html#method_getIrregular", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Inflectible::getIrregular", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/InflectorFactory.html", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\InflectorFactory", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\InflectorFactory", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal/InflectorFactory.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/InflectorFactory.html#method___invoke", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\InflectorFactory::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/Rules.html", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Rules", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Rules", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal/Rules.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/Rules.html#method_getSingularRuleset", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Rules::getSingularRuleset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Rules", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal/Rules.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/Rules.html#method_getPluralRuleset", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Rules::getPluralRuleset", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/Uninflected.html", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Uninflected", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal/Uninflected.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/Uninflected.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Uninflected::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/NorwegianBokmal/Uninflected.html", "link": "Doctrine/Inflector/Rules/NorwegianBokmal/Uninflected.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\NorwegianBokmal\\Uninflected::getPlural", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Pattern.html", "name": "Doctrine\\Inflector\\Rules\\Pattern", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Pattern", "fromLink": "Doctrine/Inflector/Rules/Pattern.html", "link": "Doctrine/Inflector/Rules/Pattern.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Pattern::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Pattern", "fromLink": "Doctrine/Inflector/Rules/Pattern.html", "link": "Doctrine/Inflector/Rules/Pattern.html#method_getPattern", "name": "Doctrine\\Inflector\\Rules\\Pattern::getPattern", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Pattern", "fromLink": "Doctrine/Inflector/Rules/Pattern.html", "link": "Doctrine/Inflector/Rules/Pattern.html#method_getRegex", "name": "Doctrine\\Inflector\\Rules\\Pattern::getRegex", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Pattern", "fromLink": "Doctrine/Inflector/Rules/Pattern.html", "link": "Doctrine/Inflector/Rules/Pattern.html#method_matches", "name": "Doctrine\\Inflector\\Rules\\Pattern::matches", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Patterns.html", "name": "Doctrine\\Inflector\\Rules\\Patterns", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Patterns", "fromLink": "Doctrine/Inflector/Rules/Patterns.html", "link": "Doctrine/Inflector/Rules/Patterns.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Patterns::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Patterns", "fromLink": "Doctrine/Inflector/Rules/Patterns.html", "link": "Doctrine/Inflector/Rules/Patterns.html#method_matches", "name": "Doctrine\\Inflector\\Rules\\Patterns::matches", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese", "fromLink": "Doctrine/Inflector/Rules/Portuguese.html", "link": "Doctrine/Inflector/Rules/Portuguese/Inflectible.html", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\Inflectible", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/Portuguese/Inflectible.html", "link": "Doctrine/Inflector/Rules/Portuguese/Inflectible.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\Inflectible::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/Portuguese/Inflectible.html", "link": "Doctrine/Inflector/Rules/Portuguese/Inflectible.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\Inflectible::getPlural", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/Portuguese/Inflectible.html", "link": "Doctrine/Inflector/Rules/Portuguese/Inflectible.html#method_getIrregular", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\Inflectible::getIrregular", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese", "fromLink": "Doctrine/Inflector/Rules/Portuguese.html", "link": "Doctrine/Inflector/Rules/Portuguese/InflectorFactory.html", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\InflectorFactory", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese\\InflectorFactory", "fromLink": "Doctrine/Inflector/Rules/Portuguese/InflectorFactory.html", "link": "Doctrine/Inflector/Rules/Portuguese/InflectorFactory.html#method___invoke", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\InflectorFactory::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese", "fromLink": "Doctrine/Inflector/Rules/Portuguese.html", "link": "Doctrine/Inflector/Rules/Portuguese/Rules.html", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\Rules", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese\\Rules", "fromLink": "Doctrine/Inflector/Rules/Portuguese/Rules.html", "link": "Doctrine/Inflector/Rules/Portuguese/Rules.html#method_getSingularRuleset", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\Rules::getSingularRuleset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese\\Rules", "fromLink": "Doctrine/Inflector/Rules/Portuguese/Rules.html", "link": "Doctrine/Inflector/Rules/Portuguese/Rules.html#method_getPluralRuleset", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\Rules::getPluralRuleset", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese", "fromLink": "Doctrine/Inflector/Rules/Portuguese.html", "link": "Doctrine/Inflector/Rules/Portuguese/Uninflected.html", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\Uninflected", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/Portuguese/Uninflected.html", "link": "Doctrine/Inflector/Rules/Portuguese/Uninflected.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\Uninflected::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Portuguese\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/Portuguese/Uninflected.html", "link": "Doctrine/Inflector/Rules/Portuguese/Uninflected.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\Portuguese\\Uninflected::getPlural", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Ruleset.html", "name": "Doctrine\\Inflector\\Rules\\Ruleset", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Ruleset", "fromLink": "Doctrine/Inflector/Rules/Ruleset.html", "link": "Doctrine/Inflector/Rules/Ruleset.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Ruleset::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Ruleset", "fromLink": "Doctrine/Inflector/Rules/Ruleset.html", "link": "Doctrine/Inflector/Rules/Ruleset.html#method_getRegular", "name": "Doctrine\\Inflector\\Rules\\Ruleset::getRegular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Ruleset", "fromLink": "Doctrine/Inflector/Rules/Ruleset.html", "link": "Doctrine/Inflector/Rules/Ruleset.html#method_getUninflected", "name": "Doctrine\\Inflector\\Rules\\Ruleset::getUninflected", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Ruleset", "fromLink": "Doctrine/Inflector/Rules/Ruleset.html", "link": "Doctrine/Inflector/Rules/Ruleset.html#method_getIrregular", "name": "Doctrine\\Inflector\\Rules\\Ruleset::getIrregular", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Spanish", "fromLink": "Doctrine/Inflector/Rules/Spanish.html", "link": "Doctrine/Inflector/Rules/Spanish/Inflectible.html", "name": "Doctrine\\Inflector\\Rules\\Spanish\\Inflectible", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Spanish\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/Spanish/Inflectible.html", "link": "Doctrine/Inflector/Rules/Spanish/Inflectible.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\Spanish\\Inflectible::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Spanish\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/Spanish/Inflectible.html", "link": "Doctrine/Inflector/Rules/Spanish/Inflectible.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\Spanish\\Inflectible::getPlural", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Spanish\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/Spanish/Inflectible.html", "link": "Doctrine/Inflector/Rules/Spanish/Inflectible.html#method_getIrregular", "name": "Doctrine\\Inflector\\Rules\\Spanish\\Inflectible::getIrregular", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Spanish", "fromLink": "Doctrine/Inflector/Rules/Spanish.html", "link": "Doctrine/Inflector/Rules/Spanish/InflectorFactory.html", "name": "Doctrine\\Inflector\\Rules\\Spanish\\InflectorFactory", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Spanish\\InflectorFactory", "fromLink": "Doctrine/Inflector/Rules/Spanish/InflectorFactory.html", "link": "Doctrine/Inflector/Rules/Spanish/InflectorFactory.html#method___invoke", "name": "Doctrine\\Inflector\\Rules\\Spanish\\InflectorFactory::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Spanish", "fromLink": "Doctrine/Inflector/Rules/Spanish.html", "link": "Doctrine/Inflector/Rules/Spanish/Rules.html", "name": "Doctrine\\Inflector\\Rules\\Spanish\\Rules", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Spanish\\Rules", "fromLink": "Doctrine/Inflector/Rules/Spanish/Rules.html", "link": "Doctrine/Inflector/Rules/Spanish/Rules.html#method_getSingularRuleset", "name": "Doctrine\\Inflector\\Rules\\Spanish\\Rules::getSingularRuleset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Spanish\\Rules", "fromLink": "Doctrine/Inflector/Rules/Spanish/Rules.html", "link": "Doctrine/Inflector/Rules/Spanish/Rules.html#method_getPluralRuleset", "name": "Doctrine\\Inflector\\Rules\\Spanish\\Rules::getPluralRuleset", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Spanish", "fromLink": "Doctrine/Inflector/Rules/Spanish.html", "link": "Doctrine/Inflector/Rules/Spanish/Uninflected.html", "name": "Doctrine\\Inflector\\Rules\\Spanish\\Uninflected", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Spanish\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/Spanish/Uninflected.html", "link": "Doctrine/Inflector/Rules/Spanish/Uninflected.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\Spanish\\Uninflected::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Spanish\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/Spanish/Uninflected.html", "link": "Doctrine/Inflector/Rules/Spanish/Uninflected.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\Spanish\\Uninflected::getPlural", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Substitution.html", "name": "Doctrine\\Inflector\\Rules\\Substitution", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Substitution", "fromLink": "Doctrine/Inflector/Rules/Substitution.html", "link": "Doctrine/Inflector/Rules/Substitution.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Substitution::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Substitution", "fromLink": "Doctrine/Inflector/Rules/Substitution.html", "link": "Doctrine/Inflector/Rules/Substitution.html#method_getFrom", "name": "Doctrine\\Inflector\\Rules\\Substitution::getFrom", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Substitution", "fromLink": "Doctrine/Inflector/Rules/Substitution.html", "link": "Doctrine/Inflector/Rules/Substitution.html#method_getTo", "name": "Doctrine\\Inflector\\Rules\\Substitution::getTo", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Substitutions.html", "name": "Doctrine\\Inflector\\Rules\\Substitutions", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Substitutions", "fromLink": "Doctrine/Inflector/Rules/Substitutions.html", "link": "Doctrine/Inflector/Rules/Substitutions.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Substitutions::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Substitutions", "fromLink": "Doctrine/Inflector/Rules/Substitutions.html", "link": "Doctrine/Inflector/Rules/Substitutions.html#method_getFlippedSubstitutions", "name": "Doctrine\\Inflector\\Rules\\Substitutions::getFlippedSubstitutions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Substitutions", "fromLink": "Doctrine/Inflector/Rules/Substitutions.html", "link": "Doctrine/Inflector/Rules/Substitutions.html#method_inflect", "name": "Doctrine\\Inflector\\Rules\\Substitutions::inflect", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Transformation.html", "name": "Doctrine\\Inflector\\Rules\\Transformation", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Transformation", "fromLink": "Doctrine/Inflector/Rules/Transformation.html", "link": "Doctrine/Inflector/Rules/Transformation.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Transformation::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Transformation", "fromLink": "Doctrine/Inflector/Rules/Transformation.html", "link": "Doctrine/Inflector/Rules/Transformation.html#method_getPattern", "name": "Doctrine\\Inflector\\Rules\\Transformation::getPattern", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Transformation", "fromLink": "Doctrine/Inflector/Rules/Transformation.html", "link": "Doctrine/Inflector/Rules/Transformation.html#method_getReplacement", "name": "Doctrine\\Inflector\\Rules\\Transformation::getReplacement", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Transformation", "fromLink": "Doctrine/Inflector/Rules/Transformation.html", "link": "Doctrine/Inflector/Rules/Transformation.html#method_inflect", "name": "Doctrine\\Inflector\\Rules\\Transformation::inflect", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules", "fromLink": "Doctrine/Inflector/Rules.html", "link": "Doctrine/Inflector/Rules/Transformations.html", "name": "Doctrine\\Inflector\\Rules\\Transformations", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Transformations", "fromLink": "Doctrine/Inflector/Rules/Transformations.html", "link": "Doctrine/Inflector/Rules/Transformations.html#method___construct", "name": "Doctrine\\Inflector\\Rules\\Transformations::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Transformations", "fromLink": "Doctrine/Inflector/Rules/Transformations.html", "link": "Doctrine/Inflector/Rules/Transformations.html#method_inflect", "name": "Doctrine\\Inflector\\Rules\\Transformations::inflect", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Turkish", "fromLink": "Doctrine/Inflector/Rules/Turkish.html", "link": "Doctrine/Inflector/Rules/Turkish/Inflectible.html", "name": "Doctrine\\Inflector\\Rules\\Turkish\\Inflectible", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Turkish\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/Turkish/Inflectible.html", "link": "Doctrine/Inflector/Rules/Turkish/Inflectible.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\Turkish\\Inflectible::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Turkish\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/Turkish/Inflectible.html", "link": "Doctrine/Inflector/Rules/Turkish/Inflectible.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\Turkish\\Inflectible::getPlural", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Turkish\\Inflectible", "fromLink": "Doctrine/Inflector/Rules/Turkish/Inflectible.html", "link": "Doctrine/Inflector/Rules/Turkish/Inflectible.html#method_getIrregular", "name": "Doctrine\\Inflector\\Rules\\Turkish\\Inflectible::getIrregular", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Turkish", "fromLink": "Doctrine/Inflector/Rules/Turkish.html", "link": "Doctrine/Inflector/Rules/Turkish/InflectorFactory.html", "name": "Doctrine\\Inflector\\Rules\\Turkish\\InflectorFactory", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Turkish\\InflectorFactory", "fromLink": "Doctrine/Inflector/Rules/Turkish/InflectorFactory.html", "link": "Doctrine/Inflector/Rules/Turkish/InflectorFactory.html#method___invoke", "name": "Doctrine\\Inflector\\Rules\\Turkish\\InflectorFactory::__invoke", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Turkish", "fromLink": "Doctrine/Inflector/Rules/Turkish.html", "link": "Doctrine/Inflector/Rules/Turkish/Rules.html", "name": "Doctrine\\Inflector\\Rules\\Turkish\\Rules", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Turkish\\Rules", "fromLink": "Doctrine/Inflector/Rules/Turkish/Rules.html", "link": "Doctrine/Inflector/Rules/Turkish/Rules.html#method_getSingularRuleset", "name": "Doctrine\\Inflector\\Rules\\Turkish\\Rules::getSingularRuleset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Turkish\\Rules", "fromLink": "Doctrine/Inflector/Rules/Turkish/Rules.html", "link": "Doctrine/Inflector/Rules/Turkish/Rules.html#method_getPluralRuleset", "name": "Doctrine\\Inflector\\Rules\\Turkish\\Rules::getPluralRuleset", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Inflector\\Rules\\Turkish", "fromLink": "Doctrine/Inflector/Rules/Turkish.html", "link": "Doctrine/Inflector/Rules/Turkish/Uninflected.html", "name": "Doctrine\\Inflector\\Rules\\Turkish\\Uninflected", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Turkish\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/Turkish/Uninflected.html", "link": "Doctrine/Inflector/Rules/Turkish/Uninflected.html#method_getSingular", "name": "Doctrine\\Inflector\\Rules\\Turkish\\Uninflected::getSingular", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Inflector\\Rules\\Turkish\\Uninflected", "fromLink": "Doctrine/Inflector/Rules/Turkish/Uninflected.html", "link": "Doctrine/Inflector/Rules/Turkish/Uninflected.html#method_getPlural", "name": "Doctrine\\Inflector\\Rules\\Turkish\\Uninflected::getPlural", "doc": "&quot;&quot;"},
            
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


