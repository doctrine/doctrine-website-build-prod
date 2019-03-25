
window.projectVersion = '1.7';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Doctrine" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine.html">Doctrine</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common.html">Common</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common_Annotations" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common/Annotations.html">Annotations</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common_Annotations_Annotation" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common/Annotations/Annotation.html">Annotation</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Common_Annotations_Annotation_Attribute" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/Annotation/Attribute.html">Attribute</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_Annotation_Attributes" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/Annotation/Attributes.html">Attributes</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_Annotation_Enum" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/Annotation/Enum.html">Enum</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_Annotation_IgnoreAnnotation" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/Annotation/IgnoreAnnotation.html">IgnoreAnnotation</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_Annotation_Required" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/Annotation/Required.html">Required</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_Annotation_Target" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/Annotation/Target.html">Target</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_Annotation" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/Annotation.html">Annotation</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_AnnotationException" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/AnnotationException.html">AnnotationException</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_AnnotationReader" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/AnnotationReader.html">AnnotationReader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_AnnotationRegistry" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/AnnotationRegistry.html">AnnotationRegistry</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_CachedReader" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/CachedReader.html">CachedReader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_DocLexer" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/DocLexer.html">DocLexer</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_DocParser" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/DocParser.html">DocParser</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_FileCacheReader" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/FileCacheReader.html">FileCacheReader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_IndexedReader" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/IndexedReader.html">IndexedReader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_PhpParser" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/PhpParser.html">PhpParser</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_Reader" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/Reader.html">Reader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_SimpleAnnotationReader" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/SimpleAnnotationReader.html">SimpleAnnotationReader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Annotations_TokenParser" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Annotations/TokenParser.html">TokenParser</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Doctrine.html", "name": "Doctrine", "doc": "Namespace Doctrine"},{"type": "Namespace", "link": "Doctrine/Common.html", "name": "Doctrine\\Common", "doc": "Namespace Doctrine\\Common"},{"type": "Namespace", "link": "Doctrine/Common/Annotations.html", "name": "Doctrine\\Common\\Annotations", "doc": "Namespace Doctrine\\Common\\Annotations"},{"type": "Namespace", "link": "Doctrine/Common/Annotations/Annotation.html", "name": "Doctrine\\Common\\Annotations\\Annotation", "doc": "Namespace Doctrine\\Common\\Annotations\\Annotation"},
            {"type": "Interface", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/Reader.html", "name": "Doctrine\\Common\\Annotations\\Reader", "doc": "&quot;Interface for annotation readers.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getClassAnnotations", "name": "Doctrine\\Common\\Annotations\\Reader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getClassAnnotation", "name": "Doctrine\\Common\\Annotations\\Reader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getMethodAnnotations", "name": "Doctrine\\Common\\Annotations\\Reader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getMethodAnnotation", "name": "Doctrine\\Common\\Annotations\\Reader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getPropertyAnnotations", "name": "Doctrine\\Common\\Annotations\\Reader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getPropertyAnnotation", "name": "Doctrine\\Common\\Annotations\\Reader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
            
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/Annotation.html", "name": "Doctrine\\Common\\Annotations\\Annotation", "doc": "&quot;Annotations class.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Annotation", "fromLink": "Doctrine/Common/Annotations/Annotation.html", "link": "Doctrine/Common/Annotations/Annotation.html#method___construct", "name": "Doctrine\\Common\\Annotations\\Annotation::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Annotation", "fromLink": "Doctrine/Common/Annotations/Annotation.html", "link": "Doctrine/Common/Annotations/Annotation.html#method___get", "name": "Doctrine\\Common\\Annotations\\Annotation::__get", "doc": "&quot;Error handler for unknown property accessor in Annotation class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Annotation", "fromLink": "Doctrine/Common/Annotations/Annotation.html", "link": "Doctrine/Common/Annotations/Annotation.html#method___set", "name": "Doctrine\\Common\\Annotations\\Annotation::__set", "doc": "&quot;Error handler for unknown property mutator in Annotation class.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/AnnotationException.html", "name": "Doctrine\\Common\\Annotations\\AnnotationException", "doc": "&quot;Description of AnnotationException&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationException", "fromLink": "Doctrine/Common/Annotations/AnnotationException.html", "link": "Doctrine/Common/Annotations/AnnotationException.html#method_syntaxError", "name": "Doctrine\\Common\\Annotations\\AnnotationException::syntaxError", "doc": "&quot;Creates a new AnnotationException describing a Syntax error.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationException", "fromLink": "Doctrine/Common/Annotations/AnnotationException.html", "link": "Doctrine/Common/Annotations/AnnotationException.html#method_semanticalError", "name": "Doctrine\\Common\\Annotations\\AnnotationException::semanticalError", "doc": "&quot;Creates a new AnnotationException describing a Semantical error.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationException", "fromLink": "Doctrine/Common/Annotations/AnnotationException.html", "link": "Doctrine/Common/Annotations/AnnotationException.html#method_creationError", "name": "Doctrine\\Common\\Annotations\\AnnotationException::creationError", "doc": "&quot;Creates a new AnnotationException describing an error which occurred during\nthe creation of the annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationException", "fromLink": "Doctrine/Common/Annotations/AnnotationException.html", "link": "Doctrine/Common/Annotations/AnnotationException.html#method_typeError", "name": "Doctrine\\Common\\Annotations\\AnnotationException::typeError", "doc": "&quot;Creates a new AnnotationException describing a type error.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationException", "fromLink": "Doctrine/Common/Annotations/AnnotationException.html", "link": "Doctrine/Common/Annotations/AnnotationException.html#method_semanticalErrorConstants", "name": "Doctrine\\Common\\Annotations\\AnnotationException::semanticalErrorConstants", "doc": "&quot;Creates a new AnnotationException describing a constant semantical error.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationException", "fromLink": "Doctrine/Common/Annotations/AnnotationException.html", "link": "Doctrine/Common/Annotations/AnnotationException.html#method_attributeTypeError", "name": "Doctrine\\Common\\Annotations\\AnnotationException::attributeTypeError", "doc": "&quot;Creates a new AnnotationException describing an type error of an attribute.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationException", "fromLink": "Doctrine/Common/Annotations/AnnotationException.html", "link": "Doctrine/Common/Annotations/AnnotationException.html#method_requiredError", "name": "Doctrine\\Common\\Annotations\\AnnotationException::requiredError", "doc": "&quot;Creates a new AnnotationException describing an required error of an attribute.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationException", "fromLink": "Doctrine/Common/Annotations/AnnotationException.html", "link": "Doctrine/Common/Annotations/AnnotationException.html#method_enumeratorError", "name": "Doctrine\\Common\\Annotations\\AnnotationException::enumeratorError", "doc": "&quot;Creates a new AnnotationException describing a invalid enummerator.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationException", "fromLink": "Doctrine/Common/Annotations/AnnotationException.html", "link": "Doctrine/Common/Annotations/AnnotationException.html#method_optimizerPlusSaveComments", "name": "Doctrine\\Common\\Annotations\\AnnotationException::optimizerPlusSaveComments", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationException", "fromLink": "Doctrine/Common/Annotations/AnnotationException.html", "link": "Doctrine/Common/Annotations/AnnotationException.html#method_optimizerPlusLoadComments", "name": "Doctrine\\Common\\Annotations\\AnnotationException::optimizerPlusLoadComments", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/AnnotationReader.html", "name": "Doctrine\\Common\\Annotations\\AnnotationReader", "doc": "&quot;A reader for docblock annotations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Common/Annotations/AnnotationReader.html", "link": "Doctrine/Common/Annotations/AnnotationReader.html#method_addGlobalIgnoredName", "name": "Doctrine\\Common\\Annotations\\AnnotationReader::addGlobalIgnoredName", "doc": "&quot;Add a new annotation to the globally ignored annotation names with regard to exception handling.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Common/Annotations/AnnotationReader.html", "link": "Doctrine/Common/Annotations/AnnotationReader.html#method_addGlobalIgnoredNamespace", "name": "Doctrine\\Common\\Annotations\\AnnotationReader::addGlobalIgnoredNamespace", "doc": "&quot;Add a new annotation to the globally ignored annotation namespaces with regard to exception handling.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Common/Annotations/AnnotationReader.html", "link": "Doctrine/Common/Annotations/AnnotationReader.html#method___construct", "name": "Doctrine\\Common\\Annotations\\AnnotationReader::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Common/Annotations/AnnotationReader.html", "link": "Doctrine/Common/Annotations/AnnotationReader.html#method_getClassAnnotations", "name": "Doctrine\\Common\\Annotations\\AnnotationReader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Common/Annotations/AnnotationReader.html", "link": "Doctrine/Common/Annotations/AnnotationReader.html#method_getClassAnnotation", "name": "Doctrine\\Common\\Annotations\\AnnotationReader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Common/Annotations/AnnotationReader.html", "link": "Doctrine/Common/Annotations/AnnotationReader.html#method_getPropertyAnnotations", "name": "Doctrine\\Common\\Annotations\\AnnotationReader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Common/Annotations/AnnotationReader.html", "link": "Doctrine/Common/Annotations/AnnotationReader.html#method_getPropertyAnnotation", "name": "Doctrine\\Common\\Annotations\\AnnotationReader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Common/Annotations/AnnotationReader.html", "link": "Doctrine/Common/Annotations/AnnotationReader.html#method_getMethodAnnotations", "name": "Doctrine\\Common\\Annotations\\AnnotationReader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationReader", "fromLink": "Doctrine/Common/Annotations/AnnotationReader.html", "link": "Doctrine/Common/Annotations/AnnotationReader.html#method_getMethodAnnotation", "name": "Doctrine\\Common\\Annotations\\AnnotationReader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/AnnotationRegistry.html", "name": "Doctrine\\Common\\Annotations\\AnnotationRegistry", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationRegistry", "fromLink": "Doctrine/Common/Annotations/AnnotationRegistry.html", "link": "Doctrine/Common/Annotations/AnnotationRegistry.html#method_reset", "name": "Doctrine\\Common\\Annotations\\AnnotationRegistry::reset", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationRegistry", "fromLink": "Doctrine/Common/Annotations/AnnotationRegistry.html", "link": "Doctrine/Common/Annotations/AnnotationRegistry.html#method_registerFile", "name": "Doctrine\\Common\\Annotations\\AnnotationRegistry::registerFile", "doc": "&quot;Registers file.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationRegistry", "fromLink": "Doctrine/Common/Annotations/AnnotationRegistry.html", "link": "Doctrine/Common/Annotations/AnnotationRegistry.html#method_registerAutoloadNamespace", "name": "Doctrine\\Common\\Annotations\\AnnotationRegistry::registerAutoloadNamespace", "doc": "&quot;Adds a namespace with one or many directories to look for files or null for the include path.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationRegistry", "fromLink": "Doctrine/Common/Annotations/AnnotationRegistry.html", "link": "Doctrine/Common/Annotations/AnnotationRegistry.html#method_registerAutoloadNamespaces", "name": "Doctrine\\Common\\Annotations\\AnnotationRegistry::registerAutoloadNamespaces", "doc": "&quot;Registers multiple namespaces.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationRegistry", "fromLink": "Doctrine/Common/Annotations/AnnotationRegistry.html", "link": "Doctrine/Common/Annotations/AnnotationRegistry.html#method_registerLoader", "name": "Doctrine\\Common\\Annotations\\AnnotationRegistry::registerLoader", "doc": "&quot;Registers an autoloading callable for annotations, much like spl_autoload_register().&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationRegistry", "fromLink": "Doctrine/Common/Annotations/AnnotationRegistry.html", "link": "Doctrine/Common/Annotations/AnnotationRegistry.html#method_registerUniqueLoader", "name": "Doctrine\\Common\\Annotations\\AnnotationRegistry::registerUniqueLoader", "doc": "&quot;Registers an autoloading callable for annotations, if it is not already registered&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\AnnotationRegistry", "fromLink": "Doctrine/Common/Annotations/AnnotationRegistry.html", "link": "Doctrine/Common/Annotations/AnnotationRegistry.html#method_loadAnnotationClass", "name": "Doctrine\\Common\\Annotations\\AnnotationRegistry::loadAnnotationClass", "doc": "&quot;Autoloads an annotation class silently.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations\\Annotation", "fromLink": "Doctrine/Common/Annotations/Annotation.html", "link": "Doctrine/Common/Annotations/Annotation/Attribute.html", "name": "Doctrine\\Common\\Annotations\\Annotation\\Attribute", "doc": "&quot;Annotation that can be used to signal to the parser\nto check the attribute type during the parsing process.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations\\Annotation", "fromLink": "Doctrine/Common/Annotations/Annotation.html", "link": "Doctrine/Common/Annotations/Annotation/Attributes.html", "name": "Doctrine\\Common\\Annotations\\Annotation\\Attributes", "doc": "&quot;Annotation that can be used to signal to the parser\nto check the types of all declared attributes during the parsing process.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations\\Annotation", "fromLink": "Doctrine/Common/Annotations/Annotation.html", "link": "Doctrine/Common/Annotations/Annotation/Enum.html", "name": "Doctrine\\Common\\Annotations\\Annotation\\Enum", "doc": "&quot;Annotation that can be used to signal to the parser\nto check the available values during the parsing process.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Annotation\\Enum", "fromLink": "Doctrine/Common/Annotations/Annotation/Enum.html", "link": "Doctrine/Common/Annotations/Annotation/Enum.html#method___construct", "name": "Doctrine\\Common\\Annotations\\Annotation\\Enum::__construct", "doc": "&quot;Annotation constructor.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations\\Annotation", "fromLink": "Doctrine/Common/Annotations/Annotation.html", "link": "Doctrine/Common/Annotations/Annotation/IgnoreAnnotation.html", "name": "Doctrine\\Common\\Annotations\\Annotation\\IgnoreAnnotation", "doc": "&quot;Annotation that can be used to signal to the parser to ignore specific\nannotations during the parsing process.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Annotation\\IgnoreAnnotation", "fromLink": "Doctrine/Common/Annotations/Annotation/IgnoreAnnotation.html", "link": "Doctrine/Common/Annotations/Annotation/IgnoreAnnotation.html#method___construct", "name": "Doctrine\\Common\\Annotations\\Annotation\\IgnoreAnnotation::__construct", "doc": "&quot;Constructor.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations\\Annotation", "fromLink": "Doctrine/Common/Annotations/Annotation.html", "link": "Doctrine/Common/Annotations/Annotation/Required.html", "name": "Doctrine\\Common\\Annotations\\Annotation\\Required", "doc": "&quot;Annotation that can be used to signal to the parser\nto check if that attribute is required during the parsing process.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations\\Annotation", "fromLink": "Doctrine/Common/Annotations/Annotation.html", "link": "Doctrine/Common/Annotations/Annotation/Target.html", "name": "Doctrine\\Common\\Annotations\\Annotation\\Target", "doc": "&quot;Annotation that can be used to signal to the parser\nto check the annotation target during the parsing process.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Annotation\\Target", "fromLink": "Doctrine/Common/Annotations/Annotation/Target.html", "link": "Doctrine/Common/Annotations/Annotation/Target.html#method___construct", "name": "Doctrine\\Common\\Annotations\\Annotation\\Target::__construct", "doc": "&quot;Annotation constructor.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/CachedReader.html", "name": "Doctrine\\Common\\Annotations\\CachedReader", "doc": "&quot;A cache aware annotation reader.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\CachedReader", "fromLink": "Doctrine/Common/Annotations/CachedReader.html", "link": "Doctrine/Common/Annotations/CachedReader.html#method___construct", "name": "Doctrine\\Common\\Annotations\\CachedReader::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\CachedReader", "fromLink": "Doctrine/Common/Annotations/CachedReader.html", "link": "Doctrine/Common/Annotations/CachedReader.html#method_getClassAnnotations", "name": "Doctrine\\Common\\Annotations\\CachedReader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\CachedReader", "fromLink": "Doctrine/Common/Annotations/CachedReader.html", "link": "Doctrine/Common/Annotations/CachedReader.html#method_getClassAnnotation", "name": "Doctrine\\Common\\Annotations\\CachedReader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\CachedReader", "fromLink": "Doctrine/Common/Annotations/CachedReader.html", "link": "Doctrine/Common/Annotations/CachedReader.html#method_getPropertyAnnotations", "name": "Doctrine\\Common\\Annotations\\CachedReader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\CachedReader", "fromLink": "Doctrine/Common/Annotations/CachedReader.html", "link": "Doctrine/Common/Annotations/CachedReader.html#method_getPropertyAnnotation", "name": "Doctrine\\Common\\Annotations\\CachedReader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\CachedReader", "fromLink": "Doctrine/Common/Annotations/CachedReader.html", "link": "Doctrine/Common/Annotations/CachedReader.html#method_getMethodAnnotations", "name": "Doctrine\\Common\\Annotations\\CachedReader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\CachedReader", "fromLink": "Doctrine/Common/Annotations/CachedReader.html", "link": "Doctrine/Common/Annotations/CachedReader.html#method_getMethodAnnotation", "name": "Doctrine\\Common\\Annotations\\CachedReader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\CachedReader", "fromLink": "Doctrine/Common/Annotations/CachedReader.html", "link": "Doctrine/Common/Annotations/CachedReader.html#method_clearLoadedAnnotations", "name": "Doctrine\\Common\\Annotations\\CachedReader::clearLoadedAnnotations", "doc": "&quot;Clears loaded annotations.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/DocLexer.html", "name": "Doctrine\\Common\\Annotations\\DocLexer", "doc": "&quot;Simple lexer for docblock annotations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocLexer", "fromLink": "Doctrine/Common/Annotations/DocLexer.html", "link": "Doctrine/Common/Annotations/DocLexer.html#method_nextTokenIsAdjacent", "name": "Doctrine\\Common\\Annotations\\DocLexer::nextTokenIsAdjacent", "doc": "&quot;Whether the next token starts immediately, or if there were\nnon-captured symbols before that&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocLexer", "fromLink": "Doctrine/Common/Annotations/DocLexer.html", "link": "Doctrine/Common/Annotations/DocLexer.html#method_getCatchablePatterns", "name": "Doctrine\\Common\\Annotations\\DocLexer::getCatchablePatterns", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocLexer", "fromLink": "Doctrine/Common/Annotations/DocLexer.html", "link": "Doctrine/Common/Annotations/DocLexer.html#method_getNonCatchablePatterns", "name": "Doctrine\\Common\\Annotations\\DocLexer::getNonCatchablePatterns", "doc": "&quot;{@inheritdoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocLexer", "fromLink": "Doctrine/Common/Annotations/DocLexer.html", "link": "Doctrine/Common/Annotations/DocLexer.html#method_getType", "name": "Doctrine\\Common\\Annotations\\DocLexer::getType", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/DocParser.html", "name": "Doctrine\\Common\\Annotations\\DocParser", "doc": "&quot;A parser for docblock annotations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocParser", "fromLink": "Doctrine/Common/Annotations/DocParser.html", "link": "Doctrine/Common/Annotations/DocParser.html#method___construct", "name": "Doctrine\\Common\\Annotations\\DocParser::__construct", "doc": "&quot;Constructs a new DocParser.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocParser", "fromLink": "Doctrine/Common/Annotations/DocParser.html", "link": "Doctrine/Common/Annotations/DocParser.html#method_setIgnoredAnnotationNames", "name": "Doctrine\\Common\\Annotations\\DocParser::setIgnoredAnnotationNames", "doc": "&quot;Sets the annotation names that are ignored during the parsing process.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocParser", "fromLink": "Doctrine/Common/Annotations/DocParser.html", "link": "Doctrine/Common/Annotations/DocParser.html#method_setIgnoredAnnotationNamespaces", "name": "Doctrine\\Common\\Annotations\\DocParser::setIgnoredAnnotationNamespaces", "doc": "&quot;Sets the annotation namespaces that are ignored during the parsing process.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocParser", "fromLink": "Doctrine/Common/Annotations/DocParser.html", "link": "Doctrine/Common/Annotations/DocParser.html#method_setIgnoreNotImportedAnnotations", "name": "Doctrine\\Common\\Annotations\\DocParser::setIgnoreNotImportedAnnotations", "doc": "&quot;Sets ignore on not-imported annotations.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocParser", "fromLink": "Doctrine/Common/Annotations/DocParser.html", "link": "Doctrine/Common/Annotations/DocParser.html#method_addNamespace", "name": "Doctrine\\Common\\Annotations\\DocParser::addNamespace", "doc": "&quot;Sets the default namespaces.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocParser", "fromLink": "Doctrine/Common/Annotations/DocParser.html", "link": "Doctrine/Common/Annotations/DocParser.html#method_setImports", "name": "Doctrine\\Common\\Annotations\\DocParser::setImports", "doc": "&quot;Sets the imports.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocParser", "fromLink": "Doctrine/Common/Annotations/DocParser.html", "link": "Doctrine/Common/Annotations/DocParser.html#method_setTarget", "name": "Doctrine\\Common\\Annotations\\DocParser::setTarget", "doc": "&quot;Sets current target context as bitmask.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\DocParser", "fromLink": "Doctrine/Common/Annotations/DocParser.html", "link": "Doctrine/Common/Annotations/DocParser.html#method_parse", "name": "Doctrine\\Common\\Annotations\\DocParser::parse", "doc": "&quot;Parses the given docblock string for annotations.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/FileCacheReader.html", "name": "Doctrine\\Common\\Annotations\\FileCacheReader", "doc": "&quot;File cache reader for annotations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\FileCacheReader", "fromLink": "Doctrine/Common/Annotations/FileCacheReader.html", "link": "Doctrine/Common/Annotations/FileCacheReader.html#method___construct", "name": "Doctrine\\Common\\Annotations\\FileCacheReader::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\FileCacheReader", "fromLink": "Doctrine/Common/Annotations/FileCacheReader.html", "link": "Doctrine/Common/Annotations/FileCacheReader.html#method_getClassAnnotations", "name": "Doctrine\\Common\\Annotations\\FileCacheReader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\FileCacheReader", "fromLink": "Doctrine/Common/Annotations/FileCacheReader.html", "link": "Doctrine/Common/Annotations/FileCacheReader.html#method_getPropertyAnnotations", "name": "Doctrine\\Common\\Annotations\\FileCacheReader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\FileCacheReader", "fromLink": "Doctrine/Common/Annotations/FileCacheReader.html", "link": "Doctrine/Common/Annotations/FileCacheReader.html#method_getMethodAnnotations", "name": "Doctrine\\Common\\Annotations\\FileCacheReader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\FileCacheReader", "fromLink": "Doctrine/Common/Annotations/FileCacheReader.html", "link": "Doctrine/Common/Annotations/FileCacheReader.html#method_getClassAnnotation", "name": "Doctrine\\Common\\Annotations\\FileCacheReader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\FileCacheReader", "fromLink": "Doctrine/Common/Annotations/FileCacheReader.html", "link": "Doctrine/Common/Annotations/FileCacheReader.html#method_getMethodAnnotation", "name": "Doctrine\\Common\\Annotations\\FileCacheReader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\FileCacheReader", "fromLink": "Doctrine/Common/Annotations/FileCacheReader.html", "link": "Doctrine/Common/Annotations/FileCacheReader.html#method_getPropertyAnnotation", "name": "Doctrine\\Common\\Annotations\\FileCacheReader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\FileCacheReader", "fromLink": "Doctrine/Common/Annotations/FileCacheReader.html", "link": "Doctrine/Common/Annotations/FileCacheReader.html#method_clearLoadedAnnotations", "name": "Doctrine\\Common\\Annotations\\FileCacheReader::clearLoadedAnnotations", "doc": "&quot;Clears loaded annotations.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/IndexedReader.html", "name": "Doctrine\\Common\\Annotations\\IndexedReader", "doc": "&quot;Allows the reader to be used in-place of Doctrine&#039;s reader.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\IndexedReader", "fromLink": "Doctrine/Common/Annotations/IndexedReader.html", "link": "Doctrine/Common/Annotations/IndexedReader.html#method___construct", "name": "Doctrine\\Common\\Annotations\\IndexedReader::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\IndexedReader", "fromLink": "Doctrine/Common/Annotations/IndexedReader.html", "link": "Doctrine/Common/Annotations/IndexedReader.html#method_getClassAnnotations", "name": "Doctrine\\Common\\Annotations\\IndexedReader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\IndexedReader", "fromLink": "Doctrine/Common/Annotations/IndexedReader.html", "link": "Doctrine/Common/Annotations/IndexedReader.html#method_getClassAnnotation", "name": "Doctrine\\Common\\Annotations\\IndexedReader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\IndexedReader", "fromLink": "Doctrine/Common/Annotations/IndexedReader.html", "link": "Doctrine/Common/Annotations/IndexedReader.html#method_getMethodAnnotations", "name": "Doctrine\\Common\\Annotations\\IndexedReader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\IndexedReader", "fromLink": "Doctrine/Common/Annotations/IndexedReader.html", "link": "Doctrine/Common/Annotations/IndexedReader.html#method_getMethodAnnotation", "name": "Doctrine\\Common\\Annotations\\IndexedReader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\IndexedReader", "fromLink": "Doctrine/Common/Annotations/IndexedReader.html", "link": "Doctrine/Common/Annotations/IndexedReader.html#method_getPropertyAnnotations", "name": "Doctrine\\Common\\Annotations\\IndexedReader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\IndexedReader", "fromLink": "Doctrine/Common/Annotations/IndexedReader.html", "link": "Doctrine/Common/Annotations/IndexedReader.html#method_getPropertyAnnotation", "name": "Doctrine\\Common\\Annotations\\IndexedReader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\IndexedReader", "fromLink": "Doctrine/Common/Annotations/IndexedReader.html", "link": "Doctrine/Common/Annotations/IndexedReader.html#method___call", "name": "Doctrine\\Common\\Annotations\\IndexedReader::__call", "doc": "&quot;Proxies all methods to the delegate.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/PhpParser.html", "name": "Doctrine\\Common\\Annotations\\PhpParser", "doc": "&quot;Parses a file for namespaces\/use\/class declarations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\PhpParser", "fromLink": "Doctrine/Common/Annotations/PhpParser.html", "link": "Doctrine/Common/Annotations/PhpParser.html#method_parseClass", "name": "Doctrine\\Common\\Annotations\\PhpParser::parseClass", "doc": "&quot;Parses a class.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/Reader.html", "name": "Doctrine\\Common\\Annotations\\Reader", "doc": "&quot;Interface for annotation readers.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getClassAnnotations", "name": "Doctrine\\Common\\Annotations\\Reader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getClassAnnotation", "name": "Doctrine\\Common\\Annotations\\Reader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getMethodAnnotations", "name": "Doctrine\\Common\\Annotations\\Reader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getMethodAnnotation", "name": "Doctrine\\Common\\Annotations\\Reader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getPropertyAnnotations", "name": "Doctrine\\Common\\Annotations\\Reader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\Reader", "fromLink": "Doctrine/Common/Annotations/Reader.html", "link": "Doctrine/Common/Annotations/Reader.html#method_getPropertyAnnotation", "name": "Doctrine\\Common\\Annotations\\Reader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/SimpleAnnotationReader.html", "name": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader", "doc": "&quot;Simple Annotation Reader.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader", "fromLink": "Doctrine/Common/Annotations/SimpleAnnotationReader.html", "link": "Doctrine/Common/Annotations/SimpleAnnotationReader.html#method___construct", "name": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader::__construct", "doc": "&quot;Constructor.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader", "fromLink": "Doctrine/Common/Annotations/SimpleAnnotationReader.html", "link": "Doctrine/Common/Annotations/SimpleAnnotationReader.html#method_addNamespace", "name": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader::addNamespace", "doc": "&quot;Adds a namespace in which we will look for annotations.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader", "fromLink": "Doctrine/Common/Annotations/SimpleAnnotationReader.html", "link": "Doctrine/Common/Annotations/SimpleAnnotationReader.html#method_getClassAnnotations", "name": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader::getClassAnnotations", "doc": "&quot;Gets the annotations applied to a class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader", "fromLink": "Doctrine/Common/Annotations/SimpleAnnotationReader.html", "link": "Doctrine/Common/Annotations/SimpleAnnotationReader.html#method_getMethodAnnotations", "name": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader::getMethodAnnotations", "doc": "&quot;Gets the annotations applied to a method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader", "fromLink": "Doctrine/Common/Annotations/SimpleAnnotationReader.html", "link": "Doctrine/Common/Annotations/SimpleAnnotationReader.html#method_getPropertyAnnotations", "name": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader::getPropertyAnnotations", "doc": "&quot;Gets the annotations applied to a property.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader", "fromLink": "Doctrine/Common/Annotations/SimpleAnnotationReader.html", "link": "Doctrine/Common/Annotations/SimpleAnnotationReader.html#method_getClassAnnotation", "name": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader::getClassAnnotation", "doc": "&quot;Gets a class annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader", "fromLink": "Doctrine/Common/Annotations/SimpleAnnotationReader.html", "link": "Doctrine/Common/Annotations/SimpleAnnotationReader.html#method_getMethodAnnotation", "name": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader::getMethodAnnotation", "doc": "&quot;Gets a method annotation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader", "fromLink": "Doctrine/Common/Annotations/SimpleAnnotationReader.html", "link": "Doctrine/Common/Annotations/SimpleAnnotationReader.html#method_getPropertyAnnotation", "name": "Doctrine\\Common\\Annotations\\SimpleAnnotationReader::getPropertyAnnotation", "doc": "&quot;Gets a property annotation.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Annotations", "fromLink": "Doctrine/Common/Annotations.html", "link": "Doctrine/Common/Annotations/TokenParser.html", "name": "Doctrine\\Common\\Annotations\\TokenParser", "doc": "&quot;Parses a file for namespaces\/use\/class declarations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\TokenParser", "fromLink": "Doctrine/Common/Annotations/TokenParser.html", "link": "Doctrine/Common/Annotations/TokenParser.html#method___construct", "name": "Doctrine\\Common\\Annotations\\TokenParser::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\TokenParser", "fromLink": "Doctrine/Common/Annotations/TokenParser.html", "link": "Doctrine/Common/Annotations/TokenParser.html#method_next", "name": "Doctrine\\Common\\Annotations\\TokenParser::next", "doc": "&quot;Gets the next non whitespace and non comment token.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\TokenParser", "fromLink": "Doctrine/Common/Annotations/TokenParser.html", "link": "Doctrine/Common/Annotations/TokenParser.html#method_parseUseStatement", "name": "Doctrine\\Common\\Annotations\\TokenParser::parseUseStatement", "doc": "&quot;Parses a single use statement.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\TokenParser", "fromLink": "Doctrine/Common/Annotations/TokenParser.html", "link": "Doctrine/Common/Annotations/TokenParser.html#method_parseUseStatements", "name": "Doctrine\\Common\\Annotations\\TokenParser::parseUseStatements", "doc": "&quot;Gets all use statements.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\TokenParser", "fromLink": "Doctrine/Common/Annotations/TokenParser.html", "link": "Doctrine/Common/Annotations/TokenParser.html#method_parseNamespace", "name": "Doctrine\\Common\\Annotations\\TokenParser::parseNamespace", "doc": "&quot;Gets the namespace.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Annotations\\TokenParser", "fromLink": "Doctrine/Common/Annotations/TokenParser.html", "link": "Doctrine/Common/Annotations/TokenParser.html#method_parseClass", "name": "Doctrine\\Common\\Annotations\\TokenParser::parseClass", "doc": "&quot;Gets the class name.&quot;"},
            
            
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


