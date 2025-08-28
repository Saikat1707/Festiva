import nodemailer from "nodemailer"
import dotenv from "dotenv"
dotenv.config()

export const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, 
  },
});

export const verificationCodeTemplate = (otp) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Festiva OTP Verification</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body style="margin:0; padding:0; background: #0F0F1A; font-family: 'Montserrat', 'Poppins', Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#0F0F1A">
      <tr>
        <td align="center" style="padding: 60px 20px;">
          <!-- Main Container -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#1A1A2E" style="max-width: 600px; background: #1A1A2E; border-radius: 24px; box-shadow: 0 25px 50px rgba(0,0,0,0.5); overflow: hidden; margin: 0 auto; border: 1px solid #2D2D4D;">
            <!-- Header with Gradient -->
            <tr>
              <td align="center" style="background: linear-gradient(135deg, #0F0F1A 0%, #2D2D4D 100%); padding: 50px 30px; position: relative; border-bottom: 1px solid #2D2D4D;">
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.05; background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" width=\"100\" height=\"100\"><circle cx=\"20\" cy=\"20\" r=\"10\" fill=\"white\" /><circle cx=\"80\" cy=\"80\" r=\"15\" fill=\"white\" /><circle cx=\"70\" cy=\"30\" r=\"8\" fill=\"white\" /></svg>');"></div>
                <h1 style="color: #ffffff; font-size: 38px; font-weight: 700; margin: 0; letter-spacing: 2px; position: relative; text-shadow: 0 4px 8px rgba(0,0,0,0.3);">FESTIVA</h1>
                <p style="color: rgba(162,155,254,0.8); font-size: 16px; margin: 12px 0 0; font-weight: 300; position: relative; letter-spacing: 1px;">Your Premium Event Experience</p>
                
                <!-- Decorative Elements -->
                <div style="position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); width: 40px; height: 40px; background: #1A1A2E; border-radius: 50%; z-index: 2;"></div>
                <div style="position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%); width: 40px; height: 20px; background: #1A1A2E; z-index: 1;"></div>
              </td>
            </tr>
            
            <!-- Content Area -->
            <tr>
              <td style="padding: 40px 40px 30px; text-align: center;">
                <!-- Icon -->
                <div style="background: linear-gradient(135deg, #6E45E2 0%, #88D3CE 100%); width: 90px; height: 90px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 30px; box-shadow: 0 10px 30px rgba(110, 69, 226, 0.4); position: relative; z-index: 3;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                
                <h2 style="color: #ffffff; font-size: 28px; font-weight: 600; margin: 0 0 15px; letter-spacing: 0.5px;">Verify Your Account</h2>
                <p style="color: #A2A2C4; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">Please use the verification code below to complete your account setup. This code will expire in <strong style="color: #6E45E2;">10 minutes</strong>.</p>
                
                <!-- OTP Display -->
                <div style="background: linear-gradient(135deg, #16162B 0%, #1E1E3A 100%); padding: 30px; border-radius: 20px; margin: 30px 0; border: 1px solid #2D2D4D; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
                  <p style="color: #A2A2C4; font-size: 14px; margin: 0 0 15px; font-weight: 500; letter-spacing: 0.5px;">YOUR VERIFICATION CODE</p>
                  <div style="background: linear-gradient(135deg, #16162B 0%, #1E1E3A 100%); color: #6E45E2; font-size: 42px; font-weight: 700; letter-spacing: 12px; padding: 20px 30px; border-radius: 16px; display: inline-block; box-shadow: 0 8px 20px rgba(0,0,0,0.3); border: 1px solid #2D2D4D; text-shadow: 0 4px 8px rgba(110, 69, 226, 0.3); font-family: 'Poppins', monospace;">
                    ${otp}
                  </div>
                </div>
                
                <!-- Button -->
                <a href="#" style="background: linear-gradient(135deg, #6E45E2 0%, #88D3CE 100%); color: #ffffff; text-decoration: none; padding: 18px 45px; border-radius: 50px; font-size: 16px; font-weight: 600; display: inline-block; margin: 20px 0 30px; box-shadow: 0 12px 25px rgba(110, 69, 226, 0.4); transition: all 0.3s ease; letter-spacing: 0.5px; position: relative; overflow: hidden;">
                  <span style="position: relative; z-index: 2;">Verify Now</span>
                  <div style="position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: all 0.6s ease;"></div>
                </a>
                
                <!-- Security Note -->
                <div style="background: linear-gradient(135deg, #2D2A2A 0%, #1E1C1C 100%); padding: 18px; border-radius: 14px; border-left: 4px solid #6E45E2; text-align: left;">
                  <p style="color: #A2A2C4; font-size: 14px; margin: 0; line-height: 1.5; display: flex; align-items: center;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6E45E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    For security reasons, please do not share this code with anyone. Festiva will never ask you for your password or verification codes.
                  </p>
                </div>
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td style="background: #16162B; padding: 30px 40px; text-align: center; border-top: 1px solid #2D2D4D;">
                <p style="color: #7B7BA0; font-size: 14px; margin: 0 0 15px;">If you didn't request this code, you can safely ignore this email.</p>
                <p style="color: #7B7BA0; font-size: 12px; margin: 0 0 20px;">© ${new Date().getFullYear()} Festiva. All rights reserved.</p>
                
                <!-- Social Links -->
                <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 25px 0 15px;">
                  <tr>
                    <td align="center" style="display:flex; flex-direction:row; justify-content:space-evenly">
                      <a href="#" style="display: inline-block; margin: 0 12px; background: #2D2D4D; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" alt="Facebook" width="20" height="20" style="display: block; filter: brightness(0.8);">
                      </a>
                      <a href="#" style="display: inline-block; margin: 0 12px; background: #2D2D4D; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" alt="Instagram" width="20" height="20" style="display: block; filter: brightness(0.8);">
                      </a>
                      <a href="#" style="display: inline-block; margin: 0 12px; background: #2D2D4D; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt="Twitter" width="20" height="20" style="display: block; filter: brightness(0.8);">
                      </a>
                      <a href="#" style="display: inline-block; margin: 0 12px; background: #2D2D4D; width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease;">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="LinkedIn" width="20" height="20" style="display: block; filter: brightness(0.8);">
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          
          <!-- Support Note -->
          <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 30px auto 0;">
            <tr>
              <td align="center">
                <p style="color: #7B7BA0; font-size: 13px; margin: 0; line-height: 1.5;">
                  Need help? <a href="#" style="color: #6E45E2; text-decoration: none; font-weight: 500;">Contact our support team</a> or visit our <a href="#" style="color: #6E45E2; text-decoration: none; font-weight: 500;">Help Center</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};