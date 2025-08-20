export default {
  success: true,
  status: 'SUCCESS',
  code: 200,
  payload: [
    {
      audience_id: 'f7379481-8898-687c-4013-7cf6b3c28a68',
      name: 'asdfasdf',
      description: 'test test',
      rule_groups: [
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'category_order_count_last_x_days_v1',
              operator: 'less than',
              value: '{\"category\":\"category x\",\"days\":\"4444\"}',
              field: 'order',
              weight: 0.78,
              comment: 'testing',
            },
            {
              type: 'zip_code_v1',
              operator: 'less than',
              value: '15',
              field: 'demographic',
              weight: 1,
              comment: 'good to go',
            },
            {
              type: 'last_order_date_v1',
              operator: 'greater than',
              value: '2025-07-15',
              field: 'order',
              weight: 1,
              comment: 'test',
            },
          ],
        },
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'category',
              operator: 'equals',
              value: 'adsf',
              field: 'product_category',
              weight: 1,
              comment: '',
            },
          ],
        },
      ],
      logical_operator: 'AND',
      created_at: '2025-06-20 07:39:50.584000+00:00',
      updated_at: '2025-06-20 07:39:50.584000+00:00',
      is_deleted: false,
      parent_audience_id: null,
    },
    {
      audience_id: 'd90a2f54-b53e-950d-41c8-3c23985987f5',
      name: 'test audience',
      description: 'test1234',
      rule_groups: [
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'zip_code_v1',
              operator: 'less than',
              value: '15',
              field: 'demographic',
              weight: 1,
              comment: 'good to go',
            },
          ],
        },
      ],
      logical_operator: 'AND',
      created_at: null,
      updated_at: '2025-07-15 13:06:08.758000+00:00',
      is_deleted: false,
      parent_audience_id: 'c3c18e5d-65c6-7ec7-c1d3-b006c3e0c6b1',
    },
    {
      audience_id: 'e97f341a-89c9-1bcb-b9c6-cbdf7ac6eb46',
      name: 'Audience 2025',
      description: 'second test audience',
      rule_groups: [
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'last_order_date_v1',
              operator: 'greater than',
              value: '2025-07-15',
              field: 'order',
              weight: 1,
              comment: 'test',
            },
          ],
        },
      ],
      logical_operator: 'OR',
      created_at: null,
      updated_at: '2025-07-15 13:04:56.501000+00:00',
      is_deleted: false,
      parent_audience_id: 'c3c18e5d-65c6-7ec7-c1d3-b006c3e0c6b1',
    },
    {
      audience_id: 'c3c18e5d-65c6-7ec7-c1d3-b006c3e0c6b1',
      name: 'Starting',
      description: 'testing',
      rule_groups: [
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'last_order_date_v1',
              operator: 'less than',
              value: '40',
              field: 'order',
              weight: 1,
              comment: 'testing',
            },
          ],
        },
      ],
      logical_operator: 'AND',
      created_at: null,
      updated_at: '2025-07-15 14:00:36.242000+00:00',
      is_deleted: false,
      parent_audience_id: 'e97f341a-89c9-1bcb-b9c6-cbdf7ac6eb46',
    },
    {
      audience_id: '2b66d96c-3014-a325-8828-e6cacaffe3d9',
      name: 'Joe',
      description: 'Doe',
      rule_groups: [
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'brand_order_count_last_x_days_v1',
              operator: 'less than',
              value: '{"brand":"brand","days":"999"}',
              field: 'account',
              weight: 1,
              comment: '',
            },
          ],
        },
      ],
      logical_operator: 'AND',
      created_at: null,
      updated_at: '2025-07-15 12:16:14.184000+00:00',
      is_deleted: false,
      parent_audience_id: 'f7379481-8898-687c-4013-7cf6b3c28a68',
    },
    {
      audience_id: '910075eb-4290-c978-526d-30f4c32781c8',
      name: 'New audience',
      description: 'new audience',
      rule_groups: [
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'last_order_date_v1',
              operator: 'less than',
              value: '40',
              field: 'order',
              weight: 0.66,
              comment: 'testing',
            },
          ],
        },
      ],
      logical_operator: 'AND',
      created_at: null,
      updated_at: '2025-07-15 14:41:02.569000+00:00',
      is_deleted: false,
      parent_audience_id: 'f7379481-8898-687c-4013-7cf6b3c28a68',
    },
  ],
  tm: '20250723060624',
  errors: [],
};
