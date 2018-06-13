
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:Doctrine" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine.html">Doctrine</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common.html">Common</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:Doctrine_Common_Reflection" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="Doctrine/Common/Reflection.html">Reflection</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:Doctrine_Common_Reflection_ClassFinderInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Reflection/ClassFinderInterface.html">ClassFinderInterface</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Reflection_Psr0FindFile" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Reflection/Psr0FindFile.html">Psr0FindFile</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Reflection_ReflectionProviderInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Reflection/ReflectionProviderInterface.html">ReflectionProviderInterface</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Reflection_RuntimePublicReflectionProperty" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Reflection/RuntimePublicReflectionProperty.html">RuntimePublicReflectionProperty</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Reflection_StaticReflectionClass" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Reflection/StaticReflectionClass.html">StaticReflectionClass</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Reflection_StaticReflectionMethod" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Reflection/StaticReflectionMethod.html">StaticReflectionMethod</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Reflection_StaticReflectionParser" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Reflection/StaticReflectionParser.html">StaticReflectionParser</a>                    </div>                </li>                            <li data-name="class:Doctrine_Common_Reflection_StaticReflectionProperty" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="Doctrine/Common/Reflection/StaticReflectionProperty.html">StaticReflectionProperty</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "Doctrine.html", "name": "Doctrine", "doc": "Namespace Doctrine"},{"type": "Namespace", "link": "Doctrine/Common.html", "name": "Doctrine\\Common", "doc": "Namespace Doctrine\\Common"},{"type": "Namespace", "link": "Doctrine/Common/Reflection.html", "name": "Doctrine\\Common\\Reflection", "doc": "Namespace Doctrine\\Common\\Reflection"},
            {"type": "Interface", "fromName": "Doctrine\\Common\\Reflection", "fromLink": "Doctrine/Common/Reflection.html", "link": "Doctrine/Common/Reflection/ClassFinderInterface.html", "name": "Doctrine\\Common\\Reflection\\ClassFinderInterface", "doc": "&quot;Finds a class in a PSR-0 structure.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\ClassFinderInterface", "fromLink": "Doctrine/Common/Reflection/ClassFinderInterface.html", "link": "Doctrine/Common/Reflection/ClassFinderInterface.html#method_findFile", "name": "Doctrine\\Common\\Reflection\\ClassFinderInterface::findFile", "doc": "&quot;Finds a class.&quot;"},
            
            {"type": "Interface", "fromName": "Doctrine\\Common\\Reflection", "fromLink": "Doctrine/Common/Reflection.html", "link": "Doctrine/Common/Reflection/ReflectionProviderInterface.html", "name": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface", "fromLink": "Doctrine/Common/Reflection/ReflectionProviderInterface.html", "link": "Doctrine/Common/Reflection/ReflectionProviderInterface.html#method_getReflectionClass", "name": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface::getReflectionClass", "doc": "&quot;Gets the ReflectionClass equivalent for this class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface", "fromLink": "Doctrine/Common/Reflection/ReflectionProviderInterface.html", "link": "Doctrine/Common/Reflection/ReflectionProviderInterface.html#method_getReflectionMethod", "name": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface::getReflectionMethod", "doc": "&quot;Gets the ReflectionMethod equivalent for this class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface", "fromLink": "Doctrine/Common/Reflection/ReflectionProviderInterface.html", "link": "Doctrine/Common/Reflection/ReflectionProviderInterface.html#method_getReflectionProperty", "name": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface::getReflectionProperty", "doc": "&quot;Gets the ReflectionProperty equivalent for this class.&quot;"},
            
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Reflection", "fromLink": "Doctrine/Common/Reflection.html", "link": "Doctrine/Common/Reflection/ClassFinderInterface.html", "name": "Doctrine\\Common\\Reflection\\ClassFinderInterface", "doc": "&quot;Finds a class in a PSR-0 structure.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\ClassFinderInterface", "fromLink": "Doctrine/Common/Reflection/ClassFinderInterface.html", "link": "Doctrine/Common/Reflection/ClassFinderInterface.html#method_findFile", "name": "Doctrine\\Common\\Reflection\\ClassFinderInterface::findFile", "doc": "&quot;Finds a class.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Reflection", "fromLink": "Doctrine/Common/Reflection.html", "link": "Doctrine/Common/Reflection/Psr0FindFile.html", "name": "Doctrine\\Common\\Reflection\\Psr0FindFile", "doc": "&quot;Finds a class in a PSR-0 structure.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\Psr0FindFile", "fromLink": "Doctrine/Common/Reflection/Psr0FindFile.html", "link": "Doctrine/Common/Reflection/Psr0FindFile.html#method___construct", "name": "Doctrine\\Common\\Reflection\\Psr0FindFile::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\Psr0FindFile", "fromLink": "Doctrine/Common/Reflection/Psr0FindFile.html", "link": "Doctrine/Common/Reflection/Psr0FindFile.html#method_findFile", "name": "Doctrine\\Common\\Reflection\\Psr0FindFile::findFile", "doc": "&quot;Finds a class.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Reflection", "fromLink": "Doctrine/Common/Reflection.html", "link": "Doctrine/Common/Reflection/ReflectionProviderInterface.html", "name": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface", "fromLink": "Doctrine/Common/Reflection/ReflectionProviderInterface.html", "link": "Doctrine/Common/Reflection/ReflectionProviderInterface.html#method_getReflectionClass", "name": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface::getReflectionClass", "doc": "&quot;Gets the ReflectionClass equivalent for this class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface", "fromLink": "Doctrine/Common/Reflection/ReflectionProviderInterface.html", "link": "Doctrine/Common/Reflection/ReflectionProviderInterface.html#method_getReflectionMethod", "name": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface::getReflectionMethod", "doc": "&quot;Gets the ReflectionMethod equivalent for this class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface", "fromLink": "Doctrine/Common/Reflection/ReflectionProviderInterface.html", "link": "Doctrine/Common/Reflection/ReflectionProviderInterface.html#method_getReflectionProperty", "name": "Doctrine\\Common\\Reflection\\ReflectionProviderInterface::getReflectionProperty", "doc": "&quot;Gets the ReflectionProperty equivalent for this class.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Reflection", "fromLink": "Doctrine/Common/Reflection.html", "link": "Doctrine/Common/Reflection/RuntimePublicReflectionProperty.html", "name": "Doctrine\\Common\\Reflection\\RuntimePublicReflectionProperty", "doc": "&quot;PHP Runtime Reflection Public Property - special overrides for public properties.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\RuntimePublicReflectionProperty", "fromLink": "Doctrine/Common/Reflection/RuntimePublicReflectionProperty.html", "link": "Doctrine/Common/Reflection/RuntimePublicReflectionProperty.html#method_getValue", "name": "Doctrine\\Common\\Reflection\\RuntimePublicReflectionProperty::getValue", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\RuntimePublicReflectionProperty", "fromLink": "Doctrine/Common/Reflection/RuntimePublicReflectionProperty.html", "link": "Doctrine/Common/Reflection/RuntimePublicReflectionProperty.html#method_setValue", "name": "Doctrine\\Common\\Reflection\\RuntimePublicReflectionProperty::setValue", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Reflection", "fromLink": "Doctrine/Common/Reflection.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method___construct", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getDocComment", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getDocComment", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getNamespaceName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getNamespaceName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getUseStatements", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getUseStatements", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getMethod", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getMethod", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getProperty", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getProperty", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_export", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::export", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getConstant", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getConstant", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getConstants", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getConstants", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getConstructor", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getConstructor", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getDefaultProperties", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getDefaultProperties", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getEndLine", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getEndLine", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getExtension", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getExtension", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getExtensionName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getExtensionName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getFileName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getFileName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getInterfaceNames", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getInterfaceNames", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getInterfaces", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getInterfaces", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getMethods", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getMethods", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getModifiers", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getModifiers", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getParentClass", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getParentClass", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getProperties", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getProperties", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getShortName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getShortName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getStartLine", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getStartLine", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getStaticProperties", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getStaticProperties", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getStaticPropertyValue", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getStaticPropertyValue", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getTraitAliases", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getTraitAliases", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getTraitNames", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getTraitNames", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_getTraits", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::getTraits", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_hasConstant", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::hasConstant", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_hasMethod", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::hasMethod", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_hasProperty", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::hasProperty", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_implementsInterface", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::implementsInterface", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_inNamespace", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::inNamespace", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isAbstract", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isAbstract", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isCloneable", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isCloneable", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isFinal", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isFinal", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isInstance", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isInstance", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isInstantiable", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isInstantiable", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isInterface", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isInterface", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isInternal", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isInternal", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isIterateable", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isIterateable", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isSubclassOf", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isSubclassOf", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isTrait", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isTrait", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_isUserDefined", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::isUserDefined", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_newInstance", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::newInstance", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_newInstanceArgs", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::newInstanceArgs", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_newInstanceWithoutConstructor", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::newInstanceWithoutConstructor", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method_setStaticPropertyValue", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::setStaticPropertyValue", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionClass", "fromLink": "Doctrine/Common/Reflection/StaticReflectionClass.html", "link": "Doctrine/Common/Reflection/StaticReflectionClass.html#method___toString", "name": "Doctrine\\Common\\Reflection\\StaticReflectionClass::__toString", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Reflection", "fromLink": "Doctrine/Common/Reflection.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method___construct", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getStaticReflectionParser", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getStaticReflectionParser", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getDeclaringClass", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getDeclaringClass", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getNamespaceName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getNamespaceName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getDocComment", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getDocComment", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getUseStatements", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getUseStatements", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_export", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::export", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getClosure", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getClosure", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getModifiers", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getModifiers", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getPrototype", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getPrototype", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_invoke", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::invoke", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_invokeArgs", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::invokeArgs", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isAbstract", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isAbstract", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isConstructor", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isConstructor", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isDestructor", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isDestructor", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isFinal", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isFinal", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isPrivate", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isPrivate", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isProtected", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isProtected", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isPublic", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isPublic", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isStatic", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isStatic", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_setAccessible", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::setAccessible", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method___toString", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::__toString", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getClosureThis", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getClosureThis", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getEndLine", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getEndLine", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getExtension", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getExtension", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getExtensionName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getExtensionName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getFileName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getFileName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getNumberOfParameters", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getNumberOfParameters", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getNumberOfRequiredParameters", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getNumberOfRequiredParameters", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getParameters", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getParameters", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getShortName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getShortName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getStartLine", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getStartLine", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_getStaticVariables", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::getStaticVariables", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_inNamespace", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::inNamespace", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isClosure", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isClosure", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isDeprecated", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isDeprecated", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isInternal", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isInternal", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_isUserDefined", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::isUserDefined", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionMethod", "fromLink": "Doctrine/Common/Reflection/StaticReflectionMethod.html", "link": "Doctrine/Common/Reflection/StaticReflectionMethod.html#method_returnsReference", "name": "Doctrine\\Common\\Reflection\\StaticReflectionMethod::returnsReference", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Reflection", "fromLink": "Doctrine/Common/Reflection.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "doc": "&quot;Parses a file for namespaces\/use\/class declarations.&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method___construct", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::__construct", "doc": "&quot;Parses a class residing in a PSR-0 hierarchy.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method_parse", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::parse", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method_getParentStaticReflectionParser", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::getParentStaticReflectionParser", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method_getClassName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::getClassName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method_getNamespaceName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::getNamespaceName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method_getReflectionClass", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::getReflectionClass", "doc": "&quot;Gets the ReflectionClass equivalent for this class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method_getReflectionMethod", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::getReflectionMethod", "doc": "&quot;Gets the ReflectionMethod equivalent for this class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method_getReflectionProperty", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::getReflectionProperty", "doc": "&quot;Gets the ReflectionProperty equivalent for this class.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method_getUseStatements", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::getUseStatements", "doc": "&quot;Gets the use statements from this file.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method_getDocComment", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::getDocComment", "doc": "&quot;Gets the doc comment.&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionParser", "fromLink": "Doctrine/Common/Reflection/StaticReflectionParser.html", "link": "Doctrine/Common/Reflection/StaticReflectionParser.html#method_getStaticReflectionParserForDeclaringClass", "name": "Doctrine\\Common\\Reflection\\StaticReflectionParser::getStaticReflectionParserForDeclaringClass", "doc": "&quot;Gets the PSR-0 parser for the declaring class.&quot;"},
            
            {"type": "Class", "fromName": "Doctrine\\Common\\Reflection", "fromLink": "Doctrine/Common/Reflection.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method___construct", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_getName", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::getName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_getStaticReflectionParser", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::getStaticReflectionParser", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_getDeclaringClass", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::getDeclaringClass", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_getDocComment", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::getDocComment", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_getUseStatements", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::getUseStatements", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_export", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::export", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_getModifiers", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::getModifiers", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_getValue", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::getValue", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_isDefault", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::isDefault", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_isPrivate", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::isPrivate", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_isProtected", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::isProtected", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_isPublic", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::isPublic", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_isStatic", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::isStatic", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_setAccessible", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::setAccessible", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method_setValue", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::setValue", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "Doctrine\\Common\\Reflection\\StaticReflectionProperty", "fromLink": "Doctrine/Common/Reflection/StaticReflectionProperty.html", "link": "Doctrine/Common/Reflection/StaticReflectionProperty.html#method___toString", "name": "Doctrine\\Common\\Reflection\\StaticReflectionProperty::__toString", "doc": "&quot;{@inheritDoc}&quot;"},
            
            
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


