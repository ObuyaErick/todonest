export default {
  success: true,
  status: 'SUCCESS',
  code: 200,
  payload: [
    {
      collection_id: 'dbe64767-33bb-1d4a-fe3f-92ec4609698d',
      name: 'test bx1',
      description: 'tes my collection',
      rule_groups: [
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'click_collect_v1',
              operator: 'is true',
              value: '',
              field: 'order',
              weight: 1,
              comment: '',
            },
          ],
        },
      ],
      logical_operator: 'AND',
      is_deleted: false,
      created_at: '2025-05-13 11:23:00.589000+00:00',
      updated_at: '2025-05-14 00:03:38.226000+00:00',
    },
    {
      collection_id: '5149c332-d128-defd-fdf9-3397e7fac32e',
      name: 'new collection',
      description: 'new coll',
      rule_groups: [
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'singlebrand_buyer_v1',
              operator: 'is true',
              value: '34',
              field: 'order',
              weight: 0.65,
              comment: '',
            },
          ],
        },
      ],
      logical_operator: 'AND',
      is_deleted: false,
      created_at: '2025-05-13 23:53:12.552000+00:00',
      updated_at: '2025-05-13 23:53:12.552000+00:00',
    },
    {
      collection_id: '093877fd-4a8e-fbe7-c9f2-b1a61649f377',
      name: 'Test Collection 1',
      description: 'test collection',
      rule_groups: [
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'collection',
              operator: 'equals',
              value: '34',
              field: 'collection',
              weight: 1,
              comment: '',
            },
          ],
        },
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'collection',
              operator: 'equals',
              value: '20',
              field: 'collection',
              weight: 1,
              comment: '',
            },
          ],
        },
      ],
      logical_operator: 'AND',
      is_deleted: false,
      created_at: '2025-06-03 15:57:55.297000+00:00',
      updated_at: '2025-06-03 15:57:55.297000+00:00',
    },
  ],
  tm: '20250723060625',
  errors: [],
};
