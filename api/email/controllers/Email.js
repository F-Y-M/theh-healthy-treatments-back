// File /api/email/controllers/Email.js
'use strict'

/**
 * Read the documentation () to implement custom controller functions
 */

module.exports = {
    /**
     * Sends an email to the recipient in the body of the request
     */
    send: async (ctx) => {
        const request = ctx.request.body
        // console.log("CONTXT: ", ctx)
        // console.log("esto es el request: ", request)
        // const body = request.body
        const sendTo = request.email
        const code = request.code
        strapi.log.debug(`Trying to send an email to ${code}`)

        try {
            const emailOptions = {
                to: sendTo,
                subject: 'This is a test',
                /* html: `
                    <div class="es-wrapper-color">
                        <!--[if gte mso 9]>
                            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                                <v:fill type="tile" color="#fafafa"></v:fill>
                            </v:background>
                        <![endif]-->
                        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                            <tbody>
                                <tr>
                                    <td class="esd-email-paddings" valign="top">
                                        
                                        <table class="es-header" cellspacing="0" cellpadding="0" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="es-adaptive esd-stripe" esd-custom-block-id="88593" align="center">
                                                        <table class="es-header-body" style="background-color: #3d5ca3;" width="600" cellspacing="0" cellpadding="0" bgcolor="#3d5ca3" align="center">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" style="background-color: #443eab;" bgcolor="#3d5ca3" align="center">
                                                                        <!---->
                                                                        
                                                                        <a href="https://viewstripo.email" target="_blank"><img alt="" style="display: block;" src="http://18.117.241.225:1337/uploads/The_healty_treatments_logo_1c27426ae9.jpg" width="183"></a><!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
                                                                        
                                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-stripe" style="background-color: #fafafa;" bgcolor="#fafafa" align="center">
                                                        <table class="es-content-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-structure es-p40t es-p20r es-p20l" style="background-color: transparent; background-position: left top;" bgcolor="transparent" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                        <table style="background-position: left top;" width="100%" cellspacing="0" cellpadding="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td class="esd-block-image es-p5t es-p5b" style="font-size:0" align="center"><a target="_blank"><img src="https://tlr.stripocdn.email/content/guids/CABINET_dd354a98a803b60e2f0411e893c82f56/images/23891556799905703.png" alt="" style="display: block;" width="175"></a></td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td class="esd-block-text es-p15t es-p15b" align="center">
                                                                                                        <h1 style="color: #333333; font-size: 20px;"><strong>FORGOT YOUR </strong></h1>
                                                                                                        <h1 style="color: #333333; font-size: 20px;"><strong>&nbsp;PASSWORD?</strong></h1>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td class="esd-block-text es-p40r es-p40l" align="left">
                                                                                                        <p style="text-align: center;">HI,&nbsp;%FIRSTNAME|% %LASTNAME|%</p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td class="esd-block-text es-p35r es-p40l" align="left">
                                                                                                        <p style="text-align: center;">There was a request to change your password!</p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td class="esd-block-text es-p25t es-p40r es-p40l" align="center">
                                                                                                        <p>If did not make this request, just ignore this email. Otherwise, please click the button below to change your password:</p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td class="esd-block-button es-p40t es-p40b es-p10r es-p10l" align="center"><span class="es-button-border"><a href="https://viewstripo.email/" class="es-button" target="_blank">RESET PASSWORD</a></span></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="esd-structure es-p20t es-p10r es-p10l" style="background-position: center center;" align="left">
                                                                        <!--[if mso]><table width="580" cellpadding="0" cellspacing="0"><tr><td width="199" valign="top"><![endif]-->
                                                                        <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-container-frame" width="199" align="left">
                                                                                        <table style="background-position: center center;" width="100%" cellspacing="0" cellpadding="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td class="esd-block-text es-p15t es-m-txt-c" align="right">
                                                                                                        <p style="font-size: 16px; color: #666666;"><strong>Follow us:</strong></p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if mso]></td><td width="20"></td><td width="361" valign="top"><![endif]-->
                                                                        <table class="es-right" cellspacing="0" cellpadding="0" align="right">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-container-frame" width="361" align="left">
                                                                                        <table style="background-position: center center;" width="100%" cellspacing="0" cellpadding="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td class="esd-block-social es-p10t es-p5b es-m-txt-c" style="font-size:0" align="left">
                                                                                                        <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td class="es-p10r" valign="top" align="center"><a target="_blank" href=""><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/facebook-rounded-gray.png" alt="Fb" title="Facebook" width="32"></a></td>
                                                                                                                    <td class="es-p10r" valign="top" align="center"><a target="_blank" href=""><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/twitter-rounded-gray.png" alt="Tw" title="Twitter" width="32"></a></td>
                                                                                                                    <td class="es-p10r" valign="top" align="center"><a target="_blank" href=""><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/instagram-rounded-gray.png" alt="Ig" title="Instagram" width="32"></a></td>
                                                                                                                    <td class="es-p10r" valign="top" align="center"><a target="_blank" href=""><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/youtube-rounded-gray.png" alt="Yt" title="Youtube" width="32"></a></td>
                                                                                                                    <td class="es-p10r" valign="top" align="center"><a target="_blank" href=""><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/linkedin-rounded-gray.png" alt="In" title="Linkedin" width="32"></a></td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="esd-structure es-p5t es-p20b es-p20r es-p20l" style="background-position: left top;" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td class="esd-block-text" esd-links-color="#666666" align="center">
                                                                                                        <p style="font-size: 14px;">Contact us: <a target="_blank" style="font-size: 14px; color: #666666;" href="tel:123456789">123456789</a> | <a target="_blank" href="mailto:your@mail.com" style="font-size: 14px; color: #666666;">your@mail.com</a></p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="es-footer" cellspacing="0" cellpadding="0" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-stripe" style="background-color: #fafafa;" bgcolor="#fafafa" align="center">
                                                        <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-structure es-p10t es-p30b es-p20r es-p20l" style=" background-color: #0b5394; background-position: left top;" bgcolor="#0b5394" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td class="esd-block-text es-p5t es-p5b" align="left">
                                                                                                        <h2 style="font-size: 16px; color: #ffffff;"><strong>Have quastions?</strong></h2>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td esd-links-underline="none" esd-links-color="#ffffff" class="esd-block-text es-p5b" align="left">
                                                                                                        <p style="font-size: 14px; color: #ffffff;">We are here to help, learn more about us <a target="_blank" style="font-size: 14px; color: #ffffff; text-decoration: none;">here</a></p>
                                                                                                        <p style="font-size: 14px; color: #ffffff;">or <a target="_blank" style="font-size: 14px; text-decoration: none; color: #ffffff;">contact us</a><br></p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-stripe" style="background-color: #fafafa;" bgcolor="#fafafa" align="center">
                                                        <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-structure es-p15t" style="background-position: left top;" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-container-frame" width="600" valign="top" align="center">
                                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td class="esd-block-menu">
                                                                                                        <table class="es-menu" width="100%" cellspacing="0" cellpadding="0">
                                                                                                            <tbody>
                                                                                                                <tr class="links">
                                                                                                                    <td class="es-p10t es-p10b es-p5r es-p5l" style="padding-bottom: 1px; padding-top: 0px; " width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://viewstripo.email" style="color: #3D5CA3; font-size: 14px;">Sing up</a></td>
                                                                                                                    <td class="es-p10t es-p10b es-p5r es-p5l" style="border-left: 1px solid #3d5ca3; padding-bottom: 1px; padding-top: 0px; " width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://viewstripo.email" style="color: #3D5CA3; font-size: 14px;">Blog</a></td>
                                                                                                                    <td class="es-p10t es-p10b es-p5r es-p5l" style="border-left: 1px solid #3d5ca3; padding-bottom: 1px; padding-top: 0px; " width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://viewstripo.email" style="color: #3D5CA3; font-size: 14px;">About us</a></td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td class="esd-block-spacer es-p20b es-p20r es-p20l" style="font-size:0" align="center">
                                                                                                        <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="border-bottom: 1px solid #fafafa; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="es-footer" cellspacing="0" cellpadding="0" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-stripe" style="background-color: #fafafa;" esd-custom-block-id="88330" bgcolor="#fafafa" align="center">
                                                        <table class="es-footer-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-structure es-p15t es-p5b es-p20r es-p20l" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td esd-links-underline="underline" class="esd-block-text" align="center">
                                                                                                        <p style="font-size: 12px; color: #666666;">This daily newsletter was sent to info@name.com from company name because you subscribed. If you would not like to receive this email <a target="_blank" style="font-size: 12px; text-decoration: underline;" class="unsubscribe">unsubscribe here</a>.</p>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table class="es-content esd-footer-popover" cellspacing="0" cellpadding="0" align="center">
                                            <tbody>
                                                <tr>
                                                    <td class="esd-stripe" esd-custom-block-id="42537" align="center">
                                                        <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                            <tbody>
                                                                <tr>
                                                                    <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" align="left">
                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                                        <table width="100%" cellspacing="0" cellpadding="0">
                                                                                            <tbody>
                                                                                                <tr>
                                                                                                    <td class="esd-block-image es-infoblock made_with" style="font-size:0" align="center"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&amp;utm_medium=email&amp;utm_campaign=education&amp;utm_content=trigger_newsletter2"><img src="https://tlr.stripocdn.email/content/guids/cab_pub_7cbbc409ec990f19c78c75bd1e06f215/images/78411525331495932.png" alt="" style="display: block;" width="125"></a></td>
                                                                                                </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`,
                */
               html: `
                <div>
                    <p>Escribe este codigo para confirmar la cita medica</p>
                    <p>${code}</p>
                </div>
               `
            }
            await strapi.plugins['email'].services.email.send(emailOptions)
            strapi.log.debug(`Email sent to ${sendTo}`)
            ctx.send({ message: 'Email sent' })
        } catch (err) {
            strapi.log.error(`Error sending email to ${sendTo}`, err)
            console.log("Error", err)
            ctx.send({ error: 'Error sending email' })
        }
    },
}
