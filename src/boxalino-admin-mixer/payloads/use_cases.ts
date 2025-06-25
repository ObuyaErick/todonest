export default {
  success: true,
  status: 'SUCCESS',
  code: 200,
  payload: [
    {
      use_case_id: 'top_sellers_v1',
      name: 'Top Sellers',
      tooltip: [
        {
          language: 'en',
          value: 'List products that sold most in recent weeks.',
        },
      ],
      category: 'listing',
      order: 4,
      properties: [
        {
          name: 'max_weeks_since',
          tooltip: [
            {
              language: 'en',
              value: 'Maximum number of weeks since sale.',
            },
          ],
          format: 'integer',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 52,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Apply top-sellers as a filter.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable top-sellers filter.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable top-sellers filter.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'personalization_prior_click_discover_v1',
      name: 'Personalization on Prior Click: Discover',
      tooltip: [
        {
          language: 'en',
          value: 'Discover new products based on previous clicks.',
        },
      ],
      category: 'personalization',
      order: 14,
      properties: [
        {
          name: 'algorithm',
          tooltip: [
            {
              language: 'en',
              value: 'Algorithm choice for click-based discovery.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'ai',
              tooltip: [
                {
                  language: 'en',
                  value: 'AI-based discovery.',
                },
              ],
            },
            {
              name: 'category',
              tooltip: [
                {
                  language: 'en',
                  value: 'Category-based discovery.',
                },
              ],
            },
            {
              name: 'brand',
              tooltip: [
                {
                  language: 'en',
                  value: 'Brand-based discovery.',
                },
              ],
            },
            {
              name: 'sku',
              tooltip: [
                {
                  language: 'en',
                  value: 'SKU-based discovery.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'discount_v1',
      name: 'Discount Filter',
      tooltip: [
        {
          language: 'en',
          value: 'Filter products by discount amount.',
        },
      ],
      category: 'filtering rules',
      order: 7,
      properties: [
        {
          name: 'min_discount',
          tooltip: [
            {
              language: 'en',
              value: 'Minimum discount value.',
            },
          ],
          format: 'float',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'discount_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of discount (absolute or relative).',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'absolute',
              tooltip: [
                {
                  language: 'en',
                  value: 'Absolute discount value.',
                },
              ],
            },
            {
              name: 'relative',
              tooltip: [
                {
                  language: 'en',
                  value: 'Percentage discount.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Apply discount as a filter.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable discount filter.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable discount filter.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'specific_property_v1',
      name: 'Specific Property Filter',
      tooltip: [
        {
          language: 'en',
          value: 'Filter by a specific property and its values.',
        },
      ],
      category: 'filtering rules',
      order: 34,
      properties: [
        {
          name: 'property_name',
          tooltip: [
            {
              language: 'en',
              value: 'Name of the property to filter.',
            },
          ],
          format: 'string',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'property_values',
          tooltip: [
            {
              language: 'en',
              value: 'List of values for the property.',
            },
          ],
          format: 'list',
          values: [],
          defaultValues: [''],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'search_term_segmented_click_statistics_v1',
      name: 'Search-Term Segmented Click Statistics',
      tooltip: [
        {
          language: 'en',
          value: 'Statistics of clicks segmented by search term.',
        },
      ],
      category: 'marketing',
      order: 27,
      properties: [
        {
          name: 'time_range',
          tooltip: [
            {
              language: 'en',
              value: 'Time window for statistics.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'all_time',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for all time.',
                },
              ],
            },
            {
              name: 'mid_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for mid term.',
                },
              ],
            },
            {
              name: 'short_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for short term.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'statistic_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of statistic (rate or absolute).',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'rate',
              tooltip: [
                {
                  language: 'en',
                  value: 'Percentage rate.',
                },
              ],
            },
            {
              name: 'absolute',
              tooltip: [
                {
                  language: 'en',
                  value: 'Absolute count.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'personalization_prior_purchases_discover_v1',
      name: 'Personalization on Prior Purchases: Discover',
      tooltip: [
        {
          language: 'en',
          value: 'Discover new products based on previous purchases.',
        },
      ],
      category: 'personalization',
      order: 15,
      properties: [
        {
          name: 'algorithm',
          tooltip: [
            {
              language: 'en',
              value: 'Algorithm choice for purchase-based discovery.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'ai',
              tooltip: [
                {
                  language: 'en',
                  value: 'AI-based discovery.',
                },
              ],
            },
            {
              name: 'category',
              tooltip: [
                {
                  language: 'en',
                  value: 'Category-based discovery.',
                },
              ],
            },
            {
              name: 'brand',
              tooltip: [
                {
                  language: 'en',
                  value: 'Brand-based discovery.',
                },
              ],
            },
            {
              name: 'sku',
              tooltip: [
                {
                  language: 'en',
                  value: 'SKU-based discovery.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'search_property_v1',
      name: 'Search Property Filter',
      tooltip: [
        {
          language: 'en',
          value: 'Filter by a specific product property.',
        },
      ],
      category: 'filtering rules',
      order: 31,
      properties: [
        {
          name: 'property_name',
          tooltip: [
            {
              language: 'en',
              value: 'Name of the property to search.',
            },
          ],
          format: 'string',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'click_statistics_v1',
      name: 'Click Statistics',
      tooltip: [
        {
          language: 'en',
          value: 'Analyze product click statistics.',
        },
      ],
      category: 'marketing',
      order: 22,
      properties: [
        {
          name: 'time_range',
          tooltip: [
            {
              language: 'en',
              value: 'Time window for statistics.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'all_time',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for all time.',
                },
              ],
            },
            {
              name: 'mid_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for mid term.',
                },
              ],
            },
            {
              name: 'short_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for short term.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'statistic_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of statistic (rate or absolute).',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'rate',
              tooltip: [
                {
                  language: 'en',
                  value: 'Percentage rate.',
                },
              ],
            },
            {
              name: 'absolute',
              tooltip: [
                {
                  language: 'en',
                  value: 'Absolute count.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'similarity_property_v1',
      name: 'Similarity Property Selector',
      tooltip: [
        {
          language: 'en',
          value: 'Select property for similarity matching.',
        },
      ],
      category: 'personalization',
      order: 32,
      properties: [
        {
          name: 'property_name',
          tooltip: [
            {
              language: 'en',
              value: 'Name of the property for similarity.',
            },
          ],
          format: 'string',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'latest_releases_v1',
      name: 'Latest Releases',
      tooltip: [
        {
          language: 'en',
          value: 'List products released within recent weeks.',
        },
      ],
      category: 'listing',
      order: 8,
      properties: [
        {
          name: 'max_weeks_since_release',
          tooltip: [
            {
              language: 'en',
              value: 'Maximum number of weeks since product release.',
            },
          ],
          format: 'integer',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 52,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Apply latest releases as a filter.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable latest releases filter.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable latest releases filter.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'personalization_prior_click_expand_v1',
      name: 'Personalization on Prior Click: Expand',
      tooltip: [
        {
          language: 'en',
          value: 'Expand product selection based on previous clicks.',
        },
      ],
      category: 'personalization',
      order: 12,
      properties: [
        {
          name: 'algorithm',
          tooltip: [
            {
              language: 'en',
              value: 'Algorithm choice for click-based expansion.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'ai',
              tooltip: [
                {
                  language: 'en',
                  value: 'AI-based expansion.',
                },
              ],
            },
            {
              name: 'category',
              tooltip: [
                {
                  language: 'en',
                  value: 'Category-based expansion.',
                },
              ],
            },
            {
              name: 'brand',
              tooltip: [
                {
                  language: 'en',
                  value: 'Brand-based expansion.',
                },
              ],
            },
            {
              name: 'sku',
              tooltip: [
                {
                  language: 'en',
                  value: 'SKU-based expansion.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'click_revenue_statistics_v1',
      name: 'Click Revenue Statistics',
      tooltip: [
        {
          language: 'en',
          value: 'Analyze click-to-revenue statistics.',
        },
      ],
      category: 'sales',
      order: 24,
      properties: [
        {
          name: 'time_range',
          tooltip: [
            {
              language: 'en',
              value: 'Time window for statistics.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'all_time',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for all time.',
                },
              ],
            },
            {
              name: 'mid_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for mid term.',
                },
              ],
            },
            {
              name: 'short_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for short term.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'statistic_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of statistic (rate or absolute).',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'rate',
              tooltip: [
                {
                  language: 'en',
                  value: 'Percentage rate.',
                },
              ],
            },
            {
              name: 'absolute',
              tooltip: [
                {
                  language: 'en',
                  value: 'Absolute count.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'image_count_v1',
      name: 'Image Count of a Product',
      tooltip: [
        {
          language: 'en',
          value: 'Filter or highlight products based on number of images.',
        },
      ],
      category: 'filtering rules',
      order: 3,
      properties: [
        {
          name: 'min_images',
          tooltip: [
            {
              language: 'en',
              value: 'Minimum number of images required.',
            },
          ],
          format: 'integer',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Apply image count as a filter.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable image filter.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable image filter.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'search_term_segmented_click_purchase_statistics_v1',
      name: 'Search-Term Segmented Click-Purchase Statistics',
      tooltip: [
        {
          language: 'en',
          value: 'Statistics of click-to-purchase segmented by search term.',
        },
      ],
      category: 'sales',
      order: 28,
      properties: [
        {
          name: 'time_range',
          tooltip: [
            {
              language: 'en',
              value: 'Time window for statistics.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'all_time',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for all time.',
                },
              ],
            },
            {
              name: 'mid_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for mid term.',
                },
              ],
            },
            {
              name: 'short_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for short term.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'statistic_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of statistic (rate or absolute).',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'rate',
              tooltip: [
                {
                  language: 'en',
                  value: 'Percentage rate.',
                },
              ],
            },
            {
              name: 'absolute',
              tooltip: [
                {
                  language: 'en',
                  value: 'Absolute count.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'similar_items_v1',
      name: 'Similar Items',
      tooltip: [
        {
          language: 'en',
          value: 'Filter or suggest items similar to a reference item.',
        },
      ],
      category: 'personalization',
      order: 16,
      properties: [
        {
          name: 'algorithm',
          tooltip: [
            {
              language: 'en',
              value: 'Algorithm for similarity matching.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'ai',
              tooltip: [
                {
                  language: 'en',
                  value: 'AI-based similarity.',
                },
              ],
            },
            {
              name: 'category',
              tooltip: [
                {
                  language: 'en',
                  value: 'Category-based similarity.',
                },
              ],
            },
            {
              name: 'brand',
              tooltip: [
                {
                  language: 'en',
                  value: 'Brand-based similarity.',
                },
              ],
            },
            {
              name: 'sku',
              tooltip: [
                {
                  language: 'en',
                  value: 'SKU-based similarity.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Apply similarity as a filter.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable similarity filter.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable similarity filter.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'display_statistics_v1',
      name: 'Display Statistics',
      tooltip: [
        {
          language: 'en',
          value: 'Display product statistics over time.',
        },
      ],
      category: 'sales',
      order: 21,
      properties: [
        {
          name: 'time_range',
          tooltip: [
            {
              language: 'en',
              value: 'Time window for statistics.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'all_time',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for all time.',
                },
              ],
            },
            {
              name: 'mid_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for mid term.',
                },
              ],
            },
            {
              name: 'short_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for short term.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'statistic_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of statistic (rate or absolute).',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'rate',
              tooltip: [
                {
                  language: 'en',
                  value: 'Percentage rate.',
                },
              ],
            },
            {
              name: 'absolute',
              tooltip: [
                {
                  language: 'en',
                  value: 'Absolute count.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'personalization_prior_purchases_retarget_v1',
      name: 'Personalization on Prior Purchases: Retarget',
      tooltip: [
        {
          language: 'en',
          value: 'Retarget products based on previous purchase history.',
        },
      ],
      category: 'personalization',
      order: 11,
      properties: [
        {
          name: 'algorithm',
          tooltip: [
            {
              language: 'en',
              value: 'Algorithm choice for purchase-based retargeting.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'ai',
              tooltip: [
                {
                  language: 'en',
                  value: 'AI-based retargeting.',
                },
              ],
            },
            {
              name: 'category',
              tooltip: [
                {
                  language: 'en',
                  value: 'Category-based retargeting.',
                },
              ],
            },
            {
              name: 'brand',
              tooltip: [
                {
                  language: 'en',
                  value: 'Brand-based retargeting.',
                },
              ],
            },
            {
              name: 'sku',
              tooltip: [
                {
                  language: 'en',
                  value: 'SKU-based retargeting.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'search_term_segmented_click_revenue_statistics_v1',
      name: 'Search-Term Segmented Click-Revenue Statistics',
      tooltip: [
        {
          language: 'en',
          value: 'Statistics of click-to-revenue segmented by search term.',
        },
      ],
      category: 'sales',
      order: 29,
      properties: [
        {
          name: 'time_range',
          tooltip: [
            {
              language: 'en',
              value: 'Time window for statistics.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'all_time',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for all time.',
                },
              ],
            },
            {
              name: 'mid_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for mid term.',
                },
              ],
            },
            {
              name: 'short_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for short term.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'statistic_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of statistic (rate or absolute).',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'rate',
              tooltip: [
                {
                  language: 'en',
                  value: 'Percentage rate.',
                },
              ],
            },
            {
              name: 'absolute',
              tooltip: [
                {
                  language: 'en',
                  value: 'Absolute count.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'randomization_v1',
      name: 'Randomization',
      tooltip: [
        {
          language: 'en',
          value: 'Randomize product listing order.',
        },
      ],
      category: 'listing',
      order: 9,
      properties: [
        {
          name: 'randomize',
          tooltip: [
            {
              language: 'en',
              value: 'Enable random ordering.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Randomize list.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Do not randomize list.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'personalization_affinities_discovery_v1',
      name: 'Personalization Affinities Based on Discovery',
      tooltip: [
        {
          language: 'en',
          value: 'Recommend products based on discovery affinities.',
        },
      ],
      category: 'personalization',
      order: 19,
      properties: [
        {
          name: 'enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Enable discovery affinity recommendations.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable this algorithm.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable this algorithm.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'search_fields_v1',
      name: 'Search Fields',
      tooltip: [
        {
          language: 'en',
          value: 'Select which fields to include in search.',
        },
      ],
      category: 'filtering rules',
      order: 26,
      properties: [
        {
          name: 'search_fields',
          tooltip: [
            {
              language: 'en',
              value: 'Fields to search on.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'ai',
              tooltip: [
                {
                  language: 'en',
                  value: 'AI-enhanced search.',
                },
              ],
            },
            {
              name: 'title',
              tooltip: [
                {
                  language: 'en',
                  value: 'Search in product title.',
                },
              ],
            },
            {
              name: 'category',
              tooltip: [
                {
                  language: 'en',
                  value: 'Search in category.',
                },
              ],
            },
            {
              name: 'brand',
              tooltip: [
                {
                  language: 'en',
                  value: 'Search in brand.',
                },
              ],
            },
            {
              name: 'short_description',
              tooltip: [
                {
                  language: 'en',
                  value: 'Search in short description.',
                },
              ],
            },
            {
              name: 'description',
              tooltip: [
                {
                  language: 'en',
                  value: 'Search in full description.',
                },
              ],
            },
            {
              name: 'tags',
              tooltip: [
                {
                  language: 'en',
                  value: 'Search in tags.',
                },
              ],
            },
            {
              name: 'all_text',
              tooltip: [
                {
                  language: 'en',
                  value: 'Search across all text fields.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'rating_v1',
      name: 'Rating of a Product',
      tooltip: [
        {
          language: 'en',
          value: 'Filter or highlight products based on minimum rating.',
        },
      ],
      category: 'filtering rules',
      order: 1,
      properties: [
        {
          name: 'min_rating',
          tooltip: [
            {
              language: 'en',
              value: 'Minimum rating (0.0 to 5.0).',
            },
          ],
          format: 'float',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 5,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Apply rating as a filter.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable rating filtering.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable rating filtering.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'personalization_prior_click_retarget_v1',
      name: 'Personalization on Prior Click: Retarget',
      tooltip: [
        {
          language: 'en',
          value: 'Retarget products based on previous click history.',
        },
      ],
      category: 'personalization',
      order: 10,
      properties: [
        {
          name: 'algorithm',
          tooltip: [
            {
              language: 'en',
              value: 'Algorithm choice for retargeting.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'ai',
              tooltip: [
                {
                  language: 'en',
                  value: 'AI-based retargeting.',
                },
              ],
            },
            {
              name: 'category',
              tooltip: [
                {
                  language: 'en',
                  value: 'Category-based retargeting.',
                },
              ],
            },
            {
              name: 'brand',
              tooltip: [
                {
                  language: 'en',
                  value: 'Brand-based retargeting.',
                },
              ],
            },
            {
              name: 'sku',
              tooltip: [
                {
                  language: 'en',
                  value: 'SKU-based retargeting.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'click_purchase_statistics_v1',
      name: 'Click Purchase Statistics',
      tooltip: [
        {
          language: 'en',
          value: 'Analyze click-to-purchase statistics.',
        },
      ],
      category: 'sales',
      order: 23,
      properties: [
        {
          name: 'time_range',
          tooltip: [
            {
              language: 'en',
              value: 'Time window for statistics.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'all_time',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for all time.',
                },
              ],
            },
            {
              name: 'mid_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for mid term.',
                },
              ],
            },
            {
              name: 'short_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for short term.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'statistic_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of statistic (rate or absolute).',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'rate',
              tooltip: [
                {
                  language: 'en',
                  value: 'Percentage rate.',
                },
              ],
            },
            {
              name: 'absolute',
              tooltip: [
                {
                  language: 'en',
                  value: 'Absolute count.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'personalization_affinities_reordering_v1',
      name: 'Personalization Affinities Based on Re-Ordering',
      tooltip: [
        {
          language: 'en',
          value: 'Recommend products based on re-ordering affinities.',
        },
      ],
      category: 'personalization',
      order: 18,
      properties: [
        {
          name: 'enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Enable affinity-based recommendations.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable this algorithm.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable this algorithm.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'delivery_v1',
      name: 'Delivery Type of a Product',
      tooltip: [
        {
          language: 'en',
          value: 'Filter or categorize products by delivery type.',
        },
      ],
      category: 'filtering rules',
      order: 2,
      properties: [
        {
          name: 'delivery_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of delivery service.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'fast',
              tooltip: [
                {
                  language: 'en',
                  value: 'Fast delivery option.',
                },
              ],
            },
            {
              name: 'normal',
              tooltip: [
                {
                  language: 'en',
                  value: 'Standard delivery option.',
                },
              ],
            },
            {
              name: 'slow',
              tooltip: [
                {
                  language: 'en',
                  value: 'Slow delivery option.',
                },
              ],
            },
            {
              name: 'not-orderable',
              tooltip: [
                {
                  language: 'en',
                  value: 'Product cannot be ordered.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Apply delivery type as a filter.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable delivery filter.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable delivery filter.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'price_v1',
      name: 'Price Range',
      tooltip: [
        {
          language: 'en',
          value: 'Filter products based on minimum price.',
        },
      ],
      category: 'filtering rules',
      order: 6,
      properties: [
        {
          name: 'min_price',
          tooltip: [
            {
              language: 'en',
              value: 'Minimum product price.',
            },
          ],
          format: 'float',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 1000000,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Apply price as a filter.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable price filter.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable price filter.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'sold_times_v1',
      name: 'Sold Count',
      tooltip: [
        {
          language: 'en',
          value: 'Filter products by minimum number of times sold.',
        },
      ],
      category: 'filtering rules',
      order: 5,
      properties: [
        {
          name: 'min_times_sold',
          tooltip: [
            {
              language: 'en',
              value: 'Minimum times a product has been sold.',
            },
          ],
          format: 'integer',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 1000000,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Apply sold count as a filter.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable sold count filter.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable sold count filter.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'personalization_prior_purchases_expand_v1',
      name: 'Personalization on Prior Purchases: Expand',
      tooltip: [
        {
          language: 'en',
          value: 'Expand product selection based on previous purchases.',
        },
      ],
      category: 'personalization',
      order: 13,
      properties: [
        {
          name: 'algorithm',
          tooltip: [
            {
              language: 'en',
              value: 'Algorithm choice for purchase-based expansion.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'ai',
              tooltip: [
                {
                  language: 'en',
                  value: 'AI-based expansion.',
                },
              ],
            },
            {
              name: 'category',
              tooltip: [
                {
                  language: 'en',
                  value: 'Category-based expansion.',
                },
              ],
            },
            {
              name: 'brand',
              tooltip: [
                {
                  language: 'en',
                  value: 'Brand-based expansion.',
                },
              ],
            },
            {
              name: 'sku',
              tooltip: [
                {
                  language: 'en',
                  value: 'SKU-based expansion.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'stock_v1',
      name: 'Stock of a Product',
      tooltip: [
        {
          language: 'en',
          value: 'Filter or highlight products based on minimum stock level.',
        },
      ],
      category: 'filtering rules',
      order: 0,
      properties: [
        {
          name: 'min_stock',
          tooltip: [
            {
              language: 'en',
              value: 'Minimum stock threshold.',
            },
          ],
          format: 'integer',
          values: [],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100000,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Apply stock as a filter.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable stock filtering.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable stock filtering.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'personalization_neuro_collaborative_filter_v1',
      name: 'Personalization Neuro-Collaborative Filter',
      tooltip: [
        {
          language: 'en',
          value: 'Use neuro-collaborative filtering for personalization.',
        },
      ],
      category: 'personalization',
      order: 17,
      properties: [
        {
          name: 'enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Enable neuro-collaborative filtering.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable this algorithm.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable this algorithm.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'bought_together_v1',
      name: 'Bought Together',
      tooltip: [
        {
          language: 'en',
          value: 'Suggest products frequently bought together.',
        },
      ],
      category: 'listing',
      order: 33,
      properties: [
        {
          name: 'enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Enable bought-together suggestions.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable suggestions.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable suggestions.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'click_margin_statistics_v1',
      name: 'Click Margin Statistics',
      tooltip: [
        {
          language: 'en',
          value: 'Analyze click-to-margin statistics.',
        },
      ],
      category: 'sales',
      order: 25,
      properties: [
        {
          name: 'time_range',
          tooltip: [
            {
              language: 'en',
              value: 'Time window for statistics.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'all_time',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for all time.',
                },
              ],
            },
            {
              name: 'mid_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for mid term.',
                },
              ],
            },
            {
              name: 'short_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for short term.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'statistic_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of statistic (rate or absolute).',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'rate',
              tooltip: [
                {
                  language: 'en',
                  value: 'Percentage rate.',
                },
              ],
            },
            {
              name: 'absolute',
              tooltip: [
                {
                  language: 'en',
                  value: 'Absolute count.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'search_term_segmented_click_margin_statistics_v1',
      name: 'Search-Term Segmented Click-Margin Statistics',
      tooltip: [
        {
          language: 'en',
          value: 'Statistics of click-to-margin segmented by search term.',
        },
      ],
      category: 'sales',
      order: 30,
      properties: [
        {
          name: 'time_range',
          tooltip: [
            {
              language: 'en',
              value: 'Time window for statistics.',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'all_time',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for all time.',
                },
              ],
            },
            {
              name: 'mid_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for mid term.',
                },
              ],
            },
            {
              name: 'short_term',
              tooltip: [
                {
                  language: 'en',
                  value: 'Statistics for short term.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'statistic_type',
          tooltip: [
            {
              language: 'en',
              value: 'Type of statistic (rate or absolute).',
            },
          ],
          format: 'enum',
          values: [
            {
              name: 'rate',
              tooltip: [
                {
                  language: 'en',
                  value: 'Percentage rate.',
                },
              ],
            },
            {
              name: 'absolute',
              tooltip: [
                {
                  language: 'en',
                  value: 'Absolute count.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
    {
      use_case_id: 'product_with_picture_v1',
      name: 'Product with Picture',
      tooltip: [
        {
          language: 'en',
          value: 'Filter products that have at least one image.',
        },
      ],
      category: 'filtering rules',
      order: 20,
      properties: [
        {
          name: 'filter_enabled',
          tooltip: [
            {
              language: 'en',
              value: 'Filter to only products with pictures.',
            },
          ],
          format: 'boolean',
          values: [
            {
              name: 'true',
              tooltip: [
                {
                  language: 'en',
                  value: 'Enable picture filter.',
                },
              ],
            },
            {
              name: 'false',
              tooltip: [
                {
                  language: 'en',
                  value: 'Disable picture filter.',
                },
              ],
            },
          ],
          defaultValues: [''],
          multiValued: false,
          required: true,
          category: '',
          min: 0,
          max: 100,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
        {
          name: 'boostWeight',
          tooltip: [
            {
              language: 'en',
              value: 'boostWeight tooltip',
            },
          ],
          format: 'double',
          values: [
            {
              name: '0.5',
              tooltip: [
                {
                  language: 'en',
                  value: 'default boostWeight value',
                },
              ],
            },
          ],
          defaultValues: ['0.5'],
          multiValued: true,
          required: true,
          category: '',
          min: 0,
          max: 1,
          string_attributes: [],
          localized_string_attributes: [],
          numeric_attributes: [],
          localized_numeric_attributes: [],
          datetime_attributes: [],
          localized_datetime_attributes: [],
        },
      ],
      string_attributes: [],
      localized_string_attributes: [],
      numeric_attributes: [],
      localized_numeric_attributes: [],
      datetime_attributes: [],
      localized_datetime_attributes: [],
      creation_tm: '2025-05-19 10:18:36',
      last_update_tm: '2025-05-19 10:18:36',
      last_update_user: 'system',
    },
  ],
  tm: '20250624123819',
  errors: [],
};
