/**
 * Report2.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


    module.exports = {

      tableName: 'Report2',
    
      attributes: {
        account_currency: { type: 'string' },
        account_id: { type: 'string' },
        account_name: { type: 'string' },
        actions: { type: 'string' },
        ad_id: { type: 'string' },
        ad_name: { type: 'string' },
        adset_id: { type: 'string' },
        adset_name: { type: 'string' },
        buying_type: { type: 'string' },
        campaign_id: { type: 'string' },
        campaign_name: { type: 'string' },
        clicks: { type: 'string' },
        conversion_rate_ranking: { type: 'string' },
        cost_per_action_type: { type: 'string' },
        cost_per_inline_link_click: { type: 'string' },
        cost_per_inline_post_engagement: { type: 'string' },
        cost_per_outbound_click: { type: 'string' },
        cost_per_unique_action_type: { type: 'string' },
        cost_per_unique_click: { type: 'string' },
      cost_per_unique_inline_link_click: { type: 'string' },
      cost_per_unique_outbound_click: { type: 'string' },
      cpc: { type: 'string' },
      cpm: { type: 'string' },
      cpp: { type: 'string' },
      ctr: { type: 'string' },
      date_start: { type: 'string' },
      date_stop: { type: 'string' },
      engagement_rate_ranking: { type: 'string' },
      frequency: { type: 'string' },
      impressions: { type: 'number' },
      inline_link_click_ctr: { type: 'string' },
      inline_link_clicks: { type: 'string' },
      inline_post_engagement: { type: 'string' },
      instant_experience_clicks_to_open: { type: 'string' },
      instant_experience_clicks_to_start: { type: 'string' },
      instant_experience_outbound_clicks: { type: 'string' },
      objective: { type: 'string' },
      optimization_goal: { type: 'string' },
      outbound_clicks: { type: 'string' },
      outbound_clicks_ctr: { type: 'string' },
      quality_ranking: { type: 'string' },
      reach: { type: 'string' },
      social_spend: { type: 'string' },
      spend: { type: 'string' },
      unique_actions: { type: 'string' },
      unique_clicks: { type: 'string' },
      unique_ctr: { type: 'string' },
      unique_inline_link_click_ctr: { type: 'string' },
      unique_inline_link_clicks: { type: 'string' },
      unique_link_clicks_ctr: { type: 'string' },
      unique_outbound_clicks: { type: 'string' },
      unique_outbound_clicks_ctr: { type: 'string' },
      website_ctr: { type: 'string' },
      age: { type: 'string' },
      gender: { type: 'string' },
      country: { type: 'string' },
      impression_device: { type: 'string' },
      region: { type: 'string' },
      dma: { type: 'string' },
      frequency_value: { type: 'string' },
      hourly_stats_aggregated_by_advertiser_time_zone: { type: 'string' },
      hourly_stats_aggregated_by_audience_time_zone: { type: 'string' },
      device_platform: { type: 'string' },
      breakdowns: { type: 'string' }
  },
};

