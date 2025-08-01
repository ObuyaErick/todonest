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
      created_at: '2025-07-29 10:00:24.645000+00:00',
      updated_at: '2025-07-29 10:00:24.645000+00:00',
      some_stats: 1524,
    },
  ],
  tm: '20250729070028',
  errors: [],
};
