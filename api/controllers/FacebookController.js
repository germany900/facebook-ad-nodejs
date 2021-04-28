/**
 * FacebookController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const {  Other } = require('../../helper/otherFuncton');


module.exports = {
  
    
    
    getInsights: async(req, res) => {
        try {
            let body = req.body;
            const reportAd = await Other(body.breakdowns);
            //console.log(reportAd);
            if(reportAd.length > 0) {
               for (let i = 0; i < reportAd.length; i++) {
                const element = reportAd[i]._data;
                let d = await Report2.create({
                    account_currency: element.account_currency,
                    account_id: element.account_id,
                    account_name: element.account_name,
                    actions: JSON.stringify(element.actions),
                    ad_id: element.ad_id,
                    ad_name: element.ad_name,
                    adset_id: element.adset_id,
                    adset_name: element.adset_name,
                    buying_type: element.buying_type,
                    campaign_id: element.campaign_id,
                    campaign_name: element.campaign_name,
                    clicks: element.clicks,
                    conversion_rate_ranking: element.conversion_rate_ranking,
                    cost_per_action_type: JSON.stringify(element.cost_per_action_type),
                    cost_per_inline_link_click: element.cost_per_inline_link_click,
                    cost_per_inline_post_engagement: element.cost_per_inline_post_engagement,
                    cost_per_outbound_click: JSON.stringify(element.cost_per_outbound_click),
                    cost_per_unique_action_type: JSON.stringify(element.cost_per_unique_action_type),
                    cost_per_unique_click: element.cost_per_unique_click,
                    cost_per_unique_inline_link_click: element.cost_per_unique_inline_link_click,
                    cost_per_unique_outbound_click: JSON.stringify(element.cost_per_unique_outbound_click),
                    cpc: element.cpc,
                    cpm: element.cpm,
                    cpp: element.cpp,
                    ctr: element.ctr,
                    date_start: element.date_start,
                    date_stop: element.date_stop,
                    engagement_rate_ranking: element.engagement_rate_ranking,
                    frequency: element.frequency,
                    impressions: element.impressions,
                    inline_link_click_ctr: element.inline_link_click_ctr,
                    inline_link_clicks: element.inline_link_clicks,
                    inline_post_engagement: element.inline_post_engagement,
                    instant_experience_clicks_to_open: element.instant_experience_clicks_to_open,
                    instant_experience_clicks_to_start: element.instant_experience_clicks_to_start,
                    instant_experience_outbound_clicks: element.instant_experience_outbound_clicks,
                    objective: element.objective,
                    optimization_goal: element.optimization_goal,
                    outbound_clicks: JSON.stringify(element.outbound_clicks),
                    outbound_clicks_ctr: JSON.stringify(element.outbound_clicks_ctr),
                    quality_ranking: element.quality_ranking,
                    reach: element.reach,
                    social_spend: element.social_spend,
                    spend: element.spend,
                    unique_actions: JSON.stringify(element.unique_actions),
                    unique_clicks: element.unique_clicks,
                    unique_ctr: element.unique_ctr,
                    unique_inline_link_click_ctr: element.unique_inline_link_click_ctr,
                    unique_inline_link_clicks: element.unique_inline_link_clicks,
                    unique_link_clicks_ctr: element.unique_link_clicks_ctr,
                    unique_outbound_clicks: JSON.stringify(element.unique_outbound_clicks),
                    unique_outbound_clicks_ctr: JSON.stringify(element.unique_outbound_clicks_ctr),
                    website_ctr: JSON.stringify(element.website_ctr),
                    age: element.age || '',
                    gender: element.gender || '',
                    country: element.country || '',
                    impression_device: element.impression_device || '',
                    region: element.region || '',
                    frequency_value: element.frequency_value || '',
                    hourly_stats_aggregated_by_advertiser_time_zone: element.hourly_stats_aggregated_by_advertiser_time_zone || '',
                    hourly_stats_aggregated_by_audience_time_zone: element.hourly_stats_aggregated_by_audience_time_zone || '',
                    device_platform: element.device_platform || '',
                    breakdowns: JSON.stringify(body.breakdowns) || 'sin breakdowns'
                }).fetch();
                //console.log(d);    
                }
                return res.status(200).json({
                    message: 'Los datos han sido guardados'
                });
            }else {
                return res.status(404).json({
                    message: 'No se recibio ningun dato del breakdown'
                });
            }     
        } catch (e) {
            console.log(e);
            return res.status(400).json({
                err: e
            });
        }
    }

};

