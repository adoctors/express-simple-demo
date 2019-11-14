var express = require("express");
var router = express.Router();
var rulesModel = require("../models/rules");

// 获取rule的列表
router.get("/rules", function(req, res, next) {
  res.json({
    success: true,
    code: 0,
    data: {
      rules: rulesModel.rules.rules,
      total: rulesModel.rules.rules.length
    }
  });
});

// 2. 获取category下的rules
router.get("/categories/:categoryId/rules", function(req, res, next) {
  console.log(req.params, req.params.categoryId);
  res.json({
    success: true,
    code: 0,
    data: {
      rules: rulesModel.rules.rules,
      total: rulesModel.rules.rules.length
    }
  });
});

// rule中keyword的创建
router.post("/rules/:ruleId/keyword", function(req, res, next) {
  console.log(req.params);
  // 可能返回值的data并不需要东西
  res.json({
    success: true,
    code: 0,
    data: {}
  });
});

// rule中keyword的修改
router.put("/rules/:ruleId/keyword", function(req, res, next) {
  res.json({
    success: true,
    code: 0,
    data: {}
  });
});

// rule中keyword的删除
router.delete("/rules/:ruleId/keywords/:wordId", function(req, res, next) {
  res.json({
    success: true,
    code: 0,
    data: {}
  });
});

// category列表获取
router.get("/categories", function(req, res, next) {
  console.log(req.params, req.params.categoryId);
  res.json({
    success: true,
    code: 0,
    data: {
      categories: rulesModel.categories.categories,
      total: rulesModel.categories.categories.length
    }
  });
});

// 获取录音类型列表
router.get("/rule_groups", function(req, res, next) {
  // console.log(req.params, req.params.categoryId);
  res.json({
    success: true,
    code: 0,
    data: {
      rule_groups: rulesModel.ruleGroups.rule_groups,
      total: rulesModel.ruleGroups.rule_groups.length
    }
  });
});

// 获取录音类型详情信息
router.get("/rule_groups/:id", function(req, res, next) {
  // console.log(req.params, req.params.categoryId);
  res.json({
    success: true,
    code: 0,
    data: rulesModel.ruleGroupDetail
  });
});

// 新增录音类型
router.post("/rule_groups", function(req, res, next) {
  // console.log(req.params, req.params.categoryId);
  res.json({
    success: true,
    code: 0,
    data: {}
  });
});

// 获取录音类型详情信息
router.put("/rule_groups/:id", function(req, res, next) {
  // console.log(req.params, req.params.categoryId);
  res.json({
    success: true,
    code: 0,
    data: {}
  });
});

module.exports = router;
