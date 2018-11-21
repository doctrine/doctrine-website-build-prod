
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Doctrine" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine.html">Doctrine</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common.html">Common</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common_Proxy" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common/Proxy.html">Proxy</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common_Proxy_Exception" >                    <div style="padding-left:54px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common/Proxy/Exception.html">Exception</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Common_Proxy_Exception_InvalidArgumentException" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Common/Proxy/Exception/InvalidArgumentException.html">InvalidArgumentException</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Proxy_Exception_OutOfBoundsException" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Common/Proxy/Exception/OutOfBoundsException.html">OutOfBoundsException</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Proxy_Exception_ProxyException" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Common/Proxy/Exception/ProxyException.html">ProxyException</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Proxy_Exception_UnexpectedValueException" >                    <div style="padding-left:80px" class="hd leaf">                        <a href="Doctrine/Common/Proxy/Exception/UnexpectedValueException.html">UnexpectedValueException</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Doctrine_Common_Proxy_AbstractProxyFactory" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Proxy/AbstractProxyFactory.html">AbstractProxyFactory</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Proxy_Autoloader" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Proxy/Autoloader.html">Autoloader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Proxy_Proxy" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Proxy/Proxy.html">Proxy</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Proxy_ProxyDefinition" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Proxy/ProxyDefinition.html">ProxyDefinition</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Proxy_ProxyGenerator" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Proxy/ProxyGenerator.html">ProxyGenerator</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:Doctrine_Common_Util" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common/Util.html">Util</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Common_Util_ClassUtils" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Util/ClassUtils.html">ClassUtils</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Util_Debug" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Util/Debug.html">Debug</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Util_Inflector" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Util/Inflector.html">Inflector</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:Doctrine_Common_ClassLoader" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Common/ClassLoader.html">ClassLoader</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_CommonException" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Common/CommonException.html">CommonException</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Comparable" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Common/Comparable.html">Comparable</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Lexer" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Common/Lexer.html">Lexer</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Version" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="Doctrine/Common/Version.html">Version</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Doctrine.html", "name": "Doctrine", "doc": "Namespace Doctrine"},{"type": "Namespace", "link": "Doctrine/Common.html", "name": "Doctrine\\Common", "doc": "Namespace Doctrine\\Common"},{"type": "Namespace", "link": "Doctrine/Common/Proxy.html", "name": "Doctrine\\Common\\Proxy", "doc": "Namespace Doctrine\\Common\\Proxy"},{"type": "Namespace", "link": "Doctrine/Common/Proxy/Exception.html", "name": "Doctrine\\Common\\Proxy\\Exception", "doc": "Namespace Doctrine\\Common\\Proxy\\Exception"},{"type": "Namespace", "link": "Doctrine/Common/Util.html", "name": "Doctrine\\Common\\Util", "doc": "Namespace Doctrine\\Common\\Util"},
            {"type": "Interface", "fromName": "Doctrine\\Common", "fromLink": "Doctrine/Common.html", "link": "Doctrine/Common/Comparable.html", "name": "Doctrine\\Common\\Comparable", "doc": "&quot;Comparable interface that allows to compare two value objects to each other for similarity.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Comparable", "fromLink": "Doctrine/Common/Comparable.html", "link": "Doctrine/Common/Comparable.html#method_compareTo", "name": "Doctrine\\Common\\Comparable::compareTo", "doc": "&quot;Compares the current object to the passed $other.&quot;"},
            
            {"type": "Interface", "fromName": "Doctrine\\Common\\Proxy\\Exception", "fromLink": "Doctrine/Common/Proxy/Exception.html", "link": "Doctrine/Common/Proxy/Exception/ProxyException.html", "name": "Doctrine\\Common\\Proxy\\Exception\\ProxyException", "doc": "&quot;Base exception interface for proxy exceptions.&quot;"},
                    
            {"type": "Interface", "fromName": "Doctrine\\Common\\Proxy", "fromLink": "Doctrine/Common/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html", "name": "Doctrine\\Common\\Proxy\\Proxy", "doc": "&quot;Interface for proxy classes.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___setInitialized", "name": "Doctrine\\Common\\Proxy\\Proxy::__setInitialized", "doc": "&quot;Marks the proxy as initialized or not.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___setInitializer", "name": "Doctrine\\Common\\Proxy\\Proxy::__setInitializer", "doc": "&quot;Sets the initializer callback to be used when initializing the proxy. That\ninitializer should accept 3 parameters: $proxy, $method and $params. Those\nare respectively the proxy object that is being initialized, the method name\nthat triggered initialization and the parameters passed to that method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___getInitializer", "name": "Doctrine\\Common\\Proxy\\Proxy::__getInitializer", "doc": "&quot;Retrieves the initializer callback used to initialize the proxy.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___setCloner", "name": "Doctrine\\Common\\Proxy\\Proxy::__setCloner", "doc": "&quot;Sets the callback to be used when cloning the proxy. That initializer should accept\na single parameter, which is the cloned proxy instance itself.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___getCloner", "name": "Doctrine\\Common\\Proxy\\Proxy::__getCloner", "doc": "&quot;Retrieves the callback to be used when cloning the proxy.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___getLazyProperties", "name": "Doctrine\\Common\\Proxy\\Proxy::__getLazyProperties", "doc": "&quot;Retrieves the list of lazy loaded properties for a given proxy&quot;"},
            
            
            {"type": "Class", "fromName": "Doctrine\\Common", "fromLink": "Doctrine/Common.html", "link": "Doctrine/Common/ClassLoader.html", "name": "Doctrine\\Common\\ClassLoader", "doc": "&quot;A &lt;tt&gt;ClassLoader&lt;\/tt&gt; is an autoloader for class files that can be\ninstalled on the SPL autoload stack. It is a class loader that either loads only classes\nof a specific namespace or all namespaces and it is suitable for working together\nwith other autoloaders in the SPL autoload stack.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method___construct", "name": "Doctrine\\Common\\ClassLoader::__construct", "doc": "&quot;Creates a new &lt;tt&gt;ClassLoader&lt;\/tt&gt; that loads classes of the\nspecified namespace from the specified include path.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_setNamespaceSeparator", "name": "Doctrine\\Common\\ClassLoader::setNamespaceSeparator", "doc": "&quot;Sets the namespace separator used by classes in the namespace of this ClassLoader.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_getNamespaceSeparator", "name": "Doctrine\\Common\\ClassLoader::getNamespaceSeparator", "doc": "&quot;Gets the namespace separator used by classes in the namespace of this ClassLoader.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_setIncludePath", "name": "Doctrine\\Common\\ClassLoader::setIncludePath", "doc": "&quot;Sets the base include path for all class files in the namespace of this ClassLoader.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_getIncludePath", "name": "Doctrine\\Common\\ClassLoader::getIncludePath", "doc": "&quot;Gets the base include path for all class files in the namespace of this ClassLoader.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_setFileExtension", "name": "Doctrine\\Common\\ClassLoader::setFileExtension", "doc": "&quot;Sets the file extension of class files in the namespace of this ClassLoader.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_getFileExtension", "name": "Doctrine\\Common\\ClassLoader::getFileExtension", "doc": "&quot;Gets the file extension of class files in the namespace of this ClassLoader.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_register", "name": "Doctrine\\Common\\ClassLoader::register", "doc": "&quot;Registers this ClassLoader on the SPL autoload stack.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_unregister", "name": "Doctrine\\Common\\ClassLoader::unregister", "doc": "&quot;Removes this ClassLoader from the SPL autoload stack.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_loadClass", "name": "Doctrine\\Common\\ClassLoader::loadClass", "doc": "&quot;Loads the given class or interface.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_canLoadClass", "name": "Doctrine\\Common\\ClassLoader::canLoadClass", "doc": "&quot;Asks this ClassLoader whether it can potentially load the class (file) with\nthe given name.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_classExists", "name": "Doctrine\\Common\\ClassLoader::classExists", "doc": "&quot;Checks whether a class with a given name exists. A class \&quot;exists\&quot; if it is either\nalready defined in the current request or if there is an autoloader on the SPL\nautoload stack that is a) responsible for the class in question and b) is able to\nload a class file in which the class definition resides.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\ClassLoader", "fromLink": "Doctrine/Common/ClassLoader.html", "link": "Doctrine/Common/ClassLoader.html#method_getClassLoader", "name": "Doctrine\\Common\\ClassLoader::getClassLoader", "doc": "&quot;Gets the &lt;tt&gt;ClassLoader&lt;\/tt&gt; from the SPL autoload stack that is responsible\nfor (and is able to load) the class with the given name.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common", "fromLink": "Doctrine/Common.html", "link": "Doctrine/Common/CommonException.html", "name": "Doctrine\\Common\\CommonException", "doc": "&quot;Base exception class for package Doctrine\\Common.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Common", "fromLink": "Doctrine/Common.html", "link": "Doctrine/Common/Comparable.html", "name": "Doctrine\\Common\\Comparable", "doc": "&quot;Comparable interface that allows to compare two value objects to each other for similarity.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Comparable", "fromLink": "Doctrine/Common/Comparable.html", "link": "Doctrine/Common/Comparable.html#method_compareTo", "name": "Doctrine\\Common\\Comparable::compareTo", "doc": "&quot;Compares the current object to the passed $other.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common", "fromLink": "Doctrine/Common.html", "link": "Doctrine/Common/Lexer.html", "name": "Doctrine\\Common\\Lexer", "doc": "&quot;Base class for writing simple lexers, i.e. for creating small DSLs.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Common\\Proxy", "fromLink": "Doctrine/Common/Proxy.html", "link": "Doctrine/Common/Proxy/AbstractProxyFactory.html", "name": "Doctrine\\Common\\Proxy\\AbstractProxyFactory", "doc": "&quot;Abstract factory for proxy objects.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\AbstractProxyFactory", "fromLink": "Doctrine/Common/Proxy/AbstractProxyFactory.html", "link": "Doctrine/Common/Proxy/AbstractProxyFactory.html#method___construct", "name": "Doctrine\\Common\\Proxy\\AbstractProxyFactory::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\AbstractProxyFactory", "fromLink": "Doctrine/Common/Proxy/AbstractProxyFactory.html", "link": "Doctrine/Common/Proxy/AbstractProxyFactory.html#method_getProxy", "name": "Doctrine\\Common\\Proxy\\AbstractProxyFactory::getProxy", "doc": "&quot;Gets a reference proxy instance for the entity of the given type and identified by\nthe given identifier.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\AbstractProxyFactory", "fromLink": "Doctrine/Common/Proxy/AbstractProxyFactory.html", "link": "Doctrine/Common/Proxy/AbstractProxyFactory.html#method_generateProxyClasses", "name": "Doctrine\\Common\\Proxy\\AbstractProxyFactory::generateProxyClasses", "doc": "&quot;Generates proxy classes for all given classes.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\AbstractProxyFactory", "fromLink": "Doctrine/Common/Proxy/AbstractProxyFactory.html", "link": "Doctrine/Common/Proxy/AbstractProxyFactory.html#method_resetUninitializedProxy", "name": "Doctrine\\Common\\Proxy\\AbstractProxyFactory::resetUninitializedProxy", "doc": "&quot;Reset initialization\/cloning logic for an un-initialized proxy&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\AbstractProxyFactory", "fromLink": "Doctrine/Common/Proxy/AbstractProxyFactory.html", "link": "Doctrine/Common/Proxy/AbstractProxyFactory.html#method_skipClass", "name": "Doctrine\\Common\\Proxy\\AbstractProxyFactory::skipClass", "doc": "&quot;Determine if this class should be skipped during proxy generation.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\AbstractProxyFactory", "fromLink": "Doctrine/Common/Proxy/AbstractProxyFactory.html", "link": "Doctrine/Common/Proxy/AbstractProxyFactory.html#method_createProxyDefinition", "name": "Doctrine\\Common\\Proxy\\AbstractProxyFactory::createProxyDefinition", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Proxy", "fromLink": "Doctrine/Common/Proxy.html", "link": "Doctrine/Common/Proxy/Autoloader.html", "name": "Doctrine\\Common\\Proxy\\Autoloader", "doc": "&quot;Special Autoloader for Proxy classes, which are not PSR-0 compliant.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Autoloader", "fromLink": "Doctrine/Common/Proxy/Autoloader.html", "link": "Doctrine/Common/Proxy/Autoloader.html#method_resolveFile", "name": "Doctrine\\Common\\Proxy\\Autoloader::resolveFile", "doc": "&quot;Resolves proxy class name to a filename based on the following pattern.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Autoloader", "fromLink": "Doctrine/Common/Proxy/Autoloader.html", "link": "Doctrine/Common/Proxy/Autoloader.html#method_register", "name": "Doctrine\\Common\\Proxy\\Autoloader::register", "doc": "&quot;Registers and returns autoloader callback for the given proxy dir and namespace.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Proxy\\Exception", "fromLink": "Doctrine/Common/Proxy/Exception.html", "link": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html", "name": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException", "doc": "&quot;Proxy Invalid Argument Exception.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException", "fromLink": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html", "link": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html#method_proxyDirectoryRequired", "name": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException::proxyDirectoryRequired", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException", "fromLink": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html", "link": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html#method_notProxyClass", "name": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException::notProxyClass", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException", "fromLink": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html", "link": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html#method_invalidPlaceholder", "name": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException::invalidPlaceholder", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException", "fromLink": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html", "link": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html#method_proxyNamespaceRequired", "name": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException::proxyNamespaceRequired", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException", "fromLink": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html", "link": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html#method_unitializedProxyExpected", "name": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException::unitializedProxyExpected", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException", "fromLink": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html", "link": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html#method_invalidClassNotFoundCallback", "name": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException::invalidClassNotFoundCallback", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException", "fromLink": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html", "link": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html#method_classMustNotBeAbstract", "name": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException::classMustNotBeAbstract", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException", "fromLink": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html", "link": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html#method_classMustNotBeFinal", "name": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException::classMustNotBeFinal", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException", "fromLink": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html", "link": "Doctrine/Common/Proxy/Exception/InvalidArgumentException.html#method_invalidAutoGenerateMode", "name": "Doctrine\\Common\\Proxy\\Exception\\InvalidArgumentException::invalidAutoGenerateMode", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Proxy\\Exception", "fromLink": "Doctrine/Common/Proxy/Exception.html", "link": "Doctrine/Common/Proxy/Exception/OutOfBoundsException.html", "name": "Doctrine\\Common\\Proxy\\Exception\\OutOfBoundsException", "doc": "&quot;Proxy Invalid Argument Exception.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\OutOfBoundsException", "fromLink": "Doctrine/Common/Proxy/Exception/OutOfBoundsException.html", "link": "Doctrine/Common/Proxy/Exception/OutOfBoundsException.html#method_missingPrimaryKeyValue", "name": "Doctrine\\Common\\Proxy\\Exception\\OutOfBoundsException::missingPrimaryKeyValue", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Proxy\\Exception", "fromLink": "Doctrine/Common/Proxy/Exception.html", "link": "Doctrine/Common/Proxy/Exception/ProxyException.html", "name": "Doctrine\\Common\\Proxy\\Exception\\ProxyException", "doc": "&quot;Base exception interface for proxy exceptions.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Common\\Proxy\\Exception", "fromLink": "Doctrine/Common/Proxy/Exception.html", "link": "Doctrine/Common/Proxy/Exception/UnexpectedValueException.html", "name": "Doctrine\\Common\\Proxy\\Exception\\UnexpectedValueException", "doc": "&quot;Proxy Unexpected Value Exception.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\UnexpectedValueException", "fromLink": "Doctrine/Common/Proxy/Exception/UnexpectedValueException.html", "link": "Doctrine/Common/Proxy/Exception/UnexpectedValueException.html#method_proxyDirectoryNotWritable", "name": "Doctrine\\Common\\Proxy\\Exception\\UnexpectedValueException::proxyDirectoryNotWritable", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\UnexpectedValueException", "fromLink": "Doctrine/Common/Proxy/Exception/UnexpectedValueException.html", "link": "Doctrine/Common/Proxy/Exception/UnexpectedValueException.html#method_invalidParameterTypeHint", "name": "Doctrine\\Common\\Proxy\\Exception\\UnexpectedValueException::invalidParameterTypeHint", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Exception\\UnexpectedValueException", "fromLink": "Doctrine/Common/Proxy/Exception/UnexpectedValueException.html", "link": "Doctrine/Common/Proxy/Exception/UnexpectedValueException.html#method_invalidReturnTypeHint", "name": "Doctrine\\Common\\Proxy\\Exception\\UnexpectedValueException::invalidReturnTypeHint", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Proxy", "fromLink": "Doctrine/Common/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html", "name": "Doctrine\\Common\\Proxy\\Proxy", "doc": "&quot;Interface for proxy classes.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___setInitialized", "name": "Doctrine\\Common\\Proxy\\Proxy::__setInitialized", "doc": "&quot;Marks the proxy as initialized or not.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___setInitializer", "name": "Doctrine\\Common\\Proxy\\Proxy::__setInitializer", "doc": "&quot;Sets the initializer callback to be used when initializing the proxy. That\ninitializer should accept 3 parameters: $proxy, $method and $params. Those\nare respectively the proxy object that is being initialized, the method name\nthat triggered initialization and the parameters passed to that method.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___getInitializer", "name": "Doctrine\\Common\\Proxy\\Proxy::__getInitializer", "doc": "&quot;Retrieves the initializer callback used to initialize the proxy.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___setCloner", "name": "Doctrine\\Common\\Proxy\\Proxy::__setCloner", "doc": "&quot;Sets the callback to be used when cloning the proxy. That initializer should accept\na single parameter, which is the cloned proxy instance itself.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___getCloner", "name": "Doctrine\\Common\\Proxy\\Proxy::__getCloner", "doc": "&quot;Retrieves the callback to be used when cloning the proxy.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\Proxy", "fromLink": "Doctrine/Common/Proxy/Proxy.html", "link": "Doctrine/Common/Proxy/Proxy.html#method___getLazyProperties", "name": "Doctrine\\Common\\Proxy\\Proxy::__getLazyProperties", "doc": "&quot;Retrieves the list of lazy loaded properties for a given proxy&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Proxy", "fromLink": "Doctrine/Common/Proxy.html", "link": "Doctrine/Common/Proxy/ProxyDefinition.html", "name": "Doctrine\\Common\\Proxy\\ProxyDefinition", "doc": "&quot;Definition structure how to create a proxy.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\ProxyDefinition", "fromLink": "Doctrine/Common/Proxy/ProxyDefinition.html", "link": "Doctrine/Common/Proxy/ProxyDefinition.html#method___construct", "name": "Doctrine\\Common\\Proxy\\ProxyDefinition::__construct", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Proxy", "fromLink": "Doctrine/Common/Proxy.html", "link": "Doctrine/Common/Proxy/ProxyGenerator.html", "name": "Doctrine\\Common\\Proxy\\ProxyGenerator", "doc": "&quot;This factory is used to generate proxy classes.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\ProxyGenerator", "fromLink": "Doctrine/Common/Proxy/ProxyGenerator.html", "link": "Doctrine/Common/Proxy/ProxyGenerator.html#method___construct", "name": "Doctrine\\Common\\Proxy\\ProxyGenerator::__construct", "doc": "&quot;Initializes a new instance of the &lt;tt&gt;ProxyFactory&lt;\/tt&gt; class that is\nconnected to the given &lt;tt&gt;EntityManager&lt;\/tt&gt;.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\ProxyGenerator", "fromLink": "Doctrine/Common/Proxy/ProxyGenerator.html", "link": "Doctrine/Common/Proxy/ProxyGenerator.html#method_setPlaceholder", "name": "Doctrine\\Common\\Proxy\\ProxyGenerator::setPlaceholder", "doc": "&quot;Sets a placeholder to be replaced in the template.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\ProxyGenerator", "fromLink": "Doctrine/Common/Proxy/ProxyGenerator.html", "link": "Doctrine/Common/Proxy/ProxyGenerator.html#method_setProxyClassTemplate", "name": "Doctrine\\Common\\Proxy\\ProxyGenerator::setProxyClassTemplate", "doc": "&quot;Sets the base template used to create proxy classes.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\ProxyGenerator", "fromLink": "Doctrine/Common/Proxy/ProxyGenerator.html", "link": "Doctrine/Common/Proxy/ProxyGenerator.html#method_generateProxyClass", "name": "Doctrine\\Common\\Proxy\\ProxyGenerator::generateProxyClass", "doc": "&quot;Generates a proxy class file.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Proxy\\ProxyGenerator", "fromLink": "Doctrine/Common/Proxy/ProxyGenerator.html", "link": "Doctrine/Common/Proxy/ProxyGenerator.html#method_getProxyFileName", "name": "Doctrine\\Common\\Proxy\\ProxyGenerator::getProxyFileName", "doc": "&quot;Generates the Proxy file name.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Util", "fromLink": "Doctrine/Common/Util.html", "link": "Doctrine/Common/Util/ClassUtils.html", "name": "Doctrine\\Common\\Util\\ClassUtils", "doc": "&quot;Class and reflection related functionality for objects that\nmight or not be proxy objects at the moment.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Util\\ClassUtils", "fromLink": "Doctrine/Common/Util/ClassUtils.html", "link": "Doctrine/Common/Util/ClassUtils.html#method_getRealClass", "name": "Doctrine\\Common\\Util\\ClassUtils::getRealClass", "doc": "&quot;Gets the real class name of a class name that could be a proxy.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Util\\ClassUtils", "fromLink": "Doctrine/Common/Util/ClassUtils.html", "link": "Doctrine/Common/Util/ClassUtils.html#method_getClass", "name": "Doctrine\\Common\\Util\\ClassUtils::getClass", "doc": "&quot;Gets the real class name of an object (even if its a proxy).&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Util\\ClassUtils", "fromLink": "Doctrine/Common/Util/ClassUtils.html", "link": "Doctrine/Common/Util/ClassUtils.html#method_getParentClass", "name": "Doctrine\\Common\\Util\\ClassUtils::getParentClass", "doc": "&quot;Gets the real parent class name of a class or object.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Util\\ClassUtils", "fromLink": "Doctrine/Common/Util/ClassUtils.html", "link": "Doctrine/Common/Util/ClassUtils.html#method_newReflectionClass", "name": "Doctrine\\Common\\Util\\ClassUtils::newReflectionClass", "doc": "&quot;Creates a new reflection class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Util\\ClassUtils", "fromLink": "Doctrine/Common/Util/ClassUtils.html", "link": "Doctrine/Common/Util/ClassUtils.html#method_newReflectionObject", "name": "Doctrine\\Common\\Util\\ClassUtils::newReflectionObject", "doc": "&quot;Creates a new reflection object.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Util\\ClassUtils", "fromLink": "Doctrine/Common/Util/ClassUtils.html", "link": "Doctrine/Common/Util/ClassUtils.html#method_generateProxyClassName", "name": "Doctrine\\Common\\Util\\ClassUtils::generateProxyClassName", "doc": "&quot;Given a class name and a proxy namespace returns the proxy name.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Util", "fromLink": "Doctrine/Common/Util.html", "link": "Doctrine/Common/Util/Debug.html", "name": "Doctrine\\Common\\Util\\Debug", "doc": "&quot;Static class containing most used debug methods.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Util\\Debug", "fromLink": "Doctrine/Common/Util/Debug.html", "link": "Doctrine/Common/Util/Debug.html#method_dump", "name": "Doctrine\\Common\\Util\\Debug::dump", "doc": "&quot;Prints a dump of the public, protected and private properties of $var.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Util\\Debug", "fromLink": "Doctrine/Common/Util/Debug.html", "link": "Doctrine/Common/Util/Debug.html#method_export", "name": "Doctrine\\Common\\Util\\Debug::export", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Util\\Debug", "fromLink": "Doctrine/Common/Util/Debug.html", "link": "Doctrine/Common/Util/Debug.html#method_toString", "name": "Doctrine\\Common\\Util\\Debug::toString", "doc": "&quot;Returns a string representation of an object.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Util", "fromLink": "Doctrine/Common/Util.html", "link": "Doctrine/Common/Util/Inflector.html", "name": "Doctrine\\Common\\Util\\Inflector", "doc": "&quot;Doctrine inflector has static methods for inflecting text.&quot;"},
                    
            {"type": "Class", "fromName": "Doctrine\\Common", "fromLink": "Doctrine/Common.html", "link": "Doctrine/Common/Version.html", "name": "Doctrine\\Common\\Version", "doc": "&quot;Class to store and retrieve the version of Doctrine.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Version", "fromLink": "Doctrine/Common/Version.html", "link": "Doctrine/Common/Version.html#method_compare", "name": "Doctrine\\Common\\Version::compare", "doc": "&quot;Compares a Doctrine version with the current one.&quot;"},
            
            
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


