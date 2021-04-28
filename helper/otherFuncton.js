
'use strict';
require("dotenv").config();
const bizSdk = require('facebook-nodejs-business-sdk');
const AdSet = bizSdk.AdSet;
const AdsInsights = bizSdk.AdsInsights;

const access_token = process.env.Facebook_token;
const app_secret = process.env.Facebook_app_secret;
const app_id = process.env.Facebook_app_id;
const id = process.env.Facebook_ad_account_id;
const api = bizSdk.FacebookAdsApi.init(access_token);
const showDebugingInfo = true; // Setting this to true shows more debugging info.


async function Other(breakdowns) {
  if (showDebugingInfo) {
    api.setDebug(true);
  }
  const logApiCallResult = (apiCallName, data) => {
    console.log(apiCallName);
    if (showDebugingInfo) {
      console.log('Data:' + JSON.stringify(data));
    }
  };
      
      let fields, params;
      fields = [
          'account_currency',
          'account_id',
          'account_name',
          'action_values',
          'actions',
          'ad_id',
          'ad_name',
          'adset_id',
          'adset_name',
          'attribution_setting',
          'buying_type',
          'campaign_id',
          'campaign_name',
          'canvas_avg_view_percent',
          'canvas_avg_view_time',
          'catalog_segment_value',
          'clicks',
          'conversion_rate_ranking',
          'conversion_values',
          'conversions',
          'converted_product_quantity',
          'converted_product_value',
          'cost_per_action_type',
          'cost_per_conversion',
          'cost_per_estimated_ad_recallers',
          'cost_per_inline_link_click',
          'cost_per_inline_post_engagement',
          'cost_per_outbound_click',
          'cost_per_thruplay',
          'cost_per_unique_action_type',
          'cost_per_unique_click',
          'cost_per_unique_inline_link_click',
          'cost_per_unique_outbound_click',
          'cpc',
          'cpm',
          'cpp',
          'ctr',
          'date_start',
          'date_stop',
          'engagement_rate_ranking',
          'estimated_ad_recall_rate',
          'estimated_ad_recallers',
          'frequency',
          'full_view_impressions',
          'full_view_reach',
          'impressions',
          'inline_link_click_ctr',
          'inline_link_clicks',
          'inline_post_engagement',
          'instant_experience_clicks_to_open',
          'instant_experience_clicks_to_start',
          'instant_experience_outbound_clicks',
          'mobile_app_purchase_roas',
          'objective',
          'optimization_goal',
          'outbound_clicks',
          'outbound_clicks_ctr',
          'purchase_roas',
          'qualifying_question_qualify_answer_rate',
          'quality_ranking',
          'reach',
          'social_spend',
          'spend',
          'unique_actions',
          'unique_clicks',
          'unique_ctr',
          'unique_inline_link_click_ctr',
          'unique_inline_link_clicks',
          'unique_link_clicks_ctr',
          'unique_outbound_clicks',
          'unique_outbound_clicks_ctr',
          'video_30_sec_watched_actions',
          'video_avg_time_watched_actions',
          'video_p100_watched_actions',
          'video_p25_watched_actions',
          'video_p50_watched_actions',
          'video_p75_watched_actions',
          'video_p95_watched_actions',
          'video_play_actions',
          'video_play_curve_actions',
          'website_ctr',
          'website_purchase_roas'
      ];
      params = {
        'time_range' : {'since':'2020-01-01','until':'2021-03-30'},
        'breakdowns' : breakdowns,
        'level': 'ad'
      };
      const insightss = await (new AdSet(id)).getInsights(
        fields,
        params
      );
      logApiCallResult('insightss api call complete.', insightss);
      return insightss;
      
}


module.exports = {
    Other
}
