define(["use!backbone","controllers/search"],function(a,b){function c(){d&&d.destroy&&d.destroy()}var d,e=a.Router.extend({routes:{"":"search","search/:term":"search",empty:"empty"},search:function(a){if(!d||d.name!=="search")c(),d=b();d.update({term:a})},empty:function(){c(),d={destroy:function(){}}}});return e})