export default {
  success: true,
  status: 'SUCCESS',
  code: 200,
  payload: [
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
      parent_collection_id: null,
      group_name: null,
      priority: null,
      last_action_by: null,
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
              type: 'price_range_v1',
              operator: 'equals',
              value: '56',
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
      updated_at: '2025-08-08 12:02:25.828000+00:00',
      parent_collection_id: '093877fd-4a8e-fbe7-c9f2-b1a61649f377',
      group_name: null,
      priority: null,
      last_action_by: null,
    },
    {
      collection_id: 'b07fbc98-e698-c979-0004-eda84a267828',
      name: 'Optio id delectus',
      description:
        'Est error eveniet. Ea sit eum. Molestias consequatur aut. Dolores cupiditate dolorum. Et et reiciendis. Nostrum in officiis. Ut itaque sunt. Quia vel molestiae. Qui placeat eligendi.',
      rule_groups: [
        {
          logical_operator: 'AND',
          rules: [
            {
              type: 'availability_v1',
              operator: 'equals',
              value: 'true',
              field: '',
              weight: 0.58,
              comment:
                'Possimus atque accusantium. Repellat fugit aspernatur. Iure odit et. Accusamus rem vel. Et libero id. Asperiores et quis. Sed sit sed. Consectetur mollitia aspernatur.',
            },
          ],
        },
      ],
      logical_operator: 'AND',
      is_deleted: null,
      created_at: '2025-08-05 09:54:18.499000+00:00',
      updated_at: '2025-08-05 09:54:18.499000+00:00',
      parent_collection_id: '093877fd-4a8e-fbe7-c9f2-b1a61649f377',
      group_name: 'Officiis',
      priority: null,
      last_action_by: 'erick@reduzer.tech',
    },
  ],
  tm: '20250723060625',
  errors: [],
};
