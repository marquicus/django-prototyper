export const FIELDS = {
    AutoField:  [],
    BigAutoField:  [],
    BigIntegerField:  [],
    BinaryField:  [],
    BooleanField:  [],
    CharField:  ['max_length'],
    DateField:  ['auto_now', 'auto_now_add'],
    DateTimeField:  ['auto_now', 'auto_now_add'],
    DecimalField:  ['max_digits', 'decimal_places'],
    DurationField:  [],
    EmailField:  [],
    FileField:  ['upload_to', 'storage'],
    FilePathField:  ['path', 'match', 'recursive', 'allow_files', 'allow_folders'],
    FloatField:  [],
    ForeignKey:  ['on_delete', 'related_name', 'related_query_name', 'parent_link', 'to_field'],
    GenericIPAddressField:  ['protocol', 'unpack_ipv4'],
    ImageField:  ['upload_to', 'width_field', 'height_field'],
    IntegerField:  [],
    ManyToManyField:  ['related_name', 'related_query_name', 'symmetrical'],
    NullBooleanField:  [],
    OneToOneField:  ['on_delete', 'to_field'],
    PositiveIntegerField:  [],
    PositiveSmallIntegerField:  [],
    SlugField:  [],
    SmallIntegerField:  [],
    TextField:  [],
    TimeField:  ['auto_now', 'auto_now_add'],
    URLField:  [],
    UUIDField:  [],
}

export const RELATIONAL_FIELDS = [
    'ForeignKey', 'OneToOneField', 'ManyToManyField'
]

export const ATTRIBUTES = {
       allow_files: {type: Boolean, default: true},
     allow_folders: {type: Boolean, default: false},
          auto_now: {type: Boolean, default: false},
      auto_now_add: {type: Boolean, default: false},
             blank: {type: Boolean, default: false},
          db_index: {type: Boolean, default: false},
    decimal_places: {type: Number,  default: null},
           default: {type: String,  default: null},
          editable: {type: Boolean, default: true},
      height_field: {type: Number,  default: null},
         help_text: {type: String,  default: null},
             match: {type: String,  default: null},
        max_digits: {type: Number,  default: null},
        max_length: {type: Number,  default: null},
            'null': {type: Boolean, default: false},
         on_delete: {type: String,  default: null},
       parent_link: {type: Boolean, default: false},
              path: {type: String,  default: ''},
       primary_key: {type: Boolean, default: false},
          protocol: {type: String,  default: 'both'},
         recursive: {type: Boolean, default: false},
      related_name: {type: String,  default: null},
related_query_name: {type: String,  default: null},
           storage: {type: String,  default: null},
       symmetrical: {type: Boolean, default: true},
          to_field: {type: String,  default: null},
            unique: {type: Boolean, default: false},
       unpack_ipv4: {type: Boolean, default: false},
         upload_to: {type: String,  default: ''},
      verbose_name: {type: String,  default: null},
       width_field: {type: String,  default: null},
}

export const COMMON_ATTRIBUTES = [
    'null',
    'blank',
    'primary_key',
    'unique', 
    'db_index',
    'editable',
    'verbose_name',
    'default',
    'help_text',
]


