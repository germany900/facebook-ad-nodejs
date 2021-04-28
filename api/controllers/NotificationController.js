/**
 * NotificationController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { sendNoti } = require('../../helper/sendnotification');

module.exports = {
  
    sendNoti: async(req, res) => {
        try {
            let body = req.body;

            let firstNoti = await sendNoti({ title: body.title, message: body.message });
            return res.status(200).json({
                message: 'Se envio la notificación'
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                err: error
            });
        }
    }
};

