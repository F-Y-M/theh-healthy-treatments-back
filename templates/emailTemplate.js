const emailTemplate = (title, content, extra) => {
  return html = `<table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top" width="100%" cellspacing="0" cellpadding="0"> 
  <tbody><tr style="border-collapse:collapse"> 
   <td style="padding:0;Margin:0" valign="top"> 
     
    <table class="es-header" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
      <tbody><tr style="border-collapse:collapse"> 
       <td class="es-adaptive" style="padding:0;Margin:0" align="center"> 
        <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:white;width:600px" cellspacing="0" cellpadding="0" bgcolor="white" align="center"> 
          <tbody><tr style="border-collapse:collapse"> 
           <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:white" bgcolor="#3d5ca3" align="left"> 
            <!--[if mso]><table style="width:560px" cellpadding="0" 
                     cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
            <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;" cellspacing="0" cellpadding="0" align="center"> 
              <tbody><tr style="border-collapse:collapse"> 
               <td class="es-m-p20b" style="padding:0;Margin:0;width:180px" align="left"> 
                <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                  <tbody><tr style="border-collapse:collapse"> 
                   <td class="es-m-p0l es-m-txt-c" style="padding:0;Margin:0;font-size:0" align="left"><a href="https://viewstripo.email" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;color:#1376C8"><img alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" src="http://54.144.236.139:1337/uploads/The_healty_treatments_logo_711a287ad4.jpg" width="183"></a></td> 
                  </tr> 
                </tbody></table></td> 
              </tr> 
            </tbody></table> 
             
             
            </td> 
          </tr> 
        </tbody></table></td> 
      </tr> 
    </tbody></table> 
    <!-- contenido del mensaje -->
<table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
      <tbody><tr style="border-collapse:collapse"> 
       <td style="padding:0;Margin:0;background-color:#FAFAFA" bgcolor="#fafafa" align="center"> 
        <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:white;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
          <tbody><!-- Esto es lo que va a cambiar -->
<tr style="border-collapse:collapse"> 
           <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;background-color:transparent;background-position:left top" bgcolor="transparent" align="left"> 
            <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
              <tbody><tr style="border-collapse:collapse"> 
               <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:left top" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                  <tbody> 
                  <tr style="border-collapse:collapse"> 
                   <td style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px" align="center"><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>${title}</strong></h1></td> 
                  </tr> 
                   
                  <tr style="border-collapse:collapse"> 
                   <td style="padding:0;Margin:0;padding-right:35px;padding-left:40px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;text-align:center">${content}</p></td> 
                  </tr> 
                  


                   <tr><td style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px" align="center"><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>${extra}</strong></h1></td> 
                  </tr> 
                   
                </tbody></table></td> 
              </tr> 
            </tbody></table></td> 
          </tr>
<!-- Termino lo que cambia --> 
          <tr style="border-collapse:collapse"> 
           <td style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-top:20px;background-position:center center" align="left"> 
             
            <table class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left" cellspacing="0" cellpadding="0" align="left"> 
              <tbody><tr style="border-collapse:collapse"> 
               <td style="padding:0;Margin:0;width:199px" align="left"> 
                <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                  <tbody><tr style="border-collapse:collapse"> 
                   <td class="es-m-txt-c" style="padding:0;Margin:0;padding-top:15px" align="right"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666"><strong>Siguenos: </strong></p></td> 
                  </tr> 
                </tbody></table></td> 
              </tr> 
            </tbody></table> 
             
            <table class="es-right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right" cellspacing="0" cellpadding="0" align="right"> 
              <tbody><tr style="border-collapse:collapse"> 
               <td style="padding:0;Margin:0;width:361px" align="left"> 
                <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                  <tbody><tr style="border-collapse:collapse"> 
                   <td class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px;font-size:0" align="left"> 
                    <table class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" cellspacing="0" cellpadding="0"> 
                      <tbody><tr style="border-collapse:collapse"> 
                       <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/facebook-rounded-gray.png" alt="Fb" title="Facebook" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                       <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/twitter-rounded-gray.png" alt="Tw" title="Twitter" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                       <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/instagram-rounded-gray.png" alt="Ig" title="Instagram" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                       <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/youtube-rounded-gray.png" alt="Yt" title="Youtube" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                       <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://tlr.stripocdn.email/content/assets/img/social-icons/rounded-gray/linkedin-rounded-gray.png" alt="In" title="Linkedin" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                      </tr> 
                    </tbody></table></td> 
                  </tr> 
                </tbody></table></td> 
              </tr> 
            </tbody></table> 
            <!--[if mso]></td></tr></table><![endif]--></td> 
          </tr> 
          <tr style="border-collapse:collapse"> 
           <td style="Margin:0;padding-top:5px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-position:left top" align="left"> 
            <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
              <tbody><tr style="border-collapse:collapse"> 
               <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                  <tbody><tr style="border-collapse:collapse"> 
                   <td style="padding:0;Margin:0" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666">Contactanos: <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;color:#666666" href="tel:123456789">123456789</a> | <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;color:#666666" href="mailto:info@thehealthytreatments.com"> info@thehealthytreatments.com</a></p></td> 
                  </tr> 
                </tbody></table></td> 
              </tr> 
            </tbody></table></td> 
          </tr> 
        </tbody></table></td> 
      </tr> 
    </tbody></table> 
    <table class="es-footer" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
      <tbody><tr style="border-collapse:collapse"> 
       <td style="padding:0;Margin:0;background-color:#FAFAFA" bgcolor="#fafafa" align="center"> 
        <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
          <tbody><tr style="border-collapse:collapse"> 
           <td style="Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:30px;background-color:#0B5394;background-position:left top" bgcolor="#0b5394" align="left"> 
            <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
              <tbody><tr style="border-collapse:collapse"> 
               <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                  <tbody><tr style="border-collapse:collapse"> 
                   <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px" align="left"><h2 style="Margin:0;line-height:19px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:16px;font-style:normal;font-weight:normal;color:#ffffff"><strong>Have quastions?</strong></h2></td> 
                  </tr> 
                  <tr style="border-collapse:collapse"> 
                   <td style="padding:0;Margin:0;padding-bottom:5px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff">We are here to help, learn more about us <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;color:#ffffff" href="">here</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff">or <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;color:#ffffff" href="">contact us</a><br></p></td> 
                  </tr> 
                </tbody></table></td> 
              </tr> 
            </tbody></table></td> 
          </tr> 
        </tbody></table></td> 
      </tr> 
    </tbody></table> 
    <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
      <tbody><tr style="border-collapse:collapse"> 
       <td style="padding:0;Margin:0;background-color:#FAFAFA" bgcolor="#fafafa" align="center"> 
        <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
          <tbody><tr style="border-collapse:collapse"> 
           <td style="padding:0;Margin:0;padding-top:15px;background-position:left top" align="left"> 
            <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
              <tbody><tr style="border-collapse:collapse"> 
               <td style="padding:0;Margin:0;width:600px" valign="top" align="center"> 
                <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                  <tbody><tr style="border-collapse:collapse"> 
                   <td style="padding:0;Margin:0"> 
                    <table class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                      <tbody><tr class="links" style="border-collapse:collapse"> 
                       <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0" id="esd-menu-id-0" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;display:block;color:#3D5CA3">Sing up</a></td> 
                       <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3d5ca3" id="esd-menu-id-1" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;display:block;color:#3D5CA3">Blog</a></td> 
                       <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3d5ca3" id="esd-menu-id-2" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://viewstripo.email" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;font-size:14px;text-decoration:none;display:block;color:#3D5CA3">About us</a></td> 
                      </tr> 
                    </tbody></table></td> 
                  </tr> 
                  <tr style="border-collapse:collapse"> 
                   <td style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0" align="center"> 
                    <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"> 
                      <tbody><tr style="border-collapse:collapse"> 
                       <td style="padding:0;Margin:0;border-bottom:1px solid #FAFAFA;background:none;height:1px;width:100%;margin:0px"></td> 
                      </tr> 
                    </tbody></table></td> 
                  </tr> 
                </tbody></table></td> 
              </tr> 
            </tbody></table></td> 
          </tr> 
        </tbody></table></td> 
      </tr> 
    </tbody></table> 
     
    </td> 
  </tr> 
</tbody><div></div></table>
`;
};

module.exports = emailTemplate;
