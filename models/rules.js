var Mock = require("mockjs");

var rules = Mock.mock({
  "rules|10": [
    {
      id: "@id",
      name: "@cname",
      "keywords|5-10": [
        {
          id: "@id",
          "words|3-8": ["@cword(1, 3)"],
          distance: 1,
          sentence_length: 1,
          include: "@boolean"
        }
      ]
    }
  ]
});

var ruleKeyword = Mock.mock({
  "rules|10": [
    {
      id: "@id",
      name: "@cname",
      "keywords|5-10": [
        {
          id: "@id",
          "words|3-8": ["@cword(1, 3)"],
          distance: 1,
          sentence_length: 1,
          include: "@boolean"
        }
      ]
    }
  ]
});

var categories = Mock.mock({
  "categories|5-10": [
    {
      id: "@id",
      name: "@cname",
      description: "@cword(10, 23)"
    }
  ]
});

// Rule group list 录音类型列表
var ruleGroups = Mock.mock({
  "rule_groups|5-10": [
    {
      id: "@id",
      name: "@cname",
      default: "@boolean"
    }
  ]
});

// Rule group 详情信息
var ruleGroupDetail = Mock.mock({
  rule_group: {
    id: "@id",
    name: "@cname",
    description: "@cword(10, 23)",
    default: "@boolean",
    base_score: "@integer(0,10)",
    qualified_score: "@integer(3,6)",
    "good_rules|5-10": [
      {
        id: "@id",
        name: "@cname"
      }
    ],
    "bad_rules|5-10": [
      {
        id: "@id",
        name: "@cname"
      }
    ],
    "rules|5-10": [
      {
        id: "@id",
        name: "@cname"
      }
    ]
  }
});

module.exports = {
  rules,
  ruleKeyword,
  categories,
  ruleGroups,
  ruleGroupDetail
};
