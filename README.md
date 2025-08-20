<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## PROBLEM

Consider this request for statistics.

```bash
curl 'https://admin-test.bx-cloud.com/winp/data/v2/admin/audiences/temp-stats' \
  -H 'Accept: application/json' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Origin: http://0.0.0.0:9000' \
  -H 'Referer: http://0.0.0.0:9000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: cross-site' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36' \
  -H 'X-Winp-Token: <token>' \
  -H 'sec-ch-ua: "Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  --data-raw '[{"audience_id":"3e32677f-85c8-19a5-72a6-f98ea990e062","name":"collection audience Aug 11","description":"A test collection audience","rule_groups":[{"rules":[{"type":"093877fd-4a8e-fbe7-c9f2-b1a61649f377","operator":"affinity_over","value":"wishlist","field":"collection_093877fd-4a8e-fbe7-c9f2-b1a61649f377","weight":0.6,"comment":"comment here"},{"type":"singlebrand_buyer_v1","operator":"is true","value":"true","field":"order","weight":0.42,"comment":"purchased 3 times"},{"type":"category_order_count_last_x_days_v1","operator":"greater than","value":"{\"category\":\"category-C\",\"days\":\"56\"}","field":"order","weight":1,"comment":""}],"logical_operator":"OR"},{"rules":[{"type":"first_order_date_v1","operator":"greater than","value":"2025-08-21","field":"order","weight":1,"comment":""}],"logical_operator":"AND"}],"logical_operator":"OR","created_at":"2025-08-11T09:41:44.866Z","updated_at":"2025-08-18T13:36:13.310Z","is_deleted":false,"parent_audience_id":null,"group_name":null,"priority":null,"last_action_by":null}]'
```

The third rule of filter type `category_order_count_last_x_days_v1` in the `first` rule group's rules has a json structure for the rule's `value` property that is corresponding to the filter type's `value_type` i.e:

```json
{
  "accounts": [],
  "type_id": "category_order_count_last_x_days_v1",
  "type": "order",
  "display_name": "Orders from Category in Last x Days",
  "description": "Enter days; counts orders from the category within that period (format: \"CATEGORY,DAYS\")",
  "value_type": "[{\"type\":\"string\",\"label\":\"category\",\"description\":\"Category identifier\"},{\"type\":\"number\",\"label\":\"days\",\"description\":\"Number of days\"}]",
  "allowed_operators": [
    "less than",
    "greater than",
    "less than or equal to",
    "greater than or equal to"
  ],
  "possible_values": [],
  "is_required": false,
  "created_at": "2025-05-22 14:08:18.683932+00:00",
  "updated_at": "2025-05-22 14:08:18.683932+00:00",
  "is_deleted": false
}
```

The new approach I gave it was to instead of storing a comma delimited list of values (for the json value types defined by corresponding `FilterTypes`) in the same `value` property of a `Rule`, am storing a json string instead with keys identical to `label`'s values. i.e  
given the above `Filter Type` the value property of a `Rule` of this type becomes:

```json
{
  "type": "category_order_count_last_x_days_v1",
  "operator": "greater than",
  "value": "{\"category\":\"category-C\",\"days\":\"56\"}",
  "field": "order",
  "weight": 1,
  "comment": ""
}
```

I feel this is a better way storing the values in a `stringified map` instead of `a comma delimited list of values`.

## CHALLENGE

The challenge am facing now is with fetching the statistics as it does not seem to recognize this format depicted by this response:

```json
{
  "success": true,
  "status": "SUCCESS",
  "code": 200,
  "payload": [
    {
      "error": "An internal error occurred: Invalid JSON in audience_param when use_temp_audience=True: Expecting ',' delimiter: line 1 column 561 (char 560)"
    }
  ],
  "tm": "20250820053724",
  "errors": []
}
```

## OBSERVATIONS

- Fetching any audience statistics that does not include a rule with such complex values is a success considering the `value` properties are plain strings.
- Resending the failing request with the `culprit rule`'s value transformed to a comma delimited list is also a success: i.e `"value":"category-C,56"`

```bash
curl 'https://admin-test.bx-cloud.com/winp/data/v2/admin/audiences/temp-stats' \
  -H 'Accept: application/json' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Origin: http://0.0.0.0:9000' \
  -H 'Referer: http://0.0.0.0:9000/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: cross-site' \
  -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36' \
  -H 'X-Winp-Token: <token>' \
  -H 'sec-ch-ua: "Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Linux"' \
  --data-raw '[{"audience_id":"3e32677f-85c8-19a5-72a6-f98ea990e062","name":"collection audience Aug 11","description":"A test collection audience","rule_groups":[{"rules":[{"type":"093877fd-4a8e-fbe7-c9f2-b1a61649f377","operator":"affinity_over","value":"wishlist","field":"collection_093877fd-4a8e-fbe7-c9f2-b1a61649f377","weight":0.6,"comment":"comment here"},{"type":"singlebrand_buyer_v1","operator":"is true","value":"true","field":"order","weight":0.42,"comment":"purchased 3 times"},{"type":"category_order_count_last_x_days_v1","operator":"greater than","value":"category-C,56","field":"order","weight":1,"comment":""}],"logical_operator":"OR"},{"rules":[{"type":"first_order_date_v1","operator":"greater than","value":"2025-08-21","field":"order","weight":1,"comment":""}],"logical_operator":"AND"}],"logical_operator":"OR","created_at":"2025-08-11T09:41:44.866Z","updated_at":"2025-08-18T13:36:13.310Z","is_deleted":false,"parent_audience_id":null,"group_name":null,"priority":null,"last_action_by":null}]'
```

## REQUEST

The approach I gave the json values gives me a flexible way of transforming the values consistently, it only fails when fetching statistics. I dont know how flexible this can be adjusted to adapt my approach (that is from a comma delimited list to a json string) so that fetching statistics do not fail.
