---
layout: default
indexed: true
title: 
docsSlug: doctrine-mongodb-odm
docsPage: true
docsIndex: false
docsVersion: 1.1
permalink: none
---
<?php return array (
  'index' => 
  array (
    'file' => 'index',
    'url' => 'index.html',
    'title' => 'Doctrine MongoDB ODM\'s documentation!',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Doctrine MongoDB ODM\'s documentation!',
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
            0 => 'Mapping Objects onto a Database',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'tutorials/getting-started',
      1 => 'reference/introduction',
      2 => 'reference/architecture',
      3 => 'reference/basic-mapping',
      4 => 'reference/reference-mapping',
      5 => 'reference/bidirectional-references',
      6 => 'reference/complex-references',
      7 => 'reference/indexes',
      8 => 'reference/inheritance-mapping',
      9 => 'reference/embedded-mapping',
      10 => 'reference/trees',
      11 => 'reference/storing-files-with-mongogridfs',
      12 => 'reference/xml-mapping',
      13 => 'reference/annotations-reference',
      14 => 'reference/metadata-drivers',
      15 => 'reference/working-with-objects',
      16 => 'reference/document-repositories',
      17 => 'reference/events',
      18 => 'reference/migrating-schemas',
      19 => 'reference/query-builder-api',
      20 => 'reference/aggregation-builder',
      21 => 'reference/geospatial-queries',
      22 => 'reference/find-and-update',
      23 => 'reference/filters',
      24 => 'reference/priming-references',
      25 => 'reference/eager-cursors',
      26 => 'reference/map-reduce',
      27 => 'reference/capped-collections',
      28 => 'reference/storage-strategies',
      29 => 'reference/custom-collections',
      30 => 'reference/sharding',
      31 => 'reference/transactions-and-concurrency',
      32 => 'reference/best-practices',
      33 => 'reference/change-tracking-policies',
      34 => 'reference/logging',
      35 => 'cookbook/soft-delete-extension',
      36 => 'cookbook/simple-search-engine',
      37 => 'cookbook/blending-orm-and-mongodb-odm',
      38 => 'cookbook/mapping-classes-to-orm-and-odm',
      39 => 'cookbook/implementing-array-access-for-domain-objects',
      40 => 'cookbook/implementing-the-notify-changetracking-policy',
      41 => 'cookbook/implementing-wakeup-or-clone',
      42 => 'cookbook/validation-of-documents',
      43 => 'cookbook/simple-search-engine',
      44 => 'cookbook/resolve-target-document-listener',
    ),
  ),
  'tutorials/getting-started' => 
  array (
    'file' => 'tutorials/getting-started',
    'url' => 'tutorials/getting-started.html',
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
            0 => 'Example Model: Simple Blog',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'A first prototype',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Persistent Models',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Usage',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/introduction',
      1 => 'reference/introduction',
      2 => 'reference/introduction',
    ),
  ),
  'reference/introduction' => 
  array (
    'file' => 'reference/introduction',
    'url' => 'reference/introduction.html',
    'title' => 'Introduction',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Introduction',
        1 => 
        array (
          0 => 
          array (
            0 => 'Features Overview',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Setup',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Using PHP 7',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
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
            0 => 'Documents',
            1 => 
            array (
              0 => 
              array (
                0 => 'Document states',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Persistent fields',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Serializing documents',
                1 => 
                array (
                ),
              ),
            ),
          ),
          1 => 
          array (
            0 => 'The DocumentManager',
            1 => 
            array (
              0 => 
              array (
                0 => 'Transactional write-behind',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'The Unit of Work',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'cookbook/implementing-wakeup-or-clone',
      1 => 'cookbook/implementing-wakeup-or-clone',
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
                0 => 'Identifiers',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Fields',
                1 => 
                array (
                ),
              ),
            ),
          ),
          5 => 
          array (
            0 => 'Custom Mapping Types',
            1 => 
            array (
            ),
          ),
          6 => 
          array (
            0 => 'Multiple Document Types in a Collection',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/reference-mapping' => 
  array (
    'file' => 'reference/reference-mapping',
    'url' => 'reference/reference-mapping.html',
    'title' => 'Reference Mapping',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Reference Mapping',
        1 => 
        array (
          0 => 
          array (
            0 => 'Collections',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Reference One',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Reference Many',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Mixing Document Types',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Storing References',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => 'Cascading Operations',
            1 => 
            array (
            ),
          ),
          6 => 
          array (
            0 => 'Orphan Removal',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/custom-collections',
    ),
  ),
  'reference/bidirectional-references' => 
  array (
    'file' => 'reference/bidirectional-references',
    'url' => 'reference/bidirectional-references.html',
    'title' => 'Bi-Directional References',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Bi-Directional References',
        1 => 
        array (
          0 => 
          array (
            0 => 'Owning and Inverse Sides',
            1 => 
            array (
              0 => 
              array (
                0 => 'One to Many',
                1 => 
                array (
                ),
              ),
            ),
          ),
          1 => 
          array (
            0 => 'Other Examples',
            1 => 
            array (
              0 => 
              array (
                0 => 'One to One',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Self-Referencing Many to Many',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/complex-references' => 
  array (
    'file' => 'reference/complex-references',
    'url' => 'reference/complex-references.html',
    'title' => 'Complex References',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Complex References',
        1 => 
        array (
          0 => 
          array (
            0 => 'Basic Example',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => '<code>criteria</code> Example',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => '<code>repositoryMethod</code> Example',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/storing_references',
      1 => 'reference/reference_one',
      2 => 'reference/reference_many',
    ),
  ),
  'reference/indexes' => 
  array (
    'file' => 'reference/indexes',
    'url' => 'reference/indexes.html',
    'title' => 'Indexes',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Indexes',
        1 => 
        array (
          0 => 
          array (
            0 => 'Index Options',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Unique Index',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Embedded Indexes',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Geospatial Indexing',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Partial indexes',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/console-commands',
      1 => 'reference/embed_mixing_document_types',
      2 => 'reference/embed_one',
      3 => 'reference/embed_many',
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
            0 => 'Mapped Superclasses',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Single Collection Inheritance',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Collection Per Class Inheritance',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/single_collection_inheritance',
      1 => 'reference/collection_per_class_inheritance',
      2 => 'reference/single_collection_inheritance',
      3 => 'reference/collection_per_class_inheritance',
    ),
  ),
  'reference/embedded-mapping' => 
  array (
    'file' => 'reference/embedded-mapping',
    'url' => 'reference/embedded-mapping.html',
    'title' => 'Embedded Mapping',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Embedded Mapping',
        1 => 
        array (
          0 => 
          array (
            0 => 'Embed One',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Embed Many',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Mixing Document Types',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Cascading Operations',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/trees' => 
  array (
    'file' => 'reference/trees',
    'url' => 'reference/trees.html',
    'title' => 'Trees',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Trees',
        1 => 
        array (
          0 => 
          array (
            0 => 'Full Tree in Single Document',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Parent Reference',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Child Reference',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Array of Ancestors',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Materialized Paths',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/storing-files-with-mongogridfs' => 
  array (
    'file' => 'reference/storing-files-with-mongogridfs',
    'url' => 'reference/storing-files-with-mongogridfs.html',
    'title' => 'Storing Files with MongoGridFS',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Storing Files with MongoGridFS',
        1 => 
        array (
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389014,
    'depends' => 
    array (
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
          0 => 
          array (
            0 => 'Simplified XML Driver',
            1 => 
            array (
              0 => 
              array (
                0 => 'Example',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Reference',
                1 => 
                array (
                  0 => 
                  array (
                    0 => 'Lock',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => 'Version',
                    1 => 
                    array (
                    ),
                  ),
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/transactions_and_concurrency_pessimistic_locking',
      1 => 'reference/transactions_and_concurrency_optimistic_locking',
      2 => 'reference/embed_many',
      3 => 'reference/reference_many',
      4 => 'reference/atomic_set',
      5 => 'reference/atomic_set_array',
    ),
  ),
  'reference/annotations-reference' => 
  array (
    'file' => 'reference/annotations-reference',
    'url' => 'reference/annotations-reference.html',
    'title' => 'Annotations Reference',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Annotations Reference',
        1 => 
        array (
          0 => 
          array (
            0 => '@AlsoLoad',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => '@ChangeTrackingPolicy',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => '@DefaultDiscriminatorValue',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => '@DiscriminatorField',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => '@DiscriminatorMap',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => '@Document',
            1 => 
            array (
            ),
          ),
          6 => 
          array (
            0 => '@EmbedMany',
            1 => 
            array (
            ),
          ),
          7 => 
          array (
            0 => '@EmbedOne',
            1 => 
            array (
            ),
          ),
          8 => 
          array (
            0 => '@EmbeddedDocument',
            1 => 
            array (
            ),
          ),
          9 => 
          array (
            0 => '@Field',
            1 => 
            array (
            ),
          ),
          10 => 
          array (
            0 => '@HasLifecycleCallbacks',
            1 => 
            array (
            ),
          ),
          11 => 
          array (
            0 => '@Id',
            1 => 
            array (
            ),
          ),
          12 => 
          array (
            0 => '@Index',
            1 => 
            array (
            ),
          ),
          13 => 
          array (
            0 => '@Indexes',
            1 => 
            array (
            ),
          ),
          14 => 
          array (
            0 => '@InheritanceType',
            1 => 
            array (
            ),
          ),
          15 => 
          array (
            0 => '@Lock',
            1 => 
            array (
            ),
          ),
          16 => 
          array (
            0 => '@MappedSuperclass',
            1 => 
            array (
            ),
          ),
          17 => 
          array (
            0 => '@NotSaved',
            1 => 
            array (
            ),
          ),
          18 => 
          array (
            0 => '@PostLoad',
            1 => 
            array (
            ),
          ),
          19 => 
          array (
            0 => '@PostPersist',
            1 => 
            array (
            ),
          ),
          20 => 
          array (
            0 => '@PostRemove',
            1 => 
            array (
            ),
          ),
          21 => 
          array (
            0 => '@PostUpdate',
            1 => 
            array (
            ),
          ),
          22 => 
          array (
            0 => '@PreFlush',
            1 => 
            array (
            ),
          ),
          23 => 
          array (
            0 => '@PreLoad',
            1 => 
            array (
            ),
          ),
          24 => 
          array (
            0 => '@PrePersist',
            1 => 
            array (
            ),
          ),
          25 => 
          array (
            0 => '@PreRemove',
            1 => 
            array (
            ),
          ),
          26 => 
          array (
            0 => '@PreUpdate',
            1 => 
            array (
            ),
          ),
          27 => 
          array (
            0 => '@ReadPreference',
            1 => 
            array (
            ),
          ),
          28 => 
          array (
            0 => '@ReferenceMany',
            1 => 
            array (
            ),
          ),
          29 => 
          array (
            0 => '@ReferenceOne',
            1 => 
            array (
            ),
          ),
          30 => 
          array (
            0 => '@ShardKey',
            1 => 
            array (
            ),
          ),
          31 => 
          array (
            0 => '@UniqueIndex',
            1 => 
            array (
            ),
          ),
          32 => 
          array (
            0 => '@Version',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/migrating-schemas',
      1 => 'reference/change_tracking_policies',
      2 => 'reference/single_collection_inheritance',
      3 => 'reference/single_collection_inheritance',
      4 => 'reference/flush_options',
      5 => 'reference/storage_strategies',
      6 => 'reference/doctrine_mapping_types',
      7 => 'reference/basic_mapping_identifiers',
      8 => 'reference/inheritance_mapping',
      9 => 'reference/transactions_and_concurrency_pessimistic_locking',
      10 => 'reference/inheritance_mapping',
      11 => 'reference/lifecycle_events',
      12 => 'reference/lifecycle_events',
      13 => 'reference/lifecycle_events',
      14 => 'reference/lifecycle_events',
      15 => 'reference/lifecycle_events',
      16 => 'reference/lifecycle_events',
      17 => 'reference/lifecycle_events',
      18 => 'reference/lifecycle_events',
      19 => 'reference/lifecycle_events',
      20 => 'reference/storage_strategies',
      21 => 'reference/transactions_and_concurrency_optimistic_locking',
      22 => 'reference/embed_many',
      23 => 'reference/reference_many',
      24 => 'reference/atomic_set',
      25 => 'reference/atomic_set_array',
    ),
  ),
  'reference/metadata-drivers' => 
  array (
    'file' => 'reference/metadata-drivers',
    'url' => 'reference/metadata-drivers.html',
    'title' => 'Metadata Drivers',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Metadata Drivers',
        1 => 
        array (
          0 => 
          array (
            0 => 'Core Metadata Drivers',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Implementing Metadata Drivers',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'ClassMetadata',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Getting ClassMetadata Instances',
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
    'ctime' => 1522389014,
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
            0 => 'Understanding',
            1 => 
            array (
              0 => 
              array (
                0 => 'The size of a Unit of Work',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'The cost of flush()',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Direct access to a Unit of Work',
                1 => 
                array (
                ),
              ),
            ),
          ),
          1 => 
          array (
            0 => 'Persisting documents',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Flush Options',
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
            0 => 'References',
            1 => 
            array (
            ),
          ),
          7 => 
          array (
            0 => 'Establishing References',
            1 => 
            array (
            ),
          ),
          8 => 
          array (
            0 => 'Removing References',
            1 => 
            array (
            ),
          ),
          9 => 
          array (
            0 => 'Transitive persistence',
            1 => 
            array (
            ),
          ),
          10 => 
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
                0 => 'By Query Builder Objects',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => 'By Reference',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/document_repositories',
    ),
  ),
  'reference/document-repositories' => 
  array (
    'file' => 'reference/document-repositories',
    'url' => 'reference/document-repositories.html',
    'title' => 'Document Repositories',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Document Repositories',
        1 => 
        array (
          0 => 
          array (
            0 => 'Custom Repositories',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Repositories with Additional Dependencies',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/filters',
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
            0 => 'The Event System',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Lifecycle Events',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Lifecycle Callbacks',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Listening to Lifecycle Events',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Implementing Event Listeners',
            1 => 
            array (
              0 => 
              array (
                0 => 'prePersist',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'preLoad',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'postLoad',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => 'preRemove',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => 'preFlush',
                1 => 
                array (
                ),
              ),
              5 => 
              array (
                0 => 'onFlush',
                1 => 
                array (
                ),
              ),
              6 => 
              array (
                0 => 'postFlush',
                1 => 
                array (
                ),
              ),
              7 => 
              array (
                0 => 'preUpdate',
                1 => 
                array (
                ),
              ),
              8 => 
              array (
                0 => 'onClear',
                1 => 
                array (
                ),
              ),
              9 => 
              array (
                0 => 'documentNotFound',
                1 => 
                array (
                ),
              ),
              10 => 
              array (
                0 => 'postUpdate, postRemove, postPersist',
                1 => 
                array (
                ),
              ),
              11 => 
              array (
                0 => 'postCollectionLoad',
                1 => 
                array (
                ),
              ),
            ),
          ),
          5 => 
          array (
            0 => 'Load ClassMetadata Event',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/migrating-schemas' => 
  array (
    'file' => 'reference/migrating-schemas',
    'url' => 'reference/migrating-schemas.html',
    'title' => 'Migrating Schemas',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Migrating Schemas',
        1 => 
        array (
          0 => 
          array (
            0 => 'Renaming a Field',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Transforming Data',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Moving Fields',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/haslifecyclecallbacks',
      1 => 'reference/haslifecyclecallbacks',
    ),
  ),
  'reference/query-builder-api' => 
  array (
    'file' => 'reference/query-builder-api',
    'url' => 'reference/query-builder-api.html',
    'title' => 'Query Builder API',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Query Builder API',
        1 => 
        array (
          0 => 
          array (
            0 => 'Finding Documents',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Creating a Query Builder',
            1 => 
            array (
              0 => 
              array (
                0 => 'Executing Queries',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Debugging Queries',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Eager Cursors',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => 'Getting Single Result',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => 'Selecting Fields',
                1 => 
                array (
                ),
              ),
              5 => 
              array (
                0 => 'Index hints',
                1 => 
                array (
                ),
              ),
              6 => 
              array (
                0 => 'Selecting Distinct Values',
                1 => 
                array (
                ),
              ),
              7 => 
              array (
                0 => 'Refreshing Documents',
                1 => 
                array (
                ),
              ),
              8 => 
              array (
                0 => 'Fetching Documents as Read-Only',
                1 => 
                array (
                ),
              ),
              9 => 
              array (
                0 => 'Disabling Hydration',
                1 => 
                array (
                ),
              ),
              10 => 
              array (
                0 => 'Limiting Results',
                1 => 
                array (
                ),
              ),
              11 => 
              array (
                0 => 'Sorting Results',
                1 => 
                array (
                ),
              ),
              12 => 
              array (
                0 => 'Map Reduce',
                1 => 
                array (
                ),
              ),
              13 => 
              array (
                0 => 'Conditional Operators',
                1 => 
                array (
                ),
              ),
              14 => 
              array (
                0 => 'Text Search',
                1 => 
                array (
                ),
              ),
              15 => 
              array (
                0 => 'Update Queries',
                1 => 
                array (
                ),
              ),
            ),
          ),
          2 => 
          array (
            0 => 'Updating multiple documents',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Modifier Operations',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Remove Queries',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => 'Group Queries',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/annotations_reference_reference_one',
      1 => 'reference/annotations_reference_reference_many',
      2 => 'reference/aggregation_builder_group',
    ),
  ),
  'reference/aggregation-builder' => 
  array (
    'file' => 'reference/aggregation-builder',
    'url' => 'reference/aggregation-builder.html',
    'title' => 'Aggregation builder',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Aggregation builder',
        1 => 
        array (
          0 => 
          array (
            0 => 'Creating an Aggregation Builder',
            1 => 
            array (
              0 => 
              array (
                0 => 'Adding pipeline stages',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Nesting expressions',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => 'Executing an aggregation pipeline',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => 'Hydration',
                1 => 
                array (
                ),
              ),
            ),
          ),
          1 => 
          array (
            0 => 'Aggregation pipeline stages',
            1 => 
            array (
              0 => 
              array (
                0 => '$addFields',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => '$bucket',
                1 => 
                array (
                ),
              ),
              2 => 
              array (
                0 => '$bucketAuto',
                1 => 
                array (
                ),
              ),
              3 => 
              array (
                0 => '$collStats',
                1 => 
                array (
                ),
              ),
              4 => 
              array (
                0 => '$count',
                1 => 
                array (
                ),
              ),
              5 => 
              array (
                0 => '$facet',
                1 => 
                array (
                ),
              ),
              6 => 
              array (
                0 => '$geoNear',
                1 => 
                array (
                ),
              ),
              7 => 
              array (
                0 => '$graphLookup',
                1 => 
                array (
                ),
              ),
              8 => 
              array (
                0 => '$group',
                1 => 
                array (
                ),
              ),
              9 => 
              array (
                0 => '$indexStats',
                1 => 
                array (
                ),
              ),
              10 => 
              array (
                0 => '$lookup',
                1 => 
                array (
                ),
              ),
              11 => 
              array (
                0 => '$match',
                1 => 
                array (
                ),
              ),
              12 => 
              array (
                0 => '$out',
                1 => 
                array (
                ),
              ),
              13 => 
              array (
                0 => '$project',
                1 => 
                array (
                ),
              ),
              14 => 
              array (
                0 => '$redact',
                1 => 
                array (
                ),
              ),
              15 => 
              array (
                0 => '$replaceRoot',
                1 => 
                array (
                ),
              ),
              16 => 
              array (
                0 => '$sample',
                1 => 
                array (
                ),
              ),
              17 => 
              array (
                0 => '$sort, $limit and $skip',
                1 => 
                array (
                ),
              ),
              18 => 
              array (
                0 => '$sortByCount',
                1 => 
                array (
                ),
              ),
              19 => 
              array (
                0 => '$unwind',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/reference-mapping',
      1 => 'reference/reference-mapping',
    ),
  ),
  'reference/geospatial-queries' => 
  array (
    'file' => 'reference/geospatial-queries',
    'url' => 'reference/geospatial-queries.html',
    'title' => 'Geospatial Queries',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Geospatial Queries',
        1 => 
        array (
          0 => 
          array (
            0 => 'Mapping',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Near Query',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/find-and-update' => 
  array (
    'file' => 'reference/find-and-update',
    'url' => 'reference/find-and-update.html',
    'title' => 'Find and Modify',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Find and Modify',
        1 => 
        array (
          0 => 
          array (
            0 => 'Update',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Remove',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/filters' => 
  array (
    'file' => 'reference/filters',
    'url' => 'reference/filters.html',
    'title' => 'Filters',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Filters',
        1 => 
        array (
          0 => 
          array (
            0 => 'Example filter class',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Configuration',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Disabling/Enabling Filters and Setting Parameters',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/priming-references' => 
  array (
    'file' => 'reference/priming-references',
    'url' => 'reference/priming-references.html',
    'title' => 'Priming References',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Priming References',
        1 => 
        array (
          0 => 
          array (
            0 => 'Query Builder',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Inverse references',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Primer Callback',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/reference_one',
      1 => 'reference/reference_many',
      2 => 'reference/inheritance_mapping',
      3 => 'reference/storing_references',
    ),
  ),
  'reference/eager-cursors' => 
  array (
    'file' => 'reference/eager-cursors',
    'url' => 'reference/eager-cursors.html',
    'title' => 'Eager Cursors',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Eager Cursors',
        1 => 
        array (
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/map-reduce' => 
  array (
    'file' => 'reference/map-reduce',
    'url' => 'reference/map-reduce.html',
    'title' => 'Map Reduce',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Map Reduce',
        1 => 
        array (
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/query-builder-api',
    ),
  ),
  'reference/capped-collections' => 
  array (
    'file' => 'reference/capped-collections',
    'url' => 'reference/capped-collections.html',
    'title' => 'Capped Collections',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Capped Collections',
        1 => 
        array (
          0 => 
          array (
            0 => 'Mapping',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Creating',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/storage-strategies' => 
  array (
    'file' => 'reference/storage-strategies',
    'url' => 'reference/storage-strategies.html',
    'title' => 'Storage Strategies',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Storage Strategies',
        1 => 
        array (
          0 => 
          array (
            0 => 'increment',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'addToSet',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'set',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'setArray',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'pushAll',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => 'atomicSet',
            1 => 
            array (
            ),
          ),
          6 => 
          array (
            0 => 'atomicSetArray',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/int',
      1 => 'reference/float',
      2 => 'reference/embed_many',
      3 => 'reference/reference_many',
      4 => 'reference/annotations_reference_version',
    ),
  ),
  'reference/custom-collections' => 
  array (
    'file' => 'reference/custom-collections',
    'url' => 'reference/custom-collections.html',
    'title' => 'Custom Collections',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Custom Collections',
        1 => 
        array (
          0 => 
          array (
            0 => 'Custom Collection Classes',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Taking Control of the Collection\'s Constructor',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/sharding' => 
  array (
    'file' => 'reference/sharding',
    'url' => 'reference/sharding.html',
    'title' => 'Sharding',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Sharding',
        1 => 
        array (
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/transactions-and-concurrency' => 
  array (
    'file' => 'reference/transactions-and-concurrency',
    'url' => 'reference/transactions-and-concurrency.html',
    'title' => 'Transactions and Concurrency',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Transactions and Concurrency',
        1 => 
        array (
          0 => 
          array (
            0 => 'Transactions',
            1 => 
            array (
              0 => 
              array (
                0 => 'Limitation',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'Workaround',
                1 => 
                array (
                ),
              ),
            ),
          ),
          1 => 
          array (
            0 => 'Concurrency',
            1 => 
            array (
              0 => 
              array (
                0 => 'Optimistic Locking',
                1 => 
                array (
                  0 => 
                  array (
                    0 => 'Approach',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => 'Document Configuration',
                    1 => 
                    array (
                      0 => 
                      array (
                        0 => 'Choosing the Field Type',
                        1 => 
                        array (
                        ),
                      ),
                      1 => 
                      array (
                        0 => 'Usage',
                        1 => 
                        array (
                        ),
                      ),
                    ),
                  ),
                  2 => 
                  array (
                    0 => 'Important Implementation Notes',
                    1 => 
                    array (
                      0 => 
                      array (
                        0 => 'Workflow',
                        1 => 
                        array (
                        ),
                      ),
                      1 => 
                      array (
                        0 => 'Example Code',
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
                0 => 'Pessimistic Locking',
                1 => 
                array (
                  0 => 
                  array (
                    0 => 'Document Configuration',
                    1 => 
                    array (
                    ),
                  ),
                  1 => 
                  array (
                    0 => 'Lock Modes',
                    1 => 
                    array (
                    ),
                  ),
                  2 => 
                  array (
                    0 => 'Usage',
                    1 => 
                    array (
                    ),
                  ),
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/best-practices' => 
  array (
    'file' => 'reference/best-practices',
    'url' => 'reference/best-practices.html',
    'title' => 'Best Practices',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Best Practices',
        1 => 
        array (
          0 => 
          array (
            0 => 'Constrain relationships as much as possible',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Use events judiciously',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Use cascades judiciously',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Don\'t use special characters',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Initialize collections in the constructor',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/change-tracking-policies' => 
  array (
    'file' => 'reference/change-tracking-policies',
    'url' => 'reference/change-tracking-policies.html',
    'title' => 'Change Tracking Policies',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Change Tracking Policies',
        1 => 
        array (
          0 => 
          array (
            0 => 'Deferred Implicit',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Deferred Explicit',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Notify',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/logging' => 
  array (
    'file' => 'reference/logging',
    'url' => 'reference/logging.html',
    'title' => 'Logging',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Logging',
        1 => 
        array (
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'cookbook/soft-delete-extension' => 
  array (
    'file' => 'cookbook/soft-delete-extension',
    'url' => 'cookbook/soft-delete-extension.html',
    'title' => 'Soft Delete Extension',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Soft Delete Extension',
        1 => 
        array (
          0 => 
          array (
            0 => 'Installation',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Setup',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'SoftDeleteable Interface',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Example Implementation',
            1 => 
            array (
            ),
          ),
          4 => 
          array (
            0 => 'Usage',
            1 => 
            array (
            ),
          ),
          5 => 
          array (
            0 => 'Events',
            1 => 
            array (
            ),
          ),
          6 => 
          array (
            0 => 'Cascading Soft Deletes',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'cookbook/simple-search-engine' => 
  array (
    'file' => 'cookbook/simple-search-engine',
    'url' => 'cookbook/simple-search-engine.html',
    'title' => 'Simple Search Engine',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Simple Search Engine',
        1 => 
        array (
          0 => 
          array (
            0 => 'Sample Model: Product',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Working with Keywords',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Searching Keywords',
            1 => 
            array (
              0 => 
              array (
                0 => 'User Input',
                1 => 
                array (
                ),
              ),
            ),
          ),
          3 => 
          array (
            0 => 'Embedded Documents',
            1 => 
            array (
              0 => 
              array (
                0 => 'Definition',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'cookbook/blending-orm-and-mongodb-odm' => 
  array (
    'file' => 'cookbook/blending-orm-and-mongodb-odm',
    'url' => 'cookbook/blending-orm-and-mongodb-odm.html',
    'title' => 'Blending the ORM and MongoDB ODM',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Blending the ORM and MongoDB ODM',
        1 => 
        array (
          0 => 
          array (
            0 => 'Define Product',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Define Entity',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Event Subscriber',
            1 => 
            array (
            ),
          ),
          3 => 
          array (
            0 => 'Working with Products and Orders',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'cookbook/mapping-classes-to-orm-and-odm' => 
  array (
    'file' => 'cookbook/mapping-classes-to-orm-and-odm',
    'url' => 'cookbook/mapping-classes-to-orm-and-odm.html',
    'title' => 'Mapping Classes to the ORM and ODM',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Mapping Classes to the ORM and ODM',
        1 => 
        array (
          0 => 
          array (
            0 => 'Test Subject',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Mapping Information',
            1 => 
            array (
              0 => 
              array (
                0 => 'ORM',
                1 => 
                array (
                ),
              ),
              1 => 
              array (
                0 => 'MongoDB ODM',
                1 => 
                array (
                ),
              ),
            ),
          ),
          2 => 
          array (
            0 => 'Repository Classes',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'cookbook/implementing-array-access-for-domain-objects' => 
  array (
    'file' => 'cookbook/implementing-array-access-for-domain-objects',
    'url' => 'cookbook/implementing-array-access-for-domain-objects.html',
    'title' => 'Implementing ArrayAccess for Domain Objects',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Implementing ArrayAccess for Domain Objects',
        1 => 
        array (
          0 => 
          array (
            0 => 'Option 1',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Option 2',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Read-only',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'cookbook/implementing-the-notify-changetracking-policy' => 
  array (
    'file' => 'cookbook/implementing-the-notify-changetracking-policy',
    'url' => 'cookbook/implementing-the-notify-changetracking-policy.html',
    'title' => 'Implementing the Notify ChangeTracking Policy',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Implementing the Notify ChangeTracking Policy',
        1 => 
        array (
          0 => 
          array (
            0 => 'Implementing NotifyPropertyChanged',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'cookbook/implementing-wakeup-or-clone' => 
  array (
    'file' => 'cookbook/implementing-wakeup-or-clone',
    'url' => 'cookbook/implementing-wakeup-or-clone.html',
    'title' => 'Implementing Wakeup or Clone',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Implementing Wakeup or Clone',
        1 => 
        array (
          0 => 
          array (
            0 => 'Safely implementing \\_\\_wakeup',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Safely implementing \\_\\_clone',
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
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/architecture',
    ),
  ),
  'cookbook/validation-of-documents' => 
  array (
    'file' => 'cookbook/validation-of-documents',
    'url' => 'cookbook/validation-of-documents.html',
    'title' => 'Validation of Documents',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Validation of Documents',
        1 => 
        array (
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389014,
    'depends' => 
    array (
      0 => 'reference/events',
    ),
  ),
  'cookbook/resolve-target-document-listener' => 
  array (
    'file' => 'cookbook/resolve-target-document-listener',
    'url' => 'cookbook/resolve-target-document-listener.html',
    'title' => 'Keeping Your Modules Independent',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Keeping Your Modules Independent',
        1 => 
        array (
          0 => 
          array (
            0 => 'Background',
            1 => 
            array (
            ),
          ),
          1 => 
          array (
            0 => 'Configuration',
            1 => 
            array (
            ),
          ),
          2 => 
          array (
            0 => 'Final Thoughts',
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
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/storing_references' => 
  array (
    'file' => 'reference/storing_references',
    'url' => 'reference/storing_references.html',
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
  'reference/reference_one' => 
  array (
    'file' => 'reference/reference_one',
    'url' => 'reference/reference_one.html',
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
  'reference/reference_many' => 
  array (
    'file' => 'reference/reference_many',
    'url' => 'reference/reference_many.html',
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
  'reference/console-commands' => 
  array (
    'file' => 'reference/console-commands',
    'url' => 'reference/console-commands.html',
    'title' => 'Console Commands',
    'titles' => 
    array (
      0 => 
      array (
        0 => 'Console Commands',
        1 => 
        array (
        ),
      ),
    ),
    'tocs' => 
    array (
    ),
    'ctime' => 1522389014,
    'depends' => 
    array (
    ),
  ),
  'reference/embed_mixing_document_types' => 
  array (
    'file' => 'reference/embed_mixing_document_types',
    'url' => 'reference/embed_mixing_document_types.html',
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
  'reference/embed_one' => 
  array (
    'file' => 'reference/embed_one',
    'url' => 'reference/embed_one.html',
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
  'reference/embed_many' => 
  array (
    'file' => 'reference/embed_many',
    'url' => 'reference/embed_many.html',
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
  'reference/single_collection_inheritance' => 
  array (
    'file' => 'reference/single_collection_inheritance',
    'url' => 'reference/single_collection_inheritance.html',
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
  'reference/collection_per_class_inheritance' => 
  array (
    'file' => 'reference/collection_per_class_inheritance',
    'url' => 'reference/collection_per_class_inheritance.html',
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
  'reference/transactions_and_concurrency_pessimistic_locking' => 
  array (
    'file' => 'reference/transactions_and_concurrency_pessimistic_locking',
    'url' => 'reference/transactions_and_concurrency_pessimistic_locking.html',
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
  'reference/transactions_and_concurrency_optimistic_locking' => 
  array (
    'file' => 'reference/transactions_and_concurrency_optimistic_locking',
    'url' => 'reference/transactions_and_concurrency_optimistic_locking.html',
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
  'reference/atomic_set' => 
  array (
    'file' => 'reference/atomic_set',
    'url' => 'reference/atomic_set.html',
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
  'reference/atomic_set_array' => 
  array (
    'file' => 'reference/atomic_set_array',
    'url' => 'reference/atomic_set_array.html',
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
  'reference/change_tracking_policies' => 
  array (
    'file' => 'reference/change_tracking_policies',
    'url' => 'reference/change_tracking_policies.html',
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
  'reference/flush_options' => 
  array (
    'file' => 'reference/flush_options',
    'url' => 'reference/flush_options.html',
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
  'reference/storage_strategies' => 
  array (
    'file' => 'reference/storage_strategies',
    'url' => 'reference/storage_strategies.html',
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
  'reference/doctrine_mapping_types' => 
  array (
    'file' => 'reference/doctrine_mapping_types',
    'url' => 'reference/doctrine_mapping_types.html',
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
  'reference/basic_mapping_identifiers' => 
  array (
    'file' => 'reference/basic_mapping_identifiers',
    'url' => 'reference/basic_mapping_identifiers.html',
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
  'reference/inheritance_mapping' => 
  array (
    'file' => 'reference/inheritance_mapping',
    'url' => 'reference/inheritance_mapping.html',
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
  'reference/lifecycle_events' => 
  array (
    'file' => 'reference/lifecycle_events',
    'url' => 'reference/lifecycle_events.html',
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
  'reference/document_repositories' => 
  array (
    'file' => 'reference/document_repositories',
    'url' => 'reference/document_repositories.html',
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
  'reference/haslifecyclecallbacks' => 
  array (
    'file' => 'reference/haslifecyclecallbacks',
    'url' => 'reference/haslifecyclecallbacks.html',
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
  'reference/annotations_reference_reference_one' => 
  array (
    'file' => 'reference/annotations_reference_reference_one',
    'url' => 'reference/annotations_reference_reference_one.html',
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
  'reference/annotations_reference_reference_many' => 
  array (
    'file' => 'reference/annotations_reference_reference_many',
    'url' => 'reference/annotations_reference_reference_many.html',
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
  'reference/aggregation_builder_group' => 
  array (
    'file' => 'reference/aggregation_builder_group',
    'url' => 'reference/aggregation_builder_group.html',
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
  'reference/int' => 
  array (
    'file' => 'reference/int',
    'url' => 'reference/int.html',
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
  'reference/float' => 
  array (
    'file' => 'reference/float',
    'url' => 'reference/float.html',
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
  'reference/annotations_reference_version' => 
  array (
    'file' => 'reference/annotations_reference_version',
    'url' => 'reference/annotations_reference_version.html',
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