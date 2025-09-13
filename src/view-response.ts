interface Res1 {
  success: true;
  status: 'SUCCESS';
  code: 200;
  payload: {
    audience_id: string;
    message: string;
    success: boolean;
    view_name: string;
  }[];
  tm: '20250820053724';
  errors: [];
}

interface Res2 {
  success: true;
  status: 'SUCCESS';
  code: 200;
  payload: {
    audience_id: string;
    error: string;
    sql: string;
    rule_group_errors: Record<string, Array<string>>;
    success: boolean;
    view_name: string;
  }[];
  tm: '20250820053724';
  errors: [];
}

interface Res3 {
  success: true;
  status: 'SUCCESS';
  code: 200;
  payload: {
    audience_id: string;
    error: string;
    sql: string;
    success: boolean;
    view_name: string;
  }[];
  tm: '20250820053724';
  errors: [];
}
