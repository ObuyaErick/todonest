export default {
  success: true,
  status: 'SUCCESS',
  code: 200,
  payload: [
    {
      audience_id: 'f7379481-8898-687c-4013-7cf6b3c28a68',
      name: 'asdfasdf',
      description: 'test test',
      logical_operator: 'AND',
      created_at: '2025-06-20 07:39:50.584000+00:00',
      updated_at: '2025-06-20 07:39:50.584000+00:00',
      is_deleted: false,
      parent_audience_id: null,
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
          statistics: {
            customers: 619935,
            customer_value: 23587588.359987147,
            total_customers: 661558,
            total_value: 23587588.35999509,
          },
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
          statistics: {
            customers: 619935,
            customer_value: 23587588.359987188,
            total_customers: 661558,
            total_value: 23587588.35999509,
          },
        },
      ],

      statistics: {
        customers: 619935,
        customer_value: 23587588.360003583,
        total_customers: 661558,
        total_value: 23587588.35999509,
      },
    },
    {
      audience_id: 'c3c18e5d-65c6-7ec7-c1d3-b006c3e0c6b1',
      name: 'Starting',
      description: 'testing',
      logical_operator: 'AND',
      created_at: null,
      updated_at: '2025-07-15 14:00:36.242000+00:00',
      is_deleted: false,
      parent_audience_id: 'e97f341a-89c9-1bcb-b9c6-cbdf7ac6eb46',
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
          statistics: {
            customers: 619935,
            customer_value: 23587588.359987188,
            total_customers: 661558,
            total_value: 23587588.35999509,
          },
        },
      ],
      statistics: {
        customers: 619935,
        customer_value: 23587588.360003583,
        total_customers: 661558,
        total_value: 23587588.35999509,
      },
    },
    {
      audience_id: '910075eb-4290-c978-526d-30f4c32781c8',
      name: 'New audience',
      description: 'new audience',
      logical_operator: 'AND',
      created_at: null,
      updated_at: '2025-07-15 14:41:02.569000+00:00',
      is_deleted: false,
      parent_audience_id: 'f7379481-8898-687c-4013-7cf6b3c28a68',
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
          statistics: {
            customers: 619935,
            customer_value: 23587588.359987147,
            total_customers: 661558,
            total_value: 23587588.35999509,
          },
        },
      ],
      statistics: {
        customers: 619935,
        customer_value: 23587588.360003605,
        total_customers: 661558,
        total_value: 23587588.35999509,
      },
    },
  ],
  tm: '20250723060625',
  errors: [],
};
