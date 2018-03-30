---
layout: default
indexed: true
title: 
docsSlug: doctrine-phpcr-odm
docsPage: true
docsIndex: false
docsVersion: latest
permalink: none
---
<?php return array (
  'index' => 
  array (
    'file' => 'index',
    'url' => 'index.html',
    'title' => 'Doctrine PHP Content Repository ODM documentation',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Doctrine PHP Content Repository ODM documentation',
        1 => 
        array (
          0 => 
          array (
            0 => 'Getting Help',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Getting Started',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Mapping Objects onto a Document Repository',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Working with Objects',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Advanced Topics',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => 'Cookbook',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/introduction',
      1 => 'reference/architecture',
      2 => 'reference/installation-configuration',
      3 => 'reference/tools',
      4 => 'reference/basic-mapping',
      5 => 'reference/association-mapping',
      6 => 'reference/inheritance-mapping',
      7 => 'reference/annotations-mapping',
      8 => 'reference/xml-mapping',
      9 => 'reference/yml-mapping',
      10 => 'reference/metadata-drivers',
      11 => 'reference/working-with-objects',
      12 => 'reference/events',
      13 => 'reference/query-builder',
      14 => 'reference/query-builder-reference',
      15 => 'reference/query',
      16 => 'reference/phpcr-access',
      17 => 'reference/multilang',
      18 => 'reference/versioning',
      19 => 'reference/transactions',
      20 => 'reference/fetch-depth',
      21 => 'cookbook/last-modified',
      22 => 'cookbook/custom_documentclass_mapper',
      23 => 'cookbook/refactoring-multilang',
    ),
  ),
  'reference/introduction' => 
  array (
    'file' => 'reference/introduction',
    'url' => 'reference/introduction.html',
    'title' => 'Getting Started',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Getting Started',
        1 => 
        array (
          0 => 
          array (
            0 => 'What are Documents?',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'An Example Model: Document Management',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Setup Project',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Building the model',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Initialize the repository',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => 'Storing documents',
            1 => 
            array (
            ),
          ),
          6 => 
          array (
            0 => 'Reading documents',
            1 => 
            array (
            ),
          ),
          7 => 
          array (
            0 => 'Tree traversal',
            1 => 
            array (
            ),
          ),
          8 => 
          array (
            0 => 'Add references',
            1 => 
            array (
            ),
          ),
          9 => 
          array (
            0 => 'Removing documents',
            1 => 
            array (
            ),
          ),
          10 => 
          array (
            0 => 'Other helpful methods on the DocumentManager',
            1 => 
            array (
            ),
          ),
          11 => 
          array (
            0 => 'Conclusion',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/architecture',
      1 => 'reference/basic-mapping',
      2 => 'reference/workingobjects-query',
    ),
  ),
  'reference/architecture' => 
  array (
    'file' => 'reference/architecture',
    'url' => 'reference/architecture.html',
    'title' => 'Architecture',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Architecture',
        1 => 
        array (
          0 => 
          array (
            0 => 'Doctrine PHPCR-ODM Packages',
            1 => 
            array (
              0 => 
              array (
                0 => 'Content tree, not tables',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Additional core features',
                1 => 
                array (
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/versioning',
      1 => 'reference/multilang',
    ),
  ),
  'reference/installation-configuration' => 
  array (
    'file' => 'reference/installation-configuration',
    'url' => 'reference/installation-configuration.html',
    'title' => 'Installation',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Installation',
        1 => 
        array (
          0 => 
          array (
            0 => 'Composer',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'PHPCR provider',
            1 => 
            array (
              0 => 
              array (
                0 => 'Install Jackalope-Jackrabbit PHCPR provider',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Install Jackalope Doctrine DBAL PHPCR provider',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Install Midgard2 PHPCR provider',
                1 => 
                array (
                ),
              ),
            ),
          ),
        ),
      ),
      1 => 
      array (
        0 => 'Configuration',
        1 => 
        array (
          0 => 
          array (
            0 => 'Class loading with composer',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Obtaining an ObjectManager',
            1 => 
            array (
              0 => 
              array (
                0 => 'Prepare the mapping driver',
                1 => 
                array (
                  0 => 
                  array (
                    0 => 'Annotation Mapping Driver',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => 'XML Mapping Driver',
                    1 => 
                    array (
                    ),
                  ),
                  2 => 
                  array (
                    0 => 'YML Mapping Driver',
                    1 => 
                    array (
                    ),
                  ),
                ),
              ),
              1 => 
              array (
                0 => 'Quick Configuration Example',
                1 => 
                array (
                ),
              ),
            ),
          ),
          2 => 
          array (
            0 => 'Configuration Options',
            1 => 
            array (
              0 => 
              array (
                0 => 'Proxy Directory (<strong><em>REQUIRED</strong></em>)',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Proxy Namespace (<strong><em>REQUIRED</strong></em>)',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Metadata Driver (<strong><em>REQUIRED</strong></em>)',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => 'Metadata Cache (<strong><em>RECOMMENDED</strong></em>)',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => 'Auto-generating Proxy Classes (<strong><em>OPTIONAL</strong></em>)',
                1 => 
                array (
                ),
              ),
            ),
          ),
          3 => 
          array (
            0 => 'Development vs Production Configuration',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Connection Options',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => 'Proxy Objects',
            1 => 
            array (
              0 => 
              array (
                0 => 'Reference Proxies',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Generating Proxy classes',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Autoloading Proxies',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => 'Multiple Metadata Sources',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => 'Default Repository (<strong><em>OPTIONAL</strong></em>)',
                1 => 
                array (
                ),
              ),
            ),
          ),
          6 => 
          array (
            0 => 'Setting up the Console',
            1 => 
            array (
              0 => 
              array (
                0 => 'Register system node types',
                1 => 
                array (
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/installation_configuration_console',
      1 => 'reference/installation_proxy-objects',
      2 => 'reference/tools',
    ),
  ),
  'reference/tools' => 
  array (
    'file' => 'reference/tools',
    'url' => 'reference/tools.html',
    'title' => 'Tools',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Tools',
        1 => 
        array (
          0 => 
          array (
            0 => 'Doctrine Console',
            1 => 
            array (
              0 => 
              array (
                0 => 'Command Overview',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Getting documentation of a command',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'PHPCR implementation specific commands',
                1 => 
                array (
                  0 => 
                  array (
                    0 => 'Jackrabbit specific commands',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => 'Doctrine DBAL specific commands',
                    1 => 
                    array (
                    ),
                  ),
                ),
              ),
            ),
          ),
          1 => 
          array (
            0 => 'Register system node types',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Adding your own commands',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/installation_configuration_console',
    ),
  ),
  'reference/basic-mapping' => 
  array (
    'file' => 'reference/basic-mapping',
    'url' => 'reference/basic-mapping.html',
    'title' => 'Basic Mapping',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Basic Mapping',
        1 => 
        array (
          0 => 
          array (
            0 => 'Mapping Drivers',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Introduction to Docblock Annotations',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Persistent classes',
            1 => 
            array (
              0 => 
              array (
                0 => 'Specify a node type',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Specify a repository class',
                1 => 
                array (
                ),
              ),
            ),
          ),
          3 => 
          array (
            0 => 'Doctrine Mapping Types',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Property Mapping',
            1 => 
            array (
              0 => 
              array (
                0 => 'Mapping to a differently named PHPCR property',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Mapping multivalue properties',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Summary',
                1 => 
                array (
                ),
              ),
            ),
          ),
          5 => 
          array (
            0 => 'Identifiers',
            1 => 
            array (
              0 => 
              array (
                0 => 'Identifier Generation Strategies',
                1 => 
                array (
                  0 => 
                  array (
                    0 => 'Parent and name strategy (recommended)',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => 'Assigned Id',
                    1 => 
                    array (
                    ),
                  ),
                  2 => 
                  array (
                    0 => 'Repository strategy',
                    1 => 
                    array (
                    ),
                  ),
                ),
              ),
            ),
          ),
          6 => 
          array (
            0 => 'Symfony bundle',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/association-mapping_referenceable',
      1 => 'reference/multilang',
      2 => 'reference/versioning',
      3 => 'reference/association-mapping_referenceable',
      4 => 'reference/association-mapping',
    ),
  ),
  'reference/association-mapping' => 
  array (
    'file' => 'reference/association-mapping',
    'url' => 'reference/association-mapping.html',
    'title' => 'Association Mapping',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Association Mapping',
        1 => 
        array (
          0 => 
          array (
            0 => 'Hierarchy mappings',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'References',
            1 => 
            array (
              0 => 
              array (
                0 => 'Referenceable documents',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Reference other documents',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Referrers to inverse the reference relation',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => 'MixedReferrers',
                1 => 
                array (
                ),
              ),
            ),
          ),
          2 => 
          array (
            0 => 'Transitive persistence / Cascade Operations',
            1 => 
            array (
              0 => 
              array (
                0 => 'Persistence by Reachability: Cascade Persist',
                1 => 
                array (
                ),
              ),
            ),
          ),
          3 => 
          array (
            0 => 'Collections',
            1 => 
            array (
              0 => 
              array (
                0 => 'Initializing Collections',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'New Collections after Flushing',
                1 => 
                array (
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/collections',
      1 => 'reference/fetch-depth',
    ),
  ),
  'reference/inheritance-mapping' => 
  array (
    'file' => 'reference/inheritance-mapping',
    'url' => 'reference/inheritance-mapping.html',
    'title' => 'Inheritance Mapping',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Inheritance Mapping',
        1 => 
        array (
          0 => 
          array (
            0 => 'Document class inheritance',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
    ),
  ),
  'reference/annotations-mapping' => 
  array (
    'file' => 'reference/annotations-mapping',
    'url' => 'reference/annotations-mapping.html',
    'title' => 'Annotation Mapping',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Annotation Mapping',
        1 => 
        array (
          0 => 
          array (
            0 => 'Note on usage',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Document',
            1 => 
            array (
              0 => 
              array (
                0 => '@Document',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => '@MappedSuperclass',
                1 => 
                array (
                ),
              ),
            ),
          ),
          2 => 
          array (
            0 => 'Mapping Fields',
            1 => 
            array (
              0 => 
              array (
                0 => '@Field',
                1 => 
                array (
                ),
              ),
            ),
          ),
          3 => 
          array (
            0 => 'Hierarchy',
            1 => 
            array (
              0 => 
              array (
                0 => '@Child',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => '@Children',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => '@Depth',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => '@ParentDocument',
                1 => 
                array (
                ),
              ),
            ),
          ),
          4 => 
          array (
            0 => 'Identification',
            1 => 
            array (
              0 => 
              array (
                0 => '@Id',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => '@Nodename',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => '@Uuid',
                1 => 
                array (
                ),
              ),
            ),
          ),
          5 => 
          array (
            0 => 'Lifecycle callbacks',
            1 => 
            array (
              0 => 
              array (
                0 => '@PostLoad',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => '@PostPersist',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => '@PostRemove',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => '@PostUpdate',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => '@PrePersist',
                1 => 
                array (
                ),
              ),
              5 => 
              array (
                0 => '@PreRemove',
                1 => 
                array (
                ),
              ),
              6 => 
              array (
                0 => '@PreUpdate',
                1 => 
                array (
                ),
              ),
            ),
          ),
          6 => 
          array (
            0 => 'PHPCR',
            1 => 
            array (
              0 => 
              array (
                0 => '@Node',
                1 => 
                array (
                ),
              ),
            ),
          ),
          7 => 
          array (
            0 => 'References',
            1 => 
            array (
              0 => 
              array (
                0 => '@ReferenceMany',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => '@ReferenceOne',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => '@Referrers',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => '@MixedReferrers',
                1 => 
                array (
                ),
              ),
            ),
          ),
          8 => 
          array (
            0 => 'Translation',
            1 => 
            array (
              0 => 
              array (
                0 => '@Locale',
                1 => 
                array (
                ),
              ),
            ),
          ),
          9 => 
          array (
            0 => 'Versioning',
            1 => 
            array (
              0 => 
              array (
                0 => '@VersionCreated',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => '@VersionName',
                1 => 
                array (
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/_qbref_method_querybuilder_addjoinleftouter',
      1 => 'reference/_qbref_method_querybuilder_addjoinrightouter',
      2 => 'reference/tools',
      3 => 'reference/versioning',
      4 => 'reference/multilang_mapping',
      5 => 'reference/inheritance-mapping',
      6 => 'reference/multilang_mapping',
      7 => 'reference/basicmapping_mappingmultivalueproperties',
      8 => 'reference/annref_document',
      9 => 'reference/assocmap_cascading',
      10 => 'reference/assocmap_cascading',
      11 => 'reference/assocmap_cascading',
      12 => 'reference/basicmapping_identifiers',
      13 => 'reference/basicmapping_identifier_generation_strategies',
      14 => 'reference/annref_id',
      15 => 'reference/events_lifecyclecallbacks',
      16 => 'reference/events_lifecyclecallbacks',
      17 => 'reference/events_lifecyclecallbacks',
      18 => 'reference/events_lifecyclecallbacks',
      19 => 'reference/events_lifecyclecallbacks',
      20 => 'reference/events_lifecyclecallbacks',
      21 => 'reference/events_lifecyclecallbacks',
      22 => 'reference/events_lifecyclecallbacks',
      23 => 'reference/phpcraccess_nodefieldmapping',
      24 => 'reference/associationmapping_referenceotherdocuments',
      25 => 'reference/associationmapping_referenceotherdocuments',
      26 => 'reference/assocmap_cascading',
      27 => 'reference/assocmap_cascading',
      28 => 'reference/annref_document',
      29 => 'reference/annref_document',
      30 => 'reference/versioning_mappings',
    ),
  ),
  'reference/xml-mapping' => 
  array (
    'file' => 'reference/xml-mapping',
    'url' => 'reference/xml-mapping.html',
    'title' => 'XML Mapping',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'XML Mapping',
        1 => 
        array (
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/annotations-mapping',
    ),
  ),
  'reference/yml-mapping' => 
  array (
    'file' => 'reference/yml-mapping',
    'url' => 'reference/yml-mapping.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/metadata-drivers' => 
  array (
    'file' => 'reference/metadata-drivers',
    'url' => 'reference/metadata-drivers.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/working-with-objects' => 
  array (
    'file' => 'reference/working-with-objects',
    'url' => 'reference/working-with-objects.html',
    'title' => 'Working with Objects',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Working with Objects',
        1 => 
        array (
          0 => 
          array (
            0 => 'Documents and the Identity Map',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Document Graph Traversal',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Persisting documents',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Removing documents',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Detaching documents',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => 'Merging documents',
            1 => 
            array (
            ),
          ),
          6 => 
          array (
            0 => 'Synchronization with the Repository',
            1 => 
            array (
              0 => 
              array (
                0 => 'Effects of Repository and UnitOfWork being Out-Of-Sync',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Synchronizing New and Managed Documents',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Synchronizing Removed Documents',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => 'The size of a Unit of Work',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => 'The cost of flushing',
                1 => 
                array (
                ),
              ),
              5 => 
              array (
                0 => 'Direct Access to a Unit of Work',
                1 => 
                array (
                ),
              ),
              6 => 
              array (
                0 => 'Document State',
                1 => 
                array (
                ),
              ),
            ),
          ),
          7 => 
          array (
            0 => 'Querying',
            1 => 
            array (
              0 => 
              array (
                0 => 'By Primary Key',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'By Simple Conditions',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'By Lazy Loading',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => 'By Query Builder',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => 'By Native Queries',
                1 => 
                array (
                ),
              ),
              5 => 
              array (
                0 => 'Custom Repositories',
                1 => 
                array (
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/workingobjects_repository_uow_outofsync',
      1 => 'reference/query-builder',
    ),
  ),
  'reference/events' => 
  array (
    'file' => 'reference/events',
    'url' => 'reference/events.html',
    'title' => 'Events',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Events',
        1 => 
        array (
          0 => 
          array (
            0 => 'Lifecycle Events',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Event order when moving',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Event order when handling with translations',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Listening to events',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Lifecycle Callbacks',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => 'Listening to Lifecycle Events',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
    ),
  ),
  'reference/query-builder' => 
  array (
    'file' => 'reference/query-builder',
    'url' => 'reference/query-builder.html',
    'title' => 'The QueryBuilder',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'The QueryBuilder',
        1 => 
        array (
          0 => 
          array (
            0 => 'Concepts',
            1 => 
            array (
              0 => 
              array (
                0 => 'Leaf and Factory Nodes',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Fluent Interface',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Types and Cardinality',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => 'Aliases and fields',
                1 => 
                array (
                ),
              ),
            ),
          ),
          1 => 
          array (
            0 => 'Retrieving a query builder instance',
            1 => 
            array (
              0 => 
              array (
                0 => 'Via the document manager',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Via a document repository',
                1 => 
                array (
                ),
              ),
            ),
          ),
          2 => 
          array (
            0 => 'Working with the QueryBuilder',
            1 => 
            array (
              0 => 
              array (
                0 => 'Specifying the document source - from',
                1 => 
                array (
                  0 => 
                  array (
                    0 => 'From Single Source',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => 'From Joined Source',
                    1 => 
                    array (
                    ),
                  ),
                  2 => 
                  array (
                    0 => 'Joining with an Association',
                    1 => 
                    array (
                    ),
                  ),
                ),
              ),
              1 => 
              array (
                0 => 'Selecting specific properties - select',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Limiting the number of results',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => 'Specifying selection criteria',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => 'Ordering results',
                1 => 
                array (
                ),
              ),
              5 => 
              array (
                0 => 'Querying translated documents',
                1 => 
                array (
                ),
              ),
            ),
          ),
          3 => 
          array (
            0 => 'Additional notes',
            1 => 
            array (
              0 => 
              array (
                0 => 'Querying multivalue fields',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Using the Query Builder in Tests',
                1 => 
                array (
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/queryref',
      1 => 'reference/query-builder-reference',
      2 => 'reference/query-builder-reference',
      3 => 'reference/qbref_node_querybuilder',
      4 => 'reference/qbref_method_querybuilder_from',
      5 => 'reference/queryref_hydration',
      6 => 'reference/multilang',
    ),
  ),
  'reference/query-builder-reference' => 
  array (
    'file' => 'reference/query-builder-reference',
    'url' => 'reference/query-builder-reference.html',
    'title' => 'Query Builder Reference',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Query Builder Reference',
        1 => 
        array (
          0 => 
          array (
            0 => 'Reference',
            1 => 
            array (
              0 => 
              array (
                0 => 'Node: ConstraintAndx',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Node: ConstraintComparison',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Node: ConstraintFactory',
                1 => 
                array (
                  0 => 
                  array (
                    0 => '-&gt;andX',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => '-&gt;orX',
                    1 => 
                    array (
                    ),
                  ),
                  2 => 
                  array (
                    0 => '-&gt;fieldIsset',
                    1 => 
                    array (
                    ),
                  ),
                  3 => 
                  array (
                    0 => '-&gt;fullTextSearch',
                    1 => 
                    array (
                    ),
                  ),
                  4 => 
                  array (
                    0 => '-&gt;same',
                    1 => 
                    array (
                    ),
                  ),
                  5 => 
                  array (
                    0 => '-&gt;descendant',
                    1 => 
                    array (
                    ),
                  ),
                  6 => 
                  array (
                    0 => '-&gt;child',
                    1 => 
                    array (
                    ),
                  ),
                  7 => 
                  array (
                    0 => '-&gt;eq',
                    1 => 
                    array (
                    ),
                  ),
                  8 => 
                  array (
                    0 => '-&gt;neq',
                    1 => 
                    array (
                    ),
                  ),
                  9 => 
                  array (
                    0 => '-&gt;lt',
                    1 => 
                    array (
                    ),
                  ),
                  10 => 
                  array (
                    0 => '-&gt;lte',
                    1 => 
                    array (
                    ),
                  ),
                  11 => 
                  array (
                    0 => '-&gt;gt',
                    1 => 
                    array (
                    ),
                  ),
                  12 => 
                  array (
                    0 => '-&gt;gte',
                    1 => 
                    array (
                    ),
                  ),
                  13 => 
                  array (
                    0 => '-&gt;like',
                    1 => 
                    array (
                    ),
                  ),
                ),
              ),
              3 => 
              array (
                0 => 'Node: ConstraintNot',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => 'Node: ConstraintOrx',
                1 => 
                array (
                ),
              ),
              5 => 
              array (
                0 => 'Node: From',
                1 => 
                array (
                ),
              ),
              6 => 
              array (
                0 => 'Node: OperandDynamicFactory',
                1 => 
                array (
                  0 => 
                  array (
                    0 => '-&gt;fullTextSearchScore',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => '-&gt;length',
                    1 => 
                    array (
                    ),
                  ),
                  2 => 
                  array (
                    0 => '-&gt;lowerCase',
                    1 => 
                    array (
                    ),
                  ),
                  3 => 
                  array (
                    0 => '-&gt;upperCase',
                    1 => 
                    array (
                    ),
                  ),
                  4 => 
                  array (
                    0 => '-&gt;localName',
                    1 => 
                    array (
                    ),
                  ),
                  5 => 
                  array (
                    0 => '-&gt;name',
                    1 => 
                    array (
                    ),
                  ),
                  6 => 
                  array (
                    0 => '-&gt;field',
                    1 => 
                    array (
                    ),
                  ),
                ),
              ),
              7 => 
              array (
                0 => 'Node: OperandDynamicLowerCase',
                1 => 
                array (
                ),
              ),
              8 => 
              array (
                0 => 'Node: OperandDynamicUpperCase',
                1 => 
                array (
                ),
              ),
              9 => 
              array (
                0 => 'Node: OperandFactory',
                1 => 
                array (
                  0 => 
                  array (
                    0 => '-&gt;parameter',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => '-&gt;literal',
                    1 => 
                    array (
                    ),
                  ),
                ),
              ),
              10 => 
              array (
                0 => 'Node: OperandStaticFactory',
                1 => 
                array (
                ),
              ),
              11 => 
              array (
                0 => 'Node: OrderBy',
                1 => 
                array (
                  0 => 
                  array (
                    0 => '-&gt;asc',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => '-&gt;desc',
                    1 => 
                    array (
                    ),
                  ),
                ),
              ),
              12 => 
              array (
                0 => 'Node: OrderByAdd',
                1 => 
                array (
                ),
              ),
              13 => 
              array (
                0 => 'Node: Ordering',
                1 => 
                array (
                ),
              ),
              14 => 
              array (
                0 => 'Node: QueryBuilder',
                1 => 
                array (
                  0 => 
                  array (
                    0 => '-&gt;where',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => '-&gt;andWhere',
                    1 => 
                    array (
                    ),
                  ),
                  2 => 
                  array (
                    0 => '-&gt;orWhere',
                    1 => 
                    array (
                    ),
                  ),
                  3 => 
                  array (
                    0 => '-&gt;from',
                    1 => 
                    array (
                    ),
                  ),
                  4 => 
                  array (
                    0 => '-&gt;fromDocument',
                    1 => 
                    array (
                    ),
                  ),
                  5 => 
                  array (
                    0 => '-&gt;addJoinLeftOuter',
                    1 => 
                    array (
                    ),
                  ),
                  6 => 
                  array (
                    0 => '-&gt;addJoinRightOuter',
                    1 => 
                    array (
                    ),
                  ),
                  7 => 
                  array (
                    0 => '-&gt;addJoinInner',
                    1 => 
                    array (
                    ),
                  ),
                  8 => 
                  array (
                    0 => '-&gt;select',
                    1 => 
                    array (
                    ),
                  ),
                  9 => 
                  array (
                    0 => '-&gt;addSelect',
                    1 => 
                    array (
                    ),
                  ),
                  10 => 
                  array (
                    0 => '-&gt;orderBy',
                    1 => 
                    array (
                    ),
                  ),
                  11 => 
                  array (
                    0 => '-&gt;addOrderBy',
                    1 => 
                    array (
                    ),
                  ),
                ),
              ),
              15 => 
              array (
                0 => 'Node: Select',
                1 => 
                array (
                ),
              ),
              16 => 
              array (
                0 => 'Node: SelectAdd',
                1 => 
                array (
                ),
              ),
              17 => 
              array (
                0 => 'Node: SourceJoin',
                1 => 
                array (
                ),
              ),
              18 => 
              array (
                0 => 'Node: SourceJoinConditionFactory',
                1 => 
                array (
                  0 => 
                  array (
                    0 => '-&gt;descendant',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => '-&gt;equi',
                    1 => 
                    array (
                    ),
                  ),
                  2 => 
                  array (
                    0 => '-&gt;child',
                    1 => 
                    array (
                    ),
                  ),
                  3 => 
                  array (
                    0 => '-&gt;same',
                    1 => 
                    array (
                    ),
                  ),
                ),
              ),
              19 => 
              array (
                0 => 'Node: SourceJoinLeft',
                1 => 
                array (
                ),
              ),
              20 => 
              array (
                0 => 'Node: SourceJoinRight',
                1 => 
                array (
                ),
              ),
              21 => 
              array (
                0 => 'Node: Where',
                1 => 
                array (
                ),
              ),
              22 => 
              array (
                0 => 'Node: WhereAnd',
                1 => 
                array (
                ),
              ),
              23 => 
              array (
                0 => 'Node: WhereOr',
                1 => 
                array (
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/qbref_type_constraint',
      1 => 'reference/qbref_node_constraintfactory',
      2 => 'reference/qbref_method_constraintfactory_andx',
      3 => 'reference/qbref_method_constraintfactory_orx',
      4 => 'reference/qbref_method_constraintfactory_fieldisset',
      5 => 'reference/qbref_method_constraintfactory_fulltextsearch',
      6 => 'reference/qbref_method_constraintfactory_same',
      7 => 'reference/qbref_method_constraintfactory_descendant',
      8 => 'reference/qbref_method_constraintfactory_child',
      9 => 'reference/qbref_method_constraintfactory_eq',
      10 => 'reference/qbref_method_constraintfactory_neq',
      11 => 'reference/qbref_method_constraintfactory_lt',
      12 => 'reference/qbref_method_constraintfactory_lte',
      13 => 'reference/qbref_method_constraintfactory_gt',
      14 => 'reference/qbref_method_constraintfactory_gte',
      15 => 'reference/qbref_method_constraintfactory_like',
      16 => 'reference/qbref_type_constraint',
      17 => 'reference/qbref_type_constraint',
      18 => 'reference/qbref_node_operandfactory',
      19 => 'reference/qbref_method_operandfactory_parameter',
      20 => 'reference/qbref_method_operandfactory_literal',
      21 => 'reference/qbref_method_operanddynamicfactory_fulltextsearchscore',
      22 => 'reference/qbref_method_operanddynamicfactory_length',
      23 => 'reference/qbref_method_operanddynamicfactory_lowercase',
      24 => 'reference/qbref_method_operanddynamicfactory_uppercase',
      25 => 'reference/qbref_method_operanddynamicfactory_localname',
      26 => 'reference/qbref_method_operanddynamicfactory_name',
      27 => 'reference/qbref_method_operanddynamicfactory_field',
      28 => 'reference/qbref_type_operand_dynamic',
      29 => 'reference/qbref_type_operand_static',
      30 => 'reference/qbref_type_constraint_factory',
      31 => 'reference/qbref_type_constraint',
      32 => 'reference/qbref_node_constraint',
      33 => 'reference/qbref_node_constraintandx',
      34 => 'reference/qbref_node_constraint',
      35 => 'reference/qbref_node_constraintorx',
      36 => 'reference/qbref_node_constraint',
      37 => 'reference/qbref_node_constraintfactory',
      38 => 'reference/qbref_node_constraint',
      39 => 'reference/qbref_node_constraintfactory',
      40 => 'reference/qbref_node_constraint',
      41 => 'reference/qbref_node_constraintfactory',
      42 => 'reference/qbref_node_constraint',
      43 => 'reference/qbref_node_constraintfactory',
      44 => 'reference/qbref_node_constraint',
      45 => 'reference/qbref_node_constraintfactory',
      46 => 'reference/qbref_node_constraint',
      47 => 'reference/qbref_node_constraintcomparison',
      48 => 'reference/qbref_node_constraint',
      49 => 'reference/qbref_node_constraintcomparison',
      50 => 'reference/qbref_node_constraint',
      51 => 'reference/qbref_node_constraintcomparison',
      52 => 'reference/qbref_node_constraint',
      53 => 'reference/qbref_node_constraintcomparison',
      54 => 'reference/qbref_node_constraint',
      55 => 'reference/qbref_node_constraintcomparison',
      56 => 'reference/qbref_node_constraint',
      57 => 'reference/qbref_node_constraintcomparison',
      58 => 'reference/qbref_node_constraint',
      59 => 'reference/qbref_node_constraintcomparison',
      60 => 'reference/qbref_type_constraint',
      61 => 'reference/qbref_node_constraintfactory',
      62 => 'reference/qbref_method_constraintfactory_andx',
      63 => 'reference/qbref_method_constraintfactory_orx',
      64 => 'reference/qbref_method_constraintfactory_fieldisset',
      65 => 'reference/qbref_method_constraintfactory_fulltextsearch',
      66 => 'reference/qbref_method_constraintfactory_same',
      67 => 'reference/qbref_method_constraintfactory_descendant',
      68 => 'reference/qbref_method_constraintfactory_child',
      69 => 'reference/qbref_method_constraintfactory_eq',
      70 => 'reference/qbref_method_constraintfactory_neq',
      71 => 'reference/qbref_method_constraintfactory_lt',
      72 => 'reference/qbref_method_constraintfactory_lte',
      73 => 'reference/qbref_method_constraintfactory_gt',
      74 => 'reference/qbref_method_constraintfactory_gte',
      75 => 'reference/qbref_method_constraintfactory_like',
      76 => 'reference/qbref_type_constraint',
      77 => 'reference/qbref_type_constraint',
      78 => 'reference/qbref_node_constraintfactory',
      79 => 'reference/qbref_method_constraintfactory_andx',
      80 => 'reference/qbref_method_constraintfactory_orx',
      81 => 'reference/qbref_method_constraintfactory_fieldisset',
      82 => 'reference/qbref_method_constraintfactory_fulltextsearch',
      83 => 'reference/qbref_method_constraintfactory_same',
      84 => 'reference/qbref_method_constraintfactory_descendant',
      85 => 'reference/qbref_method_constraintfactory_child',
      86 => 'reference/qbref_method_constraintfactory_eq',
      87 => 'reference/qbref_method_constraintfactory_neq',
      88 => 'reference/qbref_method_constraintfactory_lt',
      89 => 'reference/qbref_method_constraintfactory_lte',
      90 => 'reference/qbref_method_constraintfactory_gt',
      91 => 'reference/qbref_method_constraintfactory_gte',
      92 => 'reference/qbref_method_constraintfactory_like',
      93 => 'reference/qbref_type_constraint',
      94 => 'reference/qbref_type_from',
      95 => 'reference/qbref_type_source',
      96 => 'reference/qbref_type_operand_dynamic_factory',
      97 => 'reference/qbref_type_operand_dynamic',
      98 => 'reference/qbref_node_operand_dynamic',
      99 => 'reference/qbref_node_operanddynamicfactory',
      100 => 'reference/qbref_node_operand_dynamic',
      101 => 'reference/qbref_node_operanddynamicfactory',
      102 => 'reference/qbref_node_operand_dynamic',
      103 => 'reference/qbref_node_operanddynamiclowercase',
      104 => 'reference/qbref_node_operand_dynamic',
      105 => 'reference/qbref_node_operanddynamicuppercase',
      106 => 'reference/qbref_node_operand_dynamic',
      107 => 'reference/qbref_node_operanddynamicfactory',
      108 => 'reference/qbref_node_operand_dynamic',
      109 => 'reference/qbref_node_operanddynamicfactory',
      110 => 'reference/qbref_node_operand_dynamic',
      111 => 'reference/qbref_node_operanddynamicfactory',
      112 => 'reference/qbref_type_operand_dynamic',
      113 => 'reference/qbref_node_operanddynamicfactory',
      114 => 'reference/qbref_method_operanddynamicfactory_fulltextsearchscore',
      115 => 'reference/qbref_method_operanddynamicfactory_length',
      116 => 'reference/qbref_method_operanddynamicfactory_lowercase',
      117 => 'reference/qbref_method_operanddynamicfactory_uppercase',
      118 => 'reference/qbref_method_operanddynamicfactory_localname',
      119 => 'reference/qbref_method_operanddynamicfactory_name',
      120 => 'reference/qbref_method_operanddynamicfactory_field',
      121 => 'reference/qbref_type_operand_dynamic',
      122 => 'reference/qbref_type_operand_dynamic',
      123 => 'reference/qbref_node_operanddynamicfactory',
      124 => 'reference/qbref_method_operanddynamicfactory_fulltextsearchscore',
      125 => 'reference/qbref_method_operanddynamicfactory_length',
      126 => 'reference/qbref_method_operanddynamicfactory_lowercase',
      127 => 'reference/qbref_method_operanddynamicfactory_uppercase',
      128 => 'reference/qbref_method_operanddynamicfactory_localname',
      129 => 'reference/qbref_method_operanddynamicfactory_name',
      130 => 'reference/qbref_method_operanddynamicfactory_field',
      131 => 'reference/qbref_type_operand_dynamic',
      132 => 'reference/qbref_type_operand_dynamic_factory',
      133 => 'reference/qbref_node_operanddynamicfactory',
      134 => 'reference/qbref_method_operanddynamicfactory_fulltextsearchscore',
      135 => 'reference/qbref_method_operanddynamicfactory_length',
      136 => 'reference/qbref_method_operanddynamicfactory_lowercase',
      137 => 'reference/qbref_method_operanddynamicfactory_uppercase',
      138 => 'reference/qbref_method_operanddynamicfactory_localname',
      139 => 'reference/qbref_method_operanddynamicfactory_name',
      140 => 'reference/qbref_method_operanddynamicfactory_field',
      141 => 'reference/qbref_type_operand_dynamic',
      142 => 'reference/qbref_node_operand_static',
      143 => 'reference/qbref_node_operandfactory',
      144 => 'reference/qbref_node_operand_static',
      145 => 'reference/qbref_node_operandstaticliteral',
      146 => 'reference/qbref_type_operand_static_factory',
      147 => 'reference/qbref_node_operandfactory',
      148 => 'reference/qbref_method_operandfactory_parameter',
      149 => 'reference/qbref_method_operandfactory_literal',
      150 => 'reference/qbref_method_operanddynamicfactory_fulltextsearchscore',
      151 => 'reference/qbref_method_operanddynamicfactory_length',
      152 => 'reference/qbref_method_operanddynamicfactory_lowercase',
      153 => 'reference/qbref_method_operanddynamicfactory_uppercase',
      154 => 'reference/qbref_method_operanddynamicfactory_localname',
      155 => 'reference/qbref_method_operanddynamicfactory_name',
      156 => 'reference/qbref_method_operanddynamicfactory_field',
      157 => 'reference/qbref_type_operand_static',
      158 => 'reference/qbref_type_order_by',
      159 => 'reference/qbref_type_ordering',
      160 => 'reference/qbref_node_ordering',
      161 => 'reference/qbref_node_ordering',
      162 => 'reference/qbref_node_ordering',
      163 => 'reference/qbref_node_ordering',
      164 => 'reference/qbref_type_order_by',
      165 => 'reference/qbref_node_orderby',
      166 => 'reference/qbref_method_orderby_asc',
      167 => 'reference/qbref_method_orderby_desc',
      168 => 'reference/qbref_type_ordering',
      169 => 'reference/qbref_type_ordering',
      170 => 'reference/qbref_node_operanddynamicfactory',
      171 => 'reference/qbref_method_operanddynamicfactory_fulltextsearchscore',
      172 => 'reference/qbref_method_operanddynamicfactory_length',
      173 => 'reference/qbref_method_operanddynamicfactory_lowercase',
      174 => 'reference/qbref_method_operanddynamicfactory_uppercase',
      175 => 'reference/qbref_method_operanddynamicfactory_localname',
      176 => 'reference/qbref_method_operanddynamicfactory_name',
      177 => 'reference/qbref_method_operanddynamicfactory_field',
      178 => 'reference/qbref_type_operand_dynamic',
      179 => 'reference/qbref_type_builder',
      180 => 'reference/qbref_type_select',
      181 => 'reference/qbref_type_from',
      182 => 'reference/qbref_type_where',
      183 => 'reference/qbref_type_order_by',
      184 => 'reference/qbref_node_where',
      185 => 'reference/qbref_node_where',
      186 => 'reference/qbref_node_where',
      187 => 'reference/qbref_node_whereand',
      188 => 'reference/qbref_node_where',
      189 => 'reference/qbref_node_whereor',
      190 => 'reference/qbref_node_from',
      191 => 'reference/qbref_node_from',
      192 => 'reference/qbref_node_from',
      193 => 'reference/qbref_node_querybuilder',
      194 => 'reference/<_annref_document>',
      195 => 'reference/qbref_node_select',
      196 => 'reference/qbref_node_sourcejoin',
      197 => 'reference/<_annref_document>',
      198 => 'reference/qbref_node_select',
      199 => 'reference/qbref_node_sourcejoin',
      200 => 'reference/<_annref_document>',
      201 => 'reference/qbref_node_select',
      202 => 'reference/qbref_node_sourcejoin',
      203 => 'reference/qbref_node_select',
      204 => 'reference/qbref_node_select',
      205 => 'reference/qbref_node_select',
      206 => 'reference/qbref_node_selectadd',
      207 => 'reference/qbref_node_order_by',
      208 => 'reference/qbref_node_orderby',
      209 => 'reference/qbref_node_order_by',
      210 => 'reference/qbref_node_orderbyadd',
      211 => 'reference/qbref_type_select',
      212 => 'reference/qbref_type_property',
      213 => 'reference/qbref_type_select',
      214 => 'reference/qbref_node_select',
      215 => 'reference/qbref_type_property',
      216 => 'reference/qbref_type_source',
      217 => 'reference/qbref_type_source_join_condition_factory',
      218 => 'reference/qbref_type_source_join_left',
      219 => 'reference/qbref_type_source_join_right',
      220 => 'reference/qbref_type_source_join_condition_factory',
      221 => 'reference/qbref_type_source_join_condition',
      222 => 'reference/qbref_node_source_join_condition',
      223 => 'reference/qbref_node_sourcejoinconditionfactory',
      224 => 'reference/qbref_node_source_join_condition',
      225 => 'reference/qbref_node_sourcejoinconditionfactory',
      226 => 'reference/qbref_node_source_join_condition',
      227 => 'reference/qbref_node_sourcejoinconditionfactory',
      228 => 'reference/qbref_node_source_join_condition',
      229 => 'reference/qbref_node_sourcejoinconditionfactory',
      230 => 'reference/qbref_type_source_join_left',
      231 => 'reference/qbref_node_from',
      232 => 'reference/qbref_method_sourcefactory_document',
      233 => 'reference/qbref_method_sourcefactory_joininner',
      234 => 'reference/qbref_method_sourcefactory_joinleftouter',
      235 => 'reference/qbref_method_sourcefactory_joinrightouter',
      236 => 'reference/qbref_type_source',
      237 => 'reference/qbref_type_source_join_right',
      238 => 'reference/qbref_node_from',
      239 => 'reference/qbref_method_sourcefactory_document',
      240 => 'reference/qbref_method_sourcefactory_joininner',
      241 => 'reference/qbref_method_sourcefactory_joinleftouter',
      242 => 'reference/qbref_method_sourcefactory_joinrightouter',
      243 => 'reference/qbref_type_source',
      244 => 'reference/qbref_type_where',
      245 => 'reference/qbref_node_constraintfactory',
      246 => 'reference/qbref_method_constraintfactory_andx',
      247 => 'reference/qbref_method_constraintfactory_orx',
      248 => 'reference/qbref_method_constraintfactory_fieldisset',
      249 => 'reference/qbref_method_constraintfactory_fulltextsearch',
      250 => 'reference/qbref_method_constraintfactory_same',
      251 => 'reference/qbref_method_constraintfactory_descendant',
      252 => 'reference/qbref_method_constraintfactory_child',
      253 => 'reference/qbref_method_constraintfactory_eq',
      254 => 'reference/qbref_method_constraintfactory_neq',
      255 => 'reference/qbref_method_constraintfactory_lt',
      256 => 'reference/qbref_method_constraintfactory_lte',
      257 => 'reference/qbref_method_constraintfactory_gt',
      258 => 'reference/qbref_method_constraintfactory_gte',
      259 => 'reference/qbref_method_constraintfactory_like',
      260 => 'reference/qbref_type_constraint',
      261 => 'reference/qbref_type_where',
      262 => 'reference/qbref_node_where',
      263 => 'reference/qbref_method_constraintfactory_andx',
      264 => 'reference/qbref_method_constraintfactory_orx',
      265 => 'reference/qbref_method_constraintfactory_fieldisset',
      266 => 'reference/qbref_method_constraintfactory_fulltextsearch',
      267 => 'reference/qbref_method_constraintfactory_same',
      268 => 'reference/qbref_method_constraintfactory_descendant',
      269 => 'reference/qbref_method_constraintfactory_child',
      270 => 'reference/qbref_method_constraintfactory_eq',
      271 => 'reference/qbref_method_constraintfactory_neq',
      272 => 'reference/qbref_method_constraintfactory_lt',
      273 => 'reference/qbref_method_constraintfactory_lte',
      274 => 'reference/qbref_method_constraintfactory_gt',
      275 => 'reference/qbref_method_constraintfactory_gte',
      276 => 'reference/qbref_method_constraintfactory_like',
      277 => 'reference/qbref_type_constraint',
      278 => 'reference/qbref_type_where',
      279 => 'reference/qbref_node_where',
      280 => 'reference/qbref_method_constraintfactory_andx',
      281 => 'reference/qbref_method_constraintfactory_orx',
      282 => 'reference/qbref_method_constraintfactory_fieldisset',
      283 => 'reference/qbref_method_constraintfactory_fulltextsearch',
      284 => 'reference/qbref_method_constraintfactory_same',
      285 => 'reference/qbref_method_constraintfactory_descendant',
      286 => 'reference/qbref_method_constraintfactory_child',
      287 => 'reference/qbref_method_constraintfactory_eq',
      288 => 'reference/qbref_method_constraintfactory_neq',
      289 => 'reference/qbref_method_constraintfactory_lt',
      290 => 'reference/qbref_method_constraintfactory_lte',
      291 => 'reference/qbref_method_constraintfactory_gt',
      292 => 'reference/qbref_method_constraintfactory_gte',
      293 => 'reference/qbref_method_constraintfactory_like',
      294 => 'reference/qbref_type_constraint',
    ),
  ),
  'reference/query' => 
  array (
    'file' => 'reference/query',
    'url' => 'reference/query.html',
    'title' => 'The Query Object',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'The Query Object',
        1 => 
        array (
          0 => 
          array (
            0 => 'Getting single results',
            1 => 
            array (
              0 => 
              array (
                0 => 'getSingleResult',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'getOneOrNullResult',
                1 => 
                array (
                ),
              ),
            ),
          ),
          1 => 
          array (
            0 => 'Getting multiple results',
            1 => 
            array (
              0 => 
              array (
                0 => 'getResult',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'getPhpcrNodeResult',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'execute',
                1 => 
                array (
                ),
              ),
            ),
          ),
          2 => 
          array (
            0 => 'Hydration modes',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Limiting results',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/qbref_workingwiththequerybuilder',
      1 => 'reference/queryref_hydration',
      2 => 'reference/queryref_hydration',
      3 => 'reference/queryref_hydration',
      4 => 'reference/queryref_getresult',
    ),
  ),
  'reference/phpcr-access' => 
  array (
    'file' => 'reference/phpcr-access',
    'url' => 'reference/phpcr-access.html',
    'title' => 'Accessing the underlying PHPCR session',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Accessing the underlying PHPCR session',
        1 => 
        array (
          0 => 
          array (
            0 => 'Getting the PHPCR Session',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'The Node field mapping',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
    ),
  ),
  'reference/multilang' => 
  array (
    'file' => 'reference/multilang',
    'url' => 'reference/multilang.html',
    'title' => 'Multilanguage support',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Multilanguage support',
        1 => 
        array (
          0 => 
          array (
            0 => 'Philosophy',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Mapping',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Interacting with translations',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Choosing the right translation strategy',
            1 => 
            array (
              0 => 
              array (
                0 => 'Implementing your own translation strategy',
                1 => 
                array (
                ),
              ),
            ),
          ),
          4 => 
          array (
            0 => 'Configure the locale chooser strategy',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => 'Full Example',
            1 => 
            array (
            ),
          ),
          6 => 
          array (
            0 => 'Querying Translated Properties',
            1 => 
            array (
            ),
          ),
          7 => 
          array (
            0 => 'Limitations',
            1 => 
            array (
              0 => 
              array (
                0 => 'Translations and references / hierarchy',
                1 => 
                array (
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'cookbook/refactoring-multilang',
      1 => 'reference/qb-translation',
    ),
  ),
  'reference/versioning' => 
  array (
    'file' => 'reference/versioning',
    'url' => 'reference/versioning.html',
    'title' => 'Versioning support',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Versioning support',
        1 => 
        array (
          0 => 
          array (
            0 => 'Philosophy',
            1 => 
            array (
              0 => 
              array (
                0 => 'PHPCR-ODM',
                1 => 
                array (
                ),
              ),
            ),
          ),
          1 => 
          array (
            0 => 'Mappings',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Interacting with versions',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Full Example',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/phpcr-access',
    ),
  ),
  'reference/transactions' => 
  array (
    'file' => 'reference/transactions',
    'url' => 'reference/transactions.html',
    'title' => 'Transactions',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Transactions',
        1 => 
        array (
          0 => 
          array (
            0 => 'transactional()',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
    ),
  ),
  'reference/fetch-depth' => 
  array (
    'file' => 'reference/fetch-depth',
    'url' => 'reference/fetch-depth.html',
    'title' => 'Tuning the node preloading',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Tuning the node preloading',
        1 => 
        array (
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/hierarchy-mappings',
    ),
  ),
  'cookbook/last-modified' => 
  array (
    'file' => 'cookbook/last-modified',
    'url' => 'cookbook/last-modified.html',
    'title' => 'Last modification timestamp',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Last modification timestamp',
        1 => 
        array (
          0 => 
          array (
            0 => 'Using the build-in support',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'A lastModified listener for custom behaviour',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/events',
    ),
  ),
  'cookbook/custom_documentclass_mapper' => 
  array (
    'file' => 'cookbook/custom_documentclass_mapper',
    'url' => 'cookbook/custom_documentclass_mapper.html',
    'title' => 'Using a Custom Document Class Mapper with PHPCR-ODM',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Using a Custom Document Class Mapper with PHPCR-ODM',
        1 => 
        array (
          0 => 
          array (
            0 => 'Symfony2 integration',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'cookbook/intro-bootstrap',
    ),
  ),
  'cookbook/refactoring-multilang' => 
  array (
    'file' => 'cookbook/refactoring-multilang',
    'url' => 'cookbook/refactoring-multilang.html',
    'title' => 'Refactoring Multilanguage Documents',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Refactoring Multilanguage Documents',
        1 => 
        array (
          0 => 
          array (
            0 => 'Procedure',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Converting Untranslated Fields to be Translated',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Removing Translation from a Field',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Changing the Translation Strategy',
            1 => 
            array (
            ),
          ),
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389016,
    'depends' => 
    array (
      0 => 'reference/multilang',
      1 => 'reference/multilang',
    ),
  ),
  'reference/workingobjects-query' => 
  array (
    'file' => 'reference/workingobjects-query',
    'url' => 'reference/workingobjects-query.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/installation_configuration_console' => 
  array (
    'file' => 'reference/installation_configuration_console',
    'url' => 'reference/installation_configuration_console.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/installation_proxy-objects' => 
  array (
    'file' => 'reference/installation_proxy-objects',
    'url' => 'reference/installation_proxy-objects.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/association-mapping_referenceable' => 
  array (
    'file' => 'reference/association-mapping_referenceable',
    'url' => 'reference/association-mapping_referenceable.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/collections' => 
  array (
    'file' => 'reference/collections',
    'url' => 'reference/collections.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/_qbref_method_querybuilder_addjoinleftouter' => 
  array (
    'file' => 'reference/_qbref_method_querybuilder_addjoinleftouter',
    'url' => 'reference/_qbref_method_querybuilder_addjoinleftouter.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/_qbref_method_querybuilder_addjoinrightouter' => 
  array (
    'file' => 'reference/_qbref_method_querybuilder_addjoinrightouter',
    'url' => 'reference/_qbref_method_querybuilder_addjoinrightouter.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/multilang_mapping' => 
  array (
    'file' => 'reference/multilang_mapping',
    'url' => 'reference/multilang_mapping.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/basicmapping_mappingmultivalueproperties' => 
  array (
    'file' => 'reference/basicmapping_mappingmultivalueproperties',
    'url' => 'reference/basicmapping_mappingmultivalueproperties.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/annref_document' => 
  array (
    'file' => 'reference/annref_document',
    'url' => 'reference/annref_document.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/assocmap_cascading' => 
  array (
    'file' => 'reference/assocmap_cascading',
    'url' => 'reference/assocmap_cascading.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/basicmapping_identifiers' => 
  array (
    'file' => 'reference/basicmapping_identifiers',
    'url' => 'reference/basicmapping_identifiers.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/basicmapping_identifier_generation_strategies' => 
  array (
    'file' => 'reference/basicmapping_identifier_generation_strategies',
    'url' => 'reference/basicmapping_identifier_generation_strategies.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/annref_id' => 
  array (
    'file' => 'reference/annref_id',
    'url' => 'reference/annref_id.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/events_lifecyclecallbacks' => 
  array (
    'file' => 'reference/events_lifecyclecallbacks',
    'url' => 'reference/events_lifecyclecallbacks.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/phpcraccess_nodefieldmapping' => 
  array (
    'file' => 'reference/phpcraccess_nodefieldmapping',
    'url' => 'reference/phpcraccess_nodefieldmapping.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/associationmapping_referenceotherdocuments' => 
  array (
    'file' => 'reference/associationmapping_referenceotherdocuments',
    'url' => 'reference/associationmapping_referenceotherdocuments.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/versioning_mappings' => 
  array (
    'file' => 'reference/versioning_mappings',
    'url' => 'reference/versioning_mappings.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/workingobjects_repository_uow_outofsync' => 
  array (
    'file' => 'reference/workingobjects_repository_uow_outofsync',
    'url' => 'reference/workingobjects_repository_uow_outofsync.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/queryref' => 
  array (
    'file' => 'reference/queryref',
    'url' => 'reference/queryref.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_querybuilder' => 
  array (
    'file' => 'reference/qbref_node_querybuilder',
    'url' => 'reference/qbref_node_querybuilder.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_querybuilder_from' => 
  array (
    'file' => 'reference/qbref_method_querybuilder_from',
    'url' => 'reference/qbref_method_querybuilder_from.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/queryref_hydration' => 
  array (
    'file' => 'reference/queryref_hydration',
    'url' => 'reference/queryref_hydration.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_constraint' => 
  array (
    'file' => 'reference/qbref_type_constraint',
    'url' => 'reference/qbref_type_constraint.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_constraintfactory' => 
  array (
    'file' => 'reference/qbref_node_constraintfactory',
    'url' => 'reference/qbref_node_constraintfactory.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_andx' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_andx',
    'url' => 'reference/qbref_method_constraintfactory_andx.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_orx' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_orx',
    'url' => 'reference/qbref_method_constraintfactory_orx.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_fieldisset' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_fieldisset',
    'url' => 'reference/qbref_method_constraintfactory_fieldisset.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_fulltextsearch' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_fulltextsearch',
    'url' => 'reference/qbref_method_constraintfactory_fulltextsearch.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_same' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_same',
    'url' => 'reference/qbref_method_constraintfactory_same.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_descendant' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_descendant',
    'url' => 'reference/qbref_method_constraintfactory_descendant.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_child' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_child',
    'url' => 'reference/qbref_method_constraintfactory_child.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_eq' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_eq',
    'url' => 'reference/qbref_method_constraintfactory_eq.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_neq' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_neq',
    'url' => 'reference/qbref_method_constraintfactory_neq.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_lt' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_lt',
    'url' => 'reference/qbref_method_constraintfactory_lt.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_lte' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_lte',
    'url' => 'reference/qbref_method_constraintfactory_lte.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_gt' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_gt',
    'url' => 'reference/qbref_method_constraintfactory_gt.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_gte' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_gte',
    'url' => 'reference/qbref_method_constraintfactory_gte.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_constraintfactory_like' => 
  array (
    'file' => 'reference/qbref_method_constraintfactory_like',
    'url' => 'reference/qbref_method_constraintfactory_like.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_operandfactory' => 
  array (
    'file' => 'reference/qbref_node_operandfactory',
    'url' => 'reference/qbref_node_operandfactory.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_operandfactory_parameter' => 
  array (
    'file' => 'reference/qbref_method_operandfactory_parameter',
    'url' => 'reference/qbref_method_operandfactory_parameter.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_operandfactory_literal' => 
  array (
    'file' => 'reference/qbref_method_operandfactory_literal',
    'url' => 'reference/qbref_method_operandfactory_literal.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_operanddynamicfactory_fulltextsearchscore' => 
  array (
    'file' => 'reference/qbref_method_operanddynamicfactory_fulltextsearchscore',
    'url' => 'reference/qbref_method_operanddynamicfactory_fulltextsearchscore.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_operanddynamicfactory_length' => 
  array (
    'file' => 'reference/qbref_method_operanddynamicfactory_length',
    'url' => 'reference/qbref_method_operanddynamicfactory_length.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_operanddynamicfactory_lowercase' => 
  array (
    'file' => 'reference/qbref_method_operanddynamicfactory_lowercase',
    'url' => 'reference/qbref_method_operanddynamicfactory_lowercase.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_operanddynamicfactory_uppercase' => 
  array (
    'file' => 'reference/qbref_method_operanddynamicfactory_uppercase',
    'url' => 'reference/qbref_method_operanddynamicfactory_uppercase.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_operanddynamicfactory_localname' => 
  array (
    'file' => 'reference/qbref_method_operanddynamicfactory_localname',
    'url' => 'reference/qbref_method_operanddynamicfactory_localname.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_operanddynamicfactory_name' => 
  array (
    'file' => 'reference/qbref_method_operanddynamicfactory_name',
    'url' => 'reference/qbref_method_operanddynamicfactory_name.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_operanddynamicfactory_field' => 
  array (
    'file' => 'reference/qbref_method_operanddynamicfactory_field',
    'url' => 'reference/qbref_method_operanddynamicfactory_field.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_operand_dynamic' => 
  array (
    'file' => 'reference/qbref_type_operand_dynamic',
    'url' => 'reference/qbref_type_operand_dynamic.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_operand_static' => 
  array (
    'file' => 'reference/qbref_type_operand_static',
    'url' => 'reference/qbref_type_operand_static.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_constraint_factory' => 
  array (
    'file' => 'reference/qbref_type_constraint_factory',
    'url' => 'reference/qbref_type_constraint_factory.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_constraint' => 
  array (
    'file' => 'reference/qbref_node_constraint',
    'url' => 'reference/qbref_node_constraint.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_constraintandx' => 
  array (
    'file' => 'reference/qbref_node_constraintandx',
    'url' => 'reference/qbref_node_constraintandx.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_constraintorx' => 
  array (
    'file' => 'reference/qbref_node_constraintorx',
    'url' => 'reference/qbref_node_constraintorx.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_constraintcomparison' => 
  array (
    'file' => 'reference/qbref_node_constraintcomparison',
    'url' => 'reference/qbref_node_constraintcomparison.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_from' => 
  array (
    'file' => 'reference/qbref_type_from',
    'url' => 'reference/qbref_type_from.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_source' => 
  array (
    'file' => 'reference/qbref_type_source',
    'url' => 'reference/qbref_type_source.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_operand_dynamic_factory' => 
  array (
    'file' => 'reference/qbref_type_operand_dynamic_factory',
    'url' => 'reference/qbref_type_operand_dynamic_factory.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_operand_dynamic' => 
  array (
    'file' => 'reference/qbref_node_operand_dynamic',
    'url' => 'reference/qbref_node_operand_dynamic.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_operanddynamicfactory' => 
  array (
    'file' => 'reference/qbref_node_operanddynamicfactory',
    'url' => 'reference/qbref_node_operanddynamicfactory.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_operanddynamiclowercase' => 
  array (
    'file' => 'reference/qbref_node_operanddynamiclowercase',
    'url' => 'reference/qbref_node_operanddynamiclowercase.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_operanddynamicuppercase' => 
  array (
    'file' => 'reference/qbref_node_operanddynamicuppercase',
    'url' => 'reference/qbref_node_operanddynamicuppercase.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_operand_static' => 
  array (
    'file' => 'reference/qbref_node_operand_static',
    'url' => 'reference/qbref_node_operand_static.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_operandstaticliteral' => 
  array (
    'file' => 'reference/qbref_node_operandstaticliteral',
    'url' => 'reference/qbref_node_operandstaticliteral.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_operand_static_factory' => 
  array (
    'file' => 'reference/qbref_type_operand_static_factory',
    'url' => 'reference/qbref_type_operand_static_factory.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_order_by' => 
  array (
    'file' => 'reference/qbref_type_order_by',
    'url' => 'reference/qbref_type_order_by.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_ordering' => 
  array (
    'file' => 'reference/qbref_type_ordering',
    'url' => 'reference/qbref_type_ordering.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_ordering' => 
  array (
    'file' => 'reference/qbref_node_ordering',
    'url' => 'reference/qbref_node_ordering.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_orderby' => 
  array (
    'file' => 'reference/qbref_node_orderby',
    'url' => 'reference/qbref_node_orderby.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_orderby_asc' => 
  array (
    'file' => 'reference/qbref_method_orderby_asc',
    'url' => 'reference/qbref_method_orderby_asc.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_orderby_desc' => 
  array (
    'file' => 'reference/qbref_method_orderby_desc',
    'url' => 'reference/qbref_method_orderby_desc.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_builder' => 
  array (
    'file' => 'reference/qbref_type_builder',
    'url' => 'reference/qbref_type_builder.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_select' => 
  array (
    'file' => 'reference/qbref_type_select',
    'url' => 'reference/qbref_type_select.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_where' => 
  array (
    'file' => 'reference/qbref_type_where',
    'url' => 'reference/qbref_type_where.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_where' => 
  array (
    'file' => 'reference/qbref_node_where',
    'url' => 'reference/qbref_node_where.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_whereand' => 
  array (
    'file' => 'reference/qbref_node_whereand',
    'url' => 'reference/qbref_node_whereand.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_whereor' => 
  array (
    'file' => 'reference/qbref_node_whereor',
    'url' => 'reference/qbref_node_whereor.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_from' => 
  array (
    'file' => 'reference/qbref_node_from',
    'url' => 'reference/qbref_node_from.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/<_annref_document>' => 
  array (
    'file' => 'reference/<_annref_document>',
    'url' => 'reference/<_annref_document>.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_select' => 
  array (
    'file' => 'reference/qbref_node_select',
    'url' => 'reference/qbref_node_select.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_sourcejoin' => 
  array (
    'file' => 'reference/qbref_node_sourcejoin',
    'url' => 'reference/qbref_node_sourcejoin.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_selectadd' => 
  array (
    'file' => 'reference/qbref_node_selectadd',
    'url' => 'reference/qbref_node_selectadd.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_order_by' => 
  array (
    'file' => 'reference/qbref_node_order_by',
    'url' => 'reference/qbref_node_order_by.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_orderbyadd' => 
  array (
    'file' => 'reference/qbref_node_orderbyadd',
    'url' => 'reference/qbref_node_orderbyadd.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_property' => 
  array (
    'file' => 'reference/qbref_type_property',
    'url' => 'reference/qbref_type_property.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_source_join_condition_factory' => 
  array (
    'file' => 'reference/qbref_type_source_join_condition_factory',
    'url' => 'reference/qbref_type_source_join_condition_factory.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_source_join_left' => 
  array (
    'file' => 'reference/qbref_type_source_join_left',
    'url' => 'reference/qbref_type_source_join_left.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_source_join_right' => 
  array (
    'file' => 'reference/qbref_type_source_join_right',
    'url' => 'reference/qbref_type_source_join_right.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_type_source_join_condition' => 
  array (
    'file' => 'reference/qbref_type_source_join_condition',
    'url' => 'reference/qbref_type_source_join_condition.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_source_join_condition' => 
  array (
    'file' => 'reference/qbref_node_source_join_condition',
    'url' => 'reference/qbref_node_source_join_condition.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_node_sourcejoinconditionfactory' => 
  array (
    'file' => 'reference/qbref_node_sourcejoinconditionfactory',
    'url' => 'reference/qbref_node_sourcejoinconditionfactory.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_sourcefactory_document' => 
  array (
    'file' => 'reference/qbref_method_sourcefactory_document',
    'url' => 'reference/qbref_method_sourcefactory_document.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_sourcefactory_joininner' => 
  array (
    'file' => 'reference/qbref_method_sourcefactory_joininner',
    'url' => 'reference/qbref_method_sourcefactory_joininner.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_sourcefactory_joinleftouter' => 
  array (
    'file' => 'reference/qbref_method_sourcefactory_joinleftouter',
    'url' => 'reference/qbref_method_sourcefactory_joinleftouter.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_method_sourcefactory_joinrightouter' => 
  array (
    'file' => 'reference/qbref_method_sourcefactory_joinrightouter',
    'url' => 'reference/qbref_method_sourcefactory_joinrightouter.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qbref_workingwiththequerybuilder' => 
  array (
    'file' => 'reference/qbref_workingwiththequerybuilder',
    'url' => 'reference/qbref_workingwiththequerybuilder.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/queryref_getresult' => 
  array (
    'file' => 'reference/queryref_getresult',
    'url' => 'reference/queryref_getresult.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/qb-translation' => 
  array (
    'file' => 'reference/qb-translation',
    'url' => 'reference/qb-translation.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'reference/hierarchy-mappings' => 
  array (
    'file' => 'reference/hierarchy-mappings',
    'url' => 'reference/hierarchy-mappings.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
  'cookbook/intro-bootstrap' => 
  array (
    'file' => 'cookbook/intro-bootstrap',
    'url' => 'cookbook/intro-bootstrap.html',
    'title' => NULL,
    'titles' => 
    array (
    ),
    'tocs' => 
    array (
    ),
    'ctime' => false,
    'depends' => 
    array (
    ),
  ),
);